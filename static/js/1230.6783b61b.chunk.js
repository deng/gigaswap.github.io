"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1230,8829],{32756:function(e,t,i){i.r(t),i.d(t,{BannerWrapper:function(){return t2},CollectionBannerLoading:function(){return tq},default:function(){return t5}});var r,n,a=i(30575),s=i(94869),o=i(38414),l=i(66196),d=i(60476),c=i(62329),p=i(2304),g=i(80343),h=i(20555),x=i(49912),u=i(29765),m=i(64709),f=i(2994),w=i(15655),b=i(79131),y=i(50026),j=i(99430);i(74602),i(46728);let v=()=>{let e=(0,b.cP)(e=>e.itemsInBag),t=(0,b.cP)(e=>e.toggleBag),i=(0,y.P)(),r=(0,y.B)(),n=e.length>0;return(0,a.jsxs)(f.X2,{display:{sm:n?"flex":"none",md:"none"},className:"rgw6ez48v rgw6ez32j rgw6ez35p rgw6ez3b7 rgw6ez4p1 rgw6ez2u1 rgw6ez3qv rgw6ez7bb rgw6ez48j",children:[(0,a.jsxs)(f.X2,{gap:"8",children:[(0,a.jsx)(m.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map((e,t)=>(0,a.jsx)(m.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t))}),(0,a.jsxs)(f.sg,{children:[(0,a.jsx)(m.n,{className:w.d1,fontWeight:"semibold",children:(0,j.t)(e.length,"NFT")}),(0,a.jsxs)(f.X2,{gap:"8",children:[(0,a.jsxs)(m.n,{className:w.d1,children:[`${(0,j.zb)(i.toString())}`," ETH"]}),(0,a.jsx)(m.n,{color:"textSecondary",className:w.Km,children:(0,j.Nd)(r,!0)})]})]})]}),(0,a.jsx)(m.n,{className:"rgw6ezd1 rgw6ezav rgw6eze1 rgw6ez2ed rgw6ez2jv rgw6ez2oj rgw6ez281 rgw6ez4c7 rgw6ez6ap rgw6ez7bj rgw6ez79z",onClick:t,children:"View bag"})]})};var C=i(17749),_=i(12058);i(25496);var k="_1wiwg131 rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez491 rgw6ez4sj rgw6ez7iz rgw6ez79z rgw6ezg1 rgw6ez4ep",S="_1wiwg135 _1wiwg131 rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez491 rgw6ez4sj rgw6ez7iz rgw6ez79z rgw6ezg1 rgw6ez4ej";let T=(0,_.default)(f.X2).withConfig({displayName:"ActivitySwitcher__BaseActivityContainer",componentId:"sc-101fb8eb-0"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.backgroundInteractive};
  margin-right: 12px;
`,I=[,,].fill(null).map((e,t)=>(0,a.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj"},`ActivitySwitcherLoading-key-${t}`)),z=({showActivity:e,toggleActivity:t})=>{let i=(0,b.Iv)(e=>e.isCollectionStatsLoading);return(0,a.jsx)(T,{gap:"24",marginBottom:"16",children:i?I:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.n,{as:"button",className:e?k:S,onClick:()=>e&&t(),children:"Items"}),(0,a.jsx)(l.M8,{events:[s.TM.onClick],element:s.xo.NFT_ACTIVITY_TAB,name:s.Yz.NFT_ACTIVITY_SELECTED,children:(0,a.jsx)(m.n,{as:"button",className:e?S:k,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var N=i(20691),P=i(45825),$=i(84893),E=i(79954),R=i(82627),F=i(14526),M=i(45938),B=i(14327),L=i(83164),H=i(63505);let A=({asset:e,isMobile:t,mediaShouldBePlaying:i,setCurrentTokenPlayingMedia:r,uniformAspectRatio:n,setUniformAspectRatio:o,renderedHeight:d,setRenderedHeight:c})=>{let p=(0,b.cP)(e=>e.bagManuallyClosed),g=(0,b.cP)(e=>e.addAssetsToBag),h=(0,b.cP)(e=>e.removeAssetsFromBag),x=(0,b.cP)(e=>e.itemsInBag),u=(0,b.cP)(e=>e.bagExpanded),m=(0,b.cP)(e=>e.setBagExpanded),f=(0,l.oO)({page:s.yJ.NFT_COLLECTION_PAGE}),{isSelected:w}=(0,H.useMemo)(()=>{let t=x.filter(t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address),i=t.length>0;return{isSelected:i}},[e,x]),y=e.notForSale||N.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),v=e?.rarity?.providers?e.rarity.providers[0]:void 0,C=(0,H.useCallback)(()=>{N.O$.from(e.priceInfo?.ETHPrice??0).gt(0)&&(g([e]),u||t||p||m({bagExpanded:!0}),(0,l._P)(s.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...f}))},[g,e,u,p,t,m,f]),_=(0,H.useCallback)(()=>{h([e])},[e,h]),k=(0,H.useMemo)(()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,a.jsx)(L.yT,{}):null,primaryInfoRight:e.rarity&&v?(0,a.jsx)(L.SD,{provider:v}):null,secondaryInfo:y?"":`${(0,j.zb)(e.priceInfo.ETHPrice,!0)} ETH`,selectedInfo:(0,a.jsx)(M.cC,{id:"77UrnP"}),notSelectedInfo:(0,a.jsx)(M.cC,{id:"2RtVHm"}),disabledInfo:(0,a.jsx)(M.cC,{id:"i/2ImT"})}),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,y,v]);return(0,a.jsx)(B.y,{asset:e,display:k,isSelected:w,isDisabled:!!e.notForSale,selectAsset:C,unselectAsset:_,mediaShouldBePlaying:i,uniformAspectRatio:n,setUniformAspectRatio:o,renderedHeight:d,setRenderedHeight:c,setCurrentTokenPlayingMedia:r,testId:"nft-collection-asset"})};var O=i(42223),Y="_10b1b4ve rgw6ez4ep rgw6ez457 rgw6ez19v rgw6ez12v rgw6ez7on",D="_10b1b4vc",X="rgw6ez7az rgw6ez60j rgw6ez7lb rgw6ez7m3 rgw6ezw1 rgw6ezfj",W="_10b1b4vb rgw6ez7ar rgw6ez5op rgw6ez7kj rgw6ez2cp rgw6ez281",Z="rgw6ez44v rgw6ez2jp rgw6ez79z rgw6ezb1 rgw6eze7 rgw6ez48j rgw6ez3j rgw6ez2dv rgw6ez2op rgw6ez287",U="_10b1b4v2",V=i(26030),G=i(50413),K=i(98685),q=i(64127);(r=n||(n={}))[r.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",r[r.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",r[r.TRAIT_START_INDEX=2]="TRAIT_START_INDEX";let J=(0,K.Ue)()((0,q.mW)(e=>({traitsOpen:{},setTraitsOpen:(t,i)=>{e(({traitsOpen:e})=>({traitsOpen:{...e,[t]:i}}))}}),{name:"useTraitsOpen"}));var Q=i(43108),ee=i(71814);let et=(0,_.default)(f.X2).withConfig({displayName:"MarketplaceSelect__FilterItemWrapper",componentId:"sc-16a7c9c9-0"})`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.backgroundInteractive};
  }
`,ei=(0,_.default)(f.X2).withConfig({displayName:"MarketplaceSelect__MarketNameWrapper",componentId:"sc-16a7c9c9-1"})`
  gap: 10px;
