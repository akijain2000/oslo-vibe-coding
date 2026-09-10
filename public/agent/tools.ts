// Step 2 of 4 — TOOLS. Two things the agent can *do*, both keyless Oslo open data.
// Pure fetch, no Val.town imports, so you can run `node --test` on this file locally.

const CLIENT = "oslovibecoding-first-agent"; // both APIs ask you to identify your app

// ---------- Entur: live departures from any Oslo stop ----------
export async function osloDepartures(stopName: string): Promise<string> {
  const geo = await fetch(
    `https://api.entur.io/geocoder/v1/autocomplete?text=${encodeURIComponent(stopName)}&layers=venue&size=1&boundary.county_ids=03`,
    { headers: { "ET-Client-Name": CLIENT } },
  ).then((r) => r.json());
  const hit = geo.features?.[0]?.properties;
  if (!hit) return `No stop found for "${stopName}".`;

  const query = `query($id:String!){ stopPlace(id:$id){ name
    estimatedCalls(numberOfDepartures:8, timeRange:3600){ expectedDepartureTime realtime
      destinationDisplay{ frontText } serviceJourney{ line{ publicCode transportMode } } } } }`;
  const data = await fetch("https://api.entur.io/journey-planner/v3/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", "ET-Client-Name": CLIENT },
    body: JSON.stringify({ query, variables: { id: hit.id } }),
  }).then((r) => r.json());
  const calls = data.data?.stopPlace?.estimatedCalls ?? [];
  if (calls.length === 0) return `No departures in the next hour from ${hit.name}.`;
  const lines = calls.map((c: any) => {
    const t = new Date(c.expectedDepartureTime).toLocaleTimeString("en-GB", { timeZone: "Europe/Oslo", hour: "2-digit", minute: "2-digit" });
    return `${t} ${c.serviceJourney.line.transportMode} ${c.serviceJourney.line.publicCode} to ${c.destinationDisplay.frontText}`;
  });
  return `Departures from ${hit.name} (Oslo time):\n${lines.join("\n")}`;
}

// ---------- Yr (MET Norway): the next few hours of weather in Oslo ----------
export async function osloWeather(hours = 6): Promise<string> {
  const data = await fetch(
    "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.9111&lon=10.7528",
    { headers: { "User-Agent": `${CLIENT} oslovibecoding.tech` } },
  ).then((r) => r.json());
  const series = (data.properties?.timeseries ?? []).slice(0, Math.max(1, Math.min(hours, 12)));
  if (series.length === 0) return "Weather service returned nothing.";
  const rows = series.map((s: any) => {
    const t = new Date(s.time).toLocaleTimeString("en-GB", { timeZone: "Europe/Oslo", hour: "2-digit", minute: "2-digit" });
    const temp = s.data.instant.details.air_temperature;
    const next = s.data.next_1_hours;
    const rain = next?.details?.precipitation_amount ?? 0;
    const sky = next?.summary?.symbol_code ?? "unknown";
    return `${t}: ${temp}°C, ${rain} mm rain, ${sky}`;
  });
  return `Oslo weather, next ${rows.length} hours:\n${rows.join("\n")}`;
}

// ---------- What the model sees: a name, a description, and the arguments ----------
export const toolSchemas = [
  {
    type: "function",
    function: {
      name: "oslo_departures",
      description: "Live public transport departures in the next hour from a named stop in Oslo (tram, metro, bus, train).",
      parameters: { type: "object", properties: { stop_name: { type: "string", description: "Stop name, e.g. Jernbanetorget" } }, required: ["stop_name"] },
    },
  },
  {
    type: "function",
    function: {
      name: "oslo_weather",
      description: "Hourly weather forecast for central Oslo: temperature, rain in mm, sky.",
      parameters: { type: "object", properties: { hours: { type: "integer", description: "How many hours ahead, 1 to 12", default: 6 } } },
    },
  },
] as const;

// Map tool name -> function. The agent loop calls this when the model asks for a tool.
export const openDataTools: Record<string, (args: any) => Promise<string>> = {
  oslo_departures: (a) => osloDepartures(a.stop_name),
  oslo_weather: (a) => osloWeather(a.hours),
};
