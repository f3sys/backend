import{r as d,H as m,s as b,I as y,J as S,j}from"./index-Dy-rjl94.js";function u(e){return y()?(S(e),!0):!1}function v(e){return typeof e=="function"?e():j(e)}const f=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const g=Object.prototype.toString,O=e=>g.call(e)==="[object Object]",h=()=>{};function k(e,t=1e3,r={}){const{immediate:l=!0,immediateCallback:p=!1}=r;let n=null;const o=d(!1);function i(){n&&(clearInterval(n),n=null)}function c(){o.value=!1,i()}function a(){const s=v(t);s<=0||(o.value=!0,p&&e(),i(),n=setInterval(e,s))}if(l&&f&&a(),m(t)||typeof t=="function"){const s=b(t,()=>{o.value&&f&&a()});u(s)}return u(c),{isActive:o,pause:c,resume:a}}export{u as a,f as b,O as i,h as n,v as t,k as u};
