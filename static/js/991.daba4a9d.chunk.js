"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[991],{92649:function(e,r,s){s.r(r),s.d(r,{default:function(){return v}});var a=s(30575),n=s(45825),g=s(45938),t=s(94869),w=s(66196),l=s(84893),i=s(62329),c=s(64709),z=s(9867),h=s(2994),o=s(26030),d=s(54212),m=s(17669),p=s(47615),x=s(39401),j=s(14422),f=s(43922),y=s(63505),u=s(12058),k=s(34120);s(11173);var N="hwks9j7 rgw6ezda rgw6ez4em rgw6ezba rgw6ezpy rgw6ezvg rgw6ezvs rgw6ezg4 rgw6ezft",b="hwks9jm rgw6ezay rgw6ez4ey rgw6ezvy rgw6ezfa",_="hwks9jy rgw6ez4ey rgw6ezas rgw6ezla";let C=u.default.a.withConfig({displayName:"TransactionCompleteModal__UploadLink",componentId:"sc-de1b2763-0"})`
  position: absolute;
  right: 32px;
  top: 32px;
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;

  ${i.c}

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 12px;
    top: 28px;
  }
`;var v=()=>{let[e,r]=(0,y.useState)(3e3),[s,i]=(0,y.useState)(!1),u=(0,p.pQ)(e=>e.txHash),v=(0,p.pQ)(e=>e.purchasedWithErc20),S=(0,p.pQ)(e=>e.setState),E=(0,p.pQ)(e=>e.state),T=(0,y.useRef)(E),R=(0,p.JC)(e=>e.transactionResponse),U=(0,p.JC)(e=>e.setTransactionResponse),I=(0,p.dD)(),$=(0,k.E)(1,u,k.r.TRANSACTION),q=(E===x.c$.Success||E===x.c$.Failed)&&E,F=(0,w.oO)({modal:t.KO.NFT_TX_COMPLETE}),{nftsPurchased:A,nftsNotPurchased:B,showPurchasedModal:H,showRefundModal:D,totalPurchaseValue:W,totalRefundValue:L,totalUSDRefund:M,txFeeFiat:P}=(0,y.useMemo)(()=>(0,j.lb)(R,e),[R,e]),Y=()=>{i(!s)};function Q(){U({}),S(x.c$.New)}return(0,y.useEffect)(()=>{(0,j.tw)().then(e=>{r(e??0)})},[]),(0,y.useEffect)(()=>{p.pQ.subscribe(e=>T.current=e.state)},[]),(0,a.jsx)(a.Fragment,{children:q&&(0,a.jsxs)(z.h,{children:[(0,a.jsx)(d.a,{onClick:Q}),(0,a.jsxs)(c.n,{className:"hwks9j1 rgw6ez2dy rgw6ez2jg rgw6ez2rm rgw6ez2b4 rgw6ez44y rgw6ez48y rgw6ez1dy rgw6ez16y rgw6ez175 rgw6ez34a rgw6ez39b rgw6ez3fa rgw6ez3rs rgw6ez7pq",onClick:Q,children:[H&&(0,a.jsx)(w.fM,{name:t.Yz.NFT_BUY_BAG_SUCCEEDED,properties:{buy_quantity:A.length,usd_value:parseFloat((0,n.formatEther)(W))*e,transaction_hash:u,using_erc20:v,...(0,f.H)(A),...F},shouldLogImpression:!0,children:(0,a.jsxs)(c.n,{className:"hwks9j3 rgw6ez4ps rgw6ez7ey rgw6ez44y rgw6ez44a rgw6ez1e4 rgw6ez494 rgw6ez16y rgw6ez175 rgw6ez2py rgw6ez2pz rgw6ez29g rgw6ez29h",onClick:d.U,children:[(0,a.jsx)(o.jS,{color:m.gR.color.pink400,width:"36",height:"36",className:"rgw6ez48s rgw6ez35g rgw6ez36n rgw6ez3gs rgw6ez3h5"}),(0,a.jsxs)(c.n,{display:"flex",flexWrap:"wrap",width:"full",height:"min",children:[(0,a.jsx)("h1",{className:N,children:(0,a.jsx)(g.cC,{id:"6Mjzfq"})}),(0,a.jsx)("p",{className:"hwks9jd rgw6ez4em rgw6ezay rgw6ez16y rgw6ez46g rgw6ezpy rgw6ezvg rgw6ezvs rgw6ezh4",children:(0,a.jsx)(g.cC,{id:"utdv8e"})})]}),(0,a.jsx)(C,{onClick:()=>{window.open((0,j.fj)(A,$),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,a.jsx)(o.Zm,{width:32,height:32,color:m.Z4.colors.textSecondary})}),(0,a.jsx)(c.n,{className:"hwks9jf rgw6ez44y rgw6ez44a rgw6ez16y rgw6ez7pq rgw6ez47s",style:{maxHeight:A.length>32?I?"172px":"292px":"min-content"},children:[...A].map((e,r)=>(0,a.jsx)("img",{className:(0,l.default)("hwks9jh rgw6ez7em rgw6ez3xy",A.length>1&&"rgw6ezqs rgw6ezr5 rgw6ezfs rgw6ezg5"),style:{maxHeight:`${(0,j.QP)(A.length,I)}px`,maxWidth:`${(0,j.QP)(A.length,I)}px`},src:e.imageUrl,alt:e.name},r))}),A.length>32&&(0,a.jsx)(c.n,{className:"hwks9jk"}),(0,a.jsxs)(c.n,{display:"flex",width:"full",height:"min",flexDirection:"row",marginTop:{sm:"20",md:"20"},flexWrap:{sm:"wrap",md:"nowrap"},alignItems:"center",paddingRight:"40",paddingLeft:"40",className:"rgw6ez4em rgw6ezay",justifyContent:"space-between",children:[(0,a.jsxs)(h.X2,{children:[(0,a.jsxs)(c.n,{marginRight:"16",children:[A.length," NFT",1===A.length?"":"s"]}),(0,a.jsxs)(c.n,{children:[(0,j.IA)(W.toString())," ETH"]})]}),(0,a.jsx)("a",{href:$,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,a.jsx)(c.n,{color:"textSecondary",fontWeight:"normal",children:(0,a.jsx)(g.cC,{id:"rd4eHq"})})})]})]})}),D&&(H?(0,a.jsx)(w.fM,{name:t.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:A.length,fail_quantity:B.length,refund_amount_usd:M,transaction_hash:u,...F},shouldLogImpression:!0,children:(0,a.jsxs)(c.n,{className:"hwks9js rgw6ez4ps rgw6ez7ey rgw6ez44y rgw6ez44a rgw6ez2ps rgw6ez2q5 rgw6ez2js rgw6ez2kb rgw6ez2es rgw6ez2f5 rgw6ez1e4 rgw6ez16y rgw6ez175 rgw6ez494 rgw6ezwm",onClick:d.U,children:[(0,a.jsxs)(c.n,{display:"inline-flex",flexWrap:"wrap",width:{sm:"full",md:"half"},paddingRight:{sm:"0",md:"32"},children:[(0,a.jsx)(o.YG,{color:"pink"}),(0,a.jsx)("p",{className:"hwks9ju rgw6ez4em rgw6ezda rgw6ezb4 rgw6ezla rgw6ezvg rgw6ezfa rgw6ezkh",children:"Instant Refund"}),(0,a.jsxs)("p",{className:"hwks9jw rgw6ez4em rgw6ezay rgw6ezpy rgw6ezvg rgw6ezws rgw6ezgs rgw6ez16y",children:["Uniswap returned"," ",(0,a.jsxs)("span",{style:{fontWeight:"700"},children:[(0,j.IA)(L.toString())," ETH"]})," ","back to your wallet for unavailable items."]}),(0,a.jsxs)(c.n,{display:"flex",flexWrap:"wrap",bottom:"24",width:"full",alignSelf:"flex-end",position:{sm:"absolute",md:"static"},children:[(0,a.jsxs)("p",{className:b,style:{marginBottom:"2px"},children:[(0,j.IA)(L.toString())," ETH"]}),(0,a.jsx)("p",{className:_,children:(0,j.pM)(M)}),(0,a.jsxs)("p",{className:b,style:{width:"100%"},children:["for ",B.length," unavailable item",1===B.length?"":"s","."]}),(0,a.jsx)(c.n,{position:{sm:"absolute",md:"relative"},right:{sm:"0",md:"auto"},bottom:{sm:"0",md:"auto"},justifyContent:{sm:"flex-end",md:"flex-start"},textAlign:{sm:"right",md:"left"},flexShrink:"0",marginRight:{sm:"40",md:"24"},width:{sm:"half",md:"auto"},children:(0,a.jsx)("a",{href:$,target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:(0,a.jsx)(c.n,{fontWeight:"normal",marginTop:"16",color:"textSecondary",className:b,children:"View on Etherscan"})})})]})]}),(0,a.jsx)(c.n,{className:"hwks9j10 rgw6ez1e4 rgw6ez1dz rgw6ez16y rgw6ez16t rgw6ez44a rgw6ez7pq rgw6ez474 rgw6ez454 rgw6ez2eb",children:B.map((e,r)=>(0,a.jsx)(c.n,{display:"flex",flexWrap:"wrap",height:"min",width:"52",children:(0,a.jsx)("img",{className:"hwks9j12 rgw6ez1b4 rgw6ez144 rgw6ez7ee rgw6ezqs rgw6ezfg",src:e.imageUrl,alt:e.name},r)},r))}),(0,a.jsx)(c.n,{className:"hwks9j14 rgw6ez16y rgw6ez16t rgw6ezpy rgw6ez3qa"})]})}):(0,a.jsx)(w.fM,{name:t.Yz.NFT_BUY_BAG_REFUNDED,properties:{buy_quantity:0,fail_quantity:B.length,refund_amount_usd:M,...F},shouldLogImpression:!0,children:(0,a.jsxs)(c.n,{className:"hwks9j16 rgw6ez4ps rgw6ez7ey rgw6ez44y rgw6ez44a rgw6ezvg rgw6ez46g rgw6ezpy rgw6ezp5 rgw6ez2vm rgw6ez1e4",onClick:d.U,children:[(0,a.jsx)(c.n,{marginLeft:"auto",marginRight:"auto",display:"flex",children:E===x.c$.Success?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.YG,{}),(0,a.jsx)("h1",{className:N,children:"Instant Refund"})]}):(0,a.jsx)("h1",{className:N,children:"Failed Transaction"})}),(0,a.jsxs)("p",{className:"hwks9j1c rgw6ez4em rgw6ezay rgw6ezpy rgw6ezvg rgw6ezwa",children:[E===x.c$.Success&&`Selected item${1===A.length?" is":"s are"} no longer available. Uniswap instantly refunded you for this incomplete transaction. `,(0,j.cd)(P)," was used for gas in attempt to complete this transaction. For support, please visit our ",(0,a.jsx)("a",{href:"https://discord.gg/FCfyBSbCU5",children:"Discord"})]}),(0,a.jsxs)(c.n,{className:"hwks9j1e rgw6ez16y",children:[B.length>=3&&(0,a.jsxs)(c.n,{className:"rgw6ez6em rgw6ez7ee rgw6ez44y rgw6ez44a rgw6ezvy rgw6ezfg rgw6ez1b4 rgw6ez7d2",onClick:()=>Y(),children:[!s&&(0,a.jsx)(c.n,{paddingLeft:"20",paddingTop:"8",paddingBottom:"8",children:B.slice(0,3).map((e,r)=>(0,a.jsx)("img",{style:{zIndex:2-r},className:"hwks9j1j rgw6ez7ea rgw6ez1aa rgw6ez13a rgw6ez494",src:e.imageUrl,alt:e.name},r))}),(0,a.jsxs)(c.n,{color:s?"textPrimary":"textSecondary",className:"hwks9j1l rgw6ez4ey rgw6ezcs rgw6ezay rgw6ez2om rgw6ez284 rgw6ez2dy",children:["Unavailable",(0,a.jsxs)(c.n,{className:"hwks9j1n rgw6ezcs rgw6ezas rgw6ez44y",children:[B.length," item",1===B.length?"":"s"]})]}),(0,a.jsx)(o.g8,{className:`${!s&&"hwks9j1t"} hwks9j1s rgw6ezkg rgw6ezks rgw6ezvg rgw6ez19g rgw6ez12g`})]}),(s||B.length<3)&&B.map((e,r)=>(0,a.jsxs)(c.n,{backgroundColor:"backgroundSurface",display:"flex",padding:"4",marginBottom:"1",borderRadius:"8",children:[(0,a.jsx)(c.n,{className:"hwks9j1o",children:(0,a.jsx)("img",{className:"hwks9j1q rgw6ez7ea rgw6ez1ey rgw6ez1va rgw6ez17y rgw6ez1ha rgw6ez49m",src:e.imageUrl,alt:e.name})}),(0,a.jsxs)(c.n,{flexWrap:"wrap",marginTop:"4",children:[(0,a.jsx)(c.n,{marginLeft:"4",width:"full",display:"flex",children:(0,a.jsxs)("p",{className:b,style:{marginBottom:"2px"},children:[(0,j.IA)(e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice)," ","ETH"]})}),(0,a.jsx)(c.n,{color:"textPrimary",className:_,children:E===x.c$.Success?"Refunded":e.name})]})]},r))]}),s&&(0,a.jsx)(c.n,{className:"hwks9j1f"}),(0,a.jsxs)("p",{className:b,style:{marginBottom:"2px"},children:[(0,j.IA)(L.toString())," ETH"]}),(0,a.jsx)("p",{className:_,children:(0,j.pM)(M)}),(0,a.jsx)(c.n,{className:"hwks9j9 rgw6ez4ey rgw6ezam rgw6ez44y rgw6ez3m rgw6ez1e4 rgw6ez3ba",marginLeft:"auto",marginRight:"0",children:(0,a.jsx)("a",{href:$,target:"_blank",rel:"noreferrer",children:(0,a.jsx)(c.n,{className:"hwks9jb rgw6ez4ey rgw6ezam rgw6ezcs rgw6ezwa",children:"View on Etherscan"})})}),(0,a.jsxs)("p",{className:b,children:["for ",B.length," unavailable item",1===B.length?"":"s","."]}),(0,a.jsxs)(c.n,{as:"button",border:"none",backgroundColor:"accentAction",cursor:"pointer",className:"hwks9j18 rgw6ez1ag rgw6ez46g rgw6ezda rgw6ezay rgw6ez4ca rgw6ez6cs rgw6ez44y rgw6ez3m rgw6ezpy rgw6ezvg rgw6ezws",type:"button",onClick:()=>Q(),children:[(0,a.jsx)(o.pf,{className:"rgw6ez71m rgw6ezly rgw6ezsg"}),"Return to Marketplace"]})]})}))]})]})})}}}]);
//# sourceMappingURL=991.daba4a9d.chunk.js.map