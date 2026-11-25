/* RELAX SMART V105 — SALLA — full replacement for previous V104 loader.
   RS105 product fixes native-success & fallback add-to-cart gift follow-through.
   Other page bundles stay on V104. Backend Salla offer is required for 0 SAR gifts. */
(function(){
  'use strict';
  if(window.__rs105Loader)return;
  window.__rs105Loader=true;
  var path=location.pathname;
  if(/\/(?:checkout|payment|thank-you)(?:\/|$)/i.test(path))return;
  var kind=/\/p\d+(?:\/|$)/i.test(path)?'product':
    /\/(?:cart|shopping-cart)(?:\/|$)/i.test(path)?'cart':
    /^\/(?:ar\/?)?$/.test(path)?'home':'catalog';
  var filename=kind==='product'?'relaxsmart-v105-product.js':'relaxsmart-v104-'+kind+'.js';
  var src='https://cdn.jsdelivr.net/gh/MonaHasanin/---@main/'+filename;
  var element=document.createElement('script');
  element.src=src;
  element.async=true;
  element.onload=function(){document.documentElement.dataset.rsGiftBundle=filename;};
  element.onerror=function(){console.error('[RelaxSmart] Could not load JS:',src);};
  (document.head||document.documentElement).appendChild(element);
})();
