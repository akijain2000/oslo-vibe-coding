const button = document.querySelector('#plan-toggle');
const details = document.querySelector('#plan-details');

button.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(expanded));
  button.textContent = expanded ? 'Hide the plan' : 'Show the plan';
  details.hidden = !expanded;
  if (expanded) details.scrollIntoView({ block: 'center' });
});
