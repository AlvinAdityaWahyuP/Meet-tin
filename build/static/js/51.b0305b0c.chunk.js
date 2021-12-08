(this["webpackJsonpmeettin-app"]=this["webpackJsonpmeettin-app"]||[]).push([[51],{114:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_accordion",(function(){return c})),o.d(e,"ion_accordion_group",(function(){return s}));var n=o(16),i=o(31),r=o(27),a=o(22),c=function(){function t(t){var e=this;Object(i.l)(this,t),this.updateListener=function(){return e.updateState(!1)},this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+d++,this.disabled=!1,this.readonly=!1,this.toggleIcon="chevron-down",this.toggleIconSlot="end",this.setItemDefaults=function(){var t=e.getSlottedHeaderIonItem();t&&(t.button=!0,t.detail=!1,void 0===t.lines&&(t.lines="full"))},this.getSlottedHeaderIonItem=function(){var t=e.headerEl;if(t){var o=t.querySelector("slot");if(o)return o.assignedElements&&o.assignedElements().find((function(t){return"ION-ITEM"===t.tagName}))}},this.setAria=function(t){void 0===t&&(t=!1);var o=e.getSlottedHeaderIonItem();if(o){var n=Object(a.g)(o).querySelector("button");n&&n.setAttribute("aria-expanded",""+t)}},this.slotToggleIcon=function(){var t=e.getSlottedHeaderIonItem();if(t){var o=e,n=o.toggleIconSlot,i=o.toggleIcon;if(!t.querySelector(".ion-accordion-toggle-icon")){var r=document.createElement("ion-icon");r.slot=n,r.lazy=!1,r.classList.add("ion-accordion-toggle-icon"),r.icon=i,r.ariaHidden="true",t.appendChild(r)}}},this.expandAccordion=function(t){if(void 0===t&&(t=!1),t)e.state=4;else if(4!==e.state){var o=e,i=o.contentEl,r=o.contentElWrapper;void 0!==i&&void 0!==r&&(void 0!==e.currentRaf&&cancelAnimationFrame(e.currentRaf),e.shouldAnimate()?Object(a.r)((function(){e.state=8,e.currentRaf=Object(a.r)((function(){return Object(n.a)(e,void 0,void 0,(function(){var t,e;return Object(n.c)(this,(function(o){switch(o.label){case 0:return t=r.offsetHeight,e=Object(a.s)(i,2e3),i.style.setProperty("max-height",t+"px"),[4,e];case 1:return o.sent(),this.state=4,i.style.removeProperty("max-height"),[2]}}))}))}))})):e.state=4)}},this.collapseAccordion=function(t){if(void 0===t&&(t=!1),t)e.state=1;else if(1!==e.state){var o=e.contentEl;void 0!==o&&(void 0!==e.currentRaf&&cancelAnimationFrame(e.currentRaf),e.shouldAnimate()?e.currentRaf=Object(a.r)((function(){return Object(n.a)(e,void 0,void 0,(function(){var t,e=this;return Object(n.c)(this,(function(i){return t=o.offsetHeight,o.style.setProperty("max-height",t+"px"),Object(a.r)((function(){return Object(n.a)(e,void 0,void 0,(function(){var t;return Object(n.c)(this,(function(e){switch(e.label){case 0:return t=Object(a.s)(o,2e3),this.state=2,[4,t];case 1:return e.sent(),this.state=1,o.style.removeProperty("max-height"),[2]}}))}))})),[2]}))}))})):e.state=1)}},this.shouldAnimate=function(){return"undefined"!==typeof window&&(!matchMedia("(prefers-reduced-motion: reduce)").matches&&(!!r.c.get("animated",!0)&&!(e.accordionGroupEl&&!e.accordionGroupEl.animated)))},this.updateState=function(t){return void 0===t&&(t=!1),Object(n.a)(e,void 0,void 0,(function(){var e,o,i,r,a,c,d;return Object(n.c)(this,(function(n){return e=this.accordionGroupEl,o=this.value,e?(i=e.value,(Array.isArray(i)?i.includes(o):i===o)?(this.expandAccordion(t),this.isNext=this.isPrevious=!1):(this.collapseAccordion(t),r=this.getNextSibling(),void 0!==(a=r&&r.value)&&(this.isPrevious=Array.isArray(i)?i.includes(a):i===a),c=this.getPreviousSibling(),void 0!==(d=c&&c.value)&&(this.isNext=Array.isArray(i)?i.includes(d):i===d)),[2]):[2]}))}))},this.getNextSibling=function(){if(e.el){var t=e.el.nextElementSibling;if("ION-ACCORDION"===(null===t||void 0===t?void 0:t.tagName))return t}},this.getPreviousSibling=function(){if(e.el){var t=e.el.previousElementSibling;if("ION-ACCORDION"===(null===t||void 0===t?void 0:t.tagName))return t}}}return t.prototype.connectedCallback=function(){var t=this.accordionGroupEl=this.el&&this.el.closest("ion-accordion-group");t&&(this.updateState(!0),Object(a.a)(t,"ionChange",this.updateListener))},t.prototype.disconnectedCallback=function(){var t=this.accordionGroupEl;t&&Object(a.b)(t,"ionChange",this.updateListener)},t.prototype.componentDidLoad=function(){var t=this;this.setItemDefaults(),this.slotToggleIcon(),Object(a.r)((function(){var e=4===t.state||8===t.state;t.setAria(e)}))},t.prototype.toggleExpanded=function(){var t=this,e=t.accordionGroupEl,o=t.value,n=t.state;if(e){var i=1===n||2===n;e.requestAccordionToggle(o,i)}},t.prototype.render=function(){var t,e=this,o=this.disabled,n=this.readonly,a=Object(r.b)(this),c=4===this.state||8===this.state,d=c?"header expanded":"header",s=c?"content expanded":"content";return this.setAria(c),Object(i.h)(i.b,{class:(t={},t[a]=!0,t["accordion-expanding"]=8===this.state,t["accordion-expanded"]=4===this.state,t["accordion-collapsing"]=2===this.state,t["accordion-collapsed"]=1===this.state,t["accordion-next"]=this.isNext,t["accordion-previous"]=this.isPrevious,t["accordion-disabled"]=o,t["accordion-readonly"]=n,t["accordion-animated"]=r.c.getBoolean("animated",!0),t)},Object(i.h)("div",{onClick:function(){return e.toggleExpanded()},id:"header",part:d,"aria-controls":"content",ref:function(t){return e.headerEl=t}},Object(i.h)("slot",{name:"header"})),Object(i.h)("div",{id:"content",part:s,role:"region","aria-labelledby":"header",ref:function(t){return e.contentEl=t}},Object(i.h)("div",{id:"content-wrapper",ref:function(t){return e.contentElWrapper=t}},Object(i.h)("slot",{name:"content"}))))},Object.defineProperty(t,"delegatesFocus",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.i)(this)},enumerable:!1,configurable:!0}),t}(),d=0;c.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};var s=function(){function t(t){Object(i.l)(this,t),this.ionChange=Object(i.e)(this,"ionChange",7),this.animated=!0,this.disabled=!1,this.readonly=!1,this.expand="compact"}return t.prototype.valueChanged=function(){var t=this.value;!this.multiple&&Array.isArray(t)?this.value=t[0]:this.ionChange.emit({value:this.value})},t.prototype.disabledChanged=function(){return Object(n.a)(this,void 0,void 0,(function(){var t,e,o,i;return Object(n.c)(this,(function(n){switch(n.label){case 0:return t=this.disabled,[4,this.getAccordions()];case 1:for(e=n.sent(),o=0,i=e;o<i.length;o++)i[o].disabled=t;return[2]}}))}))},t.prototype.readonlyChanged=function(){return Object(n.a)(this,void 0,void 0,(function(){var t,e,o,i;return Object(n.c)(this,(function(n){switch(n.label){case 0:return t=this.readonly,[4,this.getAccordions()];case 1:for(e=n.sent(),o=0,i=e;o<i.length;o++)i[o].readonly=t;return[2]}}))}))},t.prototype.onKeydown=function(t){return Object(n.a)(this,void 0,void 0,(function(){var e,o,i,r,a;return Object(n.c)(this,(function(n){switch(n.label){case 0:return(e=document.activeElement)&&(o="ION-ACCORDION"===e.tagName?e:e.closest("ion-accordion"))?o.closest("ion-accordion-group")!==this.el?[2]:[4,this.getAccordions()]:[2];case 1:return i=n.sent(),-1===(r=i.findIndex((function(t){return t===o})))?[2]:("ArrowDown"===t.key?a=this.findNextAccordion(i,r):"ArrowUp"===t.key?a=this.findPreviousAccordion(i,r):"Home"===t.key?a=i[0]:"End"===t.key&&(a=i[i.length-1]),void 0!==a&&a!==e&&a.focus(),[2])}}))}))},t.prototype.componentDidLoad=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(t){return this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged(),[2]}))}))},t.prototype.requestAccordionToggle=function(t,e){return Object(n.a)(this,void 0,void 0,(function(){var o,i,r,a,c,d,s;return Object(n.c)(this,(function(l){return i=(o=this).multiple,r=o.value,a=o.readonly,c=o.disabled,a||c||(e?i?(d=r||[],s=Array.isArray(d)?d:[d],void 0===s.find((function(e){return e===t}))&&void 0!==t&&(this.value=Object(n.d)(Object(n.d)([],s),[t]))):this.value=t:i?(d=r||[],s=Array.isArray(d)?d:[d],this.value=s.filter((function(e){return e!==t}))):this.value=void 0),[2]}))}))},t.prototype.findNextAccordion=function(t,e){var o=t[e+1];return void 0===o?t[0]:o},t.prototype.findPreviousAccordion=function(t,e){var o=t[e-1];return void 0===o?t[t.length-1]:o},t.prototype.getAccordions=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(t){return[2,Array.from(this.el.querySelectorAll("ion-accordion"))]}))}))},t.prototype.render=function(){var t,e=this,o=e.disabled,n=e.readonly,a=e.expand,c=Object(r.b)(this);return Object(i.h)(i.b,{class:(t={},t[c]=!0,t["accordion-group-disabled"]=o,t["accordion-group-readonly"]=n,t["accordion-group-expand-"+a]=!0,t),role:"presentation"},Object(i.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}},enumerable:!1,configurable:!0}),t}();s.style={ios:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}}]);
//# sourceMappingURL=51.b0305b0c.chunk.js.map