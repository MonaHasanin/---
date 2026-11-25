/* RELAX SMART V104 | HOME | Generated from the owner's original V100 script. */
/* Page-specific packaging only: gift/cart/checkout business logic is preserved, not reimplemented. */

/* original module 0 */
(function(){document.documentElement.dataset.relaxSmartPurchase='100';document.documentElement.dataset.relaxSmartPurchaseStatus='loaded';})();

/* original module 3 */
(function(){
  'use strict';
  if(window.__relaxSmartV65Styles)return;
  window.__relaxSmartV65Styles=true;
  const old=document.getElementById('relax-smart-v61-styles');if(old)old.remove();
  const style=document.createElement('style');style.id='relax-smart-v65-styles';
  style.textContent="/* RELAX SMART V61: light-only design on ALL store pages. Replace old custom CSS. */\n:root,html,body,body.color-mode-dark,body.color-mode-light{color-scheme:light!important}\nhtml,body,body.color-mode-dark,body.color-mode-light,\nbody #app,body .app-inner,body main,body .store-footer,\nbody footer,body .s-blocks-wrapper,body .product-details-wrapper,\nbody .container--products-list,body .container--cart,\nbody .cart-page-wrapper,body .cart-wrapper {\n  background-color:#fff!important;background:#fff!important;color:#253342!important;\n}\n/* Header, search, navigation: never dark. Promotional red and menu orange remain branded. */\nhtml body .store-header,html body header.store-header,\nhtml body #main-nav,html body .main-nav,html body #main-nav>.inner,\nhtml body #main-nav .inner,html body .main-nav__content,\nhtml body .main-nav .mobile-main-nav,html body .header__search,\nhtml body .header__icons,html body .mobile-icons,\nhtml body .mobile-main-nav,html body .s-header,\nhtml body .header--full,html body .s-menu-wrap {\n  background:#fff!important;background-color:#fff!important;color:#253342!important;\n}\nhtml body .store-header button,html body .store-header .icon,\nhtml body .store-header svg,html body .store-header i,\nhtml body .store-header .sicon-search,html body .store-header .mburger {\n  color:#273441!important;stroke:currentColor;\n}\nhtml body .store-header svg path{fill:currentColor}\nhtml body .store-header .mburger span{background-color:#273441!important}\nhtml body .store-header .header__search .s-search-placeholder-wrapper,\nhtml body .store-header .header__search .s-search-input-wrapper,\nhtml body .store-header .header__search .s-search-input,\nhtml body .store-header salla-search .s-search-placeholder-wrapper,\nhtml body .store-header salla-search input,\nhtml body .store-header .s-search-inline {\n  background:#f7f8fa!important;background-color:#f7f8fa!important;\n  color:#1f2937!important;border-color:#e5e7eb!important;\n}\nhtml body .store-header salla-search input::placeholder{color:#667085!important;opacity:1}\nhtml body .store-header .theme-mode-btn{display:none!important}\n/* Keep the promotion / branded category bar colored, not black. */\nhtml body .s-promotion-banner,html body .above-header,\nhtml body .s-promotion-banner .container,\nhtml body .above-header .container {background:#953636!important;color:#fff!important}\nhtml body .s-promotion-banner *,html body .above-header *{color:#fff!important}\nhtml body .quicklinks,html body .quicklinks::before,\nhtml body .quicklinks__inner,html body .quicklinks .container {\n  background:#d67027!important;color:#fff!important;\n}\n/* The menu itself (#mobile-menu) lives inside .quicklinks on this theme.\n   V61 incorrectly made .mobile-menu white, hiding its white links. */\nhtml body .quicklinks #mobile-menu,\nhtml body .quicklinks nav#mobile-menu.mobile-menu,\nhtml body .quicklinks .main-menu,\nhtml body .quicklinks .mainmenu__default,\nhtml body .quicklinks .quicklinks__inner.container,\nhtml body .quicklinks .quicklinks__inner.container > div,\nhtml body .quicklinks .quicklinks__inner.container > nav,\nhtml body .quicklinks .main-menu-item,\nhtml body .quicklinks .main-menu-item > a,\nhtml body .quicklinks .main-menu-item > span {\n  background-color:#d67027!important;\n  background:#d67027!important;\n  color:#fff!important;\n}\nhtml body .quicklinks .main-menu,\nhtml body .quicklinks #mobile-menu {min-height:60px;display:flex!important;align-items:center!important;flex-wrap:wrap}\nhtml body .quicklinks .main-menu-item > a {display:flex!important;align-items:center;min-height:52px;padding:10px 12px!important;font-weight:700}\nhtml body .quicklinks *:not(.sub-menu *),html body .quicklinks a {color:#fff!important}\nhtml body .quicklinks .sub-menu {background:#fff!important;color:#243343!important;min-height:0!important}\nhtml body .quicklinks .sub-menu a,html body .quicklinks .sub-menu span {color:#243343!important;background:#fff!important}\n@media(max-width:991px){html body .quicklinks{display:none!important}}\n\n/* Store banner separators & dark-mode utility classes that made the home page black. */\nhtml body .s-block,html body .s-block--fixed-banner,\nhtml body .s-blocks-wrapper,html body .s-block__container,\nhtml body .section,html body .s-block--categories {\n  background-color:#fff!important;\n}\nhtml body .bg-black,html body .bg-gray-950,html body .bg-gray-900,\nhtml body .bg-slate-900,html body .bg-zinc-900,\nhtml body [class*=\"dark:bg-black\"],html body [class*=\"dark:bg-gray-900\"] {\n  background-color:#fff!important;color:#253342!important;\n}\n/* Cart page: keep the line items, coupon and totals readable. */\nhtml body :is(.cart-item,.cart-items,.cart-page,.cart-summary,.cart-details,.cart-totals,.cart-widget,\n.s-cart-item,.s-cart-items,.s-cart-summary,.cart-coupon,.cart-summary-wrapper,\n.cart-total,.cart__item,.cart-content,.cart-page-content,.cart-actions) {\n  background:#fff!important;background-color:#fff!important;color:#263442!important;\n  border-color:#e6e9ee!important;\n}\nhtml body .cart-page :is(h1,h2,h3,h4,p,strong,span,label),\nhtml body .cart-wrapper :is(h1,h2,h3,h4,p,strong,span,label),\nhtml body .cart-summary :is(h1,h2,h3,h4,p,strong,span,label) {color:#263442!important}\nhtml body .cart-page input,html body .cart-wrapper input,\nhtml body input[type=\"text\"],html body input[type=\"search\"],html body textarea,html body select{\n  background:#fff!important;color:#273441!important;border-color:#dce3ea!important;\n}\nhtml body input::placeholder,html body textarea::placeholder {color:#7b8796!important;opacity:1}\n/* Only labels/icons in cart header; preserve add-to-cart/checkout colored buttons. */\nhtml body .s-cart-summary-wrapper{background:transparent!important;color:#263442!important}\nhtml body .s-cart-summary-wrapper :is(i,svg,span,b,p){color:#263442!important}\nhtml body .rs60-cart-notice{background:#fff7eb!important;color:#805326!important}\nhtml body .rs60-cart-notice[data-status=\"ok\"]{background:#edf9f1!important;color:#166438!important}\n/* Product images on small screens remain full size. Never set height:60% or width:64%. */\n@media(max-width:767px){\n  html body :is(custom-salla-product-card,.product-entry,.s-product-card){min-width:0!important}\n  html body .product-entry__image,html body .s-product-card-image-wrapper {width:100%!important;max-width:100%!important}\n  html body .product-entry__image img,html body .s-product-card-image-wrapper img {\n    display:block!important;visibility:visible!important;opacity:1!important;\n    width:100%!important;max-width:100%!important;height:auto!important;object-fit:contain!important;\n  }\n  html body .header__search {padding:0 12px!important}\n}\n\n/* RELAX SMART V60 — product detail design (scoped to product pages only) */\nbody.rs60-product {\n  --rs60-ink:#1e293b;\n  --rs60-muted:#64748b;\n  --rs60-line:#e8edf3;\n  --rs60-paper:#ffffff;\n  --rs60-bg:#f7f9fc;\n  --rs60-accent:#ba4f21;\n  --rs60-accent-deep:#8e3519;\n  --rs60-green:#16764c;\n  background:var(--rs60-bg)!important;\n}\nbody.rs60-product .container--product-single,\nbody.rs60-product .rs60-after-main {max-width:1280px!important;margin-left:auto;margin-right:auto}\nbody.rs60-product .container--product-single{margin-top:16px!important}\nbody.rs60-product .rs60-layout{display:grid!important;grid-template-columns:minmax(0,1.07fr) minmax(350px,.93fr);gap:26px!important;align-items:start!important}\nbody.rs60-product .rs60-layout>.main-content,\nbody.rs60-product .rs60-layout>.product-details-col {position:static!important;width:100%!important;max-width:100%!important;min-width:0!important;overflow:visible!important;top:auto!important}\nbody.rs60-product .rs60-layout>.product-details-col{\n  color:var(--rs60-ink)!important;background:var(--rs60-paper)!important;border:1px solid var(--rs60-line);\n  border-radius:22px;box-shadow:0 10px 38px rgba(22,37,54,.055);padding:clamp(18px,2.4vw,30px)\n}\nbody.rs60-product .rs60-layout>.product-details-col>h1{font-size:clamp(21px,2.2vw,30px)!important;line-height:1.65!important;font-weight:800!important;letter-spacing:-.35px;margin:0 0 16px!important;color:var(--rs60-ink)!important}\nbody.rs60-product .rs60-layout>.main-content>.images-wrapper{background:#fff;border:1px solid var(--rs60-line);border-radius:24px;overflow:hidden;padding:clamp(10px,2vw,22px);box-shadow:0 12px 36px rgba(20,34,51,.05)}\nbody.rs60-product .rs60-layout .images-wrapper .details-slider{border-radius:16px!important;overflow:hidden;margin-bottom:0!important}\nbody.rs60-product .rs60-layout .images-wrapper .s-slider-thumbs{margin-top:12px}\nbody.rs60-product .rs60-layout .images-wrapper .s-slider-thumbs .swiper-slide{overflow:hidden;border-radius:12px;border:2px solid transparent;background:#f7f8fa;cursor:pointer}\nbody.rs60-product .rs60-layout .images-wrapper .s-slider-thumbs .swiper-slide-thumb-active{border-color:var(--rs60-accent)}\nbody.rs60-product .rs60-layout .images-wrapper .promotion-title{z-index:5;border-radius:0 0 0 12px}\nbody.rs60-product .rs60-layout>.product-details-col>.flex.whitespace-nowrap{flex-wrap:wrap!important;align-items:center;gap:12px!important;margin:0 0 12px!important;padding:14px 0;border-top:1px solid var(--rs60-line);border-bottom:1px solid var(--rs60-line)}\nbody.rs60-product .product-details-col .sale-price,\nbody.rs60-product .product-details-col .starting-or-normal-price .total-price{font-size:clamp(27px,3vw,35px)!important;font-weight:850!important;color:#d62d20!important;line-height:1.4!important}\nbody.rs60-product .product-details-col .regular-price{text-decoration:line-through;color:#94a3b8!important;font-size:17px!important}\nbody.rs60-product .rs60-discount{background:#fff2e9;border:1px solid #ffd9bd;color:#a33f13;font-weight:800;font-size:12px;padding:6px 10px;border-radius:999px;white-space:nowrap}\nbody.rs60-product .rs60-price-note{font-size:12px;font-weight:600;color:var(--rs60-muted);margin:0 0 12px}\nbody.rs60-product .product-details-col .product-metadata{margin-bottom:16px!important}\nbody.rs60-product .product-details-col .product-metadata strong,\nbody.rs60-product .product-details-col .product-metadata span{font-size:13px}\nbody.rs60-product .product-details-col .product-form{margin:0!important}\nbody.rs60-product .product-details-col .product-form>.bg-white,\nbody.rs60-product .product-details-col .product-form>.product-details__item{background:#fbfcfe!important;color:var(--rs60-ink)!important;border:1px solid var(--rs60-line);border-radius:12px;padding:12px!important;margin:0 0 12px!important}\nbody.rs60-product .rs60-section{margin:16px 0 0;border:1px solid var(--rs60-line);border-radius:18px;background:linear-gradient(145deg,#fff,#fcfdff);padding:16px}\nbody.rs60-product .rs60-section-heading{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin:0 0 6px}\nbody.rs60-product .rs60-section-title{font-size:17px!important;font-weight:850!important;color:var(--rs60-ink)!important;margin:0;line-height:1.6}\nbody.rs60-product .rs60-section-flag{font-size:11px;color:var(--rs60-green);background:#edf9f2;border-radius:99px;padding:5px 9px;font-weight:800}\nbody.rs60-product .rs60-section-desc{font-size:12px;color:var(--rs60-muted);line-height:1.9;margin:0 0 12px}\nbody.rs60-product .rs60-products{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\nbody.rs60-product .rs60-item{position:relative;display:flex;gap:9px;align-items:center;background:#fff;border:1.5px solid #e3e8ef;border-radius:13px;padding:9px;min-height:106px;transition:border-color .17s,background .17s,box-shadow .17s}\nbody.rs60-product .rs60-item:focus-within{outline:2px solid #f5bf97;outline-offset:1px}\nbody.rs60-product .rs60-item.is-selected{background:#fff8f3;border-color:var(--rs60-accent);box-shadow:0 0 0 2px rgba(186,79,33,.09)}\nbody.rs60-product .rs60-item-photo{flex:0 0 74px;width:74px;height:78px;border-radius:10px;background:#f8fafc;display:flex;align-items:center;justify-content:center;overflow:hidden}\nbody.rs60-product .rs60-item-photo img{width:100%;height:100%;object-fit:contain}\nbody.rs60-product .rs60-item-info{min-width:0;flex:1;display:flex;flex-direction:column;gap:5px;align-items:flex-start}\nbody.rs60-product .rs60-item-name{font-size:12px;font-weight:750;line-height:1.55;color:var(--rs60-ink);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-decoration:none}\nbody.rs60-product .rs60-item-name:hover{color:var(--rs60-accent)}\nbody.rs60-product .rs60-item-price{color:var(--rs60-accent-deep);font-size:13px;font-weight:850;line-height:1.3}\nbody.rs60-product .rs60-item-price small{font-size:10px;font-weight:600;color:var(--rs60-muted)}\nbody.rs60-product .rs60-item-price del{font-size:10px;font-weight:500;color:#94a3b8;margin-inline-start:5px}\nbody.rs60-product .rs60-pick{border:1px solid #d4dce7;border-radius:8px;background:#fff;font-weight:800;color:#344256;padding:5px 9px;font-size:11px;line-height:1.6;cursor:pointer}\nbody.rs60-product .rs60-item.is-selected .rs60-pick{background:var(--rs60-accent);border-color:var(--rs60-accent);color:#fff}\nbody.rs60-product .rs60-paid-check{display:inline-flex;gap:6px;align-items:center;font-weight:750;font-size:11px;cursor:pointer;color:#334155}\nbody.rs60-product .rs60-paid-check input{width:16px;height:16px;accent-color:var(--rs60-accent);cursor:pointer}\nbody.rs60-product .rs60-small-link{font-size:12px;color:var(--rs60-accent-deep);font-weight:800;text-decoration:underline;text-underline-offset:2px}\nbody.rs60-product .rs60-total{display:flex;justify-content:space-between;align-items:center;gap:6px;padding:12px 4px 0;font-size:12px;color:var(--rs60-muted);border-top:1px dashed var(--rs60-line);margin-top:12px}\nbody.rs60-product .rs60-total strong{font-size:14px;font-weight:850;color:var(--rs60-ink)}\nbody.rs60-product .rs60-live{font-size:12px;line-height:1.7;border-radius:10px;margin:10px 0 0;padding:0;color:var(--rs60-muted)}\nbody.rs60-product .rs60-live:not(:empty){background:#f3f7fc;border:1px solid #e0eaf6;padding:9px}\nbody.rs60-product .rs60-live[data-status=ok]{background:#eaf9ee;border-color:#c1e8cc;color:#166438}\nbody.rs60-product .rs60-live[data-status=warn]{background:#fff5ec;border-color:#f1d4b9;color:#91501d}\nbody.rs60-product .rs60-layout .addtocart-bar{margin:18px 0 12px!important;padding:0!important;align-items:stretch!important;gap:11px!important;display:flex!important}\nbody.rs60-product .rs60-layout .addtocart-bar>div.center-between{border:1px solid #dbe2eb;border-radius:13px;min-width:116px;justify-content:center;padding:4px;background:#fff}\nbody.rs60-product .rs60-layout .addtocart-bar salla-add-product-button{flex:1!important;min-width:0!important}\nbody.rs60-product .rs60-layout .addtocart-bar salla-add-product-button button{min-height:55px!important;border-radius:13px!important;background:var(--rs60-accent)!important;border:none!important;color:#fff!important;font-size:16px!important;font-weight:900!important;box-shadow:0 7px 17px rgba(186,79,33,.22)}\nbody.rs60-product .rs60-layout .addtocart-bar salla-add-product-button button:hover{background:var(--rs60-accent-deep)!important}\nbody.rs60-product .rs60-trust{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-top:12px}\nbody.rs60-product .rs60-trust-item{border:1px solid var(--rs60-line);background:#fbfcff;border-radius:12px;padding:10px 7px;text-align:center}\nbody.rs60-product .rs60-trust-emoji{display:block;font-size:22px;margin-bottom:4px}\nbody.rs60-product .rs60-trust-item strong{font-size:11px;color:var(--rs60-ink);font-weight:850;display:block;line-height:1.5}\nbody.rs60-product .rs60-trust-item span:last-child{display:block;font-size:10px;color:var(--rs60-muted);margin-top:2px}\nbody.rs60-product .rs60-after-main{margin-top:24px;margin-bottom:32px;display:grid;gap:16px}\nbody.rs60-product .rs60-native-offers,\nbody.rs60-product .rs60-description-panel{background:#fff;border:1px solid var(--rs60-line);border-radius:20px;padding:clamp(15px,2.5vw,26px);box-shadow:0 9px 26px rgba(20,34,51,.04)}\nbody.rs60-product .rs60-after-heading{margin:0 0 14px;font-size:19px;font-weight:900;color:var(--rs60-ink)}\nbody.rs60-product .rs60-description-tabs{display:flex;gap:12px;border-bottom:1px solid var(--rs60-line);padding-bottom:13px;margin-bottom:20px}\nbody.rs60-product .rs60-tab{display:inline-flex;padding:9px 14px;border-radius:9px;font-weight:800;font-size:13px;color:var(--rs60-ink);text-decoration:none}\nbody.rs60-product .rs60-tab.is-current{background:#fff1e7;color:var(--rs60-accent-deep)}\nbody.rs60-product .rs60-description-source,\nbody.rs60-product .rs60-description-source .rs56-content{color:#364152!important;font-size:15px!important;line-height:2.05!important;max-width:100%!important}\nbody.rs60-product .rs60-description-source h2{font-size:21px!important;margin:19px 0 10px!important;font-weight:900!important;line-height:1.6;color:var(--rs60-ink)!important}\nbody.rs60-product .rs60-description-source h3{font-size:17px!important;margin:16px 0 7px!important;font-weight:850!important;color:var(--rs60-ink)!important}\nbody.rs60-product .rs60-description-source p{margin:8px 0!important}\nbody.rs60-product .rs60-description-source ul,\nbody.rs60-product .rs60-description-source ol{padding-right:23px;list-style:revert;margin:10px 0}\nbody.rs60-product .rs60-description-source img{height:auto!important;max-width:100%!important;border-radius:12px}\nbody.rs60-product .rs60-description-source table{max-width:100%;display:block;overflow-x:auto}\nbody.rs60-product .rs60-description-source .rs56-tabs{display:none!important}\nbody.rs60-product .rs60-gift-category-banner{max-width:1280px;margin:22px auto;background:#fff7ed;border:1px solid #fed7aa;border-radius:14px;padding:17px;color:#8a4c18;font-size:14px;font-weight:750}\nbody.rs60-product .rs60-empty{grid-column:1/-1;color:var(--rs60-muted);font-size:12px;background:#f8fafc;border-radius:10px;padding:15px}\nbody.rs60-product .rs60-cart-notice{max-width:1100px;margin:16px auto;padding:13px;border:1px solid #d9e4f0;border-radius:12px;background:#f7faff;font-size:14px;color:#344256}\n@media (min-width:1000px){body.rs60-product .rs60-layout>.main-content{position:sticky!important;top:90px!important}}\n@media(max-width:960px){\n  body.rs60-product .rs60-layout{grid-template-columns:minmax(0,1fr)!important;gap:15px!important}\n  body.rs60-product .rs60-layout>.main-content{position:static!important}\n  body.rs60-product .rs60-layout>.product-details-col{padding:17px}\n  body.rs60-product .rs60-products{grid-template-columns:repeat(2,minmax(0,1fr))}\n  body.rs60-product .rs60-after-main{padding:0 15px}\n}\n@media(max-width:560px){\n  body.rs60-product .rs60-layout>.product-details-col{border-radius:16px;padding:14px!important}\n  body.rs60-product .rs60-layout>.main-content>.images-wrapper{border-radius:16px;padding:8px}\n  body.rs60-product .rs60-products{grid-template-columns:1fr}\n  body.rs60-product .rs60-item{min-height:94px}\n  body.rs60-product .rs60-item-photo{flex-basis:70px;width:70px;height:70px}\n  body.rs60-product .rs60-section{padding:12px}\n  body.rs60-product .rs60-trust-item{padding:9px 4px}\n  body.rs60-product .rs60-trust-item strong{font-size:10px}\n  body.rs60-product .rs60-layout .addtocart-bar>div.center-between{min-width:90px}\n  body.rs60-product .rs60-layout .addtocart-bar salla-add-product-button button{font-size:14px!important}\n}\n\n\n/* V61 Mobile: gift & paid recommendations are ALWAYS shown, not an unopened accordion. */\nbody.rs60-product .rs60-gift-section,\nbody.rs60-product .rs60-paid-section {display:block!important;visibility:visible!important;opacity:1!important;height:auto!important;max-height:none!important;overflow:visible!important}\nbody.rs60-product .rs60-gift-section .rs60-products,\nbody.rs60-product .rs60-paid-section .rs60-products {display:grid!important;visibility:visible!important;opacity:1!important;max-height:none!important;height:auto!important;overflow:visible!important}\nbody.rs60-product .rs60-section{background:#fff!important;box-shadow:none!important;border-color:#eadfd9!important}\nbody.rs60-product .rs60-section-desc{display:block!important}\nbody.rs60-product .rs60-gift-section{border-color:#efcbae!important}\nbody.rs60-product .rs60-paid-section{border-color:#d6e4dc!important}\nbody.rs60-product .rs60-item{background:#fff!important;min-width:0!important;min-height:100px}\nbody.rs60-product .rs60-item-info{min-width:0!important}\nbody.rs60-product .rs60-item-photo{flex-shrink:0!important}\nbody.rs60-product .rs60-item-photo img {width:100%!important;height:100%!important;max-width:100%!important;object-fit:contain!important;visibility:visible!important}\nbody.rs60-product .rs60-pick{background:#fff!important;color:#8e3519!important}\nbody.rs60-product .rs60-item.is-selected .rs60-pick{background:#ba4f21!important;color:#fff!important}\nbody.rs60-product .rs60-fallback-note{color:#697586;font-size:12px;margin:7px 0}\nbody.rs60-product .rs60-layout .addtocart-bar>div.center-between{\n  height:auto!important;min-height:52px!important;max-width:136px!important;\n}\nbody.rs60-product .rs60-layout salla-quantity-input input{background:#fff!important;color:#1f2937!important}\nbody.rs60-product .rs60-layout .product-form{padding-bottom:15px!important}\n@media(max-width:767px){\n  body.rs60-product .rs60-layout>.product-details-col{max-width:100%!important;overflow:visible!important}\n  body.rs60-product .rs60-products{grid-template-columns:1fr!important;gap:10px!important}\n  body.rs60-product .rs60-item{display:flex!important;flex-direction:row!important;padding:10px!important}\n  body.rs60-product .rs60-item-photo{flex-basis:78px!important;width:78px!important;height:78px!important}\n  body.rs60-product .rs60-item-info{display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:6px!important}\n  body.rs60-product .rs60-item-name{font-size:13px!important;line-height:1.6!important}\n  body.rs60-product .rs60-pick{font-size:12px!important;min-height:40px!important}\n  body.rs60-product .rs60-section-title{font-size:16px!important}\n  body.rs60-product .rs60-layout .addtocart-bar{display:flex!important;flex-wrap:nowrap!important;width:100%!important}\n}\n/* WARRANTY: keeps old gold badge styling for approved massage chairs only. */\n\n/* RELAX SMART V54 — selected massage-chair two-year golden seal.\n   Install INSTEAD of the older warranty badge patches, not alongside them.\n   Does not modify product price, discounts, cart or gift choices. */\n\n/* Hide badges generated by older warranty scripts; leave sale/model ribbons untouched. */\n.rs54-warranty-active .rs20-warranty,\n.rs54-warranty-active .rs48-proof,\n.rs54-warranty-active .rs46-card-badge--warranty,\n.rs54-warranty-active .rs46-gallery-badge--warranty,\n.rs54-warranty-active .rs46-guarantee,\n.rs54-warranty-active .rs45-guarantee { display: none !important; }\n\n.rs54-warranty-host { position: relative !important; }\n.rs54-gold-seal, .rs54-gold-seal * { box-sizing: border-box; }\n.rs54-gold-seal {\n  position: absolute;\n  inset: auto auto 9px 9px;\n  z-index: 8;\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  border: 3px solid #a56b15;\n  background: radial-gradient(circle at 29% 17%, #fffbe6 0%, #ffe8a0 24%, #e8b84f 52%, #ba801d 80%, #925c0f 100%);\n  color: #65410e !important;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1px;\n  text-align: center;\n  line-height: 1.16;\n  font-family: inherit;\n  box-shadow: 0 7px 20px rgba(103,65,7,.31), inset 0 2px 5px rgba(255,255,255,.78), inset 0 -3px 7px rgba(94,56,4,.28);\n  pointer-events: none;\n  user-select: none;\n  direction: rtl;\n}\n.rs54-gold-seal::before {\n  content: '';\n  position: absolute;\n  inset: 5px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(255,248,208,.92);\n  box-shadow: inset 0 0 0 1px rgba(137,87,8,.34);\n}\n.rs54-gold-seal::after {\n  content: '';\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 25px;\n  height: 10px;\n  border-radius: 50%;\n  transform: rotate(-21deg);\n  background: rgba(255,255,255,.38);\n}\n.rs54-seal-small, .rs54-seal-years, .rs54-seal-note {\n  position: relative;\n  z-index: 1;\n  color: #65410e !important;\n  display: block;\n  text-shadow: 0 1px 0 rgba(255,255,255,.65);\n}\n.rs54-seal-small { font-size: 10px; font-weight: 900; }\n.rs54-seal-years { font-size: 17px; font-weight: 950; }\n.rs54-seal-note { font-size: 9px; font-weight: 800; }\n\n/* On detail pages the seal is placed BELOW the gallery, never over the sale ribbon. */\n.rs54-detail-proof {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  direction: rtl;\n  background: linear-gradient(110deg,#fff9e9,#fff4cf);\n  border: 1px solid #e0bd6c;\n  border-radius: 16px;\n  padding: 12px;\n  margin: 14px 0;\n  max-width: 100%;\n  box-shadow: 0 7px 22px rgba(119,77,12,.08);\n}\n.rs54-detail-proof .rs54-gold-seal {\n  position: relative;\n  inset: auto;\n  flex: 0 0 88px;\n  width: 88px;\n  height: 88px;\n}\n.rs54-detail-proof .rs54-seal-small { font-size: 12px; }\n.rs54-detail-proof .rs54-seal-years { font-size: 20px; }\n.rs54-detail-proof .rs54-seal-note { font-size: 10px; }\n.rs54-detail-copy { min-width: 0; display: flex; flex-direction: column; gap: 5px; }\n.rs54-detail-copy strong { color: #79521a !important; font-size: 16px; font-weight: 900; }\n.rs54-detail-copy span { color: #876d44 !important; font-size: 12px; line-height: 1.6; }\n\n@media (max-width: 640px) {\n  .rs54-gold-seal { width: 59px; height: 59px; border-width: 2px; inset: auto auto 6px 6px; }\n  .rs54-gold-seal::before { inset: 4px; }\n  .rs54-gold-seal::after { top: 7px; left: 8px; width: 18px; height: 7px; }\n  .rs54-seal-small { font-size: 8px; }\n  .rs54-seal-years { font-size: 13px; }\n  .rs54-seal-note { font-size: 7px; }\n  .rs54-detail-proof { gap: 10px; padding: 9px; }\n  .rs54-detail-proof .rs54-gold-seal { flex-basis: 72px; width: 72px; height: 72px; }\n  .rs54-detail-proof .rs54-seal-years { font-size: 17px; }\n  .rs54-detail-copy strong { font-size: 14px; }\n  .rs54-detail-copy span { font-size: 11px; }\n}\n\n\n/* V62: visible retry only for a pending cart selection. */\nhtml body .rs62-retry{display:block!important;margin:4px auto 15px;padding:10px 18px;border-radius:10px;\n background:#d67027!important;color:#fff!important;border:0;font-weight:800;cursor:pointer}\nhtml body .rs62-retry[hidden]{display:none!important}\nbody.rs60-product .rs60-fire{display:inline-flex!important;align-items:center!important;gap:6px!important;background:linear-gradient(135deg,#ff8b37,#ef3a2c)!important;color:#fff!important;border:0!important;border-radius:999px!important;padding:7px 12px!important;font-size:12px!important;font-weight:900!important;box-shadow:0 8px 18px rgba(239,58,44,.18)!important;white-space:nowrap!important;margin-inline-end:6px!important}\nbody.rs60-product .rs60-native-offers{margin-top:18px!important;background:#fff!important;border:1px solid var(--rs60-line)!important;border-radius:20px!important;padding:18px!important;box-shadow:0 10px 28px rgba(20,34,51,.05)!important}\nbody.rs60-product .rs60-native-offers .rs60-after-heading{margin:0 0 12px!important;font-size:24px!important;font-weight:900!important;color:var(--rs60-ink)!important}\nbody.rs60-product .rs60-native-offers :is(salla-offer,.s-offer-wrapper,.s-offer-list,.s-offer-container,.s-offer-cards,.s-slider-block,.s-slider-block__content){background:#fff!important;background-color:#fff!important;border:0!important;box-shadow:none!important}\nbody.rs60-product .rs60-native-offers :is(.bg-rose-50,.bg-pink-50,.bg-red-50,[class*=\"bg-rose-\"],[class*=\"bg-pink-\"],[class*=\"bg-red-\"]) {background:#fff!important}\nbody.rs60-product .rs60-native-offers :is(.s-offer-card,.offer-card,.offer-item,.s-block-card){background:#fff!important;border:1px solid #e8edf3!important;border-radius:14px!important;box-shadow:none!important;padding:16px!important}\nbody.rs60-product .rs60-native-offers :is(.s-offer-card-title,.offer-title,h3,h4){color:var(--rs60-ink)!important}\nbody.rs60-product .rs60-native-offers :is(p,span,a,li,strong){color:#475569!important}\n@media(min-width:1000px){body.rs60-product .rs60-layout>.main-content .rs60-native-offers{margin-top:16px!important}}\nhtml body .rs60-cart-notice{max-width:1100px;width:calc(100% - 28px);direction:rtl;line-height:1.8}\n";
  (document.head||document.documentElement).appendChild(style);
  function preferLight(){
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme='light';
    if(document.body){
      document.body.classList.remove('dark','color-mode-dark');
      document.body.classList.add('color-mode-light');
      if(/\/p\d+(?:\/|$)/.test(location.pathname)&&window.innerWidth<=767)
        document.body.classList.remove('fixed-add-to-cart-bar');
    }
  }
  preferLight();
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',preferLight,{once:true});
  document.addEventListener('theme::ready',preferLight,{once:true});
  [500,1800].forEach(ms=>setTimeout(preferLight,ms));
})();

