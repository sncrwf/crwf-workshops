"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[1006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"prepare-env",title:"Prepare Environments",hide_table_of_contents:!0},i="Prepare Environments",s={unversionedId:"3.0-additional_content/prepare-env",id:"3.0-additional_content/prepare-env",title:"Prepare Environments",description:"Before installing App Engine Studio, review all platform requirements and define an organizational instance strategy to prepare for successful installation and configuration.",source:"@site/labs/collaborate-vancouver/3.0-additional_content/9000-prepare-envs.md",sourceDirName:"3.0-additional_content",slug:"/3.0-additional_content/prepare-env",permalink:"/workshops/labs/collaborate-vancouver/3.0-additional_content/prepare-env",draft:!1,tags:[],version:"current",sidebarPosition:9e3,frontMatter:{id:"prepare-env",title:"Prepare Environments",hide_table_of_contents:!0},sidebar:"labaemc",previous:{title:"Personas & Roles",permalink:"/workshops/labs/collaborate-vancouver/3.0-additional_content/personas"},next:{title:"Product Documentation",permalink:"/workshops/labs/collaborate-vancouver/3.0-additional_content/docs"}},l={},c=[{value:"Review platform requirements",id:"review-platform-requirements",level:2},{value:"Define instance strategy",id:"define-instance-strategy",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prepare-environments"},"Prepare Environments"),(0,a.kt)("p",null,"Before installing App Engine Studio, review all platform requirements and define an organizational instance strategy to prepare for successful installation and configuration."),(0,a.kt)("h2",{id:"review-platform-requirements"},"Review platform requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App Engine license required",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Contact your ServiceNow Account Manager for additional information on App Engine, or see ",(0,a.kt)("a",{parentName:"em",href:"https://www.servicenow.com/products/now-platform-app-engine.html"},"ServiceNow App Engine"))))),(0,a.kt)("li",{parentName:"ul"},"Instances must be on the same release (Ex. Utah)"),(0,a.kt)("li",{parentName:"ul"},"The admin role is required in all instances to install App Engine Studio and dependent applications from the ServiceNow Store")),(0,a.kt)("h2",{id:"define-instance-strategy"},"Define instance strategy"),(0,a.kt)("p",null,"When defining the instance strategy for App Engine Studio, it is recommended to leverage one production instance and at least two sub-production instances \u2013 however, App Engine Studio can support any number of sub-production instances as part of an instance strategy."),(0,a.kt)("p",null,"Applications are deployed to the production instance once developed and successfully tested in sub-production instances. One sub-production instance will serve as the development environment and the other as the test environment."),(0,a.kt)("p",null,"If your organization uses sandbox or staging environments in addition to test and development, they can be incorporated into the instance strategy accordingly based on organizational needs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(27835).Z,width:"1050",height:"188"}),"\n",(0,a.kt)("em",{parentName:"p"},"Example instance strategy with one production instance and three sub-production instances")),(0,a.kt)("p",null,"Sub-production instances that are most similarly configured to your production instance are the best candidates for test and stage environments. This way, administrators can more accurately find issues that may arise if the application is deployed to production."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For more information see ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.servicenow.com/csh?topicname=aes-instance-strategy.html&version=latest"},"Product Docs: Instance Strategy for App Engine Studio")))))}u.isMDXComponent=!0},27835:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-07-07-12-06-36-63dc8027eb8f7dfc9b0ef7ab07f46431.png"}}]);