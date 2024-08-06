"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[1595],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=i,g=h["".concat(l,".").concat(m)]||h[m]||d[m]||o;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={id:"create-the-spoke",title:"Create the Spoke",hide_table_of_contents:!0,draft:!1},r=void 0,s={unversionedId:"create-the-spoke",id:"create-the-spoke",title:"Create the Spoke",description:"Overview",source:"@site/labs/spokegen/3-create-spoke.md",sourceDirName:".",slug:"/create-the-spoke",permalink:"/labs/spokegen/create-the-spoke",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"create-the-spoke",title:"Create the Spoke",hide_table_of_contents:!0,draft:!1},sidebar:"spokegen",previous:{title:"Use Case",permalink:"/labs/spokegen/use-case"},next:{title:"Test the Spoke",permalink:"/labs/spokegen/test-the-spoke"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Instructions",id:"instructions",level:2}],p={toc:c},h="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this exercise, you will create a custom Integration Hub Spoke. "),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to your instance, then, on the main page, click ",(0,i.kt)("strong",{parentName:"li"},"All")," (1). Next, type ",(0,i.kt)("strong",{parentName:"li"},"flow")," (2) and click ",(0,i.kt)("strong",{parentName:"li"},"Flow Designer")," (3) to open the Flow Designer UI.\n",(0,i.kt)("img",{alt:"Alt text",src:a(49351).Z,width:"710",height:"564"}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Once you are in the ",(0,i.kt)("strong",{parentName:"li"},"Flow Designer")," UI, to access the Spoke Generator, select ",(0,i.kt)("strong",{parentName:"li"},"Create New")," (1) (located on the right-hand side of the screen), and then click on ",(0,i.kt)("strong",{parentName:"li"},"Spoke"),".\n",(0,i.kt)("img",{alt:"Alt text",src:a(37826).Z,width:"1335",height:"545"}))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Spoke Generator will request the following information from you: a thumbnail image (1) (you can upload a thumbnail image to serve as your Spoke logo; feel free to find a free image on Google Images and upload it here), a Spoke Name (2), and a Description (4)."),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Spoke Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Visitor Access")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"App Scope Name"),(0,i.kt)("td",{parentName:"tr",align:null},"This field is generated automatically from the Spoke Name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"This spoke will be used to verify if visitor has been registered in the Visitor Access app")))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Alt text",src:a(9409).Z,width:"984",height:"734"})))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Once you have set the value, click Create and Continue (1) as shown below:\n",(0,i.kt)("img",{alt:"Alt text",src:a(30284).Z,width:"740",height:"609"}))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"On the next screen, you will be prompted to select the method you wish to use for creating your new spoke. We intend to utilize the OpenAPI Specification method, as we have been furnished with the YAML file that describes the API and adheres to the OPENAPI Specification.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"OpenAPI Specification")," (1) then click ",(0,i.kt)("strong",{parentName:"li"},"Continue")," (2)\n",(0,i.kt)("img",{alt:"Alt text",src:a(88038).Z,width:"1019",height:"644"}))))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"On the next screen, ",(0,i.kt)("strong",{parentName:"li"},"Visitor Access: Add operations"),", this is where you can provide the YAML file. Click ",(0,i.kt)("strong",{parentName:"li"},"Import New")," (1), and then provide the url to the  YAML file, copy URL from the link here ",(0,i.kt)("a",{target:"_blank",href:a(61628).Z},"Swagger YAML File"),".\n",(0,i.kt)("img",{alt:"Alt text",src:a(12910).Z,width:"977",height:"526"}))),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Paste the URL copied in your clipboard in the previous step, then paste it in the ",(0,i.kt)("strong",{parentName:"li"},"OpenAPI URL")," field (1), then click ",(0,i.kt)("strong",{parentName:"li"},"Import")," (2)\n",(0,i.kt)("img",{alt:"Alt text",src:a(6378).Z,width:"1109",height:"538"}))),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Once the import is done you should see something similar to this:\n",(0,i.kt)("img",{alt:"Alt text",src:a(43051).Z,width:"707",height:"493"}))),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"Then click on ",(0,i.kt)("strong",{parentName:"li"},"Create New")," next to the ",(0,i.kt)("strong",{parentName:"li"},"Connection Alias field")," (1)\n",(0,i.kt)("img",{alt:"Alt text",src:a(30483).Z,width:"715",height:"434"}),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In ServiceNow, a Connection Alias is a configuration setting used to establish and oversee connections with external systems. It functions as an abstraction layer for connecting to external systems and streamlines the integration process within ServiceNow workflows and other components. Normally, when connecting ServiceNow to an external system, you must configure the URL of the endpoint (the third-party system) and specify how to authenticate with it. This is accomplished through Connection and Credentials settings in ServiceNow. In practice, it is essential to engage in discussions with the administrator of the remote system and coordinate with the security team before initiating this configuration.")))),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Connection alias name")," (1) type ",(0,i.kt)("strong",{parentName:"li"},"VisitorAppConnection")," and keep the ",(0,i.kt)("strong",{parentName:"li"},"Authentication Configuration Template")," with the default value ",(0,i.kt)("strong",{parentName:"li"},"Api Key Template")," (2), then click ",(0,i.kt)("strong",{parentName:"li"},"Create")," (3)\n",(0,i.kt)("img",{alt:"Alt text",src:a(27634).Z,width:"806",height:"324"}))),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Generate operation")," (1)\n",(0,i.kt)("img",{alt:"Alt text",src:a(34940).Z,width:"996",height:"582"}))),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},"The system will then prompt you to select which Spoke Action you want to create as shown below\n",(0,i.kt)("img",{alt:"Alt text",src:a(3685).Z,width:"809",height:"701"}),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For this lab, we are utilizing a very basic API designed explicitly for lab and educational purposes. This API consists of just one method, which is why only one action is visible. In real-world scenarios, most commercial applications you endeavor to integrate will have dozens or even hundreds of methods within their API. You will have the option to choose the methods you wish to utilize from ServiceNow and create Spoke Actions for them.")))),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"}," Check if a user exists")," (1) Action then click ",(0,i.kt)("strong",{parentName:"li"},"Publish")," (2)\n",(0,i.kt)("img",{alt:"Alt text",src:a(10817).Z,width:"804",height:"641"}))),(0,i.kt)("ol",{start:14},(0,i.kt)("li",{parentName:"ol"},"Click the newly created Spoke Action ",(0,i.kt)("strong",{parentName:"li"},"Check if a user exists")," (1) this will open the Action editor in Flow designer so we can inspect it\n",(0,i.kt)("img",{alt:"Alt text",src:a(77621).Z,width:"474",height:"300"}))),(0,i.kt)("ol",{start:15},(0,i.kt)("li",{parentName:"ol"},"Notice the Action Input section, the Inputs for that Spoke action was created automatically\n",(0,i.kt)("img",{alt:"Alt text",src:a(84137).Z,width:"1173",height:"536"}))),(0,i.kt)("ol",{start:16},(0,i.kt)("li",{parentName:"ol"},"Click the OpenAPI Step (1)\n",(0,i.kt)("img",{alt:"Alt text",src:a(44930).Z,width:"501",height:"330"}))),(0,i.kt)("ol",{start:17},(0,i.kt)("li",{parentName:"ol"},"Notice the step inputs, they are using the Action inputs, so the values from the Action Inputs will be passed as parameters when the API Call is made to the external system.\n",(0,i.kt)("img",{alt:"Alt text",src:a(24564).Z,width:"1171",height:"552"}))),(0,i.kt)("ol",{start:18},(0,i.kt)("li",{parentName:"ol"},"We need to update the Connection Alias in the Connection Details section. We have precreated in this lab instance a Connection record that point to the right API End point. We are going to use this one. ")),(0,i.kt)("ol",{start:19},(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Connection Alias field")," (1) then select ",(0,i.kt)("strong",{parentName:"li"},"VisitorAccess_ConnectionAlias")," (2)\n",(0,i.kt)("img",{alt:"Alt text",src:a(58163).Z,width:"835",height:"424"}))),(0,i.kt)("ol",{start:20},(0,i.kt)("li",{parentName:"ol"},"Notice the ",(0,i.kt)("strong",{parentName:"li"},"Base URL")," field was updated and displays the URL for the API End point. Those connection alias records are typically managed a by Security team or user with higher privileges.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"On the right hand-side notice the outputs available from the OpenAPI Step, expand the ",(0,i.kt)("strong",{parentName:"li"},"user")," (1) section as shown below:\n",(0,i.kt)("img",{alt:"Alt text",src:a(28179).Z,width:"1160",height:"588"}),"\nThose are all the values that we can retrieve from the external app and use in a ServiceNow Workflow.")))))}d.isMDXComponent=!0},61628:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/swagger-a96760ea89e4e7fdcc5d06e501265bad.yaml"},49351:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-13-57-482a0e8e70d3bab9a20f64256e9e709f.png"},37826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-19-21-efb6304074cccbb68dab36ea3ad774e2.png"},9409:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-27-27-4a9365e061bf6afb76faab41b7fca46e.png"},30284:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-33-06-46165fdf4d26a488bc4a828782e7d016.png"},88038:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-34-48-9cb99985d0d22f7ad878c0d83b4d51f0.png"},12910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-39-25-a7037cf32d6dbdde11ceb8fe7ed8b9ad.png"},6378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-42-47-524947fc0d15174006273f07b1720333.png"},43051:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-44-25-e9ebcccb86028292d3979e42eedd8ce2.png"},30483:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-45-32-0c91a580eac1a6ac9b4b8c3719c42a92.png"},27634:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-51-43-8db266688afc7b5f6a88fabf762b0763.png"},34940:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-56-49-e8a67adf697b3ed204bd874444fbb926.png"},3685:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_07-59-26-785c188e2b049d8d893faa8b0323cc17.png"},10817:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_08-16-44-d19626fcbdb8a27540b7675be4420686.png"},77621:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_08-21-50-40fc941bbbfead4704183dea26282b9f.png"},84137:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_08-23-39-e5b084e73f8d28c724afeb6fb49459af.png"},44930:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_08-24-59-ca2befb595cea8ce528a8980c1fe7c99.png"},24564:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_08-26-21-fc12e7d3deb95f07adfbec7df04ff612.png"},58163:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_08-30-48-ee75c57034c14e4330944c7115f4e0cf.png"},28179:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_08-35-00-be51a4e80abf6d087085318e635f1b6c.png"}}]);