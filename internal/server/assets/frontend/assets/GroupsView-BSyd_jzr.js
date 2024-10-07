import{B as $,m as r,s as C,o as i,k as l,w as s,l as K,p as h,a as p,e as f,v as L,b as A,T as U,n as b,q as j,c as m,x as V,y as D,z as O,A as S,R as J,C as R,U as H,j as y,F as N,r as F,h as v,t as P,d as M,f as _}from"./index-CRxc91Vt.js";import{s as q}from"./index-DNfapK25.js";var G={root:"p-accordioncontent",content:"p-accordioncontent-content"},Z=$.extend({name:"accordioncontent",classes:G}),Q={name:"BaseAccordionContent",extends:C,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Z,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},w={name:"AccordionContent",extends:Q,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function W(e,n,o,a,d,t){return e.asChild?f(e.$slots,"default",{key:1,class:b(e.cx("root")),active:t.$pcAccordionPanel.active,a11yAttrs:t.a11yAttrs}):(i(),l(U,r({key:0,name:"p-toggleable-content"},e.ptm("transition",t.ptParams)),{default:s(function(){return[!t.$pcAccordion.lazy||t.$pcAccordionPanel.active?K((i(),l(h(e.as),r({key:0,class:e.cx("root")},t.attrs),{default:s(function(){return[p("div",r({class:e.cx("content")},e.ptm("content",t.ptParams)),[f(e.$slots,"default")],16)]}),_:3},16,["class"])),[[L,t.$pcAccordion.lazy?!0:t.$pcAccordionPanel.active]]):A("",!0)]}),_:3},16))}w.render=W;var E={name:"ChevronDownIcon",extends:j},X=p("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1),Y=[X];function ee(e,n,o,a,d,t){return i(),m("svg",r({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Y,16)}E.render=ee;var ne={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},oe=$.extend({name:"accordionheader",classes:ne}),te={name:"BaseAccordionHeader",extends:C,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:oe,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},I={name:"AccordionHeader",extends:te,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDownKey:function(n){var o=this.findNextPanel(this.findPanel(n.currentTarget));o?this.changeFocusedPanel(n,o):this.onHomeKey(n),n.preventDefault()},onArrowUpKey:function(n){var o=this.findPrevPanel(this.findPanel(n.currentTarget));o?this.changeFocusedPanel(n,o):this.onEndKey(n),n.preventDefault()},onHomeKey:function(n){var o=this.findFirstPanel();this.changeFocusedPanel(n,o),n.preventDefault()},onEndKey:function(n){var o=this.findLastPanel();this.changeFocusedPanel(n,o),n.preventDefault()},onEnterKey:function(n){this.changeActiveValue(),n.preventDefault()},findPanel:function(n){return n==null?void 0:n.closest('[data-pc-name="accordionpanel"]')},findHeader:function(n){return V(n,'[data-pc-name="accordionheader"]')},findNextPanel:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=o?n:n.nextElementSibling;return a?D(a,"data-p-disabled")?this.findNextPanel(a):this.findHeader(a):null},findPrevPanel:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=o?n:n.previousElementSibling;return a?D(a,"data-p-disabled")?this.findPrevPanel(a):this.findHeader(a):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(n,o){O(this.findHeader(o))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}},components:{ChevronUpIcon:S,ChevronDownIcon:E},directives:{ripple:J}};function ae(e,n,o,a,d,t){var g=R("ripple");return e.asChild?f(e.$slots,"default",{key:1,class:b(e.cx("root")),active:t.$pcAccordionPanel.active,a11yAttrs:t.a11yAttrs,onClick:t.onClick}):K((i(),l(h(e.as),r({key:0,class:e.cx("root"),onClick:t.onClick},t.attrs),{default:s(function(){return[f(e.$slots,"default",{active:t.$pcAccordionPanel.active}),f(e.$slots,"toggleicon",{active:t.$pcAccordionPanel.active,class:b(e.cx("toggleicon"))},function(){return[t.$pcAccordionPanel.active?(i(),l(h(t.$pcAccordion.$slots.collapseicon?t.$pcAccordion.$slots.collapseicon:t.$pcAccordion.collapseIcon?"span":"ChevronDownIcon"),r({key:0,class:[t.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",t.ptParams)),null,16,["class"])):(i(),l(h(t.$pcAccordion.$slots.expandicon?t.$pcAccordion.$slots.expandicon:t.$pcAccordion.expandIcon?"span":"ChevronUpIcon"),r({key:1,class:[t.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",t.ptParams)),null,16,["class"]))]})]}),_:3},16,["class","onClick"])),[[g]])}I.render=ae;var ce={root:function(n){var o=n.instance,a=n.props;return["p-accordionpanel",{"p-accordionpanel-active":o.active,"p-disabled":a.disabled}]}},re=$.extend({name:"accordionpanel",classes:ce}),ie={name:"BaseAccordionPanel",extends:C,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:re,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},B={name:"AccordionPanel",extends:ie,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function de(e,n,o,a,d,t){return e.asChild?f(e.$slots,"default",{key:1,class:b(e.cx("root")),active:t.active,a11yAttrs:t.a11yAttrs}):(i(),l(h(e.as),r({key:0,class:e.cx("root")},t.attrs),{default:s(function(){return[f(e.$slots,"default")]}),_:3},16,["class"]))}B.render=de;var se=function(n){var o=n.dt;return`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: `.concat(o("accordion.panel.border.width"),`;
    border-color: `).concat(o("accordion.panel.border.color"),`;
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: `).concat(o("accordion.header.padding"),`;
    color: `).concat(o("accordion.header.color"),`;
    background: `).concat(o("accordion.header.background"),`;
    border-style: solid;
    border-width: `).concat(o("accordion.header.border.width"),`;
    border-color: `).concat(o("accordion.header.border.color"),`;
    font-weight: `).concat(o("accordion.header.font.weight"),`;
    border-radius: `).concat(o("accordion.header.border.radius"),`;
    transition: background `).concat(o("accordion.transition.duration"),"; color ").concat(o("accordion.transition.duration"),"color ").concat(o("accordion.transition.duration"),", outline-color ").concat(o("accordion.transition.duration"),", box-shadow ").concat(o("accordion.transition.duration"),`;
    outline-color: transparent;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: `).concat(o("accordion.header.first.border.width"),`;
    border-top-left-radius: `).concat(o("accordion.header.first.top.border.radius"),`;
    border-top-right-radius: `).concat(o("accordion.header.first.top.border.radius"),`;
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-bottom-left-radius: `).concat(o("accordion.header.last.bottom.border.radius"),`;
    border-bottom-right-radius: `).concat(o("accordion.header.last.bottom.border.radius"),`;
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-bottom-left-radius: `).concat(o("accordion.header.last.active.bottom.border.radius"),`;
    border-bottom-right-radius:`).concat(o("accordion.header.last.active.bottom.border.radius"),`;
}

.p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.color"),`;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: `).concat(o("accordion.header.focus.ring.shadow"),`;
    outline: `).concat(o("accordion.header.focus.ring.width")," ").concat(o("accordion.header.focus.ring.style")," ").concat(o("accordion.header.focus.ring.color"),`;
    outline-offset: `).concat(o("accordion.header.focus.ring.offset"),`;
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: `).concat(o("accordion.header.hover.background"),`;
    color: `).concat(o("accordion.header.hover.color"),`
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.hover.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: `).concat(o("accordion.header.active.background"),`;
    color: `).concat(o("accordion.header.active.color"),`
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.active.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  {
    background: `).concat(o("accordion.header.active.hover.background"),`;
    color: `).concat(o("accordion.header.active.hover.color"),`
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  .p-accordionheader-toggle-icon {
    color: `).concat(o("accordion.header.toggle.icon.active.hover.color"),`;
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: `).concat(o("accordion.content.border.width"),`;
    border-color: `).concat(o("accordion.content.border.color"),`;
    background-color: `).concat(o("accordion.content.background"),`;
    color: `).concat(o("accordion.content.color"),`;
    padding: `).concat(o("accordion.content.padding"),`
}
`)},le={root:"p-accordion p-component"},ue=$.extend({name:"accordion",theme:se,classes:le}),pe={name:"BaseAccordion",extends:C,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:ue,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},z={name:"Accordion",extends:pe,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(n){this.id=n||H()},value:function(n){this.d_value=n},activeIndex:{immediate:!0,handler:function(n){this.hasAccordionTab&&(this.d_value=this.multiple?n==null?void 0:n.map(String):n==null?void 0:n.toString())}}},mounted:function(){this.id=this.id||H()},methods:{isItemActive:function(n){var o;return this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.includes(n):this.d_value===n},updateValue:function(n){var o,a=this.isItemActive(n);this.multiple?a?this.d_value=this.d_value.filter(function(d){return d!==n}):this.d_value?this.d_value.push(n):this.d_value=[n]:this.d_value=a?null:n,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.map(Number):Number(this.d_value)),this.$emit(a?"tab-close":"tab-open",{originalEvent:void 0,index:Number(n)})},isAccordionTab:function(n){return n.type.name==="AccordionTab"},getTabProp:function(n,o){return n.props?n.props[o]:void 0},getKey:function(n,o){return this.getTabProp(n,"header")||o},getHeaderPT:function(n,o){var a=this;return{root:r({onClick:function(t){return a.onTabClick(t,o)}},this.getTabProp(n,"headerProps"),this.getTabPT(n,"header",o)),toggleicon:r(this.getTabProp(n,"headeractionprops"),this.getTabPT(n,"headeraction",o))}},getContentPT:function(n,o){return{root:r(this.getTabProp(n,"contentProps"),this.getTabPT(n,"toggleablecontent",o)),transition:this.getTabPT(n,"transition",o),content:this.getTabPT(n,"content",o)}},getTabPT:function(n,o,a){var d=this.tabs.length,t={props:n.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:d,first:a===0,last:a===d-1,active:this.isItemActive("".concat(a))}};return r(this.ptm("accordiontab.".concat(o),t),this.ptmo(this.getTabProp(n,"pt"),o,t))},onTabClick:function(n,o){this.$emit("tab-click",{originalEvent:n,index:o})}},computed:{tabs:function(){var n=this;return this.$slots.default().reduce(function(o,a){return n.isAccordionTab(a)?o.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(d){n.isAccordionTab(d)&&o.push(d)}),o},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:B,AccordionHeader:I,AccordionContent:w,ChevronUpIcon:S,ChevronRightIcon:q}};function he(e,n,o,a,d,t){var g=y("AccordionHeader"),T=y("AccordionContent"),k=y("AccordionPanel");return i(),m("div",r({class:e.cx("root")},e.ptmi("root")),[t.hasAccordionTab?(i(!0),m(N,{key:0},F(t.tabs,function(c,u){return i(),l(k,{key:t.getKey(c,u),value:"".concat(u),pt:{root:t.getTabPT(c,"root",u)},disabled:t.getTabProp(c,"disabled")},{default:s(function(){return[v(g,{class:b(t.getTabProp(c,"headerClass")),pt:t.getHeaderPT(c,u)},{toggleicon:s(function(x){return[x.active?(i(),l(h(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),r({key:0,class:[e.collapseIcon,x.class],"aria-hidden":"true",ref_for:!0},t.getTabPT(c,"headericon",u)),null,16,["class"])):(i(),l(h(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),r({key:1,class:[e.expandIcon,x.class],"aria-hidden":"true",ref_for:!0},t.getTabPT(c,"headericon",u)),null,16,["class"]))]}),default:s(function(){return[c.children&&c.children.headericon?(i(),l(h(c.children.headericon),{key:0,isTabActive:t.isItemActive("".concat(u)),active:t.isItemActive("".concat(u)),index:u},null,8,["isTabActive","active","index"])):A("",!0),c.props&&c.props.header?(i(),m("span",r({key:1,ref_for:!0},t.getTabPT(c,"headertitle",u)),P(c.props.header),17)):A("",!0),c.children&&c.children.header?(i(),l(h(c.children.header),{key:2})):A("",!0)]}),_:2},1032,["class","pt"]),v(T,{pt:t.getContentPT(c,u)},{default:s(function(){return[(i(),l(h(c)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):f(e.$slots,"default",{key:1})],16)}z.render=he;const fe={class:"w-full max-w-screen-xl mx-auto px-6 grid gap-4 my-8"},ve={class:"self-start justify-self-center max-w-lg w-full grid gap-3"},me={class:"flex flex-col gap-3 mb-10 text-sm font-light text-muted-color"},ge={class:"text-lg text-black dark:text-white font-semibold"},be={class:"text-md ml-auto mr-4 md:text-base font-light text-muted-color"},Ae={class:"m-0 font-light text-muted-color-emphasis"},$e=M({__name:"GroupsView",setup(e){const n=[{name:"足つぼ Runaway",belong:"9A",description:"生前に悪事を働いた罪深き皆様へ皆様におきましては、地獄行きが決定致しました。これから皆様には地獄から抜け出す機会が与えられます。罪を清算できれば帰れるのです。それでは皆様、足元にお気をつけて…"},{name:"Venus宇宙軍基地",belong:"9B",description:"人類が宇宙に進出してから、地球上で言う「領土問題」が宇宙空間で起こっていた。この問題による地球外生命体の侵略から幾度となく地球を守ってきた軍隊が国際宇宙軍である。国際宇宙軍第55旅団、通称「VENUS宇宙軍」。彼らは地球から遠く離れた銀河、領域問題で最も緊迫している区域に布陣されている。我々とともに秩序を護る一員となることを我々は強く望む。国際宇宙軍第55旅団指揮官より"},{name:"美女と野獣 ~Beauty and the beast~",belong:"9C",description:"祇園に迷い込んだベルの父をベルが探しに行く物語。 そこで俺は愛しきベルに出会う。 果たして俺は、ビーストを倒し、愛しきベルを取り返すことができるのか！？ 最後まで楽しんでいってくれ！ガストンより"},{name:"Doki Doki★5 クエスチョン",belong:"9D",description:"私たちJupiter 9は、ネプリーグというクイズ番組の中から、イングリッシュブレインタワーとファイブボンバーと5文字クイズという3つのゲームを行います。それぞれ簡単な問題から難しい問題まで色々あります。ぜひ来てください！"},{name:"水星魔法通り八丁目",belong:"8A",description:"水星魔法通りで一大イベント開催中！！課された課題を高速でクリアしろ！！史上最速の魔法使いは誰だ！？"},{name:"帰れま銭湯",belong:"8B",description:"この度、帰れま銭湯を開業いたしました。ボールプールやミニゲームをご用意しております。ミニゲームの得点が高かった方には帰れま銭湯限定の豪華景品がございます。皆様のお越しをお待ちしております。"},{name:"火星戦線異状あり",belong:"8C",description:"時は××××年。火星人による地球侵略が進む中、緊急特派員として招集された諸君このままでは地球が火星人によって侵略されてしまうエイリアンを討伐し、火星人の侵略を阻止せよ！"},{name:"すごろくpeople",belong:"8D",description:"私達のクラスでは人間すごろくをやります。自らがコマとなってすごろくをプレイする体験型ゲームです。すごろくpeopleに遊びに来てください！1位になると豪華景品がもらえるかも！"},{name:"な〜んちゃって縁日",belong:"7A",description:"Mercury7の催し物は、な〜んちゃって縁日です。令和と昭和の合体です。的乗せ・もぐら乗せです。スロットで集めたコインを使って、縁日を存分に楽しんでください。"},{name:"酢虎苦阿兎十",belong:"7B",description:"Venus7では、「酢虎苦阿兎十（ストラックアウト）」を行うぜ！昭和のヤンキーなど昭和レトロをテーマとしている。内装も凝っていて景品もあり、誰でも楽しめるぞ。ぜひ、来て昭和ヤンキーになろう！"},{name:"Mars7B級 グルメオリンピック",belong:"7C",description:"2024年10月18日我々Mars7は全国のグルメを集め、初めてのグルメオリンピックを開催した。パターゴルフ×バターなど、我々が人生をかけて考えた競技たちだ。さあ、ほほを抱えて競技のフルコースを走り抜け！"},{name:"House of Horror",belong:"7D",description:"私達Jupiter7は、House of Horrorを開いています。大人も泣くような怖い怖い場所で宝探し...ではなくて、安全面無確認したうえでの宝探しです。よかったら来てみてください。"},{name:"美術部",belong:"美術部",description:"3F美術室で部誌の配布、シールなどの販売をしています。部員たちの力作を展示しておりますので、ぜひ見に来てください！"},{name:"書道部",belong:"書道部",description:"3階書道室にてたくさんの作品を展示しています。 今年も書道パフォーマンスを行うので、ぜひ見に来てください！"},{name:"技術部",belong:"技術部",description:"今年の技術部はてんこ盛り!?部員の力作！制作ゲーム等を6階に出展＆PTAバザーでオリジナル作品販売！"},{name:"Jazz部",belong:"Jazz部",description:"Jazzが大好きな部員たちが一丸となって、皆さんに演奏をお届けします。数々の名曲を演奏し、パワーアップしたJazz部のステージを最後までお楽しみください！"},{name:"ダンス部",belong:"ダンス部",description:"ダンス部です！様々なジャンルのダンスを披露させていただきます！ぜひお楽しみください！"},{name:"茶道部",belong:"茶道部",description:"お気軽に、お越しください！"},{name:"Chamber Ensemble",belong:"Chamber Ensemble",description:"私たちは、aicj chamber ensembleです。精一杯演奏するので、ぜひお聞きください。"}];return(o,a)=>{const d=y("RouterLink"),t=I,g=w,T=B,k=z;return i(),m("div",fe,[p("div",ve,[a[4]||(a[4]=p("span",{class:"text-4xl md:text-5xl mb-6"}," 参加グループ ",-1)),p("div",me,[a[3]||(a[3]=p("span",null," 中学生クラス展示・ステージ企画・生徒企画の紹介文一覧です。 ",-1)),p("span",null,[a[1]||(a[1]=_(" 高校食販メニューは")),v(d,{class:"underline",to:"/foods"},{default:s(()=>a[0]||(a[0]=[_("こちら")])),_:1}),a[2]||(a[2]=_("からご覧いただけます。 "))])]),v(k,{value:["0"],multiple:""},{default:s(()=>[(i(),m(N,null,F(n,c=>v(T,{key:c.name,value:c.belong},{default:s(()=>[v(t,null,{default:s(()=>[p("span",ge,P(c.name),1),p("span",be,P(c.belong),1)]),_:2},1024),v(g,null,{default:s(()=>[p("p",Ae,P(c.description),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})])])}}});export{$e as default};
