/* RELAX SMART V106 — replace OLD V104/V105 loader completely.
   Product: simpler details without duplicate extra images or TOC.
   Retains V105 add-to-cart & gift logic. Other pages remain V104. */
(function(){
  'use strict';
  if(window.__rs106Loader)return;
  window.__rs106Loader=true;
  var path=location.pathname;
  if(/\/(?:checkout|payment|thank-you)(?:\/|$)/i.test(path))return;
  var kind=/\/p\d+(?:\/|$)/i.test(path)?'product':
    /\/(?:cart|shopping-cart)(?:\/|$)/i.test(path)?'cart':
    /^\/(?:ar\/?)?$/.test(path)?'home':'catalog';
  var name=kind==='product'?'relaxsmart-v106-product.js':'relaxsmart-v104-'+kind+'.js';
  var script=document.createElement('script');
  script.src='https://cdn.jsdelivr.net/gh/MonaHasanin/---@main/'+name;
  script.async=true;
  script.onerror=function(){console.error('[RelaxSmart V106] Failed to load:',script.src)};
  (document.head||document.documentElement).appendChild(script);
})();
