'use strict';

const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
Reveal.initialize({width:1600,height:900,margin:0,minScale:0.1,maxScale:2,controls:true,controlsTutorial:false,progress:true,slideNumber:'c/t',hash:true,history:true,center:false,view:'slide',scrollActivationWidth:null,transition:reducedMotion?'none':'fade',transitionSpeed:'fast',backgroundTransition:'none',pdfSeparateFragments:false,pdfMaxPagesPerSlide:1,pdfPageHeightOffset:0});
const syncTheme=event=>document.body.classList.toggle('light-slide',event.currentSlide.classList.contains('light'));
Reveal.on('ready',syncTheme);
Reveal.on('slidechanged',syncTheme);

document.querySelectorAll('.copy').forEach(button=>button.addEventListener('click',async()=>{
  const text=document.getElementById(button.dataset.copy).textContent.trim();
  let copied=false;
  try{await navigator.clipboard.writeText(text);copied=true;}catch(_){}
  if(!copied){
    const area=document.createElement('textarea');
    area.value=text;area.style.cssText='position:fixed;opacity:0';
    document.body.appendChild(area);area.select();
    try{copied=document.execCommand('copy');}catch(_){}
    area.remove();
  }
  const feedback=button.parentElement.querySelector('.copy-feedback');
  feedback.textContent=copied?'Copied':'Select the prompt to copy';
  setTimeout(()=>{feedback.textContent='';},2200);
}));

document.querySelectorAll('[data-highlight-part]').forEach(button=>button.addEventListener('click',()=>{
  const alreadySelected=button.getAttribute('aria-pressed')==='true';
  document.querySelectorAll('[data-highlight-part]').forEach(item=>item.setAttribute('aria-pressed',String(item===button&&!alreadySelected)));
  document.querySelectorAll('[data-page-part]').forEach(item=>item.classList.toggle('highlighted',!alreadySelected&&item.dataset.pagePart===button.dataset.highlightPart));
}));

const layerResult=document.querySelector('.layer-result');
const layerToggle=document.querySelector('.layer-toggle');
const layerPhotos=[...document.querySelectorAll('.layer-gallery img')];
const layerPhotoCount=document.querySelector('.layer-photo-count');
let layerPhotoIndex=0;
const showLayerPhoto=index=>{
  layerPhotoIndex=index;
  layerPhotos.forEach((photo,i)=>{photo.hidden=i!==index;});
  layerPhotoCount.textContent=`Photo ${index+1} / ${layerPhotos.length}`;
};
const layerCaptions={html:'HTML gives the content a structure.',css:'CSS changes the appearance. The button still has no behavior.',js:'JavaScript handles the click. Try the button.'};
document.querySelectorAll('[data-web-layer]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-web-layer]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  const layer=button.dataset.webLayer;
  layerResult.dataset.layer=layer;
  layerToggle.disabled=layer!=='js';
  showLayerPhoto(0);
  document.querySelector('.layer-caption').textContent=layerCaptions[layer];
}));
layerToggle.addEventListener('click',()=>{
  showLayerPhoto((layerPhotoIndex+1)%layerPhotos.length);
});

document.querySelectorAll('[data-preview-plan]').forEach(button=>button.addEventListener('click',()=>{
  const plan=button.closest('.hack-preview').querySelector('.hack-plan');
  plan.hidden=!plan.hidden;
  button.textContent=plan.hidden?'Show the plan':'Hide the plan';
  button.setAttribute('aria-expanded',String(!plan.hidden));
}));

document.querySelectorAll('.verification-list input').forEach(input=>input.addEventListener('change',()=>{
  const count=document.querySelectorAll('.verification-list input:checked').length;
  document.querySelector('[data-check-count]').textContent=`${count} / 5`;
  document.querySelector('[data-check-label]').textContent=count===5?'Ready to publish':count===0?'Ready to check':'Keep checking';
}));

// Keep old shared slide links useful after the workshop restructure.
const oldSlideIds={'harness-loop':'coming-next','agent-harness':'coming-next','loop-engineering':'coming-next','context-engineering':'coming-next','goal-based-coding':'coming-next','how-the-web-works':'website-basics','protocols-and-addresses':'website-basics','hosting':'hosting-github'};
const previousId=location.hash.replace(/^#\//,'');
if(oldSlideIds[previousId])location.hash=`/${oldSlideIds[previousId]}`;
