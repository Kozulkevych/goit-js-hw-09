!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i=document.querySelector(".form");function a(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}function u(e){var n=e.position,o=e.delay;r.Notify.success(" Fulfilled promise ".concat(n," in ").concat(o,"ms"))}function c(e){var n=e.position,o=e.delay;r.Notify.failure(" Rejected promise ".concat(n," in ").concat(o,"ms"))}i.addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget,o=Number(n.delay.value),t=Number(n.step.value),r=Number(n.amount.value),l=0;l<r;l+=1)a(l,o).then(u).catch(c),o+=t,i.reset()}))}();
//# sourceMappingURL=03-promises.ba5d69fb.js.map