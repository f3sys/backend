import{_ as d}from"./PriceText.vue_vue_type_script_setup_true_lang-fj8RU_Hf.js";import{d as u,o as s,c as r,a as e,f as n,h as f,w as g,F as o,r as p,j as _,n as m,t as k,k as w}from"./index-CRxc91Vt.js";const b={class:"w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8"},v={class:"self-start justify-self-center max-w-lg w-full grid gap-3"},y={class:"flex flex-col gap-3 mb-10 text-sm font-light text-muted-color"},T={class:"text-2xl sm:text-3xl md:text-4xl font-semibold self-start text-white dark:text-black mb-6 bg-primary block py-2 px-6 max-w-fit"},C={class:"flex flex-col gap-4"},h=u({__name:"GoodsView",setup(B){const a=[{name:"PTA バザー",items:[{title:"焼きそば",price:500},{title:"きょうざ　5個",price:300},{title:"唐揚げ　3個",price:350},{title:"春巻き　2個",price:450},{title:"ドリンク　各種",price:100},{title:"パン　各種",price:300},{title:"おにぎり　各種",price:150}]},{name:"AICJ 饅頭",items:[{title:"広島銘菓",longerTitle:"桐葉菓　5個入り",price:800},{title:"ひじのしぐれ",longerTitle:"(栗あん)　5個入り",price:800},{title:"広島銘菓 桐葉菓　10個入り",extra:!0,price:1600},{title:"ひじのしぐれ (栗あん)　10個入り",extra:!0,price:1600}]}];return(V,t)=>{const c=_("RouterLink");return s(),r("div",b,[e("div",v,[t[4]||(t[4]=e("span",{class:"text-4xl md:text-5xl mb-6"}," 物品販売 ",-1)),e("div",y,[t[3]||(t[3]=e("span",null," 物品販売のメニューです。 ",-1)),e("span",null,[t[1]||(t[1]=n(" 高校食販メニューは")),f(c,{class:"underline",to:"/foods"},{default:g(()=>t[0]||(t[0]=[n("こちら")])),_:1}),t[2]||(t[2]=n("からご覧いただけます。 "))])]),(s(),r(o,null,p(a,(i,x)=>e("div",{key:i.name,class:m({"mb-10":x!==a.length-1})},[e("div",T,k(i.name),1),e("div",C,[(s(!0),r(o,null,p(i.items,l=>(s(),w(d,{key:l.title,longerTitle:l.longerTitle,class:m({"hidden md:inline-flex":l.extra}),title:l.title,price:l.price},null,8,["longerTitle","class","title","price"]))),128))])],2)),64))])])}}});export{h as default};
