(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{51848:function(e,t,n){Promise.resolve().then(n.bind(n,56922))},56922:function(e,t,n){"use strict";n.r(t),n.d(t,{SourceCodeBrowser:function(){return X},SourceCodeBrowserContext:function(){return Q}});var r=n(57437),l=n(2265),i=n(30415),a=n.n(i),o=n(72999),s=n(16630),u=n(91067),c=n(1589),d=n(24033),f=n(1592),v=n(39311),h=n(61574);let m=e=>{let{className:t,...n}=e;return(0,r.jsx)(h.eh,{className:(0,v.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",t),...n})},p=h.s_,x=e=>{let{withHandle:t,className:n,...l}=e;return(0,r.jsx)(h.OT,{className:(0,v.cn)("border-bg relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",n),...l,children:t&&(0,r.jsx)("div",{className:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"})})};var g=n(33555);let j=e=>{let{className:t}=e,{currentFileRoutes:n,setActivePath:i,activePath:a}=l.useContext(Q);return(0,r.jsxs)("div",{className:(0,v.cn)("flex flex-nowrap items-center gap-1",t),children:[(0,r.jsx)("div",{className:"cursor-pointer font-medium text-primary hover:underline",onClick:e=>i(void 0),children:"Repositories"}),(0,r.jsx)("div",{children:"/"}),null==n?void 0:n.map((e,t)=>{let a=0===t&&(null==n?void 0:n.length)>1,o=t===n.length-1;return(0,r.jsxs)(l.Fragment,{children:[(0,r.jsx)("div",{className:(0,v.cn)(a||o?"font-bold":"font-medium",o?"":"cursor-pointer text-primary hover:underline",a?"hover:underline":void 0),onClick:t=>i(e.fullPath),children:e.name}),"file"!==e.file.kind&&(0,r.jsx)("div",{children:"/"})]},e.fullPath)}),!!(null==n?void 0:n.length)&&!!a&&(0,r.jsx)(g.q,{value:a})]})};var b=n(83390),y=n(95376);function k(e,t){let[n,r]=l.useState(e);return l.useEffect(()=>{let n=setTimeout(()=>{r(e)},t);return()=>clearTimeout(n)},[e,t]),n}var N=n(84168),w=n(25645),S=n(32553),T=n(24144);function E(e){var t;return e?null===(t=e.split("/"))||void 0===t?void 0:t[0]:""}function P(e){return e?e.split("/").slice(1).join("/"):""}function C(e){if(!e)return"";let t=e.split("/");return t[t.length-1]}function I(e,t){if((0,T.Z)(e))return[];let n=[""],r=e.split("/"),l=t?r.length:r.length-1;for(let e=0;e<l;e++)n.push(r.slice(0,e+1).join("/"));return n}let R=e=>{let{className:t,loading:n,initialized:i}=e,{activePath:a,currentFileRoutes:o,setActivePath:s,fileTreeData:u}=l.useContext(Q),c=l.useMemo(()=>(function(e,t){if(!(null==e?void 0:e.length))return[];if(t){let n=t.split("/"),r=e;for(;n.length;){let e=n.shift(),t=(0,b.Z)(r,t=>t.name===e);if(null==t||!t.children)return[];r=null==t?void 0:t.children}return(null==r?void 0:r.map(e=>(0,y.Z)(e,"children")))||[]}{let t=e.map(e=>(0,y.Z)(e,"children"))||[];return t}})(u,a),[u,a]),d=k(n,300),f=(null==o?void 0:o.length)>0,h=()=>{var e;let t=null===(e=o[(null==o?void 0:o.length)-2])||void 0===e?void 0:e.fullPath;s(t)},m=e=>{s(e.fullPath)};return(0,r.jsx)("div",{className:(0,v.cn)("text-base",t),children:d||!i?(0,r.jsx)(O,{}):(null==u?void 0:u.length)?(0,r.jsx)(S.iA,{children:(0,r.jsxs)(S.RM,{children:[f&&(0,r.jsx)(S.SC,{className:"cursor-pointer",onClick:e=>h(),children:(0,r.jsx)(S.pj,{className:"p-1 px-4",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("div",{className:"shrink-0",children:(0,r.jsx)(N.IconDirectorySolid,{style:{color:"rgb(84, 174, 255)"}})}),(0,r.jsx)("span",{className:"px-1 py-2",children:".."})]})})}),(0,r.jsx)(r.Fragment,{children:c.map(e=>(0,r.jsx)(S.SC,{children:(0,r.jsx)(S.pj,{className:"p-1 px-4 text-base",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("div",{className:"shrink-0",children:"dir"===e.file.kind?(0,r.jsx)(N.IconDirectorySolid,{style:{color:"rgb(84, 174, 255)"}}):(0,r.jsx)(N.IconFile,{})}),(0,r.jsx)("span",{onClick:t=>m(e),className:"cursor-pointer px-1 py-2 hover:text-primary hover:underline",children:C(e.fullPath)})]})})},e.fullPath))})]})}):(0,r.jsx)("div",{className:"flex justify-center py-8",children:"No indexed repository yet"})})};function O(){return(0,r.jsxs)("ul",{className:"space-y-3 p-2",children:[(0,r.jsx)(w.O,{}),(0,r.jsx)(w.O,{}),(0,r.jsx)(w.O,{}),(0,r.jsx)(w.O,{})]})}let A=l.createContext({}),Z=e=>{let{onSelectTreeNode:t,children:n,activePath:l,fileMap:i,updateFileMap:a,expandedKeys:o,toggleExpandedKey:s,initialized:u,fileTreeData:c}=e;return(0,r.jsx)(A.Provider,{value:{onSelectTreeNode:t,fileTreeData:c,expandedKeys:o,toggleExpandedKey:s,activePath:l,fileMap:i,updateFileMap:a,initialized:u},children:n})},M=e=>{let{level:t}=e,n=l.useMemo(()=>Array(t).fill(1),[t]);return(0,r.jsx)("div",{className:"flex h-full shrink-0 items-stretch",children:n.map((e,t)=>(0,r.jsx)("div",{className:"flex h-8 w-2 border-r border-transparent transition-colors duration-300 group-hover/filetree:border-border"},t))})},D=()=>(0,r.jsx)("div",{className:"absolute -left-2 h-8 w-1 rounded-md bg-primary"}),$=e=>{let{isActive:t,level:n,children:l,className:i,...a}=e;return(0,r.jsxs)("div",{className:(0,v.cn)("relative flex cursor-pointer items-stretch rounded-sm hover:bg-accent focus:bg-accent focus:text-accent-foreground",t&&"bg-accent",i),...a,children:[t&&(0,r.jsx)(D,{}),(0,r.jsx)(M,{level:n}),(0,r.jsxs)("div",{className:"flex flex-nowrap items-center gap-2 truncate whitespace-nowrap",children:[(0,r.jsx)("div",{className:"h-4 w-4 shrink-0"}),l]})]})},z=e=>{let{children:t,level:n,isActive:l,className:i,...a}=e;return(0,r.jsxs)("div",{className:(0,v.cn)("relative flex cursor-pointer items-stretch rounded-sm hover:bg-accent focus:bg-accent focus:text-accent-foreground",l?"bg-accent text-accent-foreground":void 0,i),...a,children:[l&&(0,r.jsx)(D,{}),(0,r.jsx)(M,{level:n}),(0,r.jsx)("div",{className:"flex flex-nowrap items-center gap-2 truncate whitespace-nowrap",children:t})]})},_=e=>{let{node:t,level:n}=e,{onSelectTreeNode:i,activePath:a}=l.useContext(A),o="file"===t.file.kind,s=t.fullPath===a;return(0,r.jsxs)($,{level:n,onClick:e=>{o&&(null==i||i(t))},isActive:s,children:[(0,r.jsx)(N.IconFile,{className:"shrink-0"}),(0,r.jsx)("div",{className:"truncate",children:null==t?void 0:t.name})]})},q=e=>{var t,n,i;let{node:a,level:o,root:s}=e,{fileMap:u,updateFileMap:d,expandedKeys:v,toggleExpandedKey:h,onSelectTreeNode:m,activePath:p}=l.useContext(A),x=l.useRef(!1),g=l.useMemo(()=>E(a.fullPath),[a.fullPath]),j=s?"":a.file.basename,b=v.has(a.fullPath),y="dir"===a.file.kind&&!(null==u?void 0:null===(t=u[a.fullPath])||void 0===t?void 0:t.treeExpanded)&&b,{data:w,isValidating:S}=(0,c.Z)(y?"/repositories/".concat(g,"/resolve/").concat(j):null,f.Z,{revalidateIfStale:!1});l.useEffect(()=>{var e;if(!x.current&&(null==w?void 0:null===(e=w.entries)||void 0===e?void 0:e.length)){let e=w.entries.reduce((e,t)=>{let n="".concat(g,"/").concat(t.basename);return{...e,[n]:{file:t,name:C(n),fullPath:n,treeExpanded:!1}}},{});d(e),x.current=!0}},[w]);let T=k(S,100),P=!!(null==a?void 0:null===(n=a.children)||void 0===n?void 0:n.length);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(z,{level:o,onClick:e=>{null==m||m(a)},isActive:p===a.fullPath,children:[(0,r.jsx)("div",{className:"flex h-8 shrink-0 items-center hover:bg-primary/10 hover:text-popover-foreground",onClick:e=>{T||(h(a.fullPath),e.stopPropagation())},children:T&&!x.current?(0,r.jsx)(N.IconSpinner,{}):b?(0,r.jsx)(N.IconChevronDown,{}):(0,r.jsx)(N.IconChevronRight,{})}),(0,r.jsx)("div",{className:"shrink-0",style:{color:"rgb(84, 174, 255)"},children:b?(0,r.jsx)(N.IconDirectoryExpandSolid,{}):(0,r.jsx)(N.IconDirectorySolid,{})}),(0,r.jsx)("div",{className:"truncate",children:null==a?void 0:a.name})]}),(0,r.jsx)(r.Fragment,{children:b&&P?(0,r.jsx)(r.Fragment,{children:null===(i=a.children)||void 0===i?void 0:i.map(e=>{let t=e.file.basename;return"dir"===e.file.kind?(0,r.jsx)(q,{node:e,level:o+1},t):(0,r.jsx)(_,{node:e,level:o+1},t)})}):null})]})},F=()=>{let{fileTreeData:e,initialized:t}=l.useContext(A);return t?(null==e?void 0:e.length)?(0,r.jsx)(r.Fragment,{children:null==e?void 0:e.map(e=>(0,r.jsx)(q,{root:!0,level:0,node:e},e.fullPath))}):(0,r.jsx)("div",{className:"flex h-full items-center justify-center",children:"No Data"}):(0,r.jsx)(L,{})},B=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,v.cn)("group/filetree",t),children:(0,r.jsx)(Z,{...n,children:(0,r.jsx)(F,{})})})};function L(){return(0,r.jsxs)("div",{className:"space-y-3 p-2",children:[(0,r.jsx)(w.O,{}),(0,r.jsx)(w.O,{className:"ml-4"}),(0,r.jsx)(w.O,{className:"ml-4"}),(0,r.jsx)(w.O,{}),(0,r.jsx)(w.O,{className:"ml-4"})]})}let U=a()(()=>Promise.all([n.e(8301),n.e(6401),n.e(5344),n.e(3830)]).then(n.bind(n,53830)),{loadableGenerated:{webpack:()=>[53830]},ssr:!1}),Q=l.createContext({}),H=e=>{let{children:t}=e,{searchParams:n,updateSearchParams:i}=function(){let e=(0,d.usePathname)(),t=(0,d.useRouter)(),n=(0,d.useSearchParams)();return{pathname:e,router:t,searchParams:n,updateSearchParams:r=>{let{set:l,del:i,replace:a,getNewPath:o}=r,s=new URLSearchParams(n);l&&Object.entries(l).forEach(e=>{let[t,n]=e;return s.set(t,n)}),i&&(Array.isArray(i)?i.forEach(e=>s.delete(e)):s.delete(i));let u=s.toString(),c="".concat(e).concat(u.length>0?"?".concat(u):"");if(o)return c;a?t.replace(c):t.push(c)},getQueryString:e=>{let t=new URLSearchParams(n);e&&Object.entries(e).forEach(e=>{let[n,r]=e;return t.set(n,r)});let r=t.toString();return r.length>0?"?".concat(r):""}}}(),a=l.useMemo(()=>{var e,t;return null!==(t=null===(e=n.get("path"))||void 0===e?void 0:e.toString())&&void 0!==t?t:""},[n]),[s,u]=l.useState(!1),[c,f]=l.useState({}),[v,h]=(0,l.useState)({}),[m,p]=(0,l.useState)({}),[x,g]=l.useState(new Set),j=l.useMemo(()=>{if(!a)return[];let e=[],t=a.split("/");for(let n=0;n<t.length;n++){let r=t.slice(0,n+1).join("/");e.push(null==c?void 0:c[r])}return(0,o.Z)(e)},[a,c]),b=l.useMemo(()=>(function e(t){if(!t.length)return[];for(let n of(t.sort((e,t)=>{let n="file"===e.file.kind?1:0,r="file"===t.file.kind?1:0;return n-r||e.name.localeCompare(t.name)}),t))(null==n?void 0:n.children)&&e(n.children);return t})(function(e){let t=[];if(!e)return t;let n=Object.keys(e);for(let r of n){let n=e[r],l=r.split("/"),i=t;for(let e=0;e<l.length;e++){let t=l[e],a=null==i?void 0:i.find(e=>e.name===t);if(a)i=a.children||[];else{let e={file:n.file,name:t,fullPath:r,children:[]};i.push(e),i=e.children}}}return t}(c)),[c]);return(0,r.jsx)(Q.Provider,{value:{initialized:s,setInitialized:u,codeMap:v,setCodeMap:h,fileMetaMap:m,setFileMetaMap:p,activePath:a,setActivePath:e=>{e?i({set:{path:e}}):i({del:"path"})},fileMap:c,updateFileMap:e=>{e&&f({...c,...e})},expandedKeys:x,setExpandedKeys:g,toggleExpandedKey:e=>{let t=x.has(e),n=new Set(x);t?n.delete(e):n.add(e),g(n)},currentFileRoutes:j,fileTreeData:b},children:t})},W=e=>{var t;let{className:n}=e,{activePath:i,setActivePath:a,codeMap:o,setCodeMap:s,updateFileMap:d,fileMetaMap:h,setFileMetaMap:g,fileMap:b,initialized:y,setInitialized:k,expandedKeys:N,toggleExpandedKey:w,setExpandedKeys:S,fileTreeData:T}=l.useContext(Q),O=l.useMemo(()=>E(i),[i]),A=l.useMemo(()=>P(i),[i]),Z=l.useMemo(()=>{var e,t;let n=i&&(null==b?void 0:null===(t=b[i])||void 0===t?void 0:null===(e=t.file)||void 0===e?void 0:e.kind)==="file";return n&&!(0,u.Z)(o,i)},[i,b,o]),M=l.useMemo(()=>{var e,t;let n=i&&(null==b?void 0:null===(t=b[i])||void 0===t?void 0:null===(e=t.file)||void 0===e?void 0:e.kind)==="file";return n&&!(0,u.Z)(h,i)},[i,b,o]),D=l.useMemo(()=>{var e,t,n;if(!y)return!1;let r=i&&(null==b?void 0:null===(t=b[i])||void 0===t?void 0:null===(e=t.file)||void 0===e?void 0:e.kind)==="dir";return r&&!(null==b?void 0:null===(n=b[i])||void 0===n?void 0:n.treeExpanded)},[i,b,y]),{data:$}=(0,c.Z)(Z?"/repositories/".concat(O,"/resolve/").concat(A):null,e=>(0,f.Z)(e,{format:"text"})),{data:z}=(0,c.Z)(M?"/repositories/".concat(O,"/meta/").concat(A):null,f.Z),{data:_,isLoading:q}=(0,c.Z)(D?"/repositories/".concat(O,"/resolve/").concat(A):null,f.Z);l.useEffect(()=>{let e=async()=>{let{patchMap:e,expandedKeys:t}=await K(i);e&&d(e),(null==t?void 0:t.length)&&S(new Set(t)),k(!0)};e()},[]),l.useEffect(()=>{$&&i&&s(e=>({...e,[i]:$}))},[$]),l.useEffect(()=>{z&&i&&g(e=>({...e,[i]:z}))},[z]),l.useEffect(()=>{(()=>{var e;if((null==_?void 0:null===(e=_.entries)||void 0===e?void 0:e.length)&&i){let e=E(i),t={};for(let n of _.entries){let r="".concat(e,"/").concat(n.basename);t[r]={file:n,name:C(r),fullPath:r,treeExpanded:!1}}d(t);let n=I(i,!0);(null==n?void 0:n.length)&&S(e=>{let t=new Set(e);for(let e of n)t.add(e);return t})}})()},[_]);let F=i?null==b?void 0:null===(t=b[i])||void 0===t?void 0:t.file:void 0,L=(null==F?void 0:F.kind)==="file",H=(null==F?void 0:F.kind)==="dir"||""===i;return(0,r.jsxs)(m,{direction:"horizontal",className:(0,v.cn)(n),children:[(0,r.jsx)(p,{defaultSize:20,minSize:20,children:(0,r.jsx)("div",{className:"h-full overflow-hidden py-2",children:(0,r.jsx)(B,{className:"h-full overflow-y-auto overflow-x-hidden px-4",onSelectTreeNode:e=>{a(e.fullPath)},activePath:i,fileMap:b,updateFileMap:d,expandedKeys:N,toggleExpandedKey:w,initialized:y,fileTreeData:T})})}),(0,r.jsx)(x,{className:"w-1 hover:bg-card active:bg-card"}),(0,r.jsx)(p,{defaultSize:80,minSize:30,children:(0,r.jsxs)("div",{className:"flex h-full flex-col overflow-y-auto px-4 pb-4",children:[(0,r.jsx)(j,{className:"sticky top-0 z-10 bg-background py-4"}),(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)(R,{loading:q,initialized:y,className:"rounded-lg border ".concat(H?"block":"hidden")}),(0,r.jsx)(U,{className:"rounded-lg border py-2 ".concat(L?"block":"hidden")})]})]})})]})},X=e=>(0,r.jsx)(H,{children:(0,r.jsx)(W,{className:"source-code-browser",...e})});async function K(e){let t=E(e),n=P(e);try{let e=await r(),{defaultEntries:n,expandedDir:l}=await i(e),a={};for(let n of e)a[n.basename]={file:n,name:n.basename,fullPath:n.basename,treeExpanded:n.basename===t};for(let e of n){let n="".concat(t,"/").concat(e.basename);a[n]={file:e,name:C(n),fullPath:n,treeExpanded:l.includes(e.basename)}}let o=l.map(e=>[t,e].filter(Boolean).join("/"));return{patchMap:a,expandedKeys:o}}catch(e){return console.error(e),{}}async function r(){try{let e=await (0,f.Z)("/repositories/resolve/");return null==e?void 0:e.entries}catch(e){return[]}}async function l(e){try{if(!t)return;let l=(0,s.Z)(e,e=>e.basename===t);if(l<0)return;let i=I(n),a=i.map(e=>()=>(0,f.Z)("/repositories/".concat(t,"/resolve/").concat(e))),o=await Promise.all(a.map(e=>e())),u=[];for(let e of o){var r;(null===(r=e.entries)||void 0===r?void 0:r.length)&&(u=[...u,...e.entries])}return u}catch(e){console.error(e)}}async function i(e){let r={defaultEntries:[],expandedDir:[]};try{if(t&&(null==e?void 0:e.length)){let t=await l(e),i=I(n);(null==t?void 0:t.length)&&(r.defaultEntries=t),(null==i?void 0:i.length)&&(r.expandedDir=i)}}catch(e){console.error(e)}return r}}},33555:function(e,t,n){"use strict";n.d(t,{q:function(){return o}});var r=n(57437);n(2265);var l=n(77723),i=n(93023),a=n(84168);function o(e){let{className:t,value:n,...o}=e,{isCopied:s,copyToClipboard:u}=(0,l.m)({timeout:2e3});return n?(0,r.jsxs)(i.z,{variant:"ghost",size:"icon",className:t,onClick:()=>{s||u(n)},...o,children:[s?(0,r.jsx)(a.IconCheck,{className:"text-green-600"}):(0,r.jsx)(a.IconCopy,{}),(0,r.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},25645:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=n(57437),l=n(39311);function i(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,l.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},32553:function(e,t,n){"use strict";n.d(t,{RM:function(){return s},SC:function(){return c},iA:function(){return a},pj:function(){return f},ss:function(){return d},xD:function(){return o}});var r=n(57437),l=n(2265),i=n(39311);let a=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:(0,i.cn)("w-full caption-bottom text-sm",n),...l})})});a.displayName="Table";let o=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("thead",{ref:t,className:(0,i.cn)("[&_tr]:border-b",n),...l})});o.displayName="TableHeader";let s=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,i.cn)("[&_tr:last-child]:border-0",n),...l})});s.displayName="TableBody";let u=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",n),...l})});u.displayName="TableFooter";let c=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("tr",{ref:t,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",n),...l})});c.displayName="TableRow";let d=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("th",{ref:t,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",n),...l})});d.displayName="TableHead";let f=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("td",{ref:t,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",n),...l})});f.displayName="TableCell";let v=l.forwardRef((e,t)=>{let{className:n,...l}=e;return(0,r.jsx)("caption",{ref:t,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",n),...l})});v.displayName="TableCaption"},77723:function(e,t,n){"use strict";n.d(t,{m:function(){return o}});var r=n(2265),l=n(2390),i=n.n(l),a=n(71424);function o(e){let{timeout:t=2e3,onError:n}=e,[l,o]=r.useState(!1),s=()=>{o(!0),setTimeout(()=>{o(!1)},t)},u=e=>{if("function"==typeof n){null==n||n(e);return}a.A.error("Failed to copy.")};return{isCopied:l,copyToClipboard:e=>{var t;if(e){if(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)navigator.clipboard.writeText(e).then(s).catch(u);else{let t=i()(e);t?s():u()}}}}}},58001:function(e,t,n){"use strict";n.d(t,{Dp:function(){return b},Ho:function(){return y},QJ:function(){return S},Rn:function(){return x},av:function(){return C},bW:function(){return m},kP:function(){return T},pC:function(){return p},zq:function(){return w}});var r,l,i=n(57437),a=n(2265),o=n(24033),s=n(53771),u=n(99109),c=n(26566),d=n.n(c),f=n(58835),v=n(39311);(r=l||(l={}))[r.SignIn=0]="SignIn",r[r.SignOut=1]="SignOut",r[r.Refresh=2]="Refresh";let h="_tabby_auth",m=()=>{if((0,v.S_)()){let e=localStorage.getItem(h);if(e)try{return JSON.parse(e)}catch(e){}}},p=e=>{localStorage.setItem(h,JSON.stringify(e))},x=()=>{localStorage.removeItem(h),window.dispatchEvent(new StorageEvent("storage",{storageArea:window.localStorage,url:window.location.href,key:h}))};function g(e,t){var n,r;let i=function(e,t){switch(t.type){case l.SignIn:case l.Refresh:return{status:"authenticated",data:t.data};case l.SignOut:return{status:"unauthenticated",data:void 0}}}(0,t);return e.status==i.status&&(n=e.data,r=i.data,(null==n?void 0:n.accessToken)===(null==r?void 0:r.accessToken)&&(null==n?void 0:n.refreshToken)===(null==r?void 0:r.refreshToken))?e:i}let j=a.createContext({}),b=(0,f.BX)("\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n"),y=e=>{let{children:t}=e,n=a.useRef(!1),[r]=d()(h,void 0),[o,u]=a.useReducer(g,{status:"loading",data:void 0});a.useEffect(()=>{n.current=!0,(null==r?void 0:r.accessToken)&&(null==r?void 0:r.refreshToken)?u({type:l.SignIn,data:r}):u({type:l.SignOut})},[]),a.useEffect(()=>{n.current&&((null==r?void 0:r.accessToken)&&(null==r?void 0:r.refreshToken)?u({type:l.SignIn,data:r}):u({type:l.SignOut}))},[r]);let c=a.useMemo(()=>{var e,t;if((null==o?void 0:o.status)=="authenticated")try{let{sub:e,is_admin:t}=(0,s.o)(o.data.accessToken);return{data:{email:e,isAdmin:t,accessToken:o.data.accessToken},status:o.status}}catch(t){return console.error("jwt decode failed"),{status:null!==(e=null==o?void 0:o.status)&&void 0!==e?e:"loading",data:{email:"",isAdmin:!1,accessToken:o.data.accessToken}}}return{status:null!==(t=null==o?void 0:o.status)&&void 0!==t?t:"loading",data:null}},[o]);return(0,i.jsx)(j.Provider,{value:{authState:o,dispatch:u,session:c},children:t})};class k extends Error{constructor(){super("AuthProvider is missing. Please add the AuthProvider at root level")}}function N(){let e=a.useContext(j);if(!e)throw new k;return e}function w(){let{dispatch:e}=N(),[t,n]=d()(h,void 0);return async t=>(n({accessToken:t.accessToken,refreshToken:t.refreshToken}),e({type:l.SignIn,data:t}),!0)}function S(){let{dispatch:e}=N(),[t,n]=d()(h,void 0);return async()=>{n(void 0),e({type:l.SignOut})}}function T(){let{session:e}=N();return e}let E=(0,f.BX)("\n  query GetIsAdminInitialized {\n    isAdminInitialized\n  }\n"),P=["/auth/signin","/auth/signup"];function C(){let[{data:e}]=(0,u.aM)({query:E}),t=(0,o.useRouter)(),n=(0,o.usePathname)(),{data:r,status:l}=T();return a.useEffect(()=>{"loading"!==l&&("authenticated"===l||((null==e?void 0:e.isAdminInitialized)===!1?t.replace("/auth/signup?isAdmin=true"):P.includes(n)||t.replace("/auth/signin")))},[e,l]),r}},1592:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(34084),l=n(58001),i=n(7820);let a=!1,o=[];async function s(e,t){let n=await fetch(e,u(t));if(401!==n.status)return(null==t?void 0:t.format)==="text"?n.text():n.json();{var r,i;if(a)return new Promise(n=>{o.push({url:e,init:t,resolve:n})});let n=null===(r=(0,l.bW)())||void 0===r?void 0:r.refreshToken;if(!n){(0,l.Rn)();return}a=!0;let s=await c(n),u=null==s?void 0:null===(i=s.data)||void 0===i?void 0:i.refreshToken;if(u){for((0,l.pC)({accessToken:u.accessToken,refreshToken:u.refreshToken}),a=!1;o.length;){let e=o.shift();null==e||e.resolve(d(e.url,e.init))}return d(e,t)}a=!1,o.length=0,(0,l.Rn)()}}function u(e){var t;let n=new Headers(null==e?void 0:e.headers);return n.append("authorization","Bearer ".concat(null===(t=(0,l.bW)())||void 0===t?void 0:t.accessToken)),{...e||{},headers:n}}async function c(e){let t=i.Lp.createRequestOperation("mutation",(0,r.h)(l.Dp,{refreshToken:e}));return i.Lp.executeMutation(t)}function d(e,t){return fetch(e,u(t)).then(e=>(null==t?void 0:t.format)==="text"?e.text():e.json())}},7820:function(e,t,n){"use strict";n.d(t,{Db:function(){return m},Lp:function(){return g},io:function(){return p}});var r,l=n(2265),i=n(69166),a=n(73997),o=n(83074),s=n(53771),u=n(24144),c=n(99109),d=n(18398),f=n(58001),v=n(57166),h=n(68571);function m(e,t){var n;let[r,l]=(0,c.Db)(e),i=(null==t?void 0:t.form)?(n=t.form,e=>{let{graphQLErrors:t=[]}=e;for(let e of t)if(e.extensions&&e.extensions["validation-errors"]){let t=e.extensions["validation-errors"];for(let e of t.errors)n.setError(e.path,e)}else(null==e?void 0:e.originalError)&&n.setError("root",e.originalError)}):void 0,a=async e=>{let n;try{if(null==(n=await l(e))?void 0:n.error)i&&i(n.error),(null==t?void 0:t.onError)&&t.onError(n.error);else if(!(0,u.Z)(null==n?void 0:n.data)){var r;null==t||null===(r=t.onCompleted)||void 0===r||r.call(t,n.data)}}catch(e){(null==t?void 0:t.onError)&&t.onError(e);return}return n};return a}function p(e){let{data:t,error:n}=e,[r,i]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{r||(0,u.Z)(t)&&(0,u.Z)(n)||i(!0)},[t,n]),[r,i]}let x=e=>Date.now()>1e3*e,g=new d.KU({url:"".concat(null!==(r=h.env.NEXT_PUBLIC_TABBY_SERVER_URL)&&void 0!==r?r:"","/graphql"),requestPolicy:"cache-and-network",exchanges:[(0,a.HG)({resolvers:{Query:{invitations:(0,o.N)(),repositories:(0,o.N)()}},updates:{Mutation:{deleteInvitation(e,t,n,r){e.deleteInvitation&&n.inspectFields("Query").filter(e=>"invitations"===e.fieldName).forEach(e=>{n.updateQuery({query:v.l,variables:e.arguments},e=>{var n;return(null==e?void 0:null===(n=e.invitations)||void 0===n?void 0:n.edges)&&(e.invitations.edges=e.invitations.edges.filter(e=>e.node.id!==t.id)),e})})},deleteRepository(e,t,n,r){e.deleteRepository&&n.inspectFields("Query").filter(e=>"repositories"===e.fieldName).forEach(e=>{n.updateQuery({query:v.S,variables:e.arguments},e=>{var n;return(null==e?void 0:null===(n=e.repositories)||void 0===n?void 0:n.edges)&&(e.repositories.edges=e.repositories.edges.filter(e=>e.node.id!==t.id)),e})})}}}}),(0,i.M)(async e=>{let t=(0,f.bW)(),n=null==t?void 0:t.accessToken,r=null==t?void 0:t.refreshToken;return{addAuthToOperation:t=>n?e.appendHeaders(t,{Authorization:"Bearer ".concat(n)}):t,didAuthError(e,t){var n;return(null==e?void 0:null===(n=e.response)||void 0===n?void 0:n.status)===401||e.graphQLErrors.some(e=>{var t;return(null==e?void 0:null===(t=e.extensions)||void 0===t?void 0:t.code)==="UNAUTHORIZED"})},willAuthError(e){let t=(0,f.bW)();if(n=null==t?void 0:t.accessToken,r=null==t?void 0:t.refreshToken,"mutation"===e.kind&&e.query.definitions.some(e=>{var t;return"OperationDefinition"===e.kind&&(null===(t=e.name)||void 0===t?void 0:t.value)&&["tokenAuth","registerUser"].includes(e.name.value)})||r&&"mutation"===e.kind&&e.query.definitions.some(e=>{var t;return"OperationDefinition"===e.kind&&(null==e?void 0:null===(t=e.name)||void 0===t?void 0:t.value)==="refreshToken"}))return!1;if(!n)return!0;try{let{exp:e}=(0,s.o)(n);return!e||x(e)}catch(e){return!0}},async refreshAuth(){if(r){var t;let l=await e.mutate(f.Dp,{refreshToken:r});(null===(t=l.data)||void 0===t?void 0:t.refreshToken)?(n=l.data.refreshToken.accessToken,r=l.data.refreshToken.refreshToken,(0,f.pC)({accessToken:n,refreshToken:r})):(0,f.Rn)()}else(0,f.Rn)()}}}),d.Ek]})},57166:function(e,t,n){"use strict";n.d(t,{S:function(){return i},l:function(){return l}});var r=n(58835);let l=(0,r.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),i=(0,r.BX)("\n  query repositories($after: String, $before: String, $first: Int, $last: Int) {\n    repositories(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n")}},function(e){e.O(0,[1091,2195,1424,5489,6630,713,6887,4402,1894,2971,7864,1744],function(){return e(e.s=51848)}),_N_E=e.O()}]);