/* original module 5 */
(function () {
  const keywords = ['كرسي متحرك', 'كراسي متحركة', 'كراسي متحركه', 'كرسي متحركة'];
  const observerTarget = document.querySelector('.s-products-list-wrapper');
  if (!observerTarget) return;

  let observer;

  function moveWheelchairsFirst() {
    if (observer) observer.disconnect();

    const cards = Array.from(observerTarget.querySelectorAll(':scope > custom-salla-product-card'));
    const matched = cards.filter(card => {
      const title = card.querySelector('.product-entry__title')?.textContent || '';
      const alt = card.querySelector('img')?.alt || '';
      const text = title + ' ' + alt;
      return keywords.some(k => text.includes(k));
    });

    matched.reverse().forEach(card => observerTarget.prepend(card));

    observer.observe(observerTarget, { childList: true });
  }

  observer = new MutationObserver(moveWheelchairsFirst);
  moveWheelchairsFirst();
})();

/* original module 6 */
(() => {
  'use strict';
  if (window.__relaxSmartWarrantyV54) return;
  window.__relaxSmartWarrantyV54 = true;

  // Add other approved product IDs here after checking their two-year warranty.
  // Example: new Set(['123456789', '987654321'])
  const EXTRA_APPROVED_PRODUCT_IDS = new Set([]);
  const MIN_CHAIR_PRICE_SAR = 400;

  // Previously listed massage chairs priced above SAR 400. Used as fallback
  // only when the theme hasn't populated the price element yet.
  const KNOWN_MASSAGE_CHAIR_IDS = new Set([
    '2024072696', '801667276', '926228977',
    '2139079090', '972889452'
  ]);

  const CARD_SELECTOR = [
    'custom-salla-product-card.product-entry',
    'salla-product-card', '.s-product-card-entry',
    '.s-product-card', '.rs18-card', '.rs16-card', '.rs11-product'
  ].join(',');

  const MEDIA_SELECTOR = [
    '.rs18-card__image', '.rs16-card__photo', '.rs11-product__image',
    '.product-entry__image-wrap', '.product-entry__image',
    '.s-product-card-image-wrapper', '.s-product-card-image',
    '.s-product-card-image-container'
  ].join(',');

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const compact = s => String(s || '').replace(/\s+/g, ' ').trim();

  function parsePrice(value) {
    if (value && typeof value === 'object')
      return parsePrice(value.amount ?? value.value ?? value.price);
    const raw = String(value ?? '').replace(/[٠-٩]/g, x => String('٠١٢٣٤٥٦٧٨٩'.indexOf(x)))
      .replace(/[۰-۹]/g, x => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(x)))
      .replace(/٫/g, '.').replace(/٬/g, ',');
    const m = raw.match(/\d[\d,.]*/);
    if (!m) return null;
    const n = Number(m[0].replace(/,/g, ''));
    return Number.isFinite(n) && n >= 0 ? n : null;
  }

  function productInfo(card) {
    let data = {};
    try { data = JSON.parse(card.getAttribute('product') || '{}') || {}; } catch (_) {}
    const dom = card.shadowRoot || card;
    const id = String(data.id || card.getAttribute('product-id') ||
      card.getAttribute('data-product-id') ||
      card.id?.match(/product_(\d+)/)?.[1] ||
      $('a[href*="/p"]', dom)?.getAttribute('href')?.match(/\/p(\d+)/)?.[1] || '');
    const name = compact(data.name || $(
      '.rs18-card__name,.rs16-card__name,.rs11-product__name,' +
      '.product-entry__title,.s-product-card-content-title,.s-product-card-title', dom
    )?.textContent || card.getAttribute('title'));
    const priceText = $(
      '.price_is_on_sale .total-price,.starting-or-normal-price .total-price,' +
      '.price-wrapper .total-price,.s-product-card-price,.sale-price,.total-price', dom
    )?.textContent;
    const price = parsePrice(data.sale_price ?? data.price ?? priceText)
      ?? parsePrice(priceText);
    return { id, name, price, dom };
  }

  function isMassageChair(name) {
    return /(?:كرسي|كراسي).{0,75}(?:مساج|تدليك)|massage\s*chair/i.test(name);
  }

  function eligible(info, inChairSection = false) {
    if (EXTRA_APPROVED_PRODUCT_IDS.has(info.id)) return true;
    if (!isMassageChair(info.name) && !inChairSection) return false;
    return (info.price !== null && info.price > MIN_CHAIR_PRICE_SAR) ||
      KNOWN_MASSAGE_CHAIR_IDS.has(info.id);
  }

  function seal(detail = false) {
    const badge = document.createElement('div');
    badge.className = detail ? 'rs54-gold-seal rs54-gold-seal--detail' : 'rs54-gold-seal';
    badge.setAttribute('role', 'img');
    badge.setAttribute('aria-label', 'ضمان ذهبي لمدة سنتين، وفق شروط ضمان المنتج');
    badge.title = 'ضمان سنتين وفق الشروط المعتمدة للمنتج';
    const first = document.createElement('span');
    first.className = 'rs54-seal-small'; first.textContent = 'ضمان ذهبي';
    const years = document.createElement('strong');
    years.className = 'rs54-seal-years'; years.textContent = 'سنتين';
    const note = document.createElement('small');
    note.className = 'rs54-seal-note'; note.textContent = 'وفق الشروط';
    badge.append(first, years, note);
    return badge;
  }

  function decorateCard(card) {
    if (!card.isConnected) return;
    // If custom card contains nested cards, decorate outer card once only.
    if (card.parentElement?.closest(CARD_SELECTOR)) return;
    const info = productInfo(card);
    const inChairSection = !!card.closest('.rs12-chair');
    if (!eligible(info, inChairSection)) return;
    const host = $(MEDIA_SELECTOR, info.dom);
    if (!host || !host.isConnected) return;
    if ($('.rs54-gold-seal', host)) return;
    host.classList.add('rs54-warranty-host');
    host.append(seal());
  }

  function decorateDetail() {
    const match = location.pathname.match(/\/p(\d+)(?:\/|$)/);
    if (!match) return;
    const root = $('.container--product-single');
    const gallery = root && $('.main-content', root);
    const info = root && $('.product-details-col', root);
    if (!gallery || !info || $('.rs54-detail-proof', gallery)) return;
    const name = compact($('h1', info)?.textContent);
    const priceEl = $('.price_is_on_sale .total-price,.sale-price,.starting-or-normal-price .total-price,.total-price', info);
    const price = parsePrice(priceEl?.textContent) ?? parsePrice($('meta[itemprop="price"]')?.content);
    const matchInfo = { id: match[1], name, price };
    const breadcrumbs = compact($('.container--breadcrumbs')?.textContent || $('.breadcrumb')?.textContent);
    if (!eligible(matchInfo, /كراسي المساج/.test(breadcrumbs))) return;
    const anchor = $('.images-wrapper', gallery) || $('.details-slider', gallery);
    if (!anchor) return;
    const proof = document.createElement('div');
    proof.className = 'rs54-detail-proof';
    const label = document.createElement('div');
    label.className = 'rs54-detail-copy';
    const title = document.createElement('strong'); title.textContent = 'ضمان ذهبي لمدة سنتين';
    const hint = document.createElement('span'); hint.textContent = 'على هذا المنتج وفق شروط الضمان المعتمدة';
    label.append(title, hint);
    proof.append(seal(true), label);
    anchor.insertAdjacentElement('afterend', proof);
  }

  let pending = false;
  function scan() {
    pending = false;
    $$(CARD_SELECTOR).forEach(decorateCard);
    decorateDetail();
  }
  function scheduleScan() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(scan);
  }
  function init() {
    document.body.classList.add('rs54-warranty-active');
    scheduleScan();
    // Product cards may be rendered after hydration or while scrolling.
    const observer = new MutationObserver(records => {
      const meaningful = records.some(record => [...record.addedNodes].some(node =>
        node.nodeType === 1 &&
        !node.matches?.('.rs54-gold-seal,.rs54-detail-proof') &&
        !node.closest?.('.rs54-gold-seal,.rs54-detail-proof')
      ));
      if (meaningful) scheduleScan();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    [900, 2200].forEach(delay => setTimeout(scheduleScan, delay));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();

/* original module 7 */
(function () {
  "use strict";

  if (!/^\/(?:ar\/?)?$/.test(location.pathname)) return;
  if (window.__relaxMobileHomeCompact1) return;

  window.__relaxMobileHomeCompact1 = true;

  const IMG_HEIGHT = 170;
  const SHADOW_ID = "rs-mobile-home-compact-shadow";

  /* تنسيق البنرات والأقسام الخارجية */
  const css = document.createElement("style");
  css.id = "rs-mobile-home-compact-css";

  css.textContent = `
    @media (max-width:767px) {

      body.index main.app-inner >
      section.s-block--fixed-banner,

      body.index main.app-inner >
      section.s-block--bundle-products-slider {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        min-height: 0 !important;
        height: auto !important;
      }

      /* مسافات البنرات */
      body.index main.app-inner >
      section.s-block--fixed-banner {
        padding-top: 4px !important;
        padding-bottom: 4px !important;
      }

      body.index .s-block--fixed-banner
      > .container {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        min-height: 0 !important;
        height: auto !important;
      }

      body.index .s-block--fixed-banner
      :is(.banner--fixed, picture) {
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
        min-height: 0 !important;
        height: auto !important;
      }

      /* الحفاظ على أبعاد صور البنرات */
      body.index .s-block--fixed-banner
      picture img {
        display: block !important;
        max-width: 100% !important;
        height: auto !important;
        max-height: none !important;
        margin: 0 !important;
        object-fit: contain !important;
      }

      /* تقريب سلايدر المنتجات من البنر */
      body.index main.app-inner >
      section.s-block--bundle-products-slider {
        padding-top: 2px !important;
        padding-bottom: 8px !important;
      }

      body.index
      section.s-block--bundle-products-slider
      > [component-name="products-slider"] {
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
        min-height: 0 !important;
        height: auto !important;
      }
    }
  `;

  document.head.appendChild(css);

  /* تصغير الصور داخل كروت المنتجات */
  const cardCSS = `
    @media (max-width:767px) {

      .product-entry,
      .s-product-card,
      .s-product-card-entry,
      .product-card,
      .product-entry__content,
      .s-product-card-content {
        min-height: 0 !important;
      }

      :is(
        .product-entry__image-wrap,
        .product-entry__image,
        .product-entry__image-wrapper,
        .s-product-card-image,
        .s-product-card-image-container,
        .s-product-card-image-wrapper,
        .s-product-card-entry__image,
        .product-card__image
      ) {
        height: ${IMG_HEIGHT}px !important;
        max-height: ${IMG_HEIGHT}px !important;
        min-height: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        aspect-ratio: auto !important;
        overflow: hidden !important;
      }

      :is(
        .product-entry__image-wrap,
        .product-entry__image,
        .product-entry__image-wrapper,
        .s-product-card-image,
        .s-product-card-image-container,
        .s-product-card-image-wrapper,
        .s-product-card-entry__image,
        .product-card__image
      ) img {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        max-height: ${IMG_HEIGHT}px !important;
        object-fit: contain !important;
        object-position: center !important;
      }

      /* أسماء المنتجات */
      :is(
        .product-entry__title,
        .s-product-card-content-title,
        .s-product-card-title,
        .product-card__title
      ) {
        font-size: 13px !important;
        line-height: 1.6 !important;
        max-height: 3.2em !important;
        overflow: hidden !important;
        color: #253344 !important;
      }
    }
  `;

  /* إزالة فراغات Shadow DOM */
  const sliderCSS = `
    @media (max-width:767px) {

      :host {
        display: block !important;
        min-height: 0 !important;
        height: auto !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .container,
      .slider-wrapper,
      .s-slider-container,
      .swiper,
      .swiper-container {
        min-height: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }

      .header {
        min-height: 0 !important;
        margin: 0 0 6px !important;
        padding: 0 !important;
      }

      /* العناوين الفارغة فقط */
      :host(.rs-blank-title) .header {
        display: none !important;
      }

      .swiper-slide {
        height: auto !important;
      }
    }
  `;

  function injectStyle(root, styles) {
    if (!root || root.querySelector("#" + SHADOW_ID)) {
      return;
    }

    const style = document.createElement("style");
    style.id = SHADOW_ID;
    style.textContent = styles;
    root.appendChild(style);
  }

  function fixSection(section) {
    const host = section.querySelector(
      '[component-name="products-slider"]'
    );

    if (!host || !host.shadowRoot) return;

    let config = {};

    try {
      config = JSON.parse(
        host.getAttribute("config") || "{}"
      );
    } catch (e) {}

    const title = String(
      config.headline ||
      config.ar?.headline ||
      config.title ||
      ""
    ).trim();

    const subtitle = String(
      config.subtitle ||
      config.ar?.subtitle ||
      ""
    ).trim();

    host.classList.toggle(
      "rs-blank-title",
      !title && !subtitle
    );

    const root = host.shadowRoot;

    injectStyle(root, sliderCSS + cardCSS);

    /* التعامل مع مكونات سلة الداخلية */
    root.querySelectorAll(
      "custom-salla-product-card," +
      "salla-product-card,salla-slider"
    ).forEach(function (node) {

      if (!node.shadowRoot) return;

      injectStyle(
        node.shadowRoot,
        sliderCSS + cardCSS
      );

      node.shadowRoot.querySelectorAll(
        "custom-salla-product-card,salla-product-card"
      ).forEach(function (card) {

        if (card.shadowRoot) {
          injectStyle(card.shadowRoot, cardCSS);
        }

      });
    });
  }

  function start() {
    const sections = Array.from(
      document.querySelectorAll(
        "main.app-inner > " +
        "section.s-block--bundle-products-slider"
      )
    );

    if (!sections.length) return;

    sections.forEach(fixSection);

    /* معالجة السلايدرات عند وصول العميل إليها */
    if ("IntersectionObserver" in window) {

      const observer = new IntersectionObserver(
        function (entries) {

          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;

            fixSection(entry.target);

            setTimeout(
              () => fixSection(entry.target),
              400
            );

            setTimeout(
              () => fixSection(entry.target),
              1300
            );
          });

        },
        { rootMargin: "350px 0px" }
      );

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }

    [800, 2500, 5000].forEach(function (delay) {
      setTimeout(function () {
        sections.forEach(fixSection);
      }, delay);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      start,
      { once: true }
    );
  } else {
    start();
  }

})();

/* original module 8 */
(function(){
  'use strict';
  if(window.__relaxProductV70)return;
  window.__relaxProductV70=true;
  const $=(q,root=document)=>root.querySelector(q);
  const $$=(q,root=document)=>Array.from(root.querySelectorAll(q));
  const isProduct=/\/p\d+(?:\/|$)/i.test(location.pathname);
  const style=document.createElement('style');
  style.id='relax-smart-v70-style';
  style.textContent=`
  /* Price typography: red current, BLUE crossed-out genuine old price */
  body.rs60-product .product-details-col :is(.sale-price,.price_is_on_sale .total-price,.starting-or-normal-price:not(.hidden) .total-price){
    color:#c9162a!important;font-weight:900!important;font-size:clamp(25px,3vw,34px)!important;
  }
  body.rs60-product .product-details-col :is(.sale-price,.price_is_on_sale .total-price,.starting-or-normal-price:not(.hidden) .total-price) i{color:#c9162a!important}
  body.rs60-product .product-details-col :is(.regular-price,.before-price),
  body.rs60-product .rs60-item-price del{
    color:#1e40af!important;opacity:1!important;visibility:visible!important;
    font-weight:800!important;text-decoration:line-through!important;
    text-decoration-thickness:1.6px!important;text-decoration-color:#1e40af!important;
  }
  body.rs60-product .product-details-col :is(.regular-price,.before-price) i,
  body.rs60-product .rs60-item-price del i{color:#1e40af!important;opacity:1!important}
  body.rs60-product .rs60-fire{
    background:#e8f0ff!important;color:#173d85!important;border:1px solid #bbcef2!important;
    border-radius:999px!important;box-shadow:none!important;font-size:11px!important;
    padding:5px 10px!important;white-space:nowrap!important;
  }
  /* Keep gift and add-on area short on mobile, 4 per category max. */
  body.rs70-product .rs60-gift-section .rs60-products>.rs60-item:nth-of-type(n+5),
  body.rs70-product .rs60-paid-section .rs60-products>.rs60-item:nth-of-type(n+5){display:none!important}
  body.rs70-product .rs60-gift-section,body.rs70-product .rs60-paid-section{
    background:#fff!important;border:1px solid #e7eaf0!important;border-radius:13px!important;
    padding:11px!important;margin:11px 0!important;
  }
  body.rs70-product .rs60-section-title{font-size:15px!important}
  body.rs70-product .rs60-section-desc{font-size:11px!important;line-height:1.7!important;margin-bottom:7px!important}
  body.rs70-product .rs60-gift-section .rs60-small-link{
    display:inline-flex!important;align-items:center!important;justify-content:center!important;
    background:#b91c2b!important;border-radius:8px!important;color:#fff!important;
    padding:8px 12px!important;text-decoration:none!important;font-weight:800!important;
  }
  body.rs70-product .rs60-gift-section .rs60-small-link:hover{background:#90121f!important}
  body.rs70-product .rs60-gift-section .rs60-item-price,body.rs70-product .rs60-paid-section .rs60-item-price{color:#c9162a!important}
  body.rs70-product .rs60-gift-section .rs60-products,body.rs70-product .rs60-paid-section .rs60-products{
    display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:8px!important;
  }
  body.rs70-product .rs60-gift-section .rs60-item,body.rs70-product .rs60-paid-section .rs60-item{
    display:flex!important;min-height:0!important;flex-direction:column!important;gap:5px!important;
    align-items:stretch!important;padding:7px!important;
  }
  body.rs70-product .rs60-gift-section .rs60-item-photo,body.rs70-product .rs60-paid-section .rs60-item-photo{
    width:100%!important;min-width:0!important;height:75px!important;flex:0 0 75px!important;
    background:#f9fafb!important;max-width:100%!important;
  }
  body.rs70-product .rs60-gift-section .rs60-item-photo img,body.rs70-product .rs60-paid-section .rs60-item-photo img{
    height:100%!important;width:100%!important;object-fit:contain!important;
  }
  body.rs70-product .rs60-gift-section .rs60-item-info,body.rs70-product .rs60-paid-section .rs60-item-info{
    min-width:0!important;width:100%!important;display:flex!important;flex:1!important;flex-direction:column!important;
  }
  body.rs70-product .rs60-gift-section .rs60-item-name,body.rs70-product .rs60-paid-section .rs60-item-name{
    font-size:11px!important;line-height:1.45!important;display:-webkit-box!important;
    -webkit-line-clamp:2!important;-webkit-box-orient:vertical!important;min-height:2.9em!important;
    overflow:hidden!important;
  }
  body.rs70-product .rs60-gift-section .rs60-pick,body.rs70-product .rs60-paid-section .rs60-paid-check{
    margin-top:auto!important;min-height:31px!important;font-size:11px!important;
  }
  /* Complete long description under the main product — preserve original markup. */
  body.rs70-product .rs60-after-main{width:100%;max-width:1280px!important;margin-inline:auto!important;}
  body.rs70-product .rs60-description-panel{
    background:#fff!important;border:1px solid #e5eaf0!important;border-radius:18px!important;
    padding:clamp(16px,3vw,32px)!important;box-shadow:0 8px 30px rgba(16,33,58,.035)!important;
  }
  body.rs70-product .rs60-description-panel .rs60-description-tabs{margin-bottom:18px!important;padding-bottom:11px!important}
  body.rs70-product #rs60-description .rs70-full-original,
  body.rs70-product #rs60-description .rs70-full-original :is(p,li,td,th){
    font-size:clamp(14px,1.5vw,16px)!important;line-height:2!important;color:#334155!important;
  }
  body.rs70-product #rs60-description .rs70-full-original :is(h2,h3,h4){
    color:#15375c!important;line-height:1.6!important;letter-spacing:normal!important;
    font-weight:900!important;scroll-margin-top:115px;
  }
  body.rs70-product #rs60-description .rs70-full-original h2{
    font-size:clamp(19px,2vw,23px)!important;border-right:4px solid #c9162a;
    padding:8px 12px!important;margin:24px 0 12px!important;background:#f8faff;border-radius:5px;
  }
  body.rs70-product #rs60-description .rs70-full-original h3{
    font-size:clamp(17px,1.7vw,20px)!important;margin:22px 0 10px!important;
  }
  body.rs70-product #rs60-description .rs70-full-original h4{font-size:16px!important;margin:18px 0 7px!important}
  body.rs70-product #rs60-description .rs70-full-original ul,
  body.rs70-product #rs60-description .rs70-full-original ol{list-style:revert!important;padding-inline-start:25px!important;margin:9px 0 17px!important}
  body.rs70-product #rs60-description .rs70-full-original li{margin:5px 0!important;line-height:1.9!important}
  body.rs70-product #rs60-description .rs70-full-original :is(table,.ql-table){
    width:100%!important;max-width:100%!important;overflow-x:auto!important;
    border-collapse:collapse!important;margin:14px 0!important;background:#fff;
  }
  body.rs70-product #rs60-description .rs70-full-original :is(td,th){
    padding:11px!important;border:1px solid #dce4ef!important;background:#f8fafc!important;
    overflow-wrap:anywhere;
  }
  body.rs70-product #rs60-description .rs70-full-original :is(a){color:#1557ad!important;text-decoration:underline!important;text-underline-offset:3px}
  body.rs70-product #rs60-description .rs70-full-original img{
    width:auto!important;max-width:100%!important;height:auto!important;object-fit:contain!important;
    display:block;border-radius:13px;margin:14px auto;
  }
  body.rs70-product #rs60-description .rs70-full-original>*{max-width:100%}
  body.rs70-product .rs70-overview{border:1px solid #e3eaf5;background:#f8fbff;border-radius:12px;
    padding:12px 14px;margin:0 0 16px;line-height:1.8}
  body.rs70-product .rs70-overview strong{color:#17395c;font-size:14px;font-weight:900;display:block;margin-bottom:5px}
  body.rs70-product .rs70-overview a{display:inline-block;color:#1654a2!important;font-size:12px;
    text-decoration:none!important;margin:2px 0 2px 9px;font-weight:700}
  body.rs70-product .rs70-teaser{padding:10px 12px;border:1px solid #e5eaf0;
    border-radius:12px;background:#f9fbfe;margin:11px 0 12px;line-height:1.7}
  body.rs70-product .rs70-teaser p{font-size:13px;color:#36475d!important;line-height:1.85;margin:0 0 6px}
  body.rs70-product .rs70-teaser a{font-size:12px;font-weight:900;color:#b91c2b!important;text-decoration:underline}
  body.rs70-product .rs70-media-strip{margin:16px 0 22px;background:linear-gradient(115deg,#f6f9fe,#fff9f6);
    border:1px solid #e5eaf0;border-radius:15px;padding:12px;}
  body.rs70-product .rs70-media-strip figcaption{font-size:13px;font-weight:900;color:#223f62;margin-bottom:9px}
  body.rs70-product .rs70-media-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;}
  body.rs70-product .rs70-media-grid a{display:block;background:#fff;border:1px solid #e1e7ef;border-radius:11px;
    overflow:hidden;min-width:0;text-decoration:none!important}
  body.rs70-product .rs70-media-grid img{width:100%!important;height:200px!important;max-width:100%!important;
    object-fit:contain!important;margin:0!important;display:block;background:#fff}
  body.rs70-product .rs70-media-grid .rs70-img-label{font-size:11px;color:#475569;line-height:1.5;
    display:block;padding:7px 8px;max-height:3.4em;overflow:hidden}
  /* Branded native offers without duplicating Salla's carousel title */
  body.rs70-product .rs60-native-offers{border-radius:17px!important;padding:clamp(14px,2vw,20px)!important}
  body.rs70-product .rs60-native-offers .rs60-after-heading{font-size:19px!important;margin-bottom:10px!important}
  body.rs70-product .rs60-native-offers .s-slider-block__title-right{display:none!important}
  body.rs70-product .rs60-native-offers .s-offer-card{border:1px solid #e4eaf2!important;
    background:#fff!important;border-radius:12px!important;padding:12px!important}
  /* Only banner IDs 0 and 2 full bleed on mobile homepage; no other banner modified. */
  @media(max-width:767px){
    body.index main.app-inner>section.s-block--fixed-banner:is(.s-block--0,.s-block--2){
      width:100vw!important;max-width:100vw!important;margin-inline:calc(50% - 50vw)!important;
      padding:0!important;border-radius:0!important;overflow:hidden!important;
    }
    body.index main.app-inner>section.s-block--fixed-banner:is(.s-block--0,.s-block--2)>.container{
      width:100%!important;max-width:100%!important;margin:0!important;padding:0!important;
    }
    body.index main.app-inner>section.s-block--fixed-banner:is(.s-block--0,.s-block--2) :is(a,picture,img){
      width:100%!important;max-width:100%!important;border-radius:0!important;
    }
    body.rs70-product .rs60-gift-section .rs60-products,
    body.rs70-product .rs60-paid-section .rs60-products{
      display:grid!important;grid-auto-flow:column!important;grid-auto-columns:124px!important;
      grid-template-columns:none!important;overflow-x:auto!important;overscroll-behavior-inline:contain;
      scroll-snap-type:x proximity;gap:8px!important;padding:1px 2px 9px!important;
    }
    body.rs70-product .rs60-gift-section .rs60-item,body.rs70-product .rs60-paid-section .rs60-item{
      width:124px!important;scroll-snap-align:start;padding:6px!important;border-radius:9px!important;
    }
    body.rs70-product .rs60-gift-section .rs60-item-photo,body.rs70-product .rs60-paid-section .rs60-item-photo{
      height:70px!important;flex:0 0 70px!important;min-height:70px!important;
    }
    body.rs70-product .rs60-gift-section .rs60-item-name,body.rs70-product .rs60-paid-section .rs60-item-name{
      font-size:10px!important;min-height:2.9em!important
    }
    body.rs70-product .rs60-section-desc{max-height:3.4em;overflow:hidden}
    body.rs70-product .rs70-media-grid img{height:135px!important}
    body.rs70-product .rs60-description-panel{padding:14px!important;border-radius:13px!important}
  }
  @media(prefers-reduced-motion:reduce){.s-promotion-banner .content-wrap{animation:none!important}}
  `;
  (document.head||document.documentElement).appendChild(style);
  if(!isProduct)return;

  function ensureAfter(info){
    let after=$('.rs60-after-main');
    if(after)return after;
    const wrapper=$('.container--product-single');if(!wrapper)return null;
    after=document.createElement('div');after.className='rs60-after-main';wrapper.insertAdjacentElement('afterend',after);
    return after;
  }
  function getRichOriginal(info,panel){
    // A decorated subtitle is NOT the long merchant-written description.
    const candidates=[
      ...$$(':scope > .leading-6,:scope > .product-description,:scope > .description,:scope > .rs46-description,:scope > .rs56-description,:scope > [data-testid="product-description"],:scope > #product-description',info),
      ...$$('.rs60-description-source',panel||document.createDocumentFragment())
    ];
    const valid=candidates.filter(el=>el && !el.matches('.product-entry__sub-title,.rs70-teaser') &&
      !el.closest('.rs60-gift-section,.rs60-paid-section') && (el.textContent.trim().length>0 || !!el.querySelector('img,iframe,video,table')));
    return valid.sort((a,b)=>{
      const score=el=>el.textContent.trim().length+30*el.querySelectorAll('h2,h3,h4,li,table,img').length;
      return score(b)-score(a);
    })[0]||null;
  }
  function ensurePanel(info){
    const after=ensureAfter(info);if(!after)return null;
    let panel=$('.rs60-description-panel',after);
    if(!panel){
      panel=document.createElement('section');panel.className='rs60-description-panel';
      panel.dir='rtl';panel.id='rs60-description';
      const tabs=document.createElement('div');tabs.className='rs60-description-tabs';
      const tab=document.createElement('strong');tab.className='rs60-tab is-current';tab.textContent='تفاصيل المنتج';
      tabs.append(tab);
      const reviews=$('.container--product-reviews,salla-comments');
      if(reviews){if(!reviews.id)reviews.id='rs60-reviews';
        const link=document.createElement('a');link.href='#'+reviews.id;link.className='rs60-tab';link.textContent='تقييمات المنتج';tabs.append(link);
      }
      panel.append(tabs);after.append(panel);
    }
    return panel;
  }
  function summarize(info,source){
    if($('.rs70-teaser',info))return;
    const paras=$$('p',source).map(x=>x.textContent.trim()).filter(x=>x.length>30);
    const lead=(paras[0]||'').slice(0,215).trim();
    const box=document.createElement('div');box.className='rs70-teaser';
    if(lead){const p=document.createElement('p');p.textContent=lead+(paras[0].length>215?'…':'');box.append(p);}
    const a=document.createElement('a');a.href='#rs60-description';a.textContent='اقرأ الوصف الكامل والمواصفات ↓';box.append(a);
    const anchor=$(':scope > salla-installment',info)||$(':scope > .rs60-price-note',info)||$(':scope > .flex.whitespace-nowrap',info);
    if(anchor)anchor.insertAdjacentElement('afterend',box);
    else $('form.product-form',info)?.insertAdjacentElement('beforebegin',box);
  }
  function makeContents(panel,source){
    if($('.rs70-overview',panel))return;
    const headings=$$('h2,h3',source).filter(x=>x.textContent.trim().length>4 && x.textContent.trim().length<110);
    if(headings.length<3)return;
    const nav=document.createElement('nav');nav.className='rs70-overview';nav.setAttribute('aria-label','أقسام تفاصيل المنتج');
    const name=document.createElement('strong');name.textContent='في تفاصيل المنتج';nav.append(name);
    headings.slice(0,8).forEach((h,i)=>{
      if(!h.id)h.id='rs70-detail-'+i;
      const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent.trim();nav.append(a);
    });
    source.insertAdjacentElement('beforebegin',nav);
  }
  function validPhoto(url){
    try{const u=new URL(url,location.origin);return /^https?:$/.test(u.protocol)&&/\.(?:png|jpe?g|webp|avif)(?:$|[?])/i.test(u.href)?u.href:'';}
    catch{return '';}
  }
  function internalGallery(source){
    if(source.querySelector('img,figure,.rs70-media-strip'))return;
    const gallery=$('.container--product-single .details-slider');
    if(!gallery)return;
    const seen=new Set();const pics=[];
    $$('a[data-fslightbox] img,a.swiper-slide img',gallery).forEach(img=>{
      const href=validPhoto(img.closest('a')?.getAttribute('href')||img.currentSrc||img.src);
      if(!href||seen.has(href))return;seen.add(href);
      pics.push({href,alt:img.getAttribute('alt')||''});
    });
    // These are *existing photos* attached to this exact product, never a random banner.
    const selected=[pics[1],pics[3]||pics[2]].filter(Boolean);
    if(!selected.length)return;
    const figure=document.createElement('figure');figure.className='rs70-media-strip';
    const title=document.createElement('figcaption');title.textContent='صور إضافية من المنتج';figure.append(title);
    const grid=document.createElement('div');grid.className='rs70-media-grid';
    selected.forEach((entry,i)=>{
      const link=document.createElement('a');link.href=entry.href;link.target='_blank';link.rel='noopener noreferrer';
      const img=document.createElement('img');img.src=entry.href;img.loading='lazy';img.decoding='async';
      img.alt=entry.alt||'صورة إضافية للمنتج';
      const caption=document.createElement('span');caption.className='rs70-img-label';
      caption.textContent=entry.alt||'صورة '+(i+2)+' للمنتج';
      link.append(img,caption);grid.append(link);
    });
    figure.append(grid);
    const headings=$$('h2,h3',source);
    const place=headings.length>=3?headings[2]:null;
    if(place)place.insertAdjacentElement('beforebegin',figure);
    else source.append(figure);
  }
  function preserveDescription(info){
    const panel=ensurePanel(info);if(!panel)return;
    const original=getRichOriginal(info,panel);
    if(!original)return; // New product without merchant text: do not fabricate facts.
    if(original.dataset.rs70FullReady==='1')return;
    const old=$('.rs60-description-source',panel);
    if(old && old!==original){
      // Keep the merchant's original one-line subtitle visible near the product, not as a fake long description.
      old.classList.remove('rs60-description-source');old.classList.add('rs70-product-subtitle');
      const form=$('form.product-form',info);
      if(form)form.insertAdjacentElement('beforebegin',old);
    }
    original.classList.add('rs60-description-source','rs70-full-original');
    original.classList.remove('rs69-short-summary','rs-original-desc','rs-short-desc');
    $$('.rs-desc-hidden,.rs-desc-first,[data-rs-desc-extra],[data-rs-desc-first]',original).forEach(el=>{
      el.classList.remove('rs-desc-hidden','rs-desc-first');
      el.removeAttribute('data-rs-desc-extra');el.removeAttribute('data-rs-desc-first');
    });
    $$('.rs-original-more,.rs-short-more',original).forEach(el=>el.remove());
    original.dataset.rs70FullReady='1';
    panel.append(original); // MOVE rather than clone: headings, links, lists, media and tables stay original.
    summarize(info,original);
    makeContents(panel,original);
    internalGallery(original);
    $$('.rs69-more-link',info).forEach(el=>el.remove());
  }
  function priceBadge(info){
    $$('.rs60-fire',info).forEach(el=>{el.textContent='عرض مميز';});
  }
  function nativeInstallment(info){
    const el=$('salla-installment',info);if(!el)return;
    // Do not create a fake provider logo or fake installments. V69's native component remains.
    const anchor=$(':scope > .rs60-price-note',info)||$(':scope > .flex.whitespace-nowrap',info);
    if(anchor&&el.parentElement===info&&anchor.nextElementSibling!==el){anchor.insertAdjacentElement('afterend',el);}
  }
  function init(){
    const info=$('.container--product-single .product-details-col');
    if(!info)return;
    document.body.classList.add('rs70-product','rs69-product');
    priceBadge(info);nativeInstallment(info);preserveDescription(info);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
  document.addEventListener('theme::ready',init,{once:true});
  [400,1100,2300,4200].forEach(ms=>setTimeout(init,ms));
})();

/* original module 10 */
(() => {
  'use strict';
  if (window.__relaxSmartV72) return;
  window.__relaxSmartV72 = true;
  const style = document.createElement('style');
  style.id = 'rs72-marquee-product-style';
  style.textContent = `
    /* Theme already has a moving track; change speed, not animation name.
       Default v71 was 16s; 13.5s is slightly faster with constant velocity. */
    .s-promotion-banner { overflow: hidden; }
    .s-promotion-banner .content-wrap,
    .s-promotion-banner .content-wrap > .st-banner-bar__content {
      animation-duration: 13.5s !important;
      animation-timing-function: linear !important;
    }
    .s-promotion-banner .content-wrap { backface-visibility: hidden; }
    .s-promotion-banner .st-banner-bar__content { flex-shrink: 0; }
    @media (prefers-reduced-motion: reduce) {
      .s-promotion-banner .content-wrap,
      .s-promotion-banner .content-wrap > .st-banner-bar__content {
        animation: none !important;
        transform: none !important;
      }
      .s-promotion-banner .st-banner-bar__content.md\\:hidden { display:none !important; }
    }
    /* A concise fact-based short intro without hiding the saved full text. */
    body.rs72-product .rs72-auto-subtitle {
      font-size: 13px !important;
      font-weight: 600 !important;
      line-height: 1.85 !important;
      color: #50627a !important;
      margin: 8px 0 13px !important;
      padding: 0 3px !important;
    }
    body.rs72-product .rs72-auto-subtitle a { color:#17549c !important; }
    body.rs72-product .rs60-description-panel .rs70-full-original img {
      display:block;max-width:100% !important;height:auto !important;
      object-fit:contain !important;margin:14px auto !important;
    }
    body.rs72-product .rs60-description-panel .rs70-full-original figure {
      max-width:100% !important;overflow:hidden;
    }
  `;
  (document.head || document.documentElement).append(style);
  function short(text,limit=145) {
    const normalized = (text || '').replace(/\s+/g,' ').trim();
    if(normalized.length<=limit) return normalized;
    const portion=normalized.slice(0,limit);
    return portion.slice(0,portion.lastIndexOf(' ')>65?portion.lastIndexOf(' '):limit).replace(/[،؛,؛\s.]+$/,'')+'…';
  }
  function apply() {
    if(!/\/p\d+(?:\/|$)/.test(location.pathname)) return;
    const info=document.querySelector('.container--product-single .product-details-col');
    const panel=document.querySelector('.rs60-description-panel');
    const original=panel?.querySelector('.rs70-full-original');
    if(!info || !original || !original.textContent?.trim()) return;
    document.body.classList.add('rs72-product');
    /* This fallback ONLY shows merchant-written facts when there isn't a
       populated native subtitle. Do not duplicate existing Salla metadata. */
    if(info.querySelector('.rs70-product-subtitle,.product-entry__sub-title,.rs72-auto-subtitle')) return;
    const first=[...original.querySelectorAll('p')].find(el=>el.textContent.trim().length>=35);
    if(!first) return;
    const note=document.createElement('p');
    note.className='rs72-auto-subtitle';
    note.textContent=short(first.textContent,142);
    const form=info.querySelector('form.product-form');
    if(form)form.insertAdjacentElement('beforebegin',note);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
  document.addEventListener('theme::ready',apply,{once:true});
  [750,1800,3200].forEach(ms=>setTimeout(apply,ms));
})();

/* original module 14 */
(() => {
  'use strict';
  if (window.__relaxSmartV89) return;
  window.__relaxSmartV89 = true;
  const doc=document, root=doc.documentElement;
  const isProduct=/\/p\d+(?:\/|$)/i.test(location.pathname);
  const $=(s,r=doc)=>r.querySelector(s);
  const $$=(s,r=doc)=>Array.from(r.querySelectorAll(s));
  const css=doc.createElement('style');
  css.id='rs89-options-and-content-style';
  css.textContent=`
   /* Full original product titles: no clipping on the catalog or detail pages. */
   :is(custom-salla-product-card,salla-product-card,.s-product-card-entry,.s-product-card,.product-entry)
   :is(.product-entry__title,.product-entry__title a,.s-product-card-content-title,
       .s-product-card-content-title a,.s-product-card-title,.s-product-card-title a,
       .product-card__title,.product-card__title a),
   body .container--product-single .product-details-col h1{
      display:block!important;max-height:none!important;height:auto!important;
      min-height:0!important;white-space:normal!important;overflow:visible!important;
      text-overflow:clip!important;-webkit-line-clamp:unset!important;
      -webkit-box-orient:initial!important;overflow-wrap:anywhere!important;
      line-height:1.65!important;opacity:1!important;visibility:visible!important;
   }
   :is(custom-salla-product-card,salla-product-card,.s-product-card-entry,.s-product-card,.product-entry)
   :is(.product-entry__content,.s-product-card-content,.product-entry__title,.s-product-card-content-title){
      height:auto!important;max-height:none!important;min-height:0!important;
      overflow:visible!important;
   }
   /* Gift and add-on card names/descriptions must not be two-line clipped. */
   html body.rs70-product .rs60-gift-section .rs60-item-name,
   html body.rs70-product .rs60-paid-section .rs60-item-name{
      display:block!important;max-height:none!important;height:auto!important;
      -webkit-line-clamp:unset!important;overflow:visible!important;
      white-space:normal!important;overflow-wrap:anywhere!important;
   }
   html body.rs70-product .rs60-section-desc{max-height:none!important;overflow:visible!important}
   /* Product detail description is never replaced by the short teaser. */
   body.rs60-product #rs60-description,
   body.rs60-product #rs60-description .rs60-description-source,
   body.rs60-product #rs60-description .rs70-full-original{
      width:100%!important;max-width:100%!important;min-width:0!important;
      height:auto!important;max-height:none!important;min-height:0!important;
      white-space:normal!important;text-overflow:clip!important;
      overflow-wrap:anywhere!important;-webkit-line-clamp:unset!important;
      display:block!important;visibility:visible!important;opacity:1!important;
   }
   body.rs60-product #rs60-description :is(p,li,h1,h2,h3,h4,td,th,figcaption){
      white-space:normal!important;overflow-wrap:anywhere!important;
      -webkit-line-clamp:unset!important;max-height:none!important;
   }
   body.rs60-product #rs60-description .rs70-img-label{
      max-height:none!important;overflow:visible!important;
      white-space:normal!important;overflow-wrap:anywhere!important;
   }
   body.rs60-product #rs60-description .rs70-media-grid{min-width:0!important;max-width:100%!important}
   body.rs60-product #rs60-description .rs70-media-grid a{min-width:0!important;max-width:100%!important}
   body.rs60-product .rs89-benefits{
      display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;
      gap:8px!important;direction:rtl!important;margin:10px 0 13px!important;
      width:100%!important;min-width:0!important;max-width:100%!important;
   }
   body.rs60-product .rs89-benefits .rs89-benefit{
      display:flex!important;flex-direction:row!important;align-items:center!important;
      gap:7px!important;border:1px solid #e2e8ef!important;
      border-radius:10px!important;background:#fff!important;padding:9px 8px!important;
      min-width:0!important;max-width:100%!important;text-align:right!important;
   }
   body.rs60-product .rs89-benefits .rs89-benefit-icon{
      width:30px!important;height:30px!important;flex:0 0 30px!important;
      border-radius:8px!important;display:grid!important;place-items:center!important;
      background:#e9f7f4!important;color:#19a997!important;font-size:16px!important;
   }
   body.rs60-product .rs89-benefits .rs89-benefit-copy{min-width:0!important;flex:1!important}
   body.rs60-product .rs89-benefits .rs89-benefit-copy strong{
      display:block!important;font-size:11px!important;line-height:1.5!important;
      color:#223145!important;font-weight:850!important;
   }
   body.rs60-product .rs89-benefits .rs89-benefit-copy span{
      display:block!important;font-size:10px!important;line-height:1.55!important;
      color:#697687!important;margin-top:2px!important;
   }
   body.rs86-product form.product-form section.addtocart-bar.rs86-ready.rs89-sdk-mode>salla-add-product-button{
      display:none!important;visibility:hidden!important;pointer-events:none!important;
      width:0!important;min-width:0!important;flex:0 0 0!important;margin:0!important;padding:0!important;
   }
   body.rs86-product form.product-form section.addtocart-bar.rs86-ready>.rs89-add{
      display:none!important;align-items:center!important;justify-content:center!important;
      flex:1 1 0%!important;min-width:0!important;max-width:100%!important;
      height:44px!important;min-height:44px!important;max-height:44px!important;
      margin:0!important;padding:4px 8px!important;background:#148b4e!important;color:#fff!important;
      font:inherit!important;font-size:13px!important;font-weight:900!important;
      border:1px solid #148b4e!important;border-radius:9px!important;
      cursor:pointer!important;opacity:1!important;visibility:visible!important;
      box-sizing:border-box!important;pointer-events:auto!important;
   }
   body.rs86-product form.product-form section.addtocart-bar.rs86-ready.rs89-sdk-mode>.rs89-add{display:flex!important}
   body.rs86-product form.product-form section.addtocart-bar.rs86-ready>.rs89-add:disabled{opacity:.58!important;cursor:wait!important}
   /* The V86 modal is not a genuine Apple Pay method. Don't show a fake Apple Pay
      payment choice on browsers where Apple Pay itself is unavailable. */
   body.rs86-product .rs86-ready>.rs86-apple-info{display:none!important}
   @media(max-width:600px){
     body.rs86-product form.product-form section.addtocart-bar.rs86-ready.rs89-sdk-mode:not(.rs86-floating){
        display:flex!important;flex-wrap:wrap!important;min-height:54px!important;height:auto!important;
     }
     body.rs86-product form.product-form section.addtocart-bar.rs86-ready.rs89-sdk-mode:not(.rs86-floating)>.center-between{
        display:flex!important;flex:0 0 100%!important;max-width:86px!important;
     }
     body.rs86-product form.product-form section.addtocart-bar.rs86-ready.rs89-sdk-mode>.rs89-add,
     body.rs86-product form.product-form section.addtocart-bar.rs86-ready.rs89-sdk-mode>.rs86-buy{
       display:flex!important;flex:1 1 0%!important;min-width:0!important;
       height:42px!important;min-height:42px!important;max-height:42px!important;
       padding:3px!important;font-size:12px!important;
     }
     body.rs86-product form.product-form section.addtocart-bar.rs86-ready.rs89-sdk-mode.rs86-floating>.center-between{display:none!important}
     body.rs60-product #rs60-description{box-sizing:border-box!important;width:100%!important;overflow:hidden!important}
     body.rs60-product #rs60-description :is(img,video,iframe,figure,table){max-width:100%!important}
     body.rs60-product .rs89-benefits{gap:6px!important}
     body.rs60-product .rs89-benefits .rs89-benefit{padding:7px 5px!important;gap:5px!important}
     body.rs60-product .rs89-benefits .rs89-benefit-icon{width:26px!important;height:26px!important;flex-basis:26px!important}
     body.rs60-product .rs89-benefits .rs89-benefit-copy strong{font-size:10px!important}
     body.rs60-product .rs89-benefits .rs89-benefit-copy span{font-size:9px!important}
   }
  `;
  (doc.head||root).append(css);

  // Some of the old mobile slider's CSS lives in open Shadow DOM. Override it
  // inside those product cards as well; plain stylesheet rules cannot reach it.
  const shadowCSS=`
   :is(.product-entry__title,.product-entry__title a,.s-product-card-content-title,
   .s-product-card-content-title a,.s-product-card-title,.s-product-card-title a,
   .product-card__title,.product-card__title a){
     display:block!important;height:auto!important;min-height:0!important;
     max-height:none!important;white-space:normal!important;overflow:visible!important;
     -webkit-line-clamp:unset!important;line-clamp:unset!important;
     text-overflow:clip!important;overflow-wrap:anywhere!important;line-height:1.6!important;
   }
   :is(.product-entry__content,.s-product-card-content){height:auto!important;max-height:none!important;overflow:visible!important}
  `;
  function injectShadow(rootNode){
    const r=rootNode?.shadowRoot;
    if(!r)return;
    if(!r.querySelector('#rs89-card-title-style')){
      const st=doc.createElement('style');st.id='rs89-card-title-style';st.textContent=shadowCSS;r.append(st);
    }
    r.querySelectorAll('custom-salla-product-card,salla-product-card,salla-slider,[component-name="products-slider"]').forEach(injectShadow);
  }
  function scanCards(rootNode=doc){
    rootNode.querySelectorAll?.('custom-salla-product-card,salla-product-card,salla-slider,[component-name="products-slider"]').forEach(injectShadow);
  }
  let scanQueued=false;
  function scheduleCards(){
    if(scanQueued)return;scanQueued=true;
    requestAnimationFrame(()=>{scanQueued=false;scanCards()});
  }
  function initCatalog(){
    scanCards();
    const observer=new MutationObserver(records=>{
      if(records.some(r=>[...r.addedNodes].some(n=>n.nodeType===1&&
         (n.matches?.('custom-salla-product-card,salla-product-card,salla-slider,[component-name="products-slider"]')||
         n.querySelector?.('custom-salla-product-card,salla-product-card,salla-slider,[component-name="products-slider"]')))))scheduleCards();
    });
    observer.observe(doc.body,{childList:true,subtree:true});
    [900,2200,4800,6300,9000].forEach(ms=>setTimeout(scheduleCards,ms));
  }
  if(!isProduct){
    if(doc.readyState==='loading')doc.addEventListener('DOMContentLoaded',initCatalog,{once:true});
    else initCatalog();
    return;
  }

  let form,bar,host,addBtn,busy=false,submitBound=false,barBound=false;
  let cartSuccessSeen=false,lastRequest=0;
  const message=txt=>{
    const note=$('.rs86-action-note',form||doc);
    if(note)note.textContent=txt||'';
  };
  function nativeButton(){
    if(!host?.isConnected)return null;
    return host.querySelector('salla-button button,button.s-button-element,button[type="submit"]') ||
      host.querySelector('salla-button')?.shadowRoot?.querySelector('button') ||
      host.shadowRoot?.querySelector('salla-button button,button[type="submit"]') || null;
  }
  const missingNative=()=>!!(host?.isConnected&&!nativeButton());
  function syncMode(){
    if(!form?.isConnected||!bar?.isConnected||!host?.isConnected)return;
    const fallback=missingNative();
    bar.classList.toggle('rs89-sdk-mode',fallback);
    root.dataset.relaxSmartCartFix=fallback?'form-fallback':'native-salla';
    if(addBtn)addBtn.disabled=busy||host.getAttribute('product-status')!=='sale';
    const buy=bar.querySelector('.rs86-buy');
    if(buy)buy.type='button';
  }
  // Genuine browser form submission with the chosen option fields is crucial.
  // This is an actual SubmitEvent from the fallback button, not a click event.
  function getPayload(){
    const fd=new FormData(form), options={}, other={};
    for(const [key,value] of fd.entries()){
      const match=key.match(/^options\[(\d+)\](?:\[\])?$/);
      if(match){
        const k=match[1];
        if(Object.prototype.hasOwnProperty.call(options,k)){
          options[k]=Array.isArray(options[k])?[...options[k],value]:[options[k],value];
        }else options[k]=value;
      }else if(key==='notes'||key==='note'){
        if(typeof value==='string'&&value.trim())other.notes=value;
      }
    }
    const quantityHost=$('salla-quantity-input',form);
    const q=Number(fd.get('quantity') || $('input[name="quantity"]',form)?.value || quantityHost?.value || 1);
    const id=Number(fd.get('id')||host.getAttribute('product-id')||0);
    return {id,quantity:Number.isSafeInteger(q)&&q>=1?q:1,options,...other};
  }
  function errorText(error){
    const raw=error?.response?.data?.message ||error?.data?.message||error?.message||'';
    const t=String(raw).replace(/\s+/g,' ').slice(0,170);
    return t||'تعذرت إضافة المنتج. راجعي خياراته أو رسالة سلة.';
  }
  async function handleFallbackSubmit(e){
    if(!missingNative()||e.submitter!==addBtn)return;
    e.preventDefault();e.stopImmediatePropagation();
    if(busy)return;
    if(!form.reportValidity()){message('اختاري جميع الخيارات المطلوبة أولًا.');return;}
    const optionHost=$('salla-product-options',form);
    if(optionHost && typeof optionHost.validateAndScroll==='function'){
      try{
        const valid=optionHost.validateAndScroll();
        if(valid===false){message('اختاري جميع الخيارات المطلوبة أولًا.');return;}
      }catch{message('راجعي الخيارات المطلوبة قبل الشراء.');return;}
    }
    const s=window.salla||window.Salla;
    if(!s){message('خدمة سلة غير جاهزة. حدّثي الصفحة ثم جربي مرة أخرى.');return;}
    const payload=getPayload();
    if(!Number.isSafeInteger(payload.id)||payload.id<=0){message('لم يتم التعرف على رقم المنتج.');return;}
    // Uploaded files need Salla's native form upload flow. Do not silently
    // drop attachments when using an object payload.
    const uploadedFiles=Array.from(form.querySelectorAll('input[type="file"]'))
      .some(x=>x.files && x.files.length>0);
    if(uploadedFiles){
      message('المنتج يحتوي على ملف مرفق؛ استخدمي نموذج رفع الملفات الأصلي لإتمام الإضافة.');
      return;
    }
    const now=Date.now();if(now-lastRequest<1000)return;
    lastRequest=now;busy=true;cartSuccessSeen=false;
    const buy=bar.querySelector('.rs86-buy');
    if(buy)buy.disabled=true;
    addBtn.textContent='جارٍ الإضافة…';syncMode();
    const redirect=addBtn.dataset.goCart==='1';
    addBtn.dataset.goCart='0';
    try{
      // V97 FIX: do not pass an intercepted native SubmitEvent to the old
      // Salla.form.submit implementation: it produced `t.stop is not a function`
      // on this storefront. The documented Salla.cart.addItem accepts the full
      // {id, quantity, options, notes} payload from the REAL product form.
      if(typeof s.cart?.addItem!=='function'){
        throw new Error('خدمة إضافة المنتجات غير متوفرة حاليًا');
      }
      const result=await s.cart.addItem(payload);
      if(result?.success===false||result?.status===false||result?.error){
        throw new Error(errorText(result));
      }
      message(redirect?'تمت الإضافة، جارٍ الانتقال لإتمام الطلب…':'تمت إضافة المنتج إلى السلة.');
      root.dataset.relaxSmartCartFix='submitted';
      if(redirect){
        const completed=await window.__rs96Checkout?.afterAdded(payload.id);
        if(!completed) message('تمت إضافة المنتج، لكن تعذّر استكمال إتمام الطلب تلقائيًا؛ راجعي رسالة التحقق أو افتحي السلة.');
      }
    }catch(error){
      message('تعذرت الإضافة: '+errorText(error));
      root.dataset.relaxSmartCartFix='failed';
    }finally{
      busy=false;addBtn.textContent='أضف إلى السلة';if(buy)buy.disabled=false;syncMode();
    }
  }
  function initPurchase(){
    form=$('.container--product-single .product-details-col form.product-form');
    bar=form?.querySelector('section.addtocart-bar');
    host=bar?.querySelector('salla-add-product-button');
    if(!form||!bar||!host){root.dataset.relaxSmartCartFix='waiting-for-product';return;}
    if(!addBtn){
      addBtn=doc.createElement('button');addBtn.type='submit';
      addBtn.className='rs89-add';addBtn.textContent='أضف إلى السلة';
      host.insertAdjacentElement('afterend',addBtn);
    }
    if(!submitBound){
      submitBound=true;
      form.addEventListener('submit',e=>{void handleFallbackSubmit(e)},true);
    }
    if(!barBound){
      barBound=true;
      bar.addEventListener('click',e=>{
        if(!missingNative()||!e.target?.closest?.('.rs86-buy'))return;
        e.preventDefault();e.stopImmediatePropagation();
        if(busy)return;
        if(!form.reportValidity()){message('اختاري كل الخيارات المطلوبة قبل الشراء.');return;}
        addBtn.dataset.goCart='1';
        form.requestSubmit(addBtn);
      },true);
      const obs=new MutationObserver(syncMode);
      obs.observe(host,{childList:true,subtree:true});
    }
    const id=host.getAttribute('product-id');
    if(id&&!$('input[name="id"]',form)){
      const hidden=doc.createElement('input');hidden.type='hidden';hidden.name='id';hidden.value=id;
      form.append(hidden);
    }
    syncMode();
  }
  const svg={
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    wallet:'<rect x="2" y="5" width="20" height="15" rx="2"/><path d="M16 11h4"/>',
    truck:'<path d="M10 17h4V5H2v12h3"/><path d="M14 9h4l4 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/>',
    back:'<path d="M3 11a9 9 0 1 1 2.5 6.2"/><path d="M3 4v7h7"/>'
  };
  function benefits(){
    const info=$('.container--product-single .product-details-col');
    const title=info?.querySelector(':scope > h1');
    if(!title)return;
    let wrap=$('.rs89-benefits',info);
    if(wrap)return;
    wrap=doc.createElement('div');wrap.className='rs89-benefits';wrap.dir='rtl';
    wrap.setAttribute('aria-label','مميزات التسوق من ريلاكس سمارت');
    const rows=[
      ['shield','طرق دفع آمنة','حسب الخيارات المتاحة عند الدفع'],
      ['wallet','خيارات تقسيط','حسب الأهلية ومزود الخدمة'],
      ['truck','شحن داخل المملكة','وفق سياسة الشحن بالمتجر'],
      ['back','استبدال واسترجاع','حسب سياسة المتجر']
    ];
    rows.forEach(([key,heading,sub])=>{
      const item=doc.createElement('div');item.className='rs89-benefit';
      const icon=doc.createElement('span');icon.className='rs89-benefit-icon';icon.setAttribute('aria-hidden','true');
      icon.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">'+svg[key]+'</svg>';
      const copy=doc.createElement('div');copy.className='rs89-benefit-copy';
      const strong=doc.createElement('strong');strong.textContent=heading;
      const span=doc.createElement('span');span.textContent=sub;
      copy.append(strong,span);item.append(icon,copy);wrap.append(item);
    });
    // Replace the old three-card trust footer rather than duplicate the labels.
    const old=$('.rs60-trust:not(.rs89-benefits)',info);
    old?.remove();
    const hero=info.querySelector(':scope > .rs87-product-hero');
    if(hero)hero.insertAdjacentElement('afterend',wrap);
    else title.insertAdjacentElement('afterend',wrap);
  }
  function init(){
    initPurchase();benefits();scanCards();
  }
  if(doc.readyState==='loading')doc.addEventListener('DOMContentLoaded',init,{once:true});else init();
  doc.addEventListener('theme::ready',init);
  [250,900,1800,3500].forEach(ms=>setTimeout(init,ms));
})();

/* original module 15 */
(function(){
  'use strict';
  if(window.__relaxSmartV66Catalog) return;
  window.__relaxSmartV66Catalog=true;
  const style=document.createElement('style');
  style.id='relax-smart-v66-catalog-style';
  style.textContent=`/* RELAX SMART V90: hide listing-card quick-purchase CONTROLS, never a form. */
:is(custom-salla-product-card,salla-product-card,.s-product-card-entry,.s-product-card)
:is(salla-product-options,.product-entry__options,.product-entry__options-wrapper,
.product-entry__variants,.product-entry__variant-options,.s-product-card-options,
.s-product-card-variants,.product-variants,.variant-selector,.options-container,
.product-options,.product-options-wrapper,.product-entry__quick-buy,
.s-product-card-quick-buy,.product-entry__quick-add,.product-quick-add,
.quick-buy-options,.product-entry__add-to-cart,.s-product-card-add-btn,
.s-product-card-add-button,.product-entry__cart-controls,.s-product-card__actions),
:is(custom-salla-product-card,salla-product-card,.s-product-card-entry,.s-product-card)
:is(salla-add-product-button,salla-quick-buy,.s-product-card-button-add-to-cart){
 display:none!important;visibility:hidden!important;
}
/* Forms are NOT buttons: form.product-form contains title, subtitle and prices. */
html body custom-salla-product-card.product-entry > form.product-form,
html body custom-salla-product-card form.content-wrap.product-form,
html body salla-product-card form.product-form,
html body .s-product-card-entry form.product-form,
html body .s-product-card form.product-form{
 display:block!important;visibility:visible!important;opacity:1!important;
 height:auto!important;max-height:none!important;min-height:0!important;
 overflow:visible!important;margin-bottom:0!important;
}
html body custom-salla-product-card .product-entry__content,
html body .s-product-card-entry .product-entry__content{
 display:block!important;visibility:visible!important;opacity:1!important;
 height:auto!important;max-height:none!important;min-height:0!important;
 overflow:visible!important;
}
/* Preserve the actual merchant-authored names and price for variant products. */
html body custom-salla-product-card :is(.product-entry__title,.product-entry__title a,.s-product-card-content-title,.s-product-card-content-title a),
html body salla-product-card :is(.product-entry__title,.product-entry__title a,.s-product-card-content-title,.s-product-card-content-title a){
 display:block!important;visibility:visible!important;opacity:1!important;
 height:auto!important;max-height:none!important;white-space:normal!important;
 overflow:visible!important;color:#233449!important;-webkit-text-fill-color:#233449!important;
 font-size:14px!important;line-height:1.65!important;
}
`; 
  (document.head||document.documentElement).append(style);

  const selector='custom-salla-product-card,salla-product-card,.s-product-card-entry,.s-product-card';
  const shadowCSS=`/* RELAX SMART V90 Shadow DOM: ONLY the option and checkout controls */
salla-product-options,salla-add-product-button,salla-quick-buy,
.product-entry__options,.product-entry__options-wrapper,
.s-product-card-options,.product-variants,.variant-selector,
.product-entry__quick-buy,.product-entry__quick-add,
.product-entry__add-to-cart,.s-product-card-add-btn{display:none!important}
form.product-form,form.content-wrap,form:has(salla-product-options),form:has([name^="options["]){
 display:block!important;visibility:visible!important;opacity:1!important;
 max-height:none!important;height:auto!important;overflow:visible!important}
.product-entry__title,.product-entry__title a,.s-product-card-content-title,
.s-product-card-content-title a,.s-product-card-title,.s-product-card-title a{
 display:block!important;visibility:visible!important;opacity:1!important;
 max-height:none!important;height:auto!important;overflow:visible!important;
 white-space:normal!important;line-height:1.65!important;
 color:#233449!important;-webkit-text-fill-color:#233449!important}
`;
  function prepare(card){
    // This attribute is part of Salla's standard product card API.
    if(card.localName==='salla-product-card' && !card.hasAttribute('hide-add-btn')){
      card.setAttribute('hide-add-btn','');
    }
    const root=card.shadowRoot;
    if(root && !root.querySelector('#rs66-shadow-style')){
      const st=document.createElement('style');st.id='rs66-shadow-style';st.textContent=shadowCSS;
      root.append(st);
    }
  }
  function scan(root){
    if(!root || root.nodeType!==1 && root.nodeType!==9) return;
    if(root.matches?.(selector)) prepare(root);
    root.querySelectorAll?.(selector).forEach(prepare);
  }
  function start(){
    scan(document);
    const observer=new MutationObserver(records=>{
      for(const record of records){
        for(const node of record.addedNodes){if(node.nodeType===1)scan(node);}
      }
    });
    // Observe only newly created cards, not input changes or every style mutation.
    observer.observe(document.body,{childList:true,subtree:true});
    [800,2000].forEach(ms=>setTimeout(()=>scan(document),ms));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();

/* original module 16 */
(() => {
  'use strict';
  if (window.__relaxSmartV90CatalogNames) return;
  window.__relaxSmartV90CatalogNames = true;
  document.documentElement.dataset.relaxSmartCatalogFix = '90';
  const doc=document;
  const CARDS='custom-salla-product-card,salla-product-card,.s-product-card-entry,.s-product-card,.product-entry';
  const TITLES='.product-entry__title,.s-product-card-content-title,.s-product-card-title,.product-card__title';
  const BODY='.product-entry__content,.s-product-card-content,.product-card__content,.product-card__details';
  const clean=t=>String(t||'').replace(/\s+/g,' ').trim();
  const acceptable=t=>t && t.length>=4 && t.length<350 &&
    !/^(?:صورة المنتج|صورة|منتج|عرض سريع|أضف إلى السلة|Add to cart|Product image|Loading)$/i.test(t);
  const mainStyle=doc.createElement('style');
  mainStyle.id='rs90-repair-card-titles';
  mainStyle.textContent=`
    html body :is(custom-salla-product-card,salla-product-card,.s-product-card,.s-product-card-entry,.product-entry)
    :is(.product-entry__title,.product-entry__title a,.s-product-card-content-title,.s-product-card-content-title a,
        .s-product-card-title,.s-product-card-title a,.product-card__title,.product-card__title a,.rs90-restored-title,.rs90-restored-title a){
      display:block!important;visibility:visible!important;opacity:1!important;
      max-height:none!important;min-height:0!important;height:auto!important;
      overflow:visible!important;white-space:normal!important;
      text-overflow:clip!important;-webkit-line-clamp:unset!important;
      font-size:14px!important;line-height:1.65!important;font-weight:750!important;
      color:#233449!important;-webkit-text-fill-color:#233449!important;
      overflow-wrap:anywhere!important;text-decoration:none!important;
    }
    html body .rs90-restored-title{margin:0 0 8px!important;padding:0!important}
    /* A variant form is also the container for title, price and subtitle. */
    html body custom-salla-product-card form.product-form,
    html body salla-product-card form.product-form,
    html body .s-product-card-entry form.product-form,
    html body .s-product-card form.product-form{
      display:block!important;visibility:visible!important;opacity:1!important;
      max-height:none!important;height:auto!important;overflow:visible!important;
    }
    @media(max-width:767px){
      html body :is(custom-salla-product-card,salla-product-card,.s-product-card,.s-product-card-entry,.product-entry)
      :is(.product-entry__title,.product-entry__title a,.s-product-card-content-title,.s-product-card-content-title a,
          .s-product-card-title,.s-product-card-title a,.rs90-restored-title,.rs90-restored-title a){
        font-size:13px!important;line-height:1.7!important;max-height:none!important;
      }
    }
  `;
  (doc.head||doc.documentElement).append(mainStyle);
  const shadowCss=`
    form.product-form,form.content-wrap,form:has(salla-product-options),form:has([name^="options["]){
      display:block!important;visibility:visible!important;opacity:1!important;
      height:auto!important;max-height:none!important;overflow:visible!important}
    .product-entry__content,.s-product-card-content{display:block!important;visibility:visible!important;opacity:1!important;max-height:none!important;height:auto!important}
    :is(.product-entry__title,.product-entry__title a,.s-product-card-content-title,.s-product-card-content-title a,
    .s-product-card-title,.s-product-card-title a,.rs90-restored-title,.rs90-restored-title a){
      display:block!important;visibility:visible!important;opacity:1!important;
      height:auto!important;max-height:none!important;white-space:normal!important;
      overflow:visible!important;color:#233449!important;-webkit-text-fill-color:#233449!important;
      font-size:14px!important;line-height:1.65!important}
  `;
  const observedRoots=new WeakSet();
  function watchShadow(root){
    if(!root||observedRoots.has(root))return;
    observedRoots.add(root);
    const st=doc.createElement('style');st.id='rs90-shadow-card-fix';st.textContent=shadowCss;
    root.append(st);
    const obs=new MutationObserver(schedule);
    obs.observe(root,{childList:true,subtree:true});
  }
  function productData(card){
    let p=card.product;
    if(typeof p==='string'){try{p=JSON.parse(p)}catch{p=null}}
    if(p&&typeof p==='object'&&typeof p.name==='string')return p;
    try{
      const raw=card.getAttribute('product');
      const parsed=raw?JSON.parse(raw):null;
      return parsed&&typeof parsed==='object'?parsed:{};
    }catch{return {}}
  }
  function productLink(root, card, product){
    const raw=root.querySelector('.product-entry__image-wrap[href],a[href*="/p"]')?.getAttribute('href') || product.url || card.getAttribute('data-product-url') || '';
    try{
      const url=new URL(raw,location.href);
      return url.origin===location.origin && /\/p\d+(?:\/|$)/.test(url.pathname)?url.href:'';
    }catch{return ''}
  }
  function ownName(card,body,product){
    const source=body.querySelector('.product-entry__title,.s-product-card-content-title,.s-product-card-title,.product-card__title');
    const native=clean(source?.textContent);
    if(acceptable(native))return native;
    const fields=[product.name,card.getAttribute('data-product-name'),card.getAttribute('data-name'),
      body.querySelector('meta[itemprop="name"]')?.getAttribute('content'),
      body.querySelector('.product-entry__image-wrap[aria-label],a.product-entry__image-wrap[aria-label]')?.getAttribute('aria-label'),
      card.querySelector('.product-entry__image-wrap[aria-label]')?.getAttribute('aria-label'),
      body.querySelector('img[alt]')?.getAttribute('alt'),card.querySelector('img[alt]')?.getAttribute('alt')];
    return fields.map(clean).find(acceptable)||'';
  }
  function apply(card){
    if(!card.isConnected||card.parentElement?.closest(CARDS))return;
    const ownRoot=card.shadowRoot||card;
    if(card.shadowRoot)watchShadow(card.shadowRoot);
    const content=ownRoot.querySelector(BODY);
    if(!content)return; // do not manufacture UI for an unhydrated/empty product card
    const title=content.querySelector(TITLES);
    const fallback=content.querySelector(':scope > .rs90-restored-title');
    if(title&&acceptable(clean(title.textContent))){
      if(fallback)fallback.remove(); // Salla rendered its genuine title later
      return;
    }
    const data=productData(card);
    const name=ownName(card,ownRoot,data);
    if(!name)return; // never guess or invent a product title
    if(title){
      if(!clean(title.textContent)){
        const existing=title.querySelector('a');
        if(existing)existing.textContent=name;
        else title.textContent=name;
      }
      fallback?.remove();return;
    }
    if(fallback){
      if(clean(fallback.textContent)!==name)fallback.querySelector('a')?.replaceChildren(doc.createTextNode(name));
      return;
    }
    const h=doc.createElement('h2');h.className='rs90-restored-title';
    const href=productLink(ownRoot,card,data);
    if(href){const a=doc.createElement('a');a.href=href;a.textContent=name;h.append(a)}
    else h.textContent=name;
    content.prepend(h);
  }
  let queued=false;
  function schedule(){
    if(queued)return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;scan()});
  }
  function scan(){
    const visited=new Set();
    function inspect(root,depth=0){
      if(depth>6||!root||visited.has(root))return;
      visited.add(root);
      root.querySelectorAll?.(CARDS).forEach(apply);
      root.querySelectorAll?.('custom-salla-product-card,salla-product-card,salla-slider,[component-name="products-slider"]').forEach(el=>{
        if(el.shadowRoot){watchShadow(el.shadowRoot);inspect(el.shadowRoot,depth+1)}
      });
    }
    inspect(doc);
  }
  function init(){
    scan();
    const observer=new MutationObserver(records=>{
      if(records.some(r=>[...r.addedNodes].some(n=>n.nodeType===1)))schedule();
    });
    observer.observe(doc.body,{childList:true,subtree:true});
    doc.addEventListener('salla::product::loaded',schedule,{passive:true});
    [550,1400,2800,5000].forEach(ms=>setTimeout(schedule,ms));
  }
  if(doc.readyState==='loading')doc.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

/* original module 19 */
(() => {
  'use strict';

  const PANEL_ID = 'rsx-footer-v102';
  if (document.getElementById(PANEL_ID)) return;
  if (/\/(?:checkout|payment|thank-you)(?:\/|$)/i.test(location.pathname)) return;

  const origin = 'https://relaxsmart-sa.com';
  const links = [
    {
      title: 'تسوّق حسب القسم',
      items: [
        ['الرئيسية', '/ar/'],
        ['التخفيضات', '/ar/offers'],
        ['منتجات عصرية', '/ar/منتجات-عصرية/c2098953216'],
        ['منتجات هدية', '/ar/piece-plus-piece/c544380334'],
        ['المساج والاسترخاء', '/ar/المساج-و-الإسترخاء/c1542088903'],
        ['الرشاقة', '/ar/الرشاقة/c1384671183'],
        ['العناية المتكاملة', '/ar/العناية-المتكاملة/c820704799']
      ]
    },
    {
      title: 'المساج والاسترخاء',
      items: [
        ['كراسي المساج', '/ar/كراسي-المساج/c1428281541'],
        ['أجهزة المساج', '/ar/اجهزة-المساج/c2068101572'],
        ['مساج للقدمين', '/ar/مساج-للقدمين/c1214982181'],
        ['طاولات وأسرّة المساج', '/ar/طاولات-واسرة-المساج/c1101921902']
      ]
    },
    {
      title: 'الرشاقة والعناية',
      items: [
        ['مشدات وأحزمة الجسم', '/ar/مشدات-واحزمة-الجسم/c696228603'],
        ['دراجات التمارين', '/ar/دراجات-التمارين/c1502703423'],
        ['الكراسي المتحركة', '/ar/كراسي-متحركه/c655288262'],
        ['كمادات التدفئة', '/ar/كمادات-التدفئة/c1387126211'],
        ['وسائد ومقاعد', '/ar/وسائد-ومقاعد/c1894450887'],
        ['العناية بالقدم', '/ar/العناية-بالقدم/c995862812']
      ]
    },
    {
      title: 'معلومات تهمك',
      items: [
        ['من نحن', '/ar/من-نحن/page-480976008'],
        ['الاستبدال والاسترجاع', '/ar/سياسة-الاتستبدال-والاسترجاع/page-1487502520'],
        ['الاستخدام والخصوصية', '/ar/سياسة-الاستخدام-والخصوصية/page-712481721']
      ]
    }
  ];

  // Inline outline icons: no external font, library, or network request.
  const icons = {
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 17h4V5H2v12h3"/><path d="M14 9h4l4 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17" cy="17.5" r="2.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20M6 15h4"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14-5L4 8"/><path d="M4 3v5h5"/><path d="M4 13a8 8 0 0 0 14 5l2-2"/><path d="M20 21v-5h-5"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.7L3 21l1.8-5.8A8.5 8.5 0 1 1 21 11.5Z"/><path d="M9 9c1 3 3 5 6 6"/></svg>'
  };

  function makeElement(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function makeLink(label, href, className) {
    const a = makeElement('a', className || '', label);
    a.href = href.startsWith('/') ? origin + href : href;
    return a;
  }

  function makeService(iconKey, headline, subline) {
    const item = makeElement('div', 'rsx-footer-service');
    const icon = makeElement('span', 'rsx-footer-service-icon');
    icon.innerHTML = icons[iconKey];
    const copy = makeElement('span', 'rsx-footer-service-copy');
    copy.append(makeElement('strong', '', headline), makeElement('small', '', subline));
    item.append(icon, copy);
    return item;
  }

  function makeLinkGroup(group) {
    const details = makeElement('details', 'rsx-footer-group');
    const summary = makeElement('summary', 'rsx-footer-group-title', group.title);
    const list = makeElement('ul', 'rsx-footer-links');
    group.items.forEach(([label, href]) => {
      const li = document.createElement('li');
      li.appendChild(makeLink(label, href));
      list.appendChild(li);
    });
    details.append(summary, list);
    return details;
  }

  function buildPanel() {
    const section = makeElement('section', 'rsx-footer', undefined);
    section.id = PANEL_ID;
    section.dir = 'rtl';
    section.setAttribute('aria-labelledby', 'rsx-footer-title');

    const serviceLine = makeElement('div', 'rsx-footer-services');
    const serviceWrap = makeElement('div', 'rsx-footer-container rsx-footer-services-grid');
    serviceWrap.append(
      makeService('truck', 'شحن داخل المملكة', 'وفق سياسة الشحن'),
      makeService('shield', 'تسوق بثقة', 'وسائل دفع آمنة'),
      makeService('card', 'خيارات تقسيط', 'حسب الأهلية والشروط'),
      makeService('refresh', 'استبدال واسترجاع', 'وفق سياسة المتجر')
    );
    serviceLine.appendChild(serviceWrap);

    const main = makeElement('div', 'rsx-footer-container rsx-footer-main');
    const brand = makeElement('div', 'rsx-footer-brand');
    const eyebrow = makeElement('span', 'rsx-footer-eyebrow', 'راحتك تبدأ من هنا');
    const title = makeElement('h2', 'rsx-footer-brand-title', 'ريلاكس سمارت');
    title.id = 'rsx-footer-title';
    brand.append(
      eyebrow,
      title,
      makeElement('p', 'rsx-footer-brand-desc',
        'اكتشف حلول الاسترخاء والراحة المنزلية، من كراسي وأجهزة المساج إلى مستلزمات الرشاقة والعناية اليومية.'
      )
    );
    const actions = makeElement('div', 'rsx-footer-actions');
    const whatsapp = makeLink('تواصل عبر واتساب', 'https://wa.me/966501648915', 'rsx-footer-cta rsx-footer-cta-primary');
    whatsapp.target = '_blank';
    whatsapp.rel = 'noopener noreferrer';
    whatsapp.insertAdjacentHTML('afterbegin', icons.chat);
    const email = makeLink('راسلنا بالبريد', 'mailto:info@relaxsmartsa.com', 'rsx-footer-cta rsx-footer-cta-light');
    email.insertAdjacentHTML('afterbegin', icons.mail);
    actions.append(whatsapp, email);
    brand.appendChild(actions);
    main.appendChild(brand);

    const nav = makeElement('nav', 'rsx-footer-nav');
    nav.setAttribute('aria-label', 'روابط التسوق وسياسات ريلاكس سمارت');
    links.forEach(group => nav.appendChild(makeLinkGroup(group)));
    main.appendChild(nav);

    const note = makeElement('div', 'rsx-footer-bottom-note');
    const noteInner = makeElement('div', 'rsx-footer-container');
    noteInner.textContent = 'بيانات التوثيق والرقم الضريبي ووسائل الدفع تجدها أسفل هذه الروابط في الفوتر الرسمي للمتجر.';
    note.appendChild(noteInner);

    section.append(serviceLine, main, note);
    return section;
  }

  // Some Salla themes render the legal footer as a div rather than <footer>.
  // Prefer a real footer, but fall back to inserting immediately after main.
  function findAnchor() {
    const candidates = [...document.querySelectorAll('footer, .store-footer, #footer, [role="contentinfo"]')]
      .filter(el => !el.closest('#rsx-footer-v102,#rsx-footer-v101') && !el.closest('header'));
    const legal = candidates.find(el => /الرقم الضريبي|جميع الحقوق|موثوق|السجل التجاري|تسوق آمن/i.test(el.textContent || ''));
    const native = legal || candidates.at(-1);
    if (native?.parentNode) return { node: native, position: 'before', native };
    const main = document.querySelector('main.app-inner, main#main, #app main, main');
    if (main?.parentNode) return { node: main, position: 'after', native: null };
    return null;
  }

  function injectStyle() {
    if (document.getElementById('rsx-footer-v102-style')) return;
    const st = document.createElement('style');
    st.id = 'rsx-footer-v102-style';
    st.textContent = String.raw`/* Relax Smart | Premium Footer V101 | Scoped, RTL, no external dependencies */
#rsx-footer-v102 {
  --rsx-ink: #203447;
  --rsx-muted: #687988;
  --rsx-red: #cf253a;
  --rsx-orange: #d67027;
  --rsx-border: #e4e9ee;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  direction: rtl;
  color: var(--rsx-ink);
  background: linear-gradient(180deg, #fff 0%, #f8fafc 100%);
  font-family: Cairo, Tajawal, Arial, sans-serif;
  isolation: isolate;
}
#rsx-footer-v102 *,
#rsx-footer-v102 *::before,
#rsx-footer-v102 *::after { box-sizing: border-box; }
#rsx-footer-v102 .rsx-footer-container {
  width: min(1220px, calc(100% - 40px));
  margin-inline: auto;
}
#rsx-footer-v102 .rsx-footer-services {
  border-top: 3px solid var(--rsx-red);
  border-bottom: 1px solid var(--rsx-border);
  background: #fff9f8;
}
#rsx-footer-v102 .rsx-footer-services-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  padding-block: 22px;
}
#rsx-footer-v102 .rsx-footer-service {
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 0;
  text-align: right;
}
#rsx-footer-v102 .rsx-footer-service-icon {
  flex: 0 0 42px;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 13px;
  background: #fff;
  border: 1px solid #f2dadd;
  color: var(--rsx-red);
}
#rsx-footer-v102 .rsx-footer-service-icon svg,
#rsx-footer-v102 .rsx-footer-cta svg { width: 21px; height: 21px; }
#rsx-footer-v102 .rsx-footer-service-copy { display: grid; gap: 3px; min-width: 0; }
#rsx-footer-v102 .rsx-footer-service-copy strong {
  color: var(--rsx-ink);
  font-size: 13px;
  font-weight: 800;
  line-height: 1.5;
}
#rsx-footer-v102 .rsx-footer-service-copy small {
  color: var(--rsx-muted);
  font-size: 11px;
  line-height: 1.55;
}
#rsx-footer-v102 .rsx-footer-main {
  display: grid;
  grid-template-columns: minmax(220px, 1.45fr) minmax(0, 4fr);
  gap: clamp(24px, 4vw, 56px);
  padding-block: 47px 35px;
  align-items: start;
}
#rsx-footer-v102 .rsx-footer-brand { min-width: 0; }
#rsx-footer-v102 .rsx-footer-eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 4px 11px;
  border-radius: 999px;
  background: #fff0ee;
  color: #ac3d49;
  font-size: 11px;
  font-weight: 800;
}
#rsx-footer-v102 .rsx-footer-brand-title {
  color: var(--rsx-ink);
  margin: 12px 0 10px;
  font-size: clamp(24px, 2.2vw, 31px);
  font-weight: 850;
  line-height: 1.45;
}
#rsx-footer-v102 .rsx-footer-brand-title::after {
  content: '';
  display: block;
  width: 47px;
  height: 3px;
  margin-top: 10px;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--rsx-orange), var(--rsx-red));
}
#rsx-footer-v102 .rsx-footer-brand-desc {
  margin: 0;
  max-width: 350px;
  color: var(--rsx-muted);
  font-size: 12px;
  line-height: 2;
}
#rsx-footer-v102 .rsx-footer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 19px;
}
#rsx-footer-v102 .rsx-footer-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 9px 12px;
  border-radius: 11px;
  font-size: 11px;
  font-weight: 800;
  text-decoration: none;
  transition: background-color .2s ease, border-color .2s ease, color .2s ease;
}
#rsx-footer-v102 .rsx-footer-cta-primary { background: var(--rsx-red); color: #fff; border: 1px solid var(--rsx-red); }
#rsx-footer-v102 .rsx-footer-cta-primary:hover { background: #aa2436; color: #fff; }
#rsx-footer-v102 .rsx-footer-cta-light { background: #fff; color: var(--rsx-ink); border: 1px solid #dfe6ec; }
#rsx-footer-v102 .rsx-footer-cta-light:hover { border-color: var(--rsx-red); color: var(--rsx-red); }
#rsx-footer-v102 .rsx-footer-nav {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  min-width: 0;
}
#rsx-footer-v102 .rsx-footer-group { min-width: 0; }
#rsx-footer-v102 .rsx-footer-group-title {
  position: relative;
  margin: 0 0 17px;
  padding: 0 0 12px;
  color: var(--rsx-ink);
  font-size: 14px;
  font-weight: 850;
  line-height: 1.5;
  list-style: none;
  cursor: default;
}
#rsx-footer-v102 .rsx-footer-group-title::-webkit-details-marker { display: none; }
#rsx-footer-v102 .rsx-footer-group-title::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 3px;
  border-radius: 10px;
  background: var(--rsx-orange);
}
#rsx-footer-v102 .rsx-footer-links { list-style: none; margin: 0; padding: 0; display: grid; gap: 11px; }
#rsx-footer-v102 .rsx-footer-links li { margin: 0; padding: 0; min-width: 0; }
#rsx-footer-v102 .rsx-footer-links a {
  position: relative;
  display: inline-block;
  max-width: 100%;
  color: #506071;
  font-size: 12px;
  line-height: 1.7;
  text-decoration: none;
  transition: color .2s ease;
  overflow-wrap: break-word;
}
#rsx-footer-v102 .rsx-footer-links a:hover { color: var(--rsx-red); text-decoration: underline; text-underline-offset: 4px; }
#rsx-footer-v102 a:focus-visible,
#rsx-footer-v102 summary:focus-visible { outline: 2px solid var(--rsx-red); outline-offset: 3px; border-radius: 4px; }
#rsx-footer-v102 .rsx-footer-bottom-note { border-top: 1px solid var(--rsx-border); background: #fbfcfd; }
#rsx-footer-v102 .rsx-footer-bottom-note .rsx-footer-container {
  padding-block: 13px;
  color: #8795a0;
  font-size: 10px;
  line-height: 1.75;
  text-align: center;
}
@media (max-width: 1050px) {
  #rsx-footer-v102 .rsx-footer-main { grid-template-columns: 1fr; gap: 26px; }
  #rsx-footer-v102 .rsx-footer-brand-desc { max-width: 600px; }
}
@media (max-width: 768px) {
  #rsx-footer-v102 .rsx-footer-container { width: min(100% - 30px, 680px); }
  #rsx-footer-v102 .rsx-footer-services-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: 12px 8px;
    padding-block: 17px;
  }
  #rsx-footer-v102 .rsx-footer-service { gap: 7px; }
  #rsx-footer-v102 .rsx-footer-service-icon { width: 34px; height: 34px; flex-basis: 34px; border-radius: 10px; }
  #rsx-footer-v102 .rsx-footer-service-icon svg { width: 17px; height: 17px; }
  #rsx-footer-v102 .rsx-footer-service-copy strong { font-size: 11px; }
  #rsx-footer-v102 .rsx-footer-service-copy small { font-size: 9px; }
  #rsx-footer-v102 .rsx-footer-main { display: block; padding-block: 28px 20px; }
  #rsx-footer-v102 .rsx-footer-brand { margin-bottom: 23px; }
  #rsx-footer-v102 .rsx-footer-brand-title { font-size: 25px; }
  #rsx-footer-v102 .rsx-footer-actions { margin-top: 14px; }
  #rsx-footer-v102 .rsx-footer-nav { display: block; }
  #rsx-footer-v102 .rsx-footer-group { border-top: 1px solid var(--rsx-border); }
  #rsx-footer-v102 .rsx-footer-group:last-child { border-bottom: 1px solid var(--rsx-border); }
  #rsx-footer-v102 .rsx-footer-group-title { cursor: pointer; margin: 0; padding: 15px 4px; font-size: 13px; }
  #rsx-footer-v102 .rsx-footer-group-title::after { content: '+'; background: none; color: var(--rsx-red); width: auto; height: auto; top: 14px; right: auto; left: 6px; font-size: 20px; line-height: 1; }
  #rsx-footer-v102 .rsx-footer-group[open] .rsx-footer-group-title::after { content: '−'; }
  #rsx-footer-v102 .rsx-footer-links { gap: 0; padding: 0 5px 13px; }
  #rsx-footer-v102 .rsx-footer-links a { display: block; padding-block: 8px; font-size: 12px; }
  #rsx-footer-v102 .rsx-footer-bottom-note .rsx-footer-container { padding-block: 11px; font-size: 9px; }
}
@media (prefers-reduced-motion: reduce) {
  #rsx-footer-v102 * { transition: none !important; }
}

/* V102: guaranteed visibility against older site-wide style patches. */
html body #rsx-footer-v102 {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: relative !important;
  height: auto !important;
  min-height: 0 !important;
  overflow: visible !important;
  background: linear-gradient(180deg,#fff 0%,#f8fafc 100%) !important;
  color: #203447 !important;
}
html body #rsx-footer-v102 .rsx-footer-services { background: #fff7f5 !important; }
html body #rsx-footer-v102 .rsx-footer-brand-title,
html body #rsx-footer-v102 .rsx-footer-group-title,
html body #rsx-footer-v102 .rsx-footer-service-copy strong { color: #203447 !important; }
html body #rsx-footer-v102 .rsx-footer-links a { color: #506071 !important; }
html body #rsx-footer-v102 .rsx-footer-links a:hover { color:#cf253a !important; }
html body #rsx-footer-v102 .rsx-footer-cta-primary { color: #fff !important; background:#cf253a !important; }
html body #rsx-footer-v102 .rsx-footer-cta-light { color:#203447 !important; background:#fff !important; }
html body #rsx-footer-v102 .rsx-footer-group[open] > .rsx-footer-links { display: grid !important; }`;
    (document.head || document.documentElement).appendChild(st);
  }

  function init() {
    if (document.getElementById(PANEL_ID)) return true;
    const target = findAnchor();
    if (!target) return false;
    injectStyle();
    const panel = buildPanel();
    // Never replace the legal/payment footer. Add the navigation next to it.
    target.node.insertAdjacentElement(target.position === 'before' ? 'beforebegin' : 'afterend', panel);
    if (target.native) target.native.classList.add('rsx-footer-native-v102');
    document.getElementById('rsx-footer-v101')?.remove(); // superseded older visual panel

    const groups = [...panel.querySelectorAll('.rsx-footer-group')];
    const desktop = window.matchMedia('(min-width: 769px)');
    const setGroupMode = () => groups.forEach((el, i) => { el.open = desktop.matches || i === 0; });
    setGroupMode();
    if (desktop.addEventListener) desktop.addEventListener('change', setGroupMode);
    else if (desktop.addListener) desktop.addListener(setGroupMode);
    return true;
  }

  function boot() {
    if (init()) return;
    // Bounded retries: only if the theme hasn't rendered a footer/main yet.
    let attempts = 0;
    const timer = window.setInterval(() => {
      if (init() || ++attempts >= 24) window.clearInterval(timer);
    }, 400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();

/* original module 20 */
(function () {
  "use strict";
  if (document.getElementById("rsx-footer-v103-native-style")) return;
  const css = String.raw`/* Relax Smart Footer V103 | Native footer + navigation harmonization
   Visual-only, scoped to original Salla footer and RSX navigation; no cart or checkout changes.
   Use either this CSS with existing V102 JS, OR the integrated V103 JS; not both.
*/

/* ===== Original Salla footer ===== */
html body footer.store-footer-wrap {
  --rsf-coral: #cf253a;
  --rsf-orange: #d67027;
  --rsf-ink: #213446;
  --rsf-muted: #687789;
  --rsf-line: #efdeda;
  direction: rtl;
  color: var(--rsf-ink) !important;
  background: #fff8f4 !important;
  border: 0 !important;
  overflow: visible;
  isolation: isolate;
}
html body footer.store-footer-wrap .store-footer {
  position: relative;
  background-color: #fff8f4 !important;
  background-image: linear-gradient(125deg, #fff4e9 0%, #fffaf8 44%, #fff5f6 100%) !important;
  color: var(--rsf-ink) !important;
  overflow: visible;
}
html body footer.store-footer-wrap .store-footer::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 5px;
  background: linear-gradient(90deg, #d67027 0%, #ef8557 43%, #cf253a 100%);
}
html body footer.store-footer-wrap .store-footer__inner {
  padding-top: 0 !important;
  color: var(--rsf-ink) !important;
}
/* Branded welcome area: light, airy and readable */
html body footer.store-footer-wrap .store-footer__inner > .container.without-apps-footer {
  max-width: 1210px !important;
  width: calc(100% - 32px) !important;
  margin-inline: auto !important;
  padding: 36px clamp(12px, 3vw, 36px) 26px !important;
  gap: 19px !important;
  background: transparent !important;
  color: var(--rsf-ink) !important;
}
html body footer.store-footer-wrap .without-apps-footer .max-w-3xl {
  max-width: 770px !important;
  gap: 6px !important;
  color: var(--rsf-ink) !important;
}
html body footer.store-footer-wrap .without-apps-footer .max-w-3xl > a {
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
  width: 94px;
  min-height: 88px;
  margin-bottom: 10px !important;
  border-radius: 23px;
  background: #fff !important;
  box-shadow: 0 12px 32px rgba(159, 63, 41, .10);
  border: 1px solid #f5deda;
}
html body footer.store-footer-wrap .without-apps-footer .max-w-3xl > a img {
  display: block;
  max-width: 74px;
  max-height: 70px;
  object-fit: contain;
}
html body footer.store-footer-wrap .without-apps-footer blockquote,
html body footer.store-footer-wrap .without-apps-footer .pref-about-store {
  padding: 0 !important;
  border: 0 !important;
  margin: 0 !important;
  background: transparent !important;
  max-width: 770px;
  color: #435369 !important;
  line-height: 2.05 !important;
  text-align: center;
  font-size: clamp(12px, 1vw, 14px) !important;
}
html body footer.store-footer-wrap .without-apps-footer blockquote strong {
  color: #435369 !important;
  font-weight: 650 !important;
}
html body footer.store-footer-wrap .without-apps-footer .contacts-list {
  padding: 0 !important;
  margin: 1px 0 0 !important;
  width: min(900px, 100%);
  justify-content: center;
}
html body footer.store-footer-wrap .s-contacts-list {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-wrap: wrap !important;
  gap: 10px !important;
}
html body footer.store-footer-wrap .s-contacts-list .s-contacts-item {
  display: inline-flex !important;
  flex-direction: row !important;
  align-items: center !important;
  gap: 9px !important;
  padding: 8px 15px !important;
  border-radius: 50px;
  color: var(--rsf-ink) !important;
  background: #fff !important;
  border: 1px solid #f2dbd7 !important;
  text-decoration: none !important;
  line-height: 1.7;
  font-size: 12px;
  box-shadow: 0 3px 12px rgba(166, 62, 50, .045);
  direction: ltr;
  transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
}
html body footer.store-footer-wrap .s-contacts-list .s-contacts-item:hover {
  border-color: #e7a3a3 !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(166, 62, 50, .10);
}
html body footer.store-footer-wrap .s-contacts-list .s-contacts-icon {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 6px;
  border-radius: 9px;
  color: var(--rsf-coral) !important;
  background: #fff1ee !important;
}
html body footer.store-footer-wrap .s-contacts-list .s-contacts-icon svg {
  display: block;
  width: 16px !important;
  height: 16px !important;
  fill: currentColor !important;
}
/* Utility + social links on a calm stripe */
html body footer.store-footer-wrap .footer-main-row {
  max-width: 1210px !important;
  width: calc(100% - 32px) !important;
  margin: 0 auto !important;
  padding: 18px 0 !important;
  gap: 14px !important;
  border-top: 1px solid #eddddd !important;
  border-bottom: 1px solid #eddddd !important;
  color: var(--rsf-ink) !important;
  background: transparent !important;
}
html body footer.store-footer-wrap .footer-menu-list {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 8px 13px !important;
  justify-content: center;
  border-color: #edd8d4 !important;
  min-width: 0;
}
html body footer.store-footer-wrap .footer-menu-list a {
  display: inline-flex !important;
  color: #3d4e61 !important;
  font-size: 12px !important;
  font-weight: 700;
  line-height: 1.7 !important;
  background: rgba(255,255,255,.75) !important;
  border: 1px solid #f0dfdc;
  padding: 10px 13px !important;
  border-radius: 12px;
  text-decoration: none !important;
  transition: background-color .2s ease, color .2s ease, border-color .2s ease;
}
html body footer.store-footer-wrap .footer-menu-list a:hover {
  background: #fff1ef !important;
  border-color: #e8aeae;
  color: var(--rsf-coral) !important;
}
html body footer.store-footer-wrap .s-social-list {
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  gap: 9px !important;
}
html body footer.store-footer-wrap .s-social-link a {
  display: grid !important;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 13px;
  background: #fff !important;
  border: 1px solid #f0dbd6 !important;
  color: var(--rsf-orange) !important;
  box-shadow: 0 4px 12px rgba(143, 64, 41, .045);
  transition: transform .2s ease, color .2s ease, background-color .2s ease;
}
html body footer.store-footer-wrap .s-social-link a:hover {
  transform: translateY(-3px);
  background: var(--rsf-coral) !important;
  color: white !important;
}
html body footer.store-footer-wrap .s-social-link svg {
  fill: currentColor !important;
  width: 19px !important;
  height: 19px !important;
}
html body footer.store-footer-wrap .footer-lang-currency-btns .s-button-element {
  border: 1px solid #e8ccc6 !important;
  background: #fff !important;
  color: #36495e !important;
  border-radius: 11px !important;
  box-shadow: none !important;
  min-height: 39px;
}
/* Preserve national credentials and native payment badges */
html body footer.store-footer-wrap .store-footer > .container.border-t {
  max-width: 1210px !important;
  width: calc(100% - 32px) !important;
  margin-inline: auto !important;
  padding: 23px 0 29px !important;
  border-top: 0 !important;
  gap: 18px !important;
  background: transparent !important;
  color: var(--rsf-ink) !important;
}
html body footer.store-footer-wrap salla-trust-badges,
html body footer.store-footer-wrap .store-footer > .container.border-t > div:first-child > a {
  display: inline-flex !important;
  align-items: center !important;
  gap: 9px;
  color: #354659 !important;
}
html body footer.store-footer-wrap .s-trust-badges-label,
html body footer.store-footer-wrap .store-footer > .container.border-t p {
  color: #728094 !important;
  line-height: 1.7;
}
html body footer.store-footer-wrap .s-trust-badges-number,
html body footer.store-footer-wrap .store-footer > .container.border-t b {
  color: #283b51 !important;
  font-weight: 850 !important;
}
html body footer.store-footer-wrap .copyright-text,
html body footer.store-footer-wrap .copyright-text p,
html body footer.store-footer-wrap .copyright-text a {
  color: #637185 !important;
  font-size: 11px !important;
  text-decoration: none;
}
html body footer.store-footer-wrap .copyright-text a:hover {
  color: var(--rsf-coral) !important;
}
html body footer.store-footer-wrap salla-payments .s-payments-list {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: center;
  gap: 7px !important;
  align-items: center;
  padding: 0 !important;
}
html body footer.store-footer-wrap .s-payments-list-item {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  min-width: 41px;
  min-height: 34px;
  padding: 5px 6px !important;
  border: 1px solid #f2e3df !important;
  background: #fff !important;
  border-radius: 9px;
  box-shadow: 0 2px 8px rgba(129, 56, 41, .025);
}
html body footer.store-footer-wrap .s-payments-list-item img {
  width: auto !important;
  height: auto !important;
  max-width: 48px !important;
  max-height: 27px !important;
  object-fit: contain !important;
}

/* Legal/payment row: also works if a theme utility CSS loads late */
html body footer.store-footer-wrap .store-footer > .container.border-t {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: space-between !important;
  align-items: center !important;
}
html body footer.store-footer-wrap .store-footer > .container.border-t > div:first-child {
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 12px 20px !important;
  max-width: 100%;
}
html body footer.store-footer-wrap salla-trust-badges img.s-trust-badges-image {
  width: 55px !important;
  height: 55px !important;
  object-fit: contain !important;
}
html body footer.store-footer-wrap button[data-modal-id="modal-value-tax"] {
  width: 32px !important;
  height: 42px !important;
  flex: 0 0 32px !important;
}
html body footer.store-footer-wrap button[data-modal-id="modal-value-tax"] img {
  width: 28px !important;
  height: 40px !important;
  object-fit: contain !important;
}
html body footer.store-footer-wrap a[href*="certificate-details/"] img {
  width: 56px !important;
  height: 40px !important;
  object-fit: contain !important;
}
html body footer.store-footer-wrap salla-payments {
  max-width: 100%;
}

/* V102 navigation area: complementary warmth and subtle motion */
html body #rsx-footer-v102 .rsx-footer-services { background: linear-gradient(95deg,#fff1eb,#fff8f4 50%,#fff1f3) !important; }
html body #rsx-footer-v102 .rsx-footer-service {
  padding: 10px;
  border: 1px solid #f4e0db;
  border-radius: 14px;
  background: rgba(255,255,255,.84);
}
html body #rsx-footer-v102 .rsx-footer-service-icon { background:#fff0e9 !important; border-color:#f7d9cf !important; }
html body #rsx-footer-v102 .rsx-footer-eyebrow { background:#fff0e8 !important; color:#b63646 !important; }
html body #rsx-footer-v102 .rsx-footer-brand-title { color:#263749 !important; }
html body #rsx-footer-v102 .rsx-footer-cta-primary { background:#cf253a !important; color:#fff !important; }
html body #rsx-footer-v102 .rsx-footer-cta-primary:hover { background:#a81e34 !important; }
html body #rsx-footer-v102 .rsx-footer-bottom-note { background:#fff9f5 !important; }
@media (min-width: 769px) {
  html body #rsx-footer-v102 .rsx-footer-group-title::after { background:#d67027; }
}
@media (max-width: 768px) {
  html body #rsx-footer-v102 .rsx-footer-group-title::after {
    background: transparent !important;
    color: #cf253a !important;
  }
}
html body #rsx-footer-v102 .rsx-footer-links a:hover { color:#cf253a !important; }
@media (max-width: 768px) {
  html body footer.store-footer-wrap .store-footer__inner > .container.without-apps-footer {
    padding: 24px 8px 20px !important;
    gap: 13px !important;
  }
  html body footer.store-footer-wrap .without-apps-footer .max-w-3xl > a {
    width: 78px; min-height: 73px; border-radius: 18px;
  }
  html body footer.store-footer-wrap .without-apps-footer .max-w-3xl > a img {
    max-width: 64px; max-height: 60px;
  }
  html body footer.store-footer-wrap .s-contacts-list {
    gap: 8px !important;
  }
  html body footer.store-footer-wrap .s-contacts-list .s-contacts-item {
    padding: 7px 10px !important;
    font-size: 11px !important;
  }
  html body footer.store-footer-wrap .footer-main-row {
    flex-direction: column !important;
    padding-block: 18px !important;
    gap: 17px !important;
  }
  html body footer.store-footer-wrap .footer-menu-list {
    border: 0 !important;
    padding: 0 !important;
    gap: 8px !important;
  }
  html body footer.store-footer-wrap .footer-menu-list a {
    font-size: 11px !important;
    padding: 9px 12px !important;
  }
  html body footer.store-footer-wrap .store-footer > .container.border-t {
    padding: 20px 0 34px !important;
    flex-direction: column !important;
    gap: 20px !important;
    text-align: center !important;
  }
  html body footer.store-footer-wrap .store-footer > .container.border-t > div:first-child {
    justify-content: center !important;
    gap: 10px 16px !important;
  }
  html body footer.store-footer-wrap salla-payments .s-payments-list {
    gap: 6px !important;
    max-width: 360px;
    margin-inline: auto;
  }
  html body #rsx-footer-v102 .rsx-footer-service { padding: 7px 4px; }
}
@media (prefers-reduced-motion: reduce) {
  html body footer.store-footer-wrap :is(a,.s-social-link) { transition: none !important; transform: none !important; }
}
`;
  const style = document.createElement("style");
  style.id = "rsx-footer-v103-native-style";
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
})();
