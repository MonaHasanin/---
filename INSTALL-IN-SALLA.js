/* RELAX SMART V104 — paste THIS JavaScript into Salla's custom JS field.
   Upload the 4 files (home, catalog, product, cart) into a PUBLIC GitHub repo first.
   REPLACE USERNAME/REPOSITORY below. Never use this placeholder unchanged. */
(()=>{
  'use strict';
  if(window.__rs104ExternalLoader)return;
  window.__rs104ExternalLoader=true;
  const pathname=location.pathname;
  if(/\/(?:checkout|payment|thank-you)(?:\/|$)/i.test(pathname))return;
  const type=/\/p\d+(?:\/|$)/i.test(pathname)?'product':
    /\/(?:cart|shopping-cart)(?:\/|$)/i.test(pathname)?'cart':
    /^\/(?:ar\/?)?$/.test(pathname)?'home':'catalog';
  const base='https://cdn.jsdelivr.net/gh/USERNAME/REPOSITORY@main/';
  const script=document.createElement('script');
  script.src=base+'relaxsmart-v104-'+type+'.js';
  script.async=true;
  script.onerror=()=>console.error('[Relax Smart] Could not load external JS. Check public CDN URL.');
  (document.head||document.documentElement).appendChild(script);
})();
