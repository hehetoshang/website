(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,93642,e=>{"use strict";let t=(0,e.i(15080).default)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);e.s(["BookOpen",0,t],93642)},76633,e=>{"use strict";let t=(0,e.i(15080).default)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);e.s(["RefreshCw",0,t],76633)},56235,e=>{"use strict";let t=(0,e.i(15080).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",0,t],56235)},63371,e=>{"use strict";var t=e.i(53153),r=e.i(26879),a=e.i(92298),s=e.i(93642),n=e.i(82709),o=e.i(28762),i=e.i(32339),l=e.i(52726);async function c(e,t,r){let{serverUrl:a}=n.useServerStore.getState(),s=new URLSearchParams;return s.append("email",e),s.append("username",t),r&&("string"==typeof r?s.append("captcha_code",r):Object.keys(r).forEach(e=>{s.append(e,r[e])})),(await (0,o.request)(`${a}/api/user/reset`,{method:"POST",body:s,credentials:"include"})).json()}e.s(["default",0,function(){(0,a.useRouter)();let{serverTitle:e,serverUrl:o}=(0,n.useServerStore)(),[d,u]=(0,r.useState)(""),[m,p]=(0,r.useState)(""),[f,h]=(0,r.useState)(!1),[g,x]=(0,r.useState)(""),[b,y]=(0,r.useState)(!1),[w,v]=(0,r.useState)(!1),j=async e=>{if(d.trim()&&m.trim()){h(!0),x(""),y(!1);try{let t=await c(d,m,e);"ok"===t.err?(v(!1),y(!0)):"captcha.invalid"===t.err||"captcha.expired"===t.err||"captcha.required"===t.err?(x(t.msg||"请输入人机验证码"),v(!0)):x(t.msg||"重置失败，请检查邮箱和用户名")}catch{x("无法连接服务器")}finally{h(!1)}}};return(0,t.jsx)("main",{className:"flex items-center justify-center min-h-screen app-warm-bg px-4",children:(0,t.jsxs)("div",{className:"relative w-full max-w-[410px] my-8 overflow-hidden rounded-[32px] app-glass p-10",children:[(0,t.jsx)("div",{className:"absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("button",{type:"button",onClick:()=>(0,l.requestAnimatedBack)("/"),"aria-label":"返回",className:"absolute -top-2 -left-2 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-foreground",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M15 18l-6-6 6-6"})})}),(0,t.jsx)("div",{className:"flex justify-center mb-8",children:(0,t.jsx)("div",{className:"w-16 h-16 rounded-2xl bg-primary shadow-lg shadow-primary/15 flex items-center justify-center",children:(0,t.jsx)(s.BookOpen,{className:"w-7 h-7 text-primary-foreground"})})}),(0,t.jsx)("h1",{className:"text-[22px] font-bold text-center text-foreground",children:"重置密码"}),(0,t.jsxs)("p",{className:"text-sm text-center mt-2 mb-8 text-muted-foreground",children:[e||"书库"," 将发送新密码到你的邮箱"]}),g&&(0,t.jsx)("div",{className:"bg-destructive/10 border border-destructive/30 text-destructive text-sm rounded-lg p-3 mb-4",children:g}),b&&(0,t.jsx)("div",{className:"bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-sm rounded-lg p-3 mb-4",children:"新密码已发送到您的邮箱，请查收并使用新密码登录。"}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),j()},className:"flex flex-col gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-sm mb-1.5 font-medium text-foreground",children:"邮箱"}),(0,t.jsx)("input",{type:"email",placeholder:"请输入注册时的邮箱",value:d,onChange:e=>u(e.target.value),autoComplete:"email",className:"w-full h-11 px-4 rounded-2xl bg-white/65 border border-amber-950/10 shadow-sm text-foreground text-sm outline-none transition-shadow duration-150 focus:ring-2 focus:ring-ring"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-sm mb-1.5 font-medium text-foreground",children:"用户名"}),(0,t.jsx)("input",{type:"text",placeholder:"请输入用户名",value:m,onChange:e=>p(e.target.value),autoComplete:"username",className:"w-full h-11 px-4 rounded-2xl bg-white/65 border border-amber-950/10 shadow-sm text-foreground text-sm outline-none transition-shadow duration-150 focus:ring-2 focus:ring-ring"})]}),(0,t.jsx)("button",{type:"submit",disabled:f||!d.trim()||!m.trim(),className:"w-full h-11 rounded-2xl bg-primary shadow-lg shadow-primary/15 text-primary-foreground text-base font-semibold cursor-pointer transition hover:opacity-90 active:opacity-80 mt-2 disabled:opacity-50",children:f?"提交中...":"重置密码"})]}),(0,t.jsxs)("p",{className:"text-sm text-center mt-6 text-muted-foreground",children:["记起密码了？"," ",(0,t.jsx)("button",{type:"button",onClick:()=>(0,l.requestAnimatedBack)("/login"),className:"font-medium text-primary hover:underline",children:"返回登录"})]}),(0,t.jsx)(i.CaptchaModal,{isOpen:w,serverUrl:o,onClose:()=>v(!1),onSuccess:e=>j(e)})]})]})})}])},32339,e=>{"use strict";var t=e.i(53153),r=e.i(26879),a=e.i(56235),s=e.i(76633),n=e.i(28762);let o=new Set(["static.geetest.com"]),i="moke-captcha-sandbox-v1";function l(){if("function"==typeof globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();if("function"==typeof globalThis.crypto?.getRandomValues)return Array.from(globalThis.crypto.getRandomValues(new Uint8Array(16)),e=>e.toString(16).padStart(2,"0")).join("");throw Error("无法创建安全验证码通道")}function c(e){let t=JSON.stringify(e);return void 0===t?"null":t.replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function d(e,t){let r,a;return`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    html, body { margin: 0; min-height: 100%; background: transparent; }
    body { display: flex; align-items: center; justify-content: center; font-family: sans-serif; }
    #geetest-container { width: 100%; display: flex; justify-content: center; }
  </style>
  ${r=c(i),a=c(t),`<script>
(() => {
  'use strict';
  const kind = ${r};
  const channel = ${a};
  const send = (type, payload) => {
    try {
      window.parent.postMessage({ kind, channel, type, payload }, '*');
    } catch {
      window.parent.postMessage({
        kind,
        channel,
        type: 'error',
        payload: '验证码返回了无法读取的结果',
      }, '*');
    }
  };

  window.__moke_captcha_success = (data) => send('success', data);
  window.__moke_captcha_error = (error) => send(
    'error',
    typeof error === 'string' ? error : '验证码验证失败',
  );
})();
</script>`}
</head>
<body>${e}</body>
</html>`}e.s(["CaptchaModal",0,function({isOpen:e,serverUrl:u,onClose:m,onSuccess:p}){let[f,h]=(0,r.useState)("loading"),[g,x]=(0,r.useState)(null),[b,y]=(0,r.useState)(""),[w,v]=(0,r.useState)(""),[j,k]=(0,r.useState)(!1),[N,S]=(0,r.useState)(""),C=(0,r.useRef)(null),_=(0,r.useRef)(""),[E,$]=(0,r.useState)(""),R=(0,r.useRef)(0),L=(0,r.useRef)(!1),[M]=(0,r.useState)(()=>{let e,t;return e=null,{load:async(r,a)=>{let s;t();let n={controller:new AbortController,callbacks:a};e=n,a.onLoadingChange(!0);let o=()=>e===n&&!n.controller.signal.aborted,i=()=>{e===n&&(e=null,a.onLoadingChange(!1))};try{s=await r(n.controller.signal)}catch{if(!o())return;try{a.onError("网络错误，无法加载验证码")}finally{i()}return}if(!o())return;let l=s&&"object"==typeof s?s:{};try{"ok"===l.err&&"string"==typeof l.image&&l.image?a.onImage(l.image):a.onError("string"==typeof l.msg&&l.msg?l.msg:"无法加载验证码")}finally{i()}},cancel:t=()=>{let t=e;t&&(e=null,t.controller.abort(),t.callbacks.onLoadingChange(!1))}}}),T=(0,r.useCallback)(e=>{L.current||(L.current=!0,p(e))},[p]);(0,r.useEffect)(()=>{let e=e=>{let t=function(e,t,r){if(!t||e.source!==t||"null"!==e.origin||!e.data||"object"!=typeof e.data)return null;let a=e.data;return a.kind!==i||a.channel!==r||"success"!==a.type&&"error"!==a.type?null:{type:a.type,payload:a.payload}}(e,C.current?.contentWindow,_.current);if(t){if("success"===t.type)return void T(t.payload);S("string"==typeof t.payload&&t.payload?t.payload:"验证码验证失败")}};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[T]);let U=(0,r.useCallback)(async()=>{let e=++R.current;k(!0),S("");try{let t=await (0,n.request)(`${u}/api/captcha/config`,{credentials:"include"}),r=await t.json();if(e!==R.current)return;if("ok"!==r.err||!r.config)throw Error(r.msg||"无法加载验证码配置");x(r.config)}catch(t){if(e!==R.current)return;h("error"),S(t instanceof Error?t.message:"网络错误，无法加载验证码"),k(!1)}},[u]),D=(0,r.useCallback)(()=>{M.cancel()},[M]),q=(0,r.useCallback)(()=>(S(""),M.load(async e=>(await (0,n.request)(`${u}/api/captcha/image`,{credentials:"include",signal:e})).json(),{onImage:y,onError:S,onLoadingChange:k})),[M,u]);if((0,r.useEffect)(()=>{g&&("image"===g.provider?h("image"):"geetest"===g.provider?h("geetest"):h("webcode"))},[g]),(0,r.useEffect)(()=>{let t=!1;if($(""),_.current="",e){if("image"===f)return q(),D;if("geetest"===f){if(!g)return;try{let e,t,r=l();_.current=r,$((e=function(e){let t;if(null==e||""===e)return"https://static.geetest.com/v4/gt4.js";if("string"!=typeof e)throw Error("极验 SDK 地址不受信任");try{t=new URL(e)}catch{throw Error("极验 SDK 地址不受信任")}if("https:"!==t.protocol||!o.has(t.hostname.toLowerCase())||""!==t.username||""!==t.password)throw Error("极验 SDK 地址不受信任");return t.href}(g.sdkUrl),t={captchaId:g.captchaId,product:"popup",language:"zho",...{https:!0,protocol:"https://"}},d(`<div id="geetest-container"></div>
<script>
(() => {
  'use strict';
  const fail = (message) => window.__moke_captcha_error(message);
  const sdk = document.createElement('script');
  sdk.src = ${c(e)};
  sdk.async = true;
  sdk.onerror = () => fail('极验 SDK 加载失败');
  sdk.onload = () => {
    try {
      if (typeof window.initGeetest4 !== 'function') {
        fail('极验 SDK 加载失败');
        return;
      }

      window.initGeetest4(${c(t)}, (gt) => {
        try {
          gt.appendTo('#geetest-container')
            .onSuccess(() => {
              const result = gt.getValidate() || {};
              window.__moke_captcha_success({
                provider: 'geetest',
                lot_number: result.lot_number,
                captcha_output: result.captcha_output,
                pass_token: result.pass_token,
                gen_time: result.gen_time,
              });
            })
            .onError(() => fail('极验验证失败'));
          gt.showCaptcha();
        } catch {
          fail('极验初始化失败');
        }
      });
    } catch {
      fail('极验初始化失败');
    }
  };
  document.head.appendChild(sdk);
})();
</script>`,r)))}catch(e){h("error"),S(e instanceof Error?e.message:"极验 SDK 加载失败")}return()=>{_.current=""}}if("webcode"===f){if(!g)return;(async()=>{try{let e="string"==typeof g.html?g.html:"string"==typeof g.webCode?g.webCode:"";if(!e){let t=encodeURIComponent(g.provider||""),r=await (0,n.request)(`${u}/api/captcha/web_code?provider=${t}`,{credentials:"include"});if(!r.ok)throw Error(`HTTP ${r.status}`);let a=await r.json();e="string"==typeof a.html?a.html:"string"==typeof a.web_code?a.web_code:""}if(!e)throw Error("未提供或无法获取页面代码");if(t)return;let r=l();_.current=r,$(d(e,r))}catch(r){if(t)return;let e=r instanceof Error?r.message:"网络错误";S(`获取 web 代码失败: ${e}`)}})()}return()=>{t=!0,_.current=""}}},[D,g,q,e,f,u]),(0,r.useEffect)(()=>{if(!e){D(),R.current+=1,_.current="",$(""),x(null),h("loading");return}v(""),y(""),S(""),L.current=!1,h("loading"),x(null),U()},[D,e,U]),!e)return null;let K=E?(0,t.jsx)("iframe",{ref:C,title:"geetest"===f?"极验验证码":"第三方验证码",sandbox:"allow-scripts",referrerPolicy:"no-referrer",srcDoc:E,className:`w-full border-0 bg-transparent ${"geetest"===f?"h-[360px]":"min-h-[220px]"}`}):(0,t.jsx)("div",{className:"flex h-[150px] items-center justify-center",children:(0,t.jsx)("div",{className:"h-8 w-8 animate-spin rounded-full border-2 border-primary/30 border-t-primary"})});return(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm",children:(0,t.jsxs)("div",{className:"relative w-full max-w-[320px] mx-4 rounded-xl p-6 bg-card border border-border shadow-lg",children:[(0,t.jsx)("button",{onClick:m,className:"absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors z-10",children:(0,t.jsx)(a.X,{className:"w-5 h-5"})}),(0,t.jsx)("h2",{className:"text-lg font-bold text-foreground mb-4",children:"安全验证"}),N&&(0,t.jsx)("div",{className:"bg-destructive/10 text-destructive text-sm rounded-lg p-2 mb-4 text-center",children:N}),"loading"===f&&(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center py-8",children:[(0,t.jsx)("div",{className:"w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mb-4"}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"正在加载安全验证..."})]}),"image"===f&&(0,t.jsxs)("form",{onSubmit:e=>{(e.preventDefault(),w.trim())?T(w.trim()):S("请输入验证码")},className:"flex flex-col gap-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-[120px] h-[44px] rounded-lg bg-muted border border-border overflow-hidden shrink-0 flex items-center justify-center",children:j?(0,t.jsx)("div",{className:"w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"}):b?(0,t.jsx)("img",{src:b,alt:"验证码",className:"w-full h-full object-cover cursor-pointer",onClick:q}):(0,t.jsx)("span",{className:"text-xs text-muted-foreground",children:"加载失败"})}),(0,t.jsx)("button",{type:"button",onClick:q,disabled:j,className:"p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted",title:"刷新验证码",children:(0,t.jsx)(s.RefreshCw,{className:`w-4 h-4 ${j?"animate-spin":""}`})})]}),(0,t.jsx)("div",{children:(0,t.jsx)("input",{type:"text",placeholder:"请输入图片中的字符",value:w,onChange:e=>v(e.target.value),className:"w-full h-11 px-4 rounded-lg bg-muted border border-border text-foreground text-sm outline-none focus:ring-2 focus:ring-ring",autoFocus:!0})}),(0,t.jsx)("button",{type:"submit",disabled:!w.trim()||j,className:"w-full h-11 rounded-lg bg-primary text-primary-foreground font-medium transition hover:opacity-90 active:opacity-80 disabled:opacity-50 mt-2",children:"确认"})]}),"geetest"===f&&(0,t.jsx)("div",{className:"flex flex-col items-center justify-center py-4 min-h-[150px]",children:K}),"webcode"===f&&(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center py-4 min-h-[150px]",children:[K,(0,t.jsx)("p",{className:"text-xs text-muted-foreground mt-4 mb-4 text-center",children:"验证码在隔离环境中运行，完成后将自动提交结果。"}),(0,t.jsx)("button",{type:"button",onClick:()=>{T({provider:g?.provider||"webcode",fallback:!0})},className:"w-full h-11 rounded-lg border border-primary text-primary font-medium transition hover:bg-primary/5 active:bg-primary/10",children:"我已完成验证"})]}),"error"===f&&(0,t.jsx)("div",{className:"flex flex-col items-center justify-center py-8",children:(0,t.jsx)("button",{type:"button",onClick:U,className:"px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition",children:"重试"})})]})})}],32339)}]);