import{u as p,g as h,r as m,d as _,i as f,c as r,a as e,F as g,m as y,j as w,o as c,t as a}from"./index-Dy-rjl94.js";import{u as B}from"./index-DZaVKJfG.js";const S=p(),F=h("battery",()=>{const o=m([]);function n(){o.value=[]}async function l(){const[t]=await Promise.all([s()]);return t}async function s(){const t=new Headers;t.append("Authorization","Bearer "+S.key);const u="https://api.aicj.io/";try{const i=await fetch(u+"protected/battery",{method:"GET",headers:t}).then(d=>d.json());return o.value=i,!0}catch{return!1}}return{table:o,clear:n,update:l}}),k={class:"container"},v={scope:"row"},j=_({__name:"BatteryView",setup(o){const n=F();return B(async()=>{await n.update()},6e4,{immediate:!0}),f(()=>{(async()=>await n.update())()}),(l,s)=>(c(),r("main",k,[e("table",null,[s[0]||(s[0]=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"名前"),e("th",{scope:"col"},"充電状況"),e("th",{scope:"col"},"満充電までの時間"),e("th",{scope:"col"},"充電切れまでの時間"),e("th",{scope:"col"},"バッテリーレベル")])],-1)),e("tbody",null,[(c(!0),r(g,null,y(w(n).table,t=>(c(),r("tr",{key:t.node_id},[e("th",v,a(t.node_name),1),e("td",null,a(t.charging?"充電中":"充電していません"),1),e("td",null,a((t.charging_time/3600).toFixed(2))+" 時間",1),e("td",null,a((t.discharging_time/3600).toFixed(2))+" 時間",1),e("td",null,a(t.level),1)]))),128))])])]))}});export{j as default};
