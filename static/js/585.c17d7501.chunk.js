"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[585],{86734:function(e,t,r){r.d(t,{ConfigCtrl:function(){return E},zv:function(){return y},uA:function(){return I},ExplorerCtrl:function(){return z},jb:function(){return J},OptionsCtrl:function(){return O},AV:function(){return b},ThemeCtrl:function(){return ee},ToastCtrl:function(){return er}}),Symbol();let s=Symbol(),n=Object.getPrototypeOf,a=new WeakMap,o=e=>e&&(a.has(e)?a.get(e):n(e)===Object.prototype||n(e)===Array.prototype),l=e=>o(e)&&e[s]||null,i=(e,t=!0)=>{a.set(e,t)},c=e=>"object"==typeof e&&null!==e,d=new WeakMap,u=new WeakSet,p=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>c(e)&&!u.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),s=e=>e.configurable&&e.enumerable&&e.writable,n=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},a=new WeakMap,o=(e,t,r=n)=>{let s=a.get(e);if((null==s?void 0:s[0])===t)return s[1];let l=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return i(l,!0),a.set(e,[t,l]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(l,t))return;let s=Reflect.get(e,t),n={value:s,enumerable:!0,configurable:!0};if(u.has(s))i(s,!1);else if(s instanceof Promise)delete n.value,n.get=()=>r(s);else if(d.has(s)){let[e,t]=d.get(s);n.value=o(e,t(),r)}Object.defineProperty(l,t,n)}),Object.preventExtensions(l)},p=new WeakMap,f=[1,1],h=n=>{if(!c(n))throw Error("object required");let a=p.get(n);if(a)return a;let i=f[0],g=new Set,m=(e,t=++f[0])=>{i!==t&&(i=t,g.forEach(r=>r(e,t)))},b=f[1],y=(e=++f[1])=>(b===e||g.size||(b=e,w.forEach(([t])=>{let r=t[1](e);r>i&&(i=r)})),i),v=e=>(t,r)=>{let s=[...t];s[1]=[e,...s[1]],m(s,r)},w=new Map,I=(e,t)=>{if(w.has(e))throw Error("prop listener already exists");if(g.size){let r=t[3](v(e));w.set(e,[t,r])}else w.set(e,[t])},C=e=>{var t;let r=w.get(e);r&&(w.delete(e),null==(t=r[1])||t.call(r))},O=e=>{g.add(e),1===g.size&&w.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let s=e[3](v(r));w.set(r,[e,s])});let t=()=>{g.delete(e),0===g.size&&w.forEach(([e,t],r)=>{t&&(t(),w.set(r,[e]))})};return t},W=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),E=(t,s,n,a,o)=>{if(t&&(e(s,a)||p.has(a)&&e(s,p.get(a))))return;C(n),c(a)&&(a=l(a)||a);let i=a;if(a instanceof Promise)a.then(e=>{a.status="fulfilled",a.value=e,m(["resolve",[n],e])}).catch(e=>{a.status="rejected",a.reason=e,m(["reject",[n],e])});else{!d.has(a)&&r(a)&&(i=h(a));let e=!u.has(i)&&d.get(i);e&&I(n,e)}o(i),m(["set",[n],a,s])},j={deleteProperty(e,t){let r=Reflect.get(e,t);C(t);let s=Reflect.deleteProperty(e,t);return s&&m(["delete",[t],r]),s},set(e,t,r,s){let n=Reflect.has(e,t),a=Reflect.get(e,t,s);return E(n,a,t,r,r=>{Reflect.set(e,t,r,s)}),!0},defineProperty(e,t,r){if(s(r)){let n=Reflect.getOwnPropertyDescriptor(e,t);if(!n||s(n))return E(!!n&&"value"in n,null==n?void 0:n.value,t,r.value,s=>{Reflect.defineProperty(e,t,{...r,value:s})}),!0}return Reflect.defineProperty(e,t,r)}},L=t(W,j);p.set(n,L);let A=[W,y,o,O];return d.set(L,A),Reflect.ownKeys(n).forEach(e=>{let t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(L[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(W,e,t)}),L})=>[h,d,u,e,t,r,s,n,a,o,p,f],[f]=p();function h(e={}){return f(e)}function g(e,t,r){let s;let n=d.get(e);n||console.warn("Please use proxy object");let a=[],o=n[3],l=!1,i=o(e=>{if(a.push(e),r){t(a.splice(0));return}s||(s=Promise.resolve().then(()=>{s=void 0,l&&t(a.splice(0))}))});return l=!0,()=>{l=!1,i()}}let m=h({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),b={state:m,subscribe(e){return g(m,()=>e(m))},push(e,t){e!==m.view&&(m.view=e,t&&(m.data=t),m.history.push(e))},reset(e){m.view=e,m.history=[e]},replace(e){m.history.length>1&&(m.history[m.history.length-1]=e,m.view=e)},goBack(){if(m.history.length>1){m.history.pop();let[e]=m.history.slice(-1);m.view=e}},setData(e){m.data=e}},y={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return"u">typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},isAndroid(){return y.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){let e=navigator.userAgent.toLowerCase();return y.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,r){if(y.isHttpUrl(e))return this.formatUniversalUrl(e,t,r);let s=e;s.includes("://")||(s=`${s=e.replaceAll("/","").replaceAll(":","")}://`),s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,r);let n=encodeURIComponent(t);return`${s}wc?uri=${n}`},formatUniversalUrl(e,t,r){if(!y.isHttpUrl(e))return this.formatNativeUrl(e,t,r);let s=e;s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,r);let n=encodeURIComponent(t);return`${s}wc?uri=${n}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(y.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{let[t]=e.split("?");localStorage.setItem(y.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(y.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"u">typeof localStorage&&localStorage.setItem(y.WCM_VERSION,"2.6.1")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;let t=null==(e=b.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t}},v="u">typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),w=h({enabled:v,userSessionId:"",events:[],connectedWalletId:void 0}),I={state:w,subscribe(e){return g(w.events,()=>e(function(e,t){let r=d.get(e);r||console.warn("Please use proxy object");let[s,n,a]=r;return a(s,n(),void 0)}(w.events[w.events.length-1])))},initialize(){w.enabled&&"u">typeof(null==crypto?void 0:crypto.randomUUID)&&(w.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){w.connectedWalletId=e},click(e){if(w.enabled){let t={type:"CLICK",name:e.name,userSessionId:w.userSessionId,timestamp:Date.now(),data:e};w.events.push(t)}},track(e){if(w.enabled){let t={type:"TRACK",name:e.name,userSessionId:w.userSessionId,timestamp:Date.now(),data:e};w.events.push(t)}},view(e){if(w.enabled){let t={type:"VIEW",name:e.name,userSessionId:w.userSessionId,timestamp:Date.now(),data:e};w.events.push(t)}}},C=h({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),O={state:C,subscribe(e){return g(C,()=>e(C))},setChains(e){C.chains=e},setWalletConnectUri(e){C.walletConnectUri=e},setIsCustomDesktop(e){C.isCustomDesktop=e},setIsCustomMobile(e){C.isCustomMobile=e},setIsDataLoaded(e){C.isDataLoaded=e},setIsUiLoaded(e){C.isUiLoaded=e},setIsAuth(e){C.isAuth=e}},W=h({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),E={state:W,subscribe(e){return g(W,()=>e(W))},setConfig(e){var t,r;I.initialize(),O.setChains(e.chains),O.setIsAuth(!!e.enableAuthMode),O.setIsCustomMobile(!!(null==(t=e.mobileWallets)?void 0:t.length)),O.setIsCustomDesktop(!!(null==(r=e.desktopWallets)?void 0:r.length)),y.setModalVersionInStorage(),Object.assign(W,e)}};var j=Object.defineProperty,L=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,M=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))A.call(t,r)&&M(e,r,t[r]);if(L)for(var r of L(t))k.call(t,r)&&M(e,r,t[r]);return e};let P="https://explorer-api.walletconnect.com",D="js-2.6.1";async function S(e,t){let r=U({sdkType:"wcm",sdkVersion:D},t),s=new URL(e,P);return s.searchParams.append("projectId",E.state.projectId),Object.entries(r).forEach(([e,t])=>{t&&s.searchParams.append(e,String(t))}),(await fetch(s)).json()}let N={async getDesktopListings(e){return S("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return S("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return S("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return S("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${P}/w3m/v1/getWalletImage/${e}?projectId=${E.state.projectId}&sdkType=wcm&sdkVersion=${D}`},getAssetImageUrl(e){return`${P}/w3m/v1/getAssetImage/${e}?projectId=${E.state.projectId}&sdkType=wcm&sdkVersion=${D}`}};var T=Object.defineProperty,x=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,$=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,V=(e,t)=>{for(var r in t||(t={}))R.call(t,r)&&$(e,r,t[r]);if(x)for(var r of x(t))_.call(t,r)&&$(e,r,t[r]);return e};let H=y.isMobile(),K=h({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),z={state:K,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=E.state;if("NONE"===e||"ALL"===t&&!e)return K.recomendedWallets;if(y.isArray(e)){let t={recommendedIds:e.join(",")},{listings:r}=await N.getAllListings(t),s=Object.values(r);s.sort((t,r)=>{let s=e.indexOf(t.id),n=e.indexOf(r.id);return s-n}),K.recomendedWallets=s}else{let{chains:e,isAuth:r}=O.state,s=e?.join(","),n=y.isArray(t),a={page:1,sdks:r?"auth_v1":void 0,entries:y.RECOMMENDED_WALLET_AMOUNT,chains:s,version:2,excludedIds:n?t.join(","):void 0},{listings:o}=H?await N.getMobileListings(a):await N.getDesktopListings(a);K.recomendedWallets=Object.values(o)}return K.recomendedWallets},async getWallets(e){let t=V({},e),{explorerRecommendedWalletIds:r,explorerExcludedWalletIds:s}=E.state,{recomendedWallets:n}=K;if("ALL"===s)return K.wallets;n.length?t.excludedIds=n.map(e=>e.id).join(","):y.isArray(r)&&(t.excludedIds=r.join(",")),y.isArray(s)&&(t.excludedIds=[t.excludedIds,s].filter(Boolean).join(",")),O.state.isAuth&&(t.sdks="auth_v1");let{page:a,search:o}=e,{listings:l,total:i}=H?await N.getMobileListings(t):await N.getDesktopListings(t),c=Object.values(l),d=o?"search":"wallets";return K[d]={listings:[...K[d].listings,...c],total:i,page:a??1},{listings:c,total:i}},getWalletImageUrl(e){return N.getWalletImageUrl(e)},getAssetImageUrl(e){return N.getAssetImageUrl(e)},resetSearch(){K.search={listings:[],total:0,page:1}}},B=h({open:!1}),J={state:B,subscribe(e){return g(B,()=>e(B))},async open(e){return new Promise(t=>{let{isUiLoaded:r,isDataLoaded:s}=O.state;if(y.removeWalletConnectDeepLink(),O.setWalletConnectUri(e?.uri),O.setChains(e?.chains),b.reset("ConnectWallet"),r&&s)B.open=!0,t();else{let e=setInterval(()=>{let r=O.state;r.isUiLoaded&&r.isDataLoaded&&(clearInterval(e),B.open=!0,t())},200)}})},close(){B.open=!1}};var q=Object.defineProperty,F=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Y=(e,t)=>{for(var r in t||(t={}))G.call(t,r)&&X(e,r,t[r]);if(F)for(var r of F(t))Q.call(t,r)&&X(e,r,t[r]);return e};let Z=h({themeMode:"u">typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),ee={state:Z,subscribe(e){return g(Z,()=>e(Z))},setThemeConfig(e){let{themeMode:t,themeVariables:r}=e;t&&(Z.themeMode=t),r&&(Z.themeVariables=Y({},r))}},et=h({open:!1,message:"",variant:"success"}),er={state:et,subscribe(e){return g(et,()=>e(et))},openToast(e,t){et.open=!0,et.message=e,et.variant=t},closeToast(){et.open=!1}}},57585:function(e,t,r){r.d(t,{WalletConnectModal:function(){return n}});var s=r(86734);let n=class{async initUi(){if("u">typeof window){await r.e(10).then(r.bind(r,53010));let e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),s.OptionsCtrl.setIsUiLoaded(!0)}}constructor(e){this.openModal=s.jb.open,this.closeModal=s.jb.close,this.subscribeModal=s.jb.subscribe,this.setTheme=s.ThemeCtrl.setThemeConfig,s.ThemeCtrl.setThemeConfig(e),s.ConfigCtrl.setConfig(e),this.initUi()}}}}]);
//# sourceMappingURL=585.c17d7501.chunk.js.map