`,er={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},en=({title:e,element:t,onClick:i})=>(0,a.jsxs)(et,{onClick:i,children:[(0,a.jsx)(Q.Tv.BodyPrimary,{children:e}),(0,a.jsx)(Q.Tv.SubHeaderSmall,{children:t})]}),ea=({title:e,value:t,addMarket:i,removeMarket:r,isMarketSelected:n,count:o})=>{let[d,c]=(0,H.useState)(!1),[p,g]=(0,H.useReducer)(e=>!e,!1);(0,H.useEffect)(()=>{c(n)},[n]);let h=e=>{e.preventDefault(),d?(r(t),c(!1)):(i(t),c(!0)),(0,l._P)(s.Yz.NFT_FILTER_SELECTED,{filter_type:s.fm.MARKETPLACE})},x=(0,a.jsx)(ee.X,{checked:d,hovered:p,onChange:h,children:(0,a.jsx)(m.n,{as:"span",color:"textSecondary",marginLeft:"4",paddingRight:"12",children:o})}),u=(0,a.jsxs)(ei,{children:[(0,j.Dp)(e,"16"),e]});return(0,a.jsx)("div",{onMouseEnter:g,onMouseLeave:g,children:(0,a.jsx)(en,{title:u,element:x,onClick:h})},t)},es=({title:e,items:t,onClick:i,isOpen:r})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.n,{className:X,opacity:r?"1":"0"}),(0,a.jsxs)(m.n,{as:"details",className:(0,$.default)(w.Nf,!r&&U),open:r,borderRadius:r?"0":"12",children:[(0,a.jsxs)(m.n,{as:"summary",className:`${Z} ${U}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:i,children:[e,(0,a.jsx)(m.n,{display:"flex",alignItems:"center",children:(0,a.jsx)(m.n,{className:Y,style:{transform:`rotate(${r?0:180}deg)`},children:(0,a.jsx)(V.g8,{className:D})})})]}),(0,a.jsx)(f.sg,{className:W,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),eo=()=>{let{addMarket:e,removeMarket:t,markets:i,marketCount:r}=(0,G.PY)(({markets:e,marketCount:t,removeMarket:i,addMarket:r})=>({markets:e,marketCount:t,removeMarket:i,addMarket:r})),[s,o]=(0,H.useState)(!!i.length),l=J(e=>e.setTraitsOpen),d=(0,H.useMemo)(()=>Object.entries(er).map(([n,s])=>(0,a.jsx)(ea,{title:s,value:n,count:r?.[n]||0,addMarket:e,removeMarket:t,isMarketSelected:i.includes(n)},n)),[e,r,t,i]);return(0,a.jsx)(es,{title:"Marketplaces",items:d,onClick:e=>{e.preventDefault(),o(!s),l(n.MARKPLACE_INDEX,!s)},isOpen:s})},el=({sortDropDownOptions:e})=>{let[t,i]=(0,H.useState)(!1),r=e=>{e.preventDefault(),i(!t)},n=e.map(e=>(0,a.jsx)(ed,{dropDownOption:e,parentOnClick:r},e.displayText));return(0,a.jsx)(es,{title:"Sort by",items:n,onClick:r,isOpen:t})},ed=({dropDownOption:e,parentOnClick:t})=>{let i=(0,b.PY)(e=>e.sortBy),r=void 0!==e.sortBy&&i===e.sortBy?(0,a.jsx)(m.n,{as:"img",alt:e.displayText,width:"20",height:"20",objectFit:"cover",src:"/nft/svgs/checkmark.svg"}):(0,a.jsx)(a.Fragment,{});return(0,a.jsx)(en,{title:e.displayText,element:r,onClick:i=>{i.preventDefault(),t(i),e.onClick()}})};var ec=i(55338),ep=i(17669);let eg=({dropDownOptions:e,inFilters:t,mini:i,miniPrompt:r,top:n,left:s})=>{let o=(0,b.PY)(e=>e.sortBy),[l,d]=(0,H.useReducer)(e=>!e,!1),[c,p]=(0,H.useReducer)(e=>!e,!1),[g,h]=(0,H.useState)(o),x=(0,b.Iv)(e=>e.isCollectionStatsLoading),[u,y]=(0,H.useState)(0);(0,H.useEffect)(()=>{h(o)},[o]);let j=(0,H.useRef)(null);(0,ec.t)(j,()=>l&&d()),(0,H.useEffect)(()=>y(0),[e]);let v=(0,H.useMemo)(()=>e[g].reverseOnClick||e[g].reverseIndex,[g,e]),C=x?220:t?"full":i?"min":u||"300px";return(0,a.jsxs)(m.n,{ref:j,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:C},children:[(0,a.jsx)(m.n,{as:"button",fontSize:"14",borderRadius:"12",borderStyle:l&&!i?"solid":"none",background:i?"none":"backgroundInteractive",borderColor:"backgroundOutline",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":i?"0":"8",color:"textPrimary",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",alignItems:"center",width:t?"full":"inherit",onClick:d,cursor:"pointer",className:x?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez1ap":(0,$.default)(l&&!i&&"_12q7kth0"),children:!x&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(m.n,{display:"flex",alignItems:"center",color:"textPrimary",children:[!l&&v&&(0,a.jsxs)(f.X2,{onClick:t=>{if(t.stopPropagation(),e[g].reverseOnClick)e[g].reverseOnClick?.(),p();else{let t=e[g].reverseIndex??1;e[t-1].onClick(),h(t-1)}},children:[e[g].reverseOnClick&&(c?(0,a.jsx)(V.iB,{}):(0,a.jsx)(V.L7,{})),e[g].reverseIndex&&(g>(e[g].reverseIndex??1)-1?(0,a.jsx)(V.iB,{}):(0,a.jsx)(V.L7,{}))]}),(0,a.jsx)(m.n,{marginLeft:v?"4":"0",marginRight:i?"2":"0",color:"textPrimary",className:w.km,children:i?r:l?"Sort by":e[g].displayText})]}),(0,a.jsx)(V.g8,{secondaryColor:i?ep.Z4.colors.textPrimary:void 0,secondaryWidth:i?"20":void 0,secondaryHeight:i?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,a.jsx)(m.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"backgroundModule",borderStyle:"solid",borderColor:"backgroundOutline",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:i?void 0:"0",borderTopRightRadius:i?void 0:"0",overflowY:"hidden",transition:"250",display:l||!u?"block":"none",visibility:u?"visible":"hidden",marginTop:i?"12":"0",className:(0,$.default)(!i&&"_12q7kth1"),style:{top:n?`${n}px`:"inherit",left:t?"16px":s?`${s}px`:"inherit"},children:u?l&&e.map((t,r)=>(0,a.jsx)(eh,{option:t,index:r,mini:i,onClick:()=>{e[r].onClick(),h(r),d(),c&&p()}},r)):[e.reduce((e,t)=>t.displayText.length>=e.displayText.length?t:e,e[0])].map((e,t)=>(0,a.jsx)(ex,{option:e,index:t,setMaxWidth:y},t))})]})},eh=({option:e,index:t,onClick:i,mini:r})=>(0,a.jsx)(m.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:r?"20":"0",width:"full",background:{default:"backgroundModule",hover:"backgroundInteractive"},color:"textPrimary",onClick:i,cursor:"pointer",children:(0,a.jsx)(m.n,{marginLeft:"8",className:w.km,children:e.displayText})},t),ex=({option:e,index:t,setMaxWidth:i})=>{let r=(0,H.useRef)(null);return(0,H.useLayoutEffect)(()=>{r&&r.current&&i(Math.ceil(r.current.getBoundingClientRect().width)+52)}),(0,a.jsx)(m.n,{position:"absolute",ref:r,children:(0,a.jsx)(eh,{option:e,index:t})},t)};var eu=i(70453),em=i(37506);let ef=(0,K.Ue)()((0,q.mW)(e=>({priceRangeLow:"",setPriceRangeLow:t=>{e(()=>({priceRangeLow:t}))},priceRangeHigh:"",setPriceRangeHigh:t=>{e(()=>({priceRangeHigh:t}))},prevMinMax:[0,100],setPrevMinMax:t=>{e(()=>({prevMinMax:t}))}}),{name:"usePriceRange"}));var ew=i(39401);let eb="undefined"!=typeof window,ey=()=>{let e=!!eb&&window.innerWidth<ep.AV.sm;window.document.getElementById(e?"nft-anchor-mobile":"nft-anchor")?.scrollIntoView({behavior:"smooth"})};var ej=i(93343);let ev=e=>e.substring(1,e.length-1),eC={removeDefaults:e=>{let t={...e};for(let e in t){let i=t[e],r=b.initialCollectionFilterState[e];JSON.stringify(i)===JSON.stringify(r)&&delete t[e]}t.all!==b.initialCollectionFilterState.buyNow&&delete t.all;let i=b.i9[b.initialCollectionFilterState.sortBy];return t.sort===i&&delete t.sort,t},buildQuery:(e,t)=>{let i={...e};["traits","markets"].forEach(e=>{i[e]||(i[e]=[]),i[e]&&"string"==typeof i[e]&&(i[e]=[i[e]])});try{let{buyNow:e,search:r}=b.initialCollectionFilterState;if(Object.entries(b.i9).forEach(([e,t])=>{t===i.sort&&(i.sortBy=Number(e))}),i.buyNow=!(void 0===i.all?!e:i.all),i.search=void 0===i.search?r:String(i.search),2===i.traits.length){let[e,t]=i.traits,r=`${e}${t}`;!r.includes(",")&&e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(i.traits=[`${e},${t}`])}i.traits=i.traits.map(e=>{let i=ev(e.replace(/(")/g,"")),[r,n]=i.split(","),a=t.traits&&t.traits[r].find(e=>e.trait_value===n),s=a??{trait_type:r,trait_value:n,trait_count:0};return s})}catch(e){i.traits=[]}return i}},e_=e=>{let t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach(i=>{switch(i){case"traits":{let i=e.traits.map(({trait_type:e,trait_value:t})=>`("${e}","${t}")`);t.traits=i;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=b.i9[e.sortBy];break;default:t[i]=e[i]}});let i=eC.removeDefaults(t),r=window.location.href.split("?")[0],n=ej.stringify(i,{arrayFormat:"comma"});window.history.replaceState({},"",`${r}${n&&`?${n}`}`)},ek=(e,t)=>{if(!e.search)return;let i=ej.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0}),r=eC.buildQuery(i,t);return r};var eS=i(69518),eT=i(27591),eI=i(35837),ez=i(21849);i(6754);var eN=i(95792);let eP=_.default.div.withConfig({displayName:"Sweep__SweepContainer",componentId:"sc-52234eae-0"})`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.backgroundSurface};
  justify-content: space-between;
  background: linear-gradient(${({theme:e})=>e.backgroundSurface}, ${({theme:e})=>e.backgroundSurface})
      padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,e$=(0,_.default)(eN.Z).withConfig({displayName:"Sweep__StyledSlider",componentId:"sc-52234eae-1"})`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,eE=_.default.div.withConfig({displayName:"Sweep__SweepLeftmostContainer",componentId:"sc-52234eae-2"})`
  display: flex;
  width: 100%;
  gap: 24px;
`,eR=_.default.div.withConfig({displayName:"Sweep__SweepRightmostContainer",componentId:"sc-52234eae-3"})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,eF=_.default.div.withConfig({displayName:"Sweep__SweepHeaderContainer",componentId:"sc-52234eae-4"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,eM=_.default.div.withConfig({displayName:"Sweep__SweepSubContainer",componentId:"sc-52234eae-5"})`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,eB=_.default.input.withConfig({displayName:"Sweep__InputContainer",componentId:"sc-52234eae-6"})`
  width: 96px;
  color: ${({theme:e})=>e.textPrimary};
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 400px;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accentAction};
  }
