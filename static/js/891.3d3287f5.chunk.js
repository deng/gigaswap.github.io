"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[891],{30891:function(e,a,n){n.r(a),n.d(a,{default:function(){return e2}});var i,t,r=n(30575),o=n(94869),l=n(66196),d=n(79954),s=n(65364),c=n(99430),p=n(63505),m=n(27591),g=n(12058),x=n(18030),h=n(26030),u=n(48734);let f=g.default.div.withConfig({displayName:"Carousel__CarouselContainer",componentId:"sc-6b861646-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,b=g.default.div.withConfig({displayName:"Carousel__CarouselCardContainer",componentId:"sc-6b861646-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,y=(0,g.default)(u.a.div).withConfig({displayName:"Carousel__CarouselItemCard",componentId:"sc-6b861646-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,C=g.default.div.withConfig({displayName:"Carousel__CarouselItemIcon",componentId:"sc-6b861646-3"})`
  align-items: center;
  color: ${({theme:e})=>e.textPrimary};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,w=({children:e,activeIndex:a,toggleNextSlide:n})=>{let i=(0,p.useCallback)((a,n=e.length)=>(0,c.ef)(a,n),[e]),t=(0,p.useCallback)((e,a,n)=>(0,c.E)(e,a,n,i),[i]),[o,l]=(0,u.useSprings)(e.length,a=>({x:(a<e.length-1?a:-1)*800})),d=(0,p.useRef)([0,1]),s=(0,p.useCallback)((a,n)=>{let r=i(Math.floor(a/800)%e.length),o=n<0?e.length-2:1;l(i=>{let l=t(i,r,o),s=t(i,d.current[0],d.current[1]),p=(0,c.Z1)(r,o,l,e.length,a);return{x:-a%(800*e.length)+800*p,immediate:n<0?s>l:s<l,config:{tension:250,friction:30}}}),d.current=[r,o]},[i,t,l,e.length]),m=(0,p.useRef)(0);(0,p.useEffect)(()=>{s(800*a,m.current)},[a,s]);let g=(0,p.useCallback)(e=>{m.current=e,n(e)},[n]);return(0,p.useEffect)(()=>{let e=setInterval(async()=>{g(1)},7e3);return()=>{clearInterval(e)}},[g,a]),(0,r.jsxs)(f,{children:[(0,r.jsx)(C,{onClick:()=>g(-1),children:(0,r.jsx)(h.wy,{width:"16px",height:"16px"})}),(0,r.jsx)(b,{children:o.map(({x:a},n)=>(0,r.jsx)(y,{style:{x:a},children:e[n]},n))}),(0,r.jsx)(C,{onClick:()=>g(1),children:(0,r.jsx)(h.XC,{width:"16px",height:"16px"})})]})},v=({children:e})=>(0,r.jsx)(w,{activeIndex:0,toggleNextSlide:()=>void 0,children:[e]});var j=n(46760),_=n(80343),k=n(20555),$=n(39401),I=n(85325),N=n(38491);let T=g.default.div.withConfig({displayName:"CarouselCard__CarouselCardBorder",componentId:"sc-4bf45ab0-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.backgroundOutline};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,S=g.default.div.withConfig({displayName:"CarouselCard__CardHeaderContainer",componentId:"sc-4bf45ab0-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,H=g.default.div.withConfig({displayName:"CarouselCard__LoadingCardHeaderContainer",componentId:"sc-4bf45ab0-2"})`
  position: relative;
  animation: ${j.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.backgroundInteractive} 25%,
    ${({theme:e})=>e.backgroundOutline} 50%,
    ${({theme:e})=>e.backgroundInteractive} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,z=g.default.div.withConfig({displayName:"CarouselCard__CardHeaderColumn",componentId:"sc-4bf45ab0-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,F=g.default.div.withConfig({displayName:"CarouselCard__IconContainer",componentId:"sc-4bf45ab0-4"})`
  display: inline;
  vertical-align: text-bottom;
  margin-left: 2px;
`,E=g.default.div.withConfig({displayName:"CarouselCard__CollectionNameContainer",componentId:"sc-4bf45ab0-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,P=(0,g.default)(_.X).withConfig({displayName:"CarouselCard__LoadingCollectionNameContainer",componentId:"sc-4bf45ab0-6"})`
  width: 50%;
`,B=g.default.div.withConfig({displayName:"CarouselCard__HeaderOverlay",componentId:"sc-4bf45ab0-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,D=g.default.img.withConfig({displayName:"CarouselCard__CollectionImage",componentId:"sc-4bf45ab0-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.accentTextLightPrimary};
  border-radius: 100px;
`,O=g.default.div.withConfig({displayName:"CarouselCard__LoadingCollectionImage",componentId:"sc-4bf45ab0-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${j.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.backgroundInteractive} 25%,
    ${({theme:e})=>e.backgroundOutline} 50%,
    ${({theme:e})=>e.backgroundInteractive} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,L=(0,g.default)(_.X).withConfig({displayName:"CarouselCard__LoadingTableElement",componentId:"sc-4bf45ab0-10"})`
  width: 50px;
`,M=g.default.div.withConfig({displayName:"CarouselCard__TableElement",componentId:"sc-4bf45ab0-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,X=g.default.div.withConfig({displayName:"CarouselCard__FirstColumnTextWrapper",componentId:"sc-4bf45ab0-12"})``,V=g.default.div.withConfig({displayName:"CarouselCard__CardBottomContainer",componentId:"sc-4bf45ab0-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,A=g.default.img.withConfig({displayName:"CarouselCard__MarketplaceIcon",componentId:"sc-4bf45ab0-14"})`
  width: 20px;
  height: 20px;
`,R=g.default.div.withConfig({displayName:"CarouselCard__CarouselCardContainer",componentId:"sc-4bf45ab0-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.backgroundSurface};
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${M}:nth-child(3n-1), ${L}:nth-child(3n-1) {
    justify-self: center;
  }

  ${M}:nth-child(3n), ${L}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${X} {
      display: none;
    }
    ${M} {
      justify-self: left !important;
    }
    ${z} {
      padding: 0 20px;
    }
  }
`,G=({marketplace:e,floorInEth:a,listings:n})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(M,{children:[(0,r.jsx)(A,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,r.jsx)(X,{children:(0,r.jsx)(I.T.BodySmall,{color:"textSecondary",children:e})})]}),(0,r.jsx)(M,{children:(0,r.jsx)(I.T.BodySmall,{color:"textSecondary",children:Number(a)>0?`${(0,N.dZ)(a,N.sw.NFTTokenFloorPriceTrailingZeros)} ETH`:"-"})}),(0,r.jsx)(M,{children:(0,r.jsx)(I.T.BodySmall,{color:"textSecondary",children:Number(n)>0?n:"None"})})]}),W=[$.Fz.Opensea,$.Fz.X2Y2,$.Fz.LooksRare],U={[$.Fz.Opensea]:"OpenSea",[$.Fz.X2Y2]:"X2Y2",[$.Fz.LooksRare]:"LooksRare"},Z=({collection:e,onClick:a})=>{let{data:n,loading:i}=(0,k.K)(e.address??"");return i?(0,r.jsx)(Q,{}):(0,r.jsx)(T,{children:(0,r.jsxs)(R,{onClick:a,children:[(0,r.jsx)(K,{collection:e}),(0,r.jsx)(V,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(M,{children:[(0,r.jsx)(h.pD,{width:"20",height:"20"}),(0,r.jsx)(X,{children:(0,r.jsx)(I.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,r.jsx)(M,{children:e.floor&&(0,r.jsxs)(I.T.SubHeaderSmall,{color:"userThemeColor",children:[(0,c.Nd)(e.floor)," ETH Floor"]})}),(0,r.jsx)(M,{children:(0,r.jsxs)(I.T.SubHeaderSmall,{color:"userThemeColor",children:[n.marketplaceCount?.reduce((e,a)=>e+a.count,0)," Listings"]})}),W.map(a=>{let i=n.marketplaceCount?.find(e=>e.marketplace===a);return i?(0,r.jsx)(G,{marketplace:U[a],listings:i.count,floorInEth:i.floorPrice},`CarouselCard-key-${e.address}-${i.marketplace}`):null})]})})]})})},Y=()=>(0,r.jsx)(r.Fragment,{children:[...Array(12)].map(e=>(0,r.jsx)(L,{},e))}),J=(0,g.default)(I.T.MediumHeader).withConfig({displayName:"CarouselCard__CollectionName",componentId:"sc-4bf45ab0-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,K=({collection:e})=>(0,r.jsxs)(S,{src:e.bannerImageUrl??"",children:[(0,r.jsxs)(z,{children:[(0,r.jsx)(D,{src:e.imageUrl}),(0,r.jsxs)(E,{children:[(0,r.jsx)(J,{color:"accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,r.jsx)(F,{children:(0,r.jsx)(h.SA,{width:"24px",height:"24px"})})]})]}),(0,r.jsx)(B,{})]}),Q=({collection:e})=>(0,r.jsx)(T,{children:(0,r.jsxs)(R,{children:[e?(0,r.jsx)(K,{collection:e}):(0,r.jsxs)(H,{children:[(0,r.jsxs)(z,{children:[(0,r.jsx)(O,{}),(0,r.jsx)(P,{})]}),(0,r.jsx)(B,{})]}),(0,r.jsx)(V,{children:(0,r.jsx)(Y,{})})]})}),q=g.default.div.withConfig({displayName:"Banner__BannerContainer",componentId:"sc-c8890ab5-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,ee=g.default.div.withConfig({displayName:"Banner__AbsoluteFill",componentId:"sc-c8890ab5-1"})`
  position: absolute;
  top: -96px;
  left: 0;
  right: 0;
  bottom: 0;
`,ea=(0,g.default)(ee).withConfig({displayName:"Banner__BannerBackground",componentId:"sc-c8890ab5-2"})`
  transform: translate3d(0, 0, 0) scaleY(1.1);

  background-image: ${e=>`url(${e.backgroundImage})`};
  filter: blur(62px);

  opacity: ${({theme:e})=>e.darkMode?.3:.2};
`,en=(0,g.default)(ee).withConfig({displayName:"Banner__PlainBackground",componentId:"sc-c8890ab5-3"})`
  background: ${({theme:e})=>`linear-gradient(${(0,x.j)(10,e.userThemeColor)}, transparent)`};
`,ei=g.default.div.withConfig({displayName:"Banner__BannerMainArea",componentId:"sc-c8890ab5-4"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,et=g.default.div.withConfig({displayName:"Banner__HeaderContainer",componentId:"sc-c8890ab5-5"})`
  display: flex;
  max-width: 500px;
  font-weight: 500;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.textPrimary};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,er=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"];var eo=()=>{let e=(0,m.s0)(),{data:a}=(0,s.S)(5+er.length,d._u.Day),n=(0,p.useMemo)(()=>a?.filter(e=>e.address&&!er.includes(e.address)).slice(0,5),[a]),[i,t]=(0,p.useState)(0),o=(0,p.useCallback)(e=>{n&&t(a=>(0,c.ef)(a+e,n.length))},[n]),l=n?.[i];return(0,r.jsxs)(q,{children:[l?l.bannerImageUrl?(0,r.jsx)(ea,{backgroundImage:l.bannerImageUrl}):(0,r.jsx)(en,{}):null,(0,r.jsxs)(ei,{children:[(0,r.jsxs)(et,{children:["Better prices. ",(0,r.jsx)("br",{}),"More listings."]}),n?(0,r.jsx)(w,{activeIndex:i,toggleNextSlide:o,children:n.map(a=>(0,r.jsx)(Z,{collection:a,onClick:()=>e(`/nfts/collection/${a.address}`)},a.address))}):(0,r.jsx)(v,{children:(0,r.jsx)(Q,{})})]})]})},el=n(62329),ed=n(73859),es=n.n(ed),ec=n(34822),ep=n(43108),em=n(95168),eg=n(45825),ex=n(79131);n(74602),n(46728);let eh=g.default.div.withConfig({displayName:"Cells__TruncatedText",componentId:"sc-c6cf6877-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,eu=(0,g.default)(eh).withConfig({displayName:"Cells__CollectionNameContainer",componentId:"sc-c6cf6877-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,ef=(0,g.default)(eh).withConfig({displayName:"Cells__CollectionName",componentId:"sc-c6cf6877-2"})`
  margin-left: 8px;
`,eb=(0,g.default)(ep.Tv.SubHeader).withConfig({displayName:"Cells__TruncatedSubHeader",componentId:"sc-c6cf6877-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ey=(0,g.default)(ep.Tv.SubHeaderSmall).withConfig({displayName:"Cells__TruncatedSubHeaderSmall",componentId:"sc-c6cf6877-4"})`
  color: ${({theme:e})=>`${e.textPrimary}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,eC=g.default.div.withConfig({displayName:"Cells__RoundedImage",componentId:"sc-c6cf6877-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:a})=>e?`url(${e})`:a.backgroundModule};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,ew=g.default.div.withConfig({displayName:"Cells__ChangeCellContainer",componentId:"sc-c6cf6877-6"})`
  display: flex;
  color: ${({theme:e,change:a})=>a>=0?e.accentSuccess:e.accentFailure};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,ev=g.default.div.withConfig({displayName:"Cells__EthContainer",componentId:"sc-c6cf6877-7"})`
  display: flex;
  justify-content: flex-end;
`,ej=({value:e})=>{let a=(0,ex.dD)();return(0,r.jsxs)(eu,{children:[(0,r.jsx)(eC,{src:e.logo}),(0,r.jsx)(ef,{children:a?(0,r.jsx)(ey,{children:e.name}):(0,r.jsx)(eb,{children:e.name})}),e.isVerified&&(0,r.jsx)("span",{className:"rgw6ezl7 rgw6ez457 rgw6ez2o7 rgw6ez19v rgw6ez12v rgw6ez461",children:(0,r.jsx)(h.SA,{})})]})},e_=({value:e})=>(0,r.jsx)("span",{children:e.value?(0,c.Ci)(e.value):"-"}),ek=(e,a,n,i)=>e===$.VG.ETH?n:i&&n?i*(a?parseFloat((0,eg.formatEther)(n)):n):void 0,e$=({value:e,denomination:a,usdPrice:n})=>{let i=ek(a,!1,e,n),t=i?a===$.VG.ETH?(0,c.Nd)(i.toString(),!1,!0,!1)+" ETH":(0,c.Nd)(i,!0,!1,!0):"-",o=(0,ex.dD)(),l=o?ep.Tv.BodySmall:ep.Tv.BodyPrimary;return(0,r.jsx)(ev,{children:(0,r.jsx)(l,{children:e?t:"-"})})},eI=({value:e})=>(0,r.jsx)(ep.Tv.BodyPrimary,{children:e}),eN=({value:e,denomination:a,usdPrice:n})=>{let i=ek(a,!1,e,n),t=i?a===$.VG.ETH?(0,c.Nd)(i.toString(),!1,!1,!0)+" ETH":(0,c.Nd)(i,!0,!1,!0):"-";return(0,r.jsx)(ev,{children:(0,r.jsx)(ep.Tv.BodyPrimary,{children:e?t:"-"})})},eT=({change:e,children:a})=>{let n=(0,ex.dD)(),i=n?ep.Tv.Caption:ep.Tv.BodyPrimary;return(0,r.jsxs)(ew,{change:e??0,children:[!e||e>0?(0,r.jsx)(h.PH,{width:"20px",height:"20px"}):(0,r.jsx)(h.HE,{width:"20px",height:"20px"}),(0,r.jsx)(i,{color:"currentColor",children:a||`${e?Math.abs(Math.round(e)):0}%`})]})};var eS=n(38414),eH=n(32930),ez=n(7132),eF=n(64709),eE="_1mor7vea rgw6ez4pd rgw6ez16v rgw6ez7bj rgw6ez7a7",eP="_1mor7ved rgw6ezcp rgw6ezav rgw6eze7 rgw6ez4ep rgw6ez2ov rgw6ez28d",eB="rgw6ezrd rgw6ez50p rgw6ez7jr rgw6ez7ar";let eD=g.default.div.withConfig({displayName:"Table__RankCellContainer",componentId:"sc-4e3e7084-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,eO=g.default.tr.withConfig({displayName:"Table__StyledRow",componentId:"sc-4e3e7084-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.stateOverlayHover};
  }
  :active {
    background: ${({theme:e})=>e.stateOverlayPressed};
  }
`,eL=g.default.tr.withConfig({displayName:"Table__StyledLoadingRow",componentId:"sc-4e3e7084-2"})`
  height: 80px;
`,eM=g.default.th.withConfig({displayName:"Table__StyledHeader",componentId:"sc-4e3e7084-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:a})=>!a&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:a})=>!a&&`opacity: ${e.opacity.click};`}
  }
`,eX=g.default.div.withConfig({displayName:"Table__StyledLoadingHolder",componentId:"sc-4e3e7084-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,eV=g.default.div.withConfig({displayName:"Table__StyledCollectionNameHolder",componentId:"sc-4e3e7084-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,eA=(0,g.default)(_.X).withConfig({displayName:"Table__StyledImageHolder",componentId:"sc-4e3e7084-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,eR=(0,g.default)(_.X).withConfig({displayName:"Table__StyledRankHolder",componentId:"sc-4e3e7084-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`;function eG({columns:e,data:a,smallHiddenColumns:n,mediumHiddenColumns:i,largeHiddenColumns:d,...s}){let c=(0,g.useTheme)(),{chainId:x}=(0,eS.useWeb3React)(),{width:u}=(0,eH.i)(),f=(0,ex.dD)(),{getTableProps:b,getTableBodyProps:y,headerGroups:C,rows:w,prepareRow:v,setHiddenColumns:j,visibleColumns:_}=(0,ez.useTable)({columns:e,data:a,initialState:{sortBy:[{desc:!0,id:t.Volume}]},...s},ez.useSortBy),k=(0,m.s0)();return((0,p.useEffect)(()=>{u&&(u<=c.breakpoint.sm?j(n):u<=c.breakpoint.md?j(i):u<=c.breakpoint.lg?j(d):j([]))},[u,j,e,n,i,d,c.breakpoint]),0===a.length)?(0,r.jsx)(eW,{headerGroups:C,visibleColumns:_,...b()}):(0,r.jsx)(ep.Vj,{children:(0,r.jsxs)("table",{...b(),className:eE,children:[(0,r.jsx)("thead",{className:eB,children:C.map(e=>(0,p.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map((e,a)=>(0,p.createElement)(eM,{className:eP,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===a?"left":"right",paddingLeft:0===a?f?"16px":"52px":0},disabled:e.disableSortBy,key:a,children:[(0,r.jsx)(eF.n,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?(0,r.jsx)(h.LZ,{style:{transform:"rotate(90deg)",position:"absolute"}}):(0,r.jsx)(h.LZ,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),(0,r.jsx)(eF.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))}),(0,r.jsx)("tbody",{...y(),children:w.map((e,a)=>(v(e),(0,r.jsx)(l.M8,{events:[o.TM.onClick],name:o.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:x},element:o.xo.NFT_TRENDING_ROW,children:(0,p.createElement)(eO,{...e.getRowProps(),key:e.id,onClick:()=>k(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map((e,n)=>(0,p.createElement)("td",{className:"_1mor7vef rgw6ezcp rgw6ezb1 rgw6ezed rgw6ez2o7 rgw6ez27p rgw6ez1jp rgw6ez467 rgw6ez491",...e.getCellProps(),key:n,style:{maxWidth:0===n?f?"240px":"360px":"160px"}},0===n?(0,r.jsxs)(eD,{children:[!f&&(0,r.jsx)(ep.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:a+1}),e.render("Cell")]}):e.render("Cell"))))},a)))})]})})}function eW({headerGroups:e,visibleColumns:a,...n}){return(0,r.jsx)(ep.Vj,{children:(0,r.jsxs)("table",{...n,className:eE,children:[(0,r.jsx)("thead",{className:eB,children:e.map(e=>(0,p.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map((e,a)=>(0,p.createElement)(eM,{className:eP,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===a?"left":"right",paddingLeft:0===a?"52px":0},disabled:0===a,key:a,children:[(0,r.jsx)(eF.n,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?(0,r.jsx)(h.LZ,{style:{transform:"rotate(90deg)",position:"absolute"}}):(0,r.jsx)(h.LZ,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),(0,r.jsx)(eF.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))}),(0,r.jsx)("tbody",{...n,children:[...Array(10)].map((e,n)=>(0,r.jsx)(eL,{children:[...Array(a.length)].map((e,a)=>(0,r.jsx)("td",{className:"_1mor7veh rgw6ezcp rgw6ezb1 rgw6ezed rgw6ez2oj rgw6ez281 rgw6ez1jp rgw6ez467 rgw6ez491",children:0===a?(0,r.jsxs)(eV,{children:[(0,r.jsx)(eR,{}),(0,r.jsx)(eA,{}),(0,r.jsx)(_.X,{})]}):(0,r.jsx)(eX,{children:(0,r.jsx)(_.X,{})})},a))},n))})]})})}(i=t||(t={})).Volume="Volume",i.VolumeChange="Volume change",i.Floor="Floor",i.FloorChange="Floor change",i.Sales="Sales",i.Items="Items",i.Owners="Owners";let eU=(e,a)=>e?a?Math.round(1e5*e)>=Math.round(1e5*a)?1:-1:1:-1;var eZ=({data:e,timePeriod:a})=>{let n=(0,p.useMemo)(()=>(e,a)=>eU(e.original.floor.value,a.original.floor.value),[]),i=(0,p.useMemo)(()=>(e,a)=>eU(e.original.floor.change,a.original.floor.change),[]),o=(0,p.useMemo)(()=>(e,a)=>eU(e.original.volume.value,a.original.volume.value),[]),l=(0,p.useMemo)(()=>(e,a)=>eU(e.original.volume.change,a.original.volume.change),[]),d=(0,p.useMemo)(()=>[{Header:"Collection name",accessor:"collection",Cell:ej,disableSortBy:!0},{id:t.Floor,Header:t.Floor,accessor:({floor:e})=>e.value,sortType:n,Cell:function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e$,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),a!==$.XH.AllTime&&(0,r.jsx)(em.SF,{children:(0,r.jsx)(eT,{change:e.row.original.floor.change})})]})}},{id:t.FloorChange,Header:t.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:a===$.XH.AllTime,sortType:i,Cell:function(e){return a===$.XH.AllTime?(0,r.jsx)(eI,{value:"-"}):(0,r.jsx)(eT,{change:e.row.original.floor.change})}},{id:t.Volume,Header:t.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:o,Cell:function(e){return(0,r.jsx)(eN,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:t.VolumeChange,Header:t.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:a===$.XH.AllTime,sortType:l,Cell:function(e){let{change:n}=e.row.original.volume;return a===$.XH.AllTime?(0,r.jsx)(eI,{value:"-"}):n&&n>=9999?(0,r.jsxs)(eT,{change:n,children:[">9999","%"]}):(0,r.jsx)(eT,{change:n})}},{id:t.Items,Header:t.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,r.jsx)(e_,{value:{value:e.row.original.totalSupply}})}},{Header:t.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,r.jsx)(e_,{value:e.row.original.owners})}}],[i,n,l,o,a]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(eG,{smallHiddenColumns:[t.Items,t.FloorChange,t.Volume,t.VolumeChange,t.Owners],mediumHiddenColumns:[t.Items,t.FloorChange,t.VolumeChange,t.Owners],largeHiddenColumns:[t.Items,t.Owners],data:e,columns:d})})};let eY=[{label:"1D",value:$.XH.OneDay},{label:"1W",value:$.XH.SevenDays},{label:"1M",value:$.XH.ThirtyDays},{label:"All",value:$.XH.AllTime}],eJ=g.default.div.withConfig({displayName:"TrendingCollections__ExploreContainer",componentId:"sc-a2aefa69-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,eK=g.default.div.withConfig({displayName:"TrendingCollections__StyledHeader",componentId:"sc-a2aefa69-1"})`
  color: ${({theme:e})=>e.textPrimary};
  font-size: 36px;
  line-height: 44px;
  font-weight: 500;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,eQ=g.default.div.withConfig({displayName:"TrendingCollections__FiltersRow",componentId:"sc-a2aefa69-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,eq=g.default.div.withConfig({displayName:"TrendingCollections__Filter",componentId:"sc-a2aefa69-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-radius: 16px;
  padding: 4px;
`,e0=g.default.div.withConfig({displayName:"TrendingCollections__Selector",componentId:"sc-a2aefa69-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:a})=>e?a.backgroundInteractive:"none"};
  cursor: pointer;

  ${el.c}
`,e1=(0,g.default)(ep.Tv.SubHeader).withConfig({displayName:"TrendingCollections__StyledSelectorText",componentId:"sc-a2aefa69-5"})`
  color: ${({theme:e,active:a})=>a?e.textPrimary:e.textSecondary};
`;var e6=()=>{let[e,a]=(0,p.useState)($.XH.OneDay),[n,i]=(0,p.useState)(!0),{data:t,loading:o}=(0,s.S)(100,function(e){switch(e){case $.XH.OneDay:return d._u.Day;case $.XH.SevenDays:return d._u.Week;case $.XH.ThirtyDays:return d._u.Month;case $.XH.AllTime:return d._u.Max;default:return d._u.Day}}(e)),{data:l}=(0,ec.useQuery)(["fetchPrice",{}],()=>(0,c.tw)(),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:es()("1m")}),m=(0,p.useMemo)(()=>!o&&t?t.map(e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:n?$.VG.ETH:$.VG.USD,usdPrice:l})):[],[t,o,n,l]);return(0,r.jsxs)(eJ,{children:[(0,r.jsx)(eK,{children:"Trending NFT collections"}),(0,r.jsxs)(eQ,{children:[(0,r.jsx)(eq,{children:eY.map(n=>(0,r.jsx)(e0,{active:n.value===e,onClick:()=>a(n.value),children:(0,r.jsx)(e1,{lineHeight:"20px",active:n.value===e,children:n.label})},n.value))}),(0,r.jsxs)(eq,{onClick:()=>i(!n),children:[(0,r.jsx)(e0,{active:n,children:(0,r.jsx)(e1,{lineHeight:"20px",active:n,children:"ETH"})}),(0,r.jsx)(e0,{active:!n,children:(0,r.jsx)(e1,{lineHeight:"20px",active:!n,children:"USD"})})]})]}),(0,r.jsx)(eZ,{data:m,timePeriod:e})]})};let e4=g.default.div.withConfig({displayName:"explore__ExploreContainer",componentId:"sc-f5d86c41-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`;var e2=()=>{let e=(0,ex.cP)(e=>e.setBagExpanded);return(0,p.useEffect)(()=>{e({bagExpanded:!1,manualClose:!1})},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l.fM,{page:o.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,r.jsxs)(e4,{children:[(0,r.jsx)(eo,{}),(0,r.jsx)(e6,{})]})})})}}}]);
//# sourceMappingURL=891.3d3287f5.chunk.js.map