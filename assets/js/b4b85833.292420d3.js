"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[6967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(n),v=a,f=c["".concat(s,".").concat(v)]||c[v]||d[v]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},67888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={id:"environment",title:"2. Controller Environment",hide_table_of_contents:!0,draft:!1},o="Exercise: Create Controller Environment",i={unversionedId:"1.0-implementation/1.2-dev/environment",id:"1.0-implementation/1.2-dev/environment",title:"2. Controller Environment",description:"Estimated Time to Complete: 10 minutes",source:"@site/labs/collaborate-vancouver/1.0-implementation/1.2-dev/2-dev-environment.md",sourceDirName:"1.0-implementation/1.2-dev",slug:"/1.0-implementation/1.2-dev/environment",permalink:"/labs/collaborate-vancouver/1.0-implementation/1.2-dev/environment",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"environment",title:"2. Controller Environment",hide_table_of_contents:!0,draft:!1},sidebar:"labaemc",previous:{title:"1. Credential Alias",permalink:"/labs/collaborate-vancouver/1.0-implementation/1.2-dev/credential"},next:{title:"3. Collaboration Descriptors",permalink:"/labs/collaborate-vancouver/1.0-implementation/1.2-dev/collaboration"}},s={},m=[{value:"Estimated Time to Complete: 10 minutes",id:"estimated-time-to-complete-10-minutes",level:5},{value:"Overview",id:"overview",level:2},{value:"Before Exercise",id:"before-exercise",level:3},{value:"After Exercise",id:"after-exercise",level:3},{value:"Instructions",id:"instructions",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2}],p={toc:m},c="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exercise-create-controller-environment"},"Exercise: Create Controller Environment"),(0,a.kt)("h5",{id:"estimated-time-to-complete-10-minutes"},"Estimated Time to Complete: 10 minutes"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,'Next up, you will add a "Controller" Environment record to your Dev instance.  '),(0,a.kt)("p",null,"It will contain the details for Dev to access the Controller Environment which is the Prod instance."),(0,a.kt)("p",null,'Production is considered the "Controller" Environment as that is where App Engine Management Center is installed and orchestrates activities from. '),(0,a.kt)("h3",{id:"before-exercise"},"Before Exercise"),(0,a.kt)("mermaid",{value:"graph LR\n    Dev[Development Instance]\n    class Dev devStyle\n    classDef devStyle fill:#D5F7FF,stroke:#B0BAD3,stroke-width:2px,color:#333;"}),(0,a.kt)("h3",{id:"after-exercise"},"After Exercise"),(0,a.kt)("mermaid",{value:'graph \n    subgraph Development[Development Instance]\n        Prod("#quot; AEMC Controller #quot;\n        Environment record\n        (Prod)")\n    end\n    class Development devStyle\n    class Prod envStyle\n    classDef devStyle fill:#D5F7FF,stroke:#B0BAD3,stroke-width:2px,color:#333;\n    classDef envStyle fill:#F3F3F3,stroke:#B0BAD3,stroke-width:2px,color:#333;'}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in ",(0,a.kt)("strong",{parentName:"li"},"DEV"),".")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"All")," >> type ",(0,a.kt)("strong",{parentName:"li"},"environment")," >> click ",(0,a.kt)("strong",{parentName:"li"},"Environments")," ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(4257).Z,width:"323",height:"317"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"New")," in the top-right.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(89027).Z,width:"102",height:"52"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Complete the form using the information below. ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AEMC Controller")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Instance Type")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Production")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Prod Instance URL")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("img",{src:n(62671).Z,width:"658",height:"32"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Instance credential")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Pipeline_Credentials")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Is Controller?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"CHECK THE BOX"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Instance Id")),(0,a.kt)("td",{parentName:"tr",align:"left"},"This will auto populate after clicking Validate.")))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Validate"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(23474).Z,width:"330",height:"129"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(5628).Z,width:"617",height:"144"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Submit")," to finish creating the ",(0,a.kt)("strong",{parentName:"li"},"Prod")," environment record.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(24300).Z,width:"276",height:"143"})),(0,a.kt)("h2",{id:"lessons-learned"},"Lessons Learned"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Importance of the Controller Environment")),(0,a.kt)("p",null," Setting up the Controller Environment is crucial for the operation of the App Engine Management Center. This exercise emphasizes the vital role of the Production instance, as it's where AEMC is installed and from where it orchestrates activities."))}d.isMDXComponent=!0},89027:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},4257:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-07-05-09-45-11-4083ff184d3c3b1c9cf6422236c5b672.png"},5628:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-07-05-13-56-23-52cf19773dbf207bdcfde37e2b88ffcd.png"},24300:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-07-11-15-59-53-9e7d3149be45883abb55e23544b94995.png"},23474:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-07-11-16-01-35-7540a499cd85ae6f22e81b701210ab76.png"},62671:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-08-10-13-17-01-22eab83e25ea01cf7f77e777b02ba8f7.png"}}]);