`,eL=_.default.div.withConfig({displayName:"Sweep__ToggleContainer",componentId:"sc-52234eae-7"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,eH=_.default.div.withConfig({displayName:"Sweep__ToggleSwitch",componentId:"sc-52234eae-8"})`
  color: ${({theme:e,active:t})=>t?e.textPrimary:e.textSecondary};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.backgroundInteractive:"none"};
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`,eA=_.default.div.withConfig({displayName:"Sweep__NftDisplayContainer",componentId:"sc-52234eae-9"})`
  position: relative;
  width: 34px;
  height: 34px;
`,eO=_.default.div.withConfig({displayName:"Sweep__NftHolder",componentId:"sc-52234eae-10"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.textTertiary};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,eY=RegExp("^(0|[1-9][0-9]*)$"),eD=RegExp("^\\d*\\.?\\d{0,2}$"),eX=({nfts:e})=>(0,a.jsx)(eA,{children:[void 0,void 0,void 0].map((t,i)=>(0,a.jsx)(eO,{index:i,src:e.length-1>=i?e[e.length-1-i].smallImageUrl:void 0},i))}),eW=({contractAddress:e,minPrice:t,maxPrice:i})=>{let r=(0,_.useTheme)(),[n,s]=(0,H.useReducer)(e=>!e,!0),[o,l]=(0,H.useState)(""),d=(0,b.cP)(e=>e.addAssetsToBag),c=(0,b.cP)(e=>e.removeAssetsFromBag),p=(0,b.cP)(e=>e.itemsInBag),g=(0,b.cP)(e=>e.lockSweepItems),h=(0,b.cP)(e=>e.setBagExpanded),x=(0,b.PY)(e=>e.traits),u=(0,b.PY)(e=>e.markets),m=eU(e,"others",t,i),f=eU(e,ew.Fz.Sudoswap,t,i),w=eU(e,ew.Fz.NFTX,t,i),y=eU(e,ew.Fz.NFT20,t,i),{data:v}=(0,R.he)(m),{data:C}=(0,R.he)(f),{data:k}=(0,R.he)(w),{data:S}=(0,R.he)(y),{sortedAssets:T,sortedAssetsTotalEth:I}=(0,H.useMemo)(()=>{if(!v&&!C&&!k&&!S)return{sortedAssets:void 0,sortedAssetsTotalEth:N.O$.from(0)};let e=0,t=0,i=[];C&&(i=[...i,...C]),k&&(i=[...i,...k]),S&&(i=[...i,...S]);let r=i.filter(e=>e.marketplace===ew.Fz.Sudoswap&&!e.susFlag);i.forEach(i=>{if(!i.susFlag){if(i.marketplace===ew.Fz.Sudoswap){let e=(0,j.Pu)(i,r.filter(e=>(0,j.zA)(i,e)).findIndex(e=>e.tokenId===i.tokenId));i.priceInfo.ETHPrice=e??"0"}else{let r=i.marketplace===ew.Fz.NFTX,n=(0,j.Pu)(i,r?e:t);N.O$.from(n).gt(0)&&(r?e++:t++),i.priceInfo.ETHPrice=n}}}),(i=v?v.concat(i):i).sort((e,t)=>N.O$.from(e.priceInfo.ETHPrice).gt(N.O$.from(t.priceInfo.ETHPrice))?1:-1);let n=i.filter(e=>N.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag);return{sortedAssets:n=n.slice(0,Math.max(v?.length??0,C?.length??0,k?.length??0,S?.length??0)),sortedAssetsTotalEth:n.reduce((e,t)=>e.add(N.O$.from(t.priceInfo.ETHPrice)),N.O$.from(0))}},[v,C,k,S]),{sweepItemsInBag:z,sweepEthPrice:$}=(0,H.useMemo)(()=>{let t=p.filter(t=>t.inSweep&&t.asset.address===e).map(e=>e.asset),i=t.reduce((e,t)=>e.add(N.O$.from(t.priceInfo.ETHPrice)),N.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:i}},[p,e]);(0,H.useEffect)(()=>{0===z.length&&l("")},[z]),(0,H.useEffect)(()=>{g(e)},[e,x,u,t,i,g]);let E=()=>{l(""),c(z)},F=e=>{if(T){if(n)0===z.length&&e>0&&h({bagExpanded:!0}),z.length<e?d(T.slice(z.length,e),!0):c(z.slice(e,z.length),!0),l(e<1?"":e.toString());else{let t=(0,P.parseEther)(e.toString());if($.lte(t)){let e=z.length,i=$,r=[];for(;e<T.length&&i.add(N.O$.from(T[e].priceInfo.ETHPrice)).lte(t);)r.push(T[e]),i=i.add(N.O$.from(T[e].priceInfo.ETHPrice)),e++;r.length>0&&(0===z.length&&h({bagExpanded:!0}),d(r,!0))}else{let e=z.length-1,i=$,r=[];for(;e>=0&&i.gt(t);)r.push(z[e]),i=i.sub(N.O$.from(z[e].priceInfo.ETHPrice)),e--;r.length>0&&c(r,!0)}l(0===e?"":e.toFixed(2))}}},B=e=>{""===e?(F(0),l("")):n&&eY.test(e)?(F(parseFloat(e)),l(e)):!n&&eD.test(e)&&(F(parseFloat(e)),l(e))};return(0,a.jsxs)(eP,{"data-testid":"nft-sweep-slider",children:[(0,a.jsxs)(eE,{children:[(0,a.jsx)(eF,{children:(0,a.jsx)(Q.Tv.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,a.jsx)(M.cC,{id:"ZC4hNh"})})}),(0,a.jsxs)(eM,{children:[(0,a.jsx)(e$,{defaultValue:0,min:0,max:n?T?.length??0:parseFloat((0,P.formatEther)(I).toString()),value:n?z.length:parseFloat((0,j.zb)($.toString())),step:n?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${r.shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${r.backgroundInteractive}`},onChange:e=>{"number"==typeof e&&T&&(n?(Math.floor(e)!==Math.floor(""!==o?parseFloat(o):0)&&F(Math.floor(e)),l(e<1?"":e.toString())):(F(e),l(0===e?"":e.toFixed(2))))}}),(0,a.jsx)(eB,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:n&&""!==o?Math.floor(parseFloat(o)):o,onChange:e=>{B(e.target.value.replace(/,/g,"."))}}),(0,a.jsxs)(eL,{onClick:()=>{E(),s()},children:[(0,a.jsx)(eH,{active:n,children:"Items"}),(0,a.jsx)(eH,{active:!n,children:"ETH"})]})]})]}),(0,a.jsxs)(eR,{children:[(0,a.jsx)(Q.Tv.SubHeader,{"font-size":"14px",children:`${(0,j.zb)($.toString())} ETH`}),(0,a.jsx)(eX,{nfts:z})]})]})},eZ=[ew.Fz.Opensea,ew.Fz.X2Y2,ew.Fz.LooksRare];function eU(e,t,i,r){let n=(0,b.PY)(e=>e.traits),a=(0,b.PY)(e=>e.markets),s=!!a.length;return(0,H.useMemo)(()=>{if(s){if("others"===t){let t=a.filter(e=>!(0,ew.g7)(e));return t.length>0?{contractAddress:e,traits:n,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!a.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case ew.Fz.Sudoswap:case ew.Fz.NFTX:case ew.Fz.NFT20:return{contractAddress:e,traits:n,markets:[t],price:{low:i,high:r,symbol:"ETH"}};case"others":return{contractAddress:e,traits:n,markets:eZ,price:{low:i,high:r,symbol:"ETH"}}}},[e,s,t,a,r,i,n])}let eV=_.default.div.withConfig({displayName:"TraitChip__TraitChipWrap",componentId:"sc-ef4e5ba6-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 600;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.backgroundInteractive};
  font-size: 14px;
`,eG=_.default.div.withConfig({displayName:"TraitChip__CrossIconWrap",componentId:"sc-ef4e5ba6-1"})`
  color: ${({theme:e})=>e.textSecondary};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,eK=({onClick:e,value:t})=>(0,a.jsxs)(eV,{children:[(0,a.jsx)("span",{children:t}),(0,a.jsx)(eG,{onClick:e,children:(0,a.jsx)(V.aM,{cursor:"pointer"})})]}),eq=new Map,eJ=(0,_.css)`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,eQ=_.default.div.withConfig({displayName:"CollectionNfts__ActionsContainer",componentId:"sc-beb20e5b-0"})`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${eJ}
`,e0=_.default.div.withConfig({displayName:"CollectionNfts__ActionsSubContainer",componentId:"sc-beb20e5b-1"})`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,e1=_.default.div.withConfig({displayName:"CollectionNfts__SortDropdownContainer",componentId:"sc-beb20e5b-2"})`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,e2=_.default.div.withConfig({displayName:"CollectionNfts__EmptyCollectionWrapper",componentId:"sc-beb20e5b-3"})`
  display: block;
  text-align: center;
`,e6=_.default.span.withConfig({displayName:"CollectionNfts__ViewFullCollection",componentId:"sc-beb20e5b-4"})`
  ${c.c}
`,e4=_.default.div.withConfig({displayName:"CollectionNfts__InfiniteScrollWrapper",componentId:"sc-beb20e5b-5"})`
  ${eJ}
`,e3=_.default.div.withConfig({displayName:"CollectionNfts__SweepButton",componentId:"sc-beb20e5b-6"})`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:i})=>e&&!t?i.accentTextLightPrimary:i.textPrimary};
  background: ${({theme:e,toggled:t,disabled:i})=>!i&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.backgroundInteractive};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.hoverState};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,e7=(0,_.default)(Q.Tv.BodyPrimary).withConfig({displayName:"CollectionNfts__SweepText",componentId:"sc-beb20e5b-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,e8=(0,_.default)(f.X2).withConfig({displayName:"CollectionNfts__MarketNameWrapper",componentId:"sc-beb20e5b-8"})`
  gap: 8px;
`,e9=({height:e})=>(0,a.jsx)(m.n,{width:"full",className:O.P,children:(0,a.jsx)(eI.p,{height:e})}),e5=()=>(0,a.jsx)(e4,{children:(0,a.jsxs)(f.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,a.jsxs)(f.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,a.jsx)(m.n,{className:eu.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,a.jsx)(m.n,{className:eu.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,a.jsx)(m.n,{className:eu.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,a.jsx)(e9,{})]})}),te=(e,t)=>{let i=[{displayText:"Price: Low to High",onClick:()=>e(b.hn.LowToHigh),reverseIndex:2,sortBy:b.hn.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(b.hn.HighToLow),reverseIndex:1,sortBy:b.hn.HighToLow}];return t?i.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(b.hn.RareToCommon),reverseIndex:4,sortBy:b.hn.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(b.hn.CommonToRare),reverseIndex:3,sortBy:b.hn.CommonToRare}]):i},tt=({contractAddress:e,collectionStats:t,rarityVerified:i})=>{let{chainId:r}=(0,o.useWeb3React)(),n=(0,b.PY)(e=>e.traits),d=(0,b.PY)(e=>e.minPrice),c=(0,b.PY)(e=>e.maxPrice),p=(0,b.PY)(e=>e.markets),g=(0,b.PY)(e=>e.sortBy),h=(0,b.PY)(e=>e.search),u=(0,b.PY)(e=>e.setMarketCount),y=(0,b.PY)(e=>e.setSortBy),v=(0,b.PY)(e=>e.buyNow),C=ef(e=>e.setPriceRangeLow),_=ef(e=>e.priceRangeLow),k=ef(e=>e.priceRangeHigh),S=ef(e=>e.setPriceRangeHigh),T=ef(e=>e.setPrevMinMax),I=(0,em.I)(e=>e.setIsCollectionNftsLoading),z=(0,b.PY)(e=>e.removeTrait),M=(0,b.PY)(e=>e.removeMarket),B=(0,b.PY)(e=>e.reset),L=(0,b.PY)(e=>e.setMinPrice),Y=(0,b.PY)(e=>e.setMaxPrice),D=(0,b.PY)(e=>e.setHasRarity),X=(0,b.cP)(e=>e.toggleBag),W=(0,b.cP)(e=>e.bagExpanded),Z=(0,b.cP)(e=>e.itemsInBag),U=(0,F.Z)(d,500),G=(0,F.Z)(c,500),K=(0,F.Z)(h,500),[q,J]=(0,H.useState)(ew.Yp.unset),[Q,ee]=(0,H.useState)(),[et,ei]=(0,H.useState)(!1),en={address:e,orderBy:b.AZ[g].field,asc:b.AZ[g].asc,filter:{listed:v,marketplaces:p.length>0?p.map(e=>e.toUpperCase()):void 0,maxPrice:G?(0,P.parseEther)(G.toString()).toString():void 0,minPrice:U?(0,P.parseEther)(U.toString()).toString():void 0,tokenSearchQuery:K,traits:n.length>0?n.map(e=>({name:e.trait_type,values:[e.trait_value]})):void 0},first:R.iQ},{data:ea,loading:es,hasNext:eo,loadMore:el}=(0,R.gP)(en),ed=(0,H.useCallback)(e=>{let t=Z.some(t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address);if(e.marketplace===ew.Fz.Sudoswap){let i=Z.filter(t=>(0,j.zA)(e,t.asset));return t?i.findIndex(t=>t.asset.tokenId===e.tokenId):i.length}return t?Z.filter(t=>(0,j.H8)(e,t.asset)).findIndex(t=>t.asset.tokenId===e.tokenId):Z.filter(t=>(0,j.H8)(e,t.asset)).length},[Z]),ec=(0,H.useCallback)(e=>(0,j.Pu)(e,ed(e)),[ed]),ep=(0,H.useMemo)(()=>{if(!ea||!ea.some(e=>e.marketplace&&(0,ew.g7)(e.marketplace)))return ea;let e=[...ea];return e.forEach(e=>e.marketplace&&(0,ew.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=ec(e)??"0")),(g===b.hn.HighToLow||g===b.hn.LowToHigh)&&e.sort((e,t)=>{let i=N.O$.from(e.priceInfo?.ETHPrice??0),r=N.O$.from(t.priceInfo?.ETHPrice??0);if(i.gt(0)&&r.lte(0))return -1;if(r.gt(0)&&i.lte(0))return 1;let n=i.sub(r);return n.gt(0)?g===b.hn.LowToHigh?1:-1:n.lt(0)?g===b.hn.LowToHigh?-1:1:0}),e},[ea,g,ec]),[eh,ex]=(0,H.useState)(),[eu,eb]=(0,b.wx)(),ej=(0,H.useRef)(null),ev=(0,b.dD)(),eC=(0,x.e)();(0,H.useEffect)(()=>{I(es)},[es,I]);let eN=(0,H.useMemo)(()=>{let e=(0,j.oY)(eq,t?.address,ep)??!1;return D(e),e},[t.address,ep,D]),eP=(0,H.useMemo)(()=>te(y,eN),[eN,y]);(0,H.useEffect)(()=>(ei(!1),()=>{b.PY.setState(b.initialCollectionFilterState)}),[e]);let e$=(0,H.useMemo)(()=>ep?ep.map(e=>(0,a.jsx)(A,{asset:e,isMobile:ev,mediaShouldBePlaying:e.tokenId===eh,setCurrentTokenPlayingMedia:ex,rarityVerified:i,uniformAspectRatio:q,setUniformAspectRatio:J,renderedHeight:Q,setRenderedHeight:ee},e.address+e.tokenId)):null,[ep,ev,eh,i,q,Q]),eE=ep&&ep.length>0,eR=eE&&ep[0]&&ep[0]?.tokenType===E.hg.Erc1155,eF=(0,H.useMemo)(()=>U&&G?`Price: ${U} - ${G} ETH`:U?`Min. Price: ${U} ETH`:G?`Max Price: ${G} ETH`:void 0,[U,G]);(0,H.useEffect)(()=>{let e={};t?.marketplaceCount?.forEach(({marketplace:t,count:i})=>{e[t]=i}),u(e),ej.current=b.PY.getState()},[t?.marketplaceCount,u]);let eM=(0,eT.TH)();(0,H.useEffect)(()=>{if(t?.traits){let e=ek(eM,t);requestAnimationFrame(()=>{e&&b.PY.setState(e)}),b.PY.subscribe(e=>{JSON.stringify(ej.current)!==JSON.stringify(e)&&(e_(e),ej.current=e)})}},[eM]),(0,H.useEffect)(()=>{J(ew.Yp.unset),ee(void 0)},[e]),(0,H.useEffect)(()=>{if(t&&t.stats?.floor_price){let e=t.stats?.floor_price,i=10*t.stats?.floor_price;""===_&&C(e?.toFixed(2)),""===k&&S(i.toFixed(2))}},[t,_,k,S,C]);let eB=(0,H.useCallback)(()=>{eR||(et||(ey(),W||ev||X()),ei(!et))},[W,eR,ev,et,X]),eL=(0,H.useCallback)(()=>{B(),T([0,100]),ey()},[B,T]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(m.x,{backgroundColor:"backgroundBackdrop",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,a.jsxs)(eQ,{children:[(0,a.jsxs)(e0,{children:[(0,a.jsx)(l.M8,{events:[s.TM.onClick],element:s.xo.NFT_FILTER_BUTTON,name:s.Yz.NFT_FILTER_OPENED,shouldLogImpression:!eu,properties:{collection_address:e,chain_id:r},children:(0,a.jsx)(tT.L,{isMobile:ev,isFiltersExpanded:eu,collectionCount:ep?.[0]?.totalCount??0,onClick:()=>{W&&!eC.xl&&X(),eb(!eu)}})}),(0,a.jsx)(e1,{isFiltersExpanded:eu,children:(0,a.jsx)(eg,{dropDownOptions:eP})}),(0,a.jsx)(ti,{})]}),!eR&&(0,a.jsxs)(e3,{toggled:et,disabled:eR,className:w.km,onClick:eB,"data-testid":"nft-sweep-button",children:[(0,a.jsx)(V.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,a.jsx)(e7,{fontWeight:600,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,a.jsxs)(e4,{children:[et&&(0,a.jsx)(eW,{contractAddress:e,minPrice:U,maxPrice:G}),(0,a.jsxs)(f.X2,{paddingTop:p.length||n.length||eF?"12":"0",gap:"8",flexWrap:"wrap",children:[p.map(e=>(0,a.jsx)(eK,{value:(0,a.jsxs)(e8,{children:[(0,j.Dp)(e,"16"),er[e]]}),onClick:()=>{ey(),M(e)}},e)),n.map(e=>(0,a.jsx)(eK,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,j._6)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{ey(),z(e)}},e.trait_value)),eF&&(0,a.jsx)(eK,{value:eF,onClick:()=>{ey(),L(""),Y(""),T([0,100])}}),!!(n.length||p.length||eF)&&(0,a.jsx)(ez.v,{onClick:eL,children:"Clear All"})]})]})]}),(0,a.jsx)(e4,{children:es?(0,a.jsx)(e9,{height:Q}):(0,a.jsx)(eS.Z,{next:el,hasMore:eo??!1,loader:!!(eo&&eE)&&(0,a.jsx)(eI.p,{}),dataLength:ep?.length??0,style:{overflow:"unset"},className:eE?O.P:void 0,children:eE?e$:(0,a.jsx)(f.M5,{width:"full",color:"textSecondary",textAlign:"center",style:{height:"60vh"},children:(0,a.jsxs)(e2,{children:[(0,a.jsx)("p",{className:w.Es,children:"No NFTS found"}),(0,a.jsx)(m.n,{onClick:B,type:"button",className:(0,$.default)(w.Km,w.km),color:"accentAction",cursor:"pointer",children:(0,a.jsx)(e6,{children:"View full collection"})})]})})})})]})},ti=()=>{let e=(0,G.PY)(e=>e.setSearch),t=(0,G.PY)(e=>e.search),i=(0,b.Iv)(e=>e.isCollectionStatsLoading);return(0,a.jsx)(m.n,{as:"input",flex:"1",borderColor:{default:"backgroundOutline",focus:"accentAction"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"backgroundSurface",maxWidth:"332",minWidth:"0",fontSize:"16",height:"44",color:{placeholder:"textTertiary",default:"textPrimary"},value:t,placeholder:i?"":"Search by name",className:(0,$.default)(i&&"_2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez7iz"),onChange:t=>{e(t.currentTarget.value)}})};var tr=i(21890),tn=i(27742),ta=i(31631),ts=i.n(ta),to="_2kdvfw1 jinxmn3 rgw6ez347 rgw6ez7ab rgw6ez7k7 rgw6ez517 rgw6ez7cj rgw6ez48p jinxmnf",tl="jinxmn3 rgw6ez347 rgw6ez7ab rgw6ez7k7 rgw6ez517 rgw6ez7cj rgw6ez48p rgw6ez6cj",td="jinxmn1 rgw6ezwj rgw6ezye rgw6ezf7 rgw6ezhe";let tc=_.default.div.withConfig({displayName:"CollectionStats__PercentChange",componentId:"sc-2ed191bb-0"})`
  color: ${({theme:e,isNegative:t})=>t?e.accentFailure:e.accentSuccess};
  display: flex;
  align-items: center;
  justify-content: center;
`,tp=_.default.div.withConfig({displayName:"CollectionStats__CollectionNameText",componentId:"sc-2ed191bb-1"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: ${({isVerified:e})=>e?"12px":"0px"};
`,tg=_.default.div.withConfig({displayName:"CollectionStats__CollectionNameTextLoading",componentId:"sc-2ed191bb-2"})`
  ${eu.S}
  height: 32px;
  width: 236px;
`,th=_.default.div.withConfig({displayName:"CollectionStats__MobileSocialsOverflowIcon",componentId:"sc-2ed191bb-3"})`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,tx=({children:e,href:t})=>(0,a.jsx)(m.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"backgroundSurface",children:e}),tu=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:i})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(th,{onClick:i,children:t?(0,a.jsx)(V.DX,{width:"28",height:"28",fill:ep.Z4.colors.textSecondary}):(0,a.jsx)(V.ws,{width:"28",height:"20",fill:ep.Z4.colors.textSecondary})}),t&&(0,a.jsxs)(f.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,a.jsx)(tx,{href:e.discordUrl,children:(0,a.jsx)(m.n,{margin:"auto",paddingTop:"4",children:(0,a.jsx)(V.D7,{width:28,height:28,color:ep.Z4.colors.textSecondary})})}):null,e.twitterUrl?(0,a.jsx)(tx,{href:"https://twitter.com/"+e.twitterUrl,children:(0,a.jsx)(m.n,{margin:"auto",paddingTop:"6",children:(0,a.jsx)(V.Zm,{fill:ep.Z4.colors.textSecondary,color:ep.Z4.colors.textSecondary,width:"28px",height:"28px"})})}):null,e.instagram?(0,a.jsx)(tx,{href:"https://instagram.com/"+e.instagram,children:(0,a.jsx)(m.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,a.jsx)(V.yu,{fill:ep.Z4.colors.textSecondary,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,a.jsx)(tx,{href:e.externalUrl,children:(0,a.jsx)(m.n,{margin:"auto",paddingTop:"4",children:(0,a.jsx)(V.O1,{fill:ep.Z4.colors.textSecondary,width:"28px",height:"28px"})})}):null]})]}),tm=({children:e,href:t})=>(0,a.jsx)(f.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),tf=({collectionStats:e,name:t,isVerified:i,isMobile:r,collectionSocialsIsOpen:n,toggleCollectionSocials:s})=>{let o=(0,em.I)(e=>e.isCollectionStatsLoading);return(0,a.jsxs)(f.X2,{justifyContent:"space-between",children:[(0,a.jsxs)(f.X2,{minWidth:"0",children:[o?(0,a.jsx)(tg,{}):(0,a.jsx)(tp,{isVerified:i,className:r?w.td:w.Es,children:t}),i&&(0,a.jsx)(V.SA,{style:{width:"32px",height:"32px"}}),(0,a.jsxs)(f.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,a.jsx)(tm,{href:e.discordUrl??"",children:(0,a.jsx)(V.D7,{fill:ep.Z4.colors.textSecondary,color:ep.Z4.colors.textSecondary,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,a.jsx)(tm,{href:"https://twitter.com/"+e.twitterUrl,children:(0,a.jsx)(V.Zm,{fill:ep.Z4.colors.textSecondary,color:ep.Z4.colors.textSecondary,width:"26px",height:"26px"})}):null,e.instagram?(0,a.jsx)(tm,{href:"https://instagram.com/"+e.instagram,children:(0,a.jsx)(V.yu,{fill:ep.Z4.colors.textSecondary,width:"26px",height:"26px"})}):null,e.externalUrl?(0,a.jsx)(tm,{href:e.externalUrl??"",children:(0,a.jsx)(V.O1,{fill:ep.Z4.colors.textSecondary,width:"26px",height:"26px"})}):null]})]}),r&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,a.jsx)(tu,{collectionStats:e,collectionSocialsIsOpen:n,toggleCollectionSocials:s})]})},tw=_.default.div.withConfig({displayName:"CollectionStats__CollectionDescriptionText",componentId:"sc-2ed191bb-4"})`
  vertical-align: top;
  text-overflow: ellipsis;

  ${({readMore:e})=>e?(0,_.css)`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:(0,_.css)`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.textSecondary};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,tb=_.default.span.withConfig({displayName:"CollectionStats__ReadMore",componentId:"sc-2ed191bb-5"})`
  vertical-align: top;
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;
  margin-left: 4px;
`,ty=()=>(0,a.jsx)(m.n,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez19d"}),tj=({description:e})=>{let[t,i]=(0,H.useState)(!1),[r,n]=(0,H.useReducer)(e=>!e,!1),s=(0,H.useRef)(null),o=(0,H.useRef)(null),l=(0,em.I)(e=>e.isCollectionStatsLoading),d=(0,b.dD)();return(0,H.useEffect)(()=>{s&&o&&s.current&&o.current&&(o.current.getBoundingClientRect().width>=s.current?.getBoundingClientRect().width-112||o.current.getBoundingClientRect().width>=590)?i(!0):i(!1)},[o,s,l,e]),l?(0,a.jsx)(ty,{}):(0,a.jsxs)(m.n,{ref:s,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,a.jsx)(tw,{readMore:r,ref:o,className:d?w.Km:w.d1,children:(0,a.jsx)(ts(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,a.jsxs)(tb,{className:d?w.Km:w.d1,onClick:n,children:["show ",r?"less":"more"]})]})},tv=({children:e,label:t,shouldHide:i})=>(0,a.jsxs)(m.n,{display:i?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,a.jsx)(Q.Tv.SubHeader,{className:"jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej",children:e}),(0,a.jsx)(m.n,{as:"span",className:"jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p",children:t})]}),tC=e=>Array(e?3:5).fill(null).map((t,i)=>(0,a.jsxs)(m.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,a.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez14j rgw6ez191"}),(0,a.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez14j rgw6ez19d rgw6ezwj"})]},`statsLoadingSkeleton-key-${i}`)),t_=({stats:e,isMobile:t,...i})=>{let r=e?.stats?.total_supply?(0,tn.rW)((e.stats.num_owners??0)/e.stats.total_supply*100):0,n=e.stats?(0,tn._o)(e.stats.total_supply??0):0,s=e?.stats?.total_supply?(0,tn.rW)((e.stats.total_listings??0)/e.stats.total_supply*100):0,o=(0,em.I)(e=>e.isCollectionStatsLoading),l=(0,tn.Ci)(Number(e.stats?.total_volume)??0),d=(0,tn.ms)(e.stats?.floor_price??0),c=Math.round(Math.abs(e?.stats?.one_day_floor_change??0)),p=e?.stats?.one_day_floor_change?(0,tr.y7)(e.stats.one_day_floor_change):void 0,g=(0,b.cP)(e=>e.bagExpanded),h=(0,x.e)(),u=t||!h.lg&&g;return(0,a.jsx)(f.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...i,children:o?tC(t??!1):(0,a.jsxs)(a.Fragment,{children:[e.stats?.floor_price?(0,a.jsxs)(tv,{label:"Global floor",shouldHide:!1,children:[d," ETH"]}):null,e.stats?.one_day_floor_change!==void 0?(0,a.jsx)(tv,{label:"Floor 24H",shouldHide:!1,children:(0,a.jsxs)(tc,{isNegative:e.stats.one_day_floor_change<0,children:[p,c,"%"]})}):null,e.stats?.total_volume?(0,a.jsxs)(tv,{label:"Total volume",shouldHide:!1,children:[l," ETH"]}):null,n?(0,a.jsx)(tv,{label:"Items",shouldHide:t??!1,children:n}):null,r&&e.standard!==ew.iv.ERC1155?(0,a.jsxs)(tv,{label:"Unique owners",shouldHide:u??!1,children:[r,"%"]}):null,e.stats?.total_listings&&e.standard!==ew.iv.ERC1155?(0,a.jsxs)(tv,{label:"Listed",shouldHide:u??!1,children:[s,"%"]}):null]})})},tk=({isMobile:e})=>(0,a.jsxs)(f.sg,{position:"relative",width:"full",children:[(0,a.jsx)(m.n,{className:tl}),(0,a.jsx)(m.n,{className:to}),(0,a.jsxs)(m.n,{className:td,children:[(0,a.jsx)(m.n,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez1a1"}),!e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ty,{}),(0,a.jsx)(f.X2,{gap:"60",marginTop:"20",children:tC(!1)})]})]}),e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ty,{}),(0,a.jsx)(f.X2,{gap:"20",marginTop:"20",children:tC(!0)})]})]}),tS=({stats:e,isMobile:t})=>{let[i,r]=(0,H.useReducer)(e=>!e,!1),n=(0,em.I)(e=>e.isCollectionStatsLoading);return(0,a.jsxs)(m.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?i?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[n&&(0,a.jsx)(m.n,{as:"div",borderRadius:"round",position:"absolute",className:tl}),(0,a.jsx)(m.n,{as:n?"div":"img",background:"explicitWhite",borderRadius:"round",position:"absolute",className:n?to:"jinxmn3 rgw6ez347 rgw6ez7ab rgw6ez7k7 rgw6ez517 rgw6ez7cj rgw6ez48p",src:e.imageUrl}),(0,a.jsxs)(m.n,{className:td,children:[(0,a.jsx)(tf,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:i,toggleCollectionSocials:r}),(e.description||n)&&!t&&(0,a.jsx)(tj,{description:e.description??""}),(0,a.jsx)(t_,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||n)&&t&&(0,a.jsx)(tj,{description:e.description??""}),(0,a.jsx)("div",{id:"nft-anchor-mobile"}),(0,a.jsx)(t_,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var tT=i(77331),tI=i(74090),tz=i(62878),tN="rgw6ezcp rgw6ezb1 rgw6ezed rgw6ez6fj rgw6ez2ud rgw6ez7bj rgw6ez7ab rgw6ez7jv";let tP=_.default.div.withConfig({displayName:"TraitsHeader__ChildreMobileWrapper",componentId:"sc-69c6ab3e-0"})`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,t$=e=>{let{children:t,index:i,title:r}=e,[s,o]=(0,H.useState)(!1),l=J(e=>e.traitsOpen),d=J(e=>e.setTraitsOpen),c=(0,b.dD)(),p=void 0!==i&&l[i-1],g=i!==n.TRAIT_START_INDEX;return(0,H.useEffect)(()=>{void 0!==i&&d(i,s)},[s,i,d]),(0,a.jsxs)(a.Fragment,{children:[g&&(0,a.jsx)(m.n,{className:(0,$.default)(w.Nf,!s&&U,X),opacity:!p&&s&&0!==i?"1":"0",marginTop:p?"0":"8"}),(0,a.jsxs)(m.n,{as:"details",className:(0,$.default)(w.Nf,!s&&U),open:s,children:[(0,a.jsxs)(m.n,{as:"summary",className:`${Z} ${U}`,onClick:e=>{e.preventDefault(),o(!s)},children:[r,(0,a.jsxs)(m.n,{display:"flex",alignItems:"center",children:[(0,a.jsx)(m.n,{color:"textTertiary",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,a.jsx)(m.n,{className:Y,style:{transform:`rotate(${s?0:180}deg)`},children:(0,a.jsx)(V.g8,{className:D})})]})]}),(0,a.jsx)(tP,{isMobile:c,children:t})]})]})},tE=(0,_.default)(eN.Z).withConfig({displayName:"PriceRange__StyledSlider",componentId:"sc-45cacef3-0"})`
  cursor: pointer;
`,tR=()=>{let[e,t]=(0,H.useState)(""),i=(0,G.PY)(e=>e.setMinPrice),r=(0,G.PY)(e=>e.setMaxPrice),o=(0,G.PY)(e=>e.minPrice),d=(0,G.PY)(e=>e.maxPrice),c=ef(e=>e.priceRangeLow),p=ef(e=>e.priceRangeHigh),g=ef(e=>e.setPriceRangeLow),h=ef(e=>e.setPriceRangeHigh),x=ef(e=>e.prevMinMax),u=ef(e=>e.setPrevMinMax),b=(0,_.useTheme)(),y=(0,eT.TH)();(0,H.useEffect)(()=>{i(""),r(""),g(""),h("")},[y.pathname,i,r,g,h]);let j=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},v=i=>{i.currentTarget.placeholder=e,t(""),(o||d)&&(0,l._P)(s.Yz.NFT_FILTER_SELECTED,{filter_type:s.fm.PRICE_RANGE})};return(0,a.jsxs)(t$,{title:"Price range",index:n.PRICE_RANGE_INDEX,children:[(0,a.jsxs)(f.X2,{marginTop:"12",color:"textPrimary",justifyContent:"space-between",children:[(0,a.jsx)(f.X2,{position:"relative",children:(0,a.jsx)(tI.A,{style:{width:"126px"},className:tN,placeholder:c,onChange:e=>{let[,t]=x;if(e.currentTarget.value){let i=parseInt(e.currentTarget.value)-parseInt(c),r=Math.floor(100*(i/(parseInt(p)-parseInt(c))));parseInt(e.currentTarget.value)>=parseInt(d)?u([t,t]):u([r,t])}else u([0,t]);i(e.currentTarget.value.toString()),ey()},onFocus:j,value:o,onBlur:v})}),(0,a.jsx)(m.n,{className:w.d1,children:"to"}),(0,a.jsx)(f.X2,{position:"relative",children:(0,a.jsx)(tI.A,{style:{width:"126px"},className:tN,placeholder:p,value:d,onChange:e=>{let[t]=x;if(e.currentTarget.value){let i=parseInt(p)-parseInt(e.currentTarget.value),r=Math.floor(100-100*(i/(parseInt(p)-parseInt(c))));parseInt(e.currentTarget.value)<=parseInt(o)?u([t,t]):u([t,r])}else u([t,100]);r(e.currentTarget.value),ey()},onFocus:j,onBlur:v})})]}),(0,a.jsx)(f.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,a.jsx)(tE,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:x,trackStyle:{top:"3px",height:"8px",background:`${b.accentAction}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:tz.$_.shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${b.accentActionSoft}`},onChange:e=>{if("number"==typeof e)return;let[t,n]=e,a=parseFloat(p.replace(/,/g,"")),s=parseFloat(c.replace(/,/g,"")),o=a-s;i((t/100*o+s).toFixed(2).toString()),r((a-(100-n)/100*o).toFixed(2).toString()),0===t&&i(""),100===n&&r(""),u(e)}})})]})};var tF=i(36633),tM=i(36450),tB=i(39799),tL=i(73504);let tH=({trait:e,addTrait:t,removeTrait:i,isTraitSelected:r,style:n})=>{let[o,d]=(0,H.useState)(!1),[c,p]=(0,H.useState)(!1),g=()=>p(!c),h=(0,G.PY)(e=>e.toggleShowFullTraitName),{shouldShow:x,trait_value:u,trait_type:b}=(0,G.PY)(e=>e.showFullTraitName),y=t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&h({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})};(0,H.useEffect)(()=>{d(r)},[r]);let j=r=>{r.preventDefault(),ey(),o?(i(e),d(!1)):(t(e),d(!0)),(0,l._P)(s.Yz.NFT_FILTER_SELECTED,{filter_type:s.fm.TRAIT})},v=x&&b===e.trait_type&&u===e.trait_value;return(0,a.jsxs)(f.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"normal",className:`${w.Nf} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...n},maxHeight:"44",onMouseEnter:g,onMouseLeave:g,onClick:j,children:[(0,a.jsx)(m.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:v?"full":"160",onMouseOver:e=>y(e),onMouseLeave:()=>h({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,tM._)(Number(e.trait_value))}`:e.trait_value}),(0,a.jsx)(ee.X,{checked:o,hovered:c,onChange:j,children:(0,a.jsx)(m.n,{as:"span",color:"textTertiary",minWidth:"8",paddingTop:"2",paddingRight:"12",position:"relative",children:!v&&e.trait_count})})]},e.trait_value)},tA=({traits:e,type:t,index:i})=>{let r=(0,G.PY)(e=>e.addTrait),n=(0,G.PY)(e=>e.removeTrait),s=(0,G.PY)(e=>e.traits),[o,l]=(0,H.useState)(""),d=(0,F.Z)(o,300),c=(0,H.useMemo)(()=>e.filter(e=>e.trait_value?.toString().toLowerCase().includes(d.toLowerCase())),[d,e]),p=(0,H.useCallback)(function({data:e,index:t,style:i}){let o=e[t],l=s.find(({trait_type:e,trait_value:t})=>e===o.trait_type&&String(t)===String(o.trait_value));return(0,a.jsx)(tH,{style:i,isTraitSelected:!!l,trait:o,addTrait:r,removeTrait:n})},[s,r,n]),g=(0,H.useCallback)((e,t)=>{let i=t[e];return`${i.trait_type}_${i.trait_value}_${e}`},[]);return e.length?(0,a.jsxs)(t$,{index:i,numTraits:e.length,title:t,children:[(0,a.jsx)(tI.I,{value:o,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,a.jsx)(f.sg,{className:W,style:{height:`${Math.min(44*c.length,302)}px`},children:(0,a.jsx)(tB.Z,{disableWidth:!0,children:({height:e})=>(0,a.jsx)(tL.t7,{height:e,width:"100%",itemData:c,itemCount:c.length,itemSize:44,itemKey:g,children:({index:e,style:t,data:i})=>(0,a.jsx)(p,{style:t,data:i,index:e},g(e,i))})})})]}):null},tO=({traitsByGroup:e})=>{let{buyNow:t,setBuyNow:i}=(0,b.PY)(e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow})),r=(0,b.PY)(e=>e.setSortBy),s=(0,b.PY)(e=>e.hasRarity),[o,l]=(0,H.useReducer)(e=>!e,!1),d=()=>{i(!t)},c=(0,H.useMemo)(()=>te(r,s??!1),[s,r]);return(0,a.jsxs)(m.n,{className:"_10b1b4v1 rgw6ez7mj rgw6ez1ej rgw6ez2o7 rgw6ezlj rgw6eznk",children:[(0,a.jsx)(f.X2,{width:"full",justifyContent:"space-between"}),(0,a.jsxs)(f.sg,{marginTop:"8",children:[(0,a.jsxs)(f.X2,{justifyContent:"space-between",className:`${Z} ${U}`,gap:"2",borderRadius:"12",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",onClick:e=>{e.preventDefault(),d()},onMouseEnter:l,onMouseLeave:l,children:[(0,a.jsx)(m.n,{"data-testid":"nft-collection-filter-buy-now",className:w.v4,children:"Buy now"}),(0,a.jsx)(ee.X,{hovered:o,checked:t,onClick:d,children:(0,a.jsx)("span",{})})]}),tF.tq&&(0,a.jsx)(el,{sortDropDownOptions:c}),(0,a.jsx)(eo,{}),(0,a.jsx)(tR,{}),Object.entries(e).length>0&&(0,a.jsx)(m.n,{as:"span",color:"textSecondary",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez7az rgw6ez60j rgw6ez7lb"}),(0,a.jsx)(f.sg,{children:Object.entries(e).map(([e,t],i)=>(0,a.jsx)(tA,{type:e,traits:t,index:i+n.TRAIT_START_INDEX},e))})]})]})};var tY=i(18683);let tD=(0,_.default)(d.ZP).withConfig({displayName:"CollectionPageSkeleton__CollectionDescriptionSection",componentId:"sc-15bf9a08-0"})`
  ${tY.bc}
`,tX=(0,_.default)(d.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledColumn",componentId:"sc-15bf9a08-1"})`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${u.BAG_WIDTH+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${u.XXXL_BAG_WIDTH+16}px)`:"100%"};
  }
`,tW=(0,_.default)(p.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledRow",componentId:"sc-15bf9a08-2"})`
  gap: 24px;
  margin-bottom: 28px;
`,tZ=()=>{let e=(0,b.cP)(e=>e.bagExpanded),t=(0,b.dD)();return(0,a.jsxs)(tX,{isBagExpanded:e,children:[(0,a.jsx)(t2,{children:(0,a.jsx)(tq,{})}),(0,a.jsxs)(tD,{children:[(0,a.jsx)(tk,{isMobile:t}),(0,a.jsx)(tW,{children:I})]}),(0,a.jsx)(e5,{})]})};var tU=i(48734),tV=i(47371),tG=i(437);let tK={},tq=(0,_.default)(g.X).withConfig({displayName:"collection__CollectionBannerLoading",componentId:"sc-d8f4b999-0"})`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,tJ=(0,_.default)(d.ZP).withConfig({displayName:"collection__CollectionContainer",componentId:"sc-d8f4b999-1"})`
  width: 100%;
  align-self: start;
  will-change: width;
`,tQ=(0,tU.animated)(tJ),t0=_.default.div.withConfig({displayName:"collection__CollectionAssetsContainer",componentId:"sc-d8f4b999-2"})`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,t1=(0,tU.animated)(t0),t2=_.default.div.withConfig({displayName:"collection__BannerWrapper",componentId:"sc-d8f4b999-3"})`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,t6=_.default.div.withConfig({displayName:"collection__Banner",componentId:"sc-d8f4b999-4"})`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,t4=(0,_.default)(d.ZP).withConfig({displayName:"collection__CollectionDescriptionSection",componentId:"sc-d8f4b999-5"})`
  ${tY.bc}
`,t3=_.default.div.withConfig({displayName:"collection__FiltersContainer",componentId:"sc-d8f4b999-6"})`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.backgroundBackdrop:void 0};
  z-index: ${tG.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,t7=(0,_.default)(p.ZP).withConfig({displayName:"collection__MobileFilterHeader",componentId:"sc-d8f4b999-7"})`
  padding: 20px 16px;
  justify-content: space-between;
`,t8=(0,_.default)(p.ZP).withConfig({displayName:"collection__CollectionDisplaySection",componentId:"sc-d8f4b999-8"})`
  align-items: flex-start;
  position: relative;
`,t9=_.default.button.withConfig({displayName:"collection__IconWrapper",componentId:"sc-d8f4b999-9"})`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.textPrimary};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${c.c}
`;var t5=()=>{let{contractAddress:e}=(0,eT.UO)(),t=(0,b.dD)(),[i,r]=(0,b.wx)(),{pathname:n}=(0,eT.TH)(),d=(0,eT.s0)(),c=n.includes("/activity"),p=(0,b.PY)(e=>e.setMarketCount),g=(0,b.cP)(e=>e.bagExpanded),m=(0,b.cP)(e=>e.setBagExpanded),{chainId:f}=(0,o.useWeb3React)(),w=(0,x.e)(),{data:y,loading:_}=(0,h.K)(e),{CollectionContainerWidthChange:k}=(0,tU.useSpring)({CollectionContainerWidthChange:g&&!t?(w.xxxl?u.XXXL_BAG_WIDTH:u.BAG_WIDTH)+16:0,config:{duration:tV.Kd.medium,easing:tU.easings.easeOutSine}}),{gridWidthOffset:S}=(0,tU.useSpring)({gridWidthOffset:i&&!t?332:0,config:{duration:tV.Kd.medium,easing:tU.easings.easeOutSine}});if((0,H.useEffect)(()=>{let e={};y?.marketplaceCount?.forEach(({marketplace:t,count:i})=>{e[t]=i}),p(e)},[y?.marketplaceCount,p]),(0,H.useEffect)(()=>{g&&i&&!w.xl&&r(!1)},[g,i,w,r]),(0,H.useEffect)(()=>{m({bagExpanded:!1,manualClose:!1})},[]),_)return(0,a.jsx)(tZ,{});let T=()=>{c?d(`/nfts/collection/${e}`):d(`/nfts/collection/${e}/activity`)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.fM,{page:s.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:e,chain_id:f,is_activity_view:c},shouldLogImpression:!0,children:(0,a.jsx)(tQ,{style:{width:k.to(e=>`calc(100% - ${e}px)`)},children:e&&!j._P.includes(e)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t2,{children:(0,a.jsx)(t6,{src:y?.bannerImageUrl?`${y.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,a.jsxs)(t4,{children:[y&&(0,a.jsx)(tS,{stats:y,isMobile:t}),(0,a.jsx)("div",{id:"nft-anchor"}),(0,a.jsx)(z,{showActivity:c,toggleActivity:()=>{i&&r(!1),T()}})]}),(0,a.jsxs)(t8,{children:[(0,a.jsx)(t3,{isMobile:t,isFiltersExpanded:i,children:i&&(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsxs)(t7,{children:[(0,a.jsx)(Q.Tv.HeadlineSmall,{children:"Filter"}),(0,a.jsx)(t9,{onClick:()=>r(!1),children:(0,a.jsx)(V.BW,{})})]}),(0,a.jsx)(tO,{traitsByGroup:y?.traits??tK})]})}),(0,a.jsx)(t1,{hideUnderneath:t&&(i||g),style:{transform:S.to(e=>`translate(${e}px)`),width:S.to(e=>`calc(100% - ${e}px)`)},children:c?e&&(0,a.jsx)(C.cS,{contractAddress:e,rarityVerified:y?.rarityVerified??!1,collectionName:y?.name??"",chainId:f}):e&&y&&(0,a.jsx)(H.Suspense,{fallback:(0,a.jsx)(e5,{}),children:(0,a.jsx)(tt,{collectionStats:y,contractAddress:e,rarityVerified:y?.rarityVerified})})})]})]}):(0,a.jsx)("div",{className:tY.x8,children:"No collection assets exist at this address"})})}),(0,a.jsx)(v,{})]})}}}]);
//# sourceMappingURL=1230.6783b61b.chunk.js.map