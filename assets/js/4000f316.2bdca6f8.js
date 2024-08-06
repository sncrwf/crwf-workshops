"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[7965],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,g=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},35868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={id:"data-model",title:"Create Application Data Model",hide_table_of_contents:!0,sidebar_label:"Create Data Model",sidebar_position:3,draft:!1},i=void 0,s={unversionedId:"exercise_5-build/data-model",id:"exercise_5-build/data-model",title:"Create Application Data Model",description:"In this exercise will start building out the tables needed to support out application. We'll import a spreadsheet to quickly populate the table with existing data. This is a very common way customers are building tables in App Engine Studio for processes that are currently being administered in Excel and email.",source:"@site/labs/complaint-utah/exercise_5-build/30-create_data_model.md",sourceDirName:"exercise_5-build",slug:"/exercise_5-build/data-model",permalink:"/labs/complaint-utah/exercise_5-build/data-model",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"data-model",title:"Create Application Data Model",hide_table_of_contents:!0,sidebar_label:"Create Data Model",sidebar_position:3,draft:!1},sidebar:"complaintutah",previous:{title:"Create Application in AES",permalink:"/labs/complaint-utah/exercise_5-build/create"},next:{title:"Create Investigations Workspace",permalink:"/labs/complaint-utah/exercise_5-build/workspace"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this exercise will start building out the tables needed to support out application. We'll import a spreadsheet to quickly populate the table with existing data. This is a very common way customers are building tables in App Engine Studio for processes that are currently being administered in Excel and email."),(0,o.kt)("p",null,"Data can also be imported from other third-party sources like a database or web service/API."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the app homepage, click on ",(0,o.kt)("strong",{parentName:"li"},"+Add")," next to ",(0,o.kt)("strong",{parentName:"li"},"Data"),".\n",(0,o.kt)("img",{src:a(50605).Z,width:"833",height:"326"}))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Import a spreadsheet")," and then the ",(0,o.kt)("strong",{parentName:"li"},"Continue")," on the next screen\n",(0,o.kt)("img",{src:a(32883).Z,width:"829",height:"534"}))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Drag and drop or browse to upload spreadsheet"),".\nDownload this file: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/CreatorWorkflowsNow/creatorworkflowsnow.github.io/raw/source/labs/complaint-utah/downloads/ComplaintsInvestigationImport.xlsx"},"ComplaintsInvestigationImport.xlsx"),"\nand upload the file to the instance.\n",(0,o.kt)("img",{src:a(85696).Z,width:"829",height:"534"}))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Check the ",(0,o.kt)("strong",{parentName:"li"},"Import spreadsheet data")," checkbox and click ",(0,o.kt)("strong",{parentName:"li"},"Continue"),(0,o.kt)("img",{src:a(13284).Z,width:"1211",height:"745"}))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"On the next screen, keep the default option of ",(0,o.kt)("strong",{parentName:"li"},"A new table")," and choose ",(0,o.kt)("strong",{parentName:"li"},"Create from an extensible table")," then click ",(0,o.kt)("strong",{parentName:"li"},"Continue"),(0,o.kt)("img",{src:a(93771).Z,width:"1010",height:"687"}))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Search in the ",(0,o.kt)("strong",{parentName:"li"},"Table")," field for ",(0,o.kt)("strong",{parentName:"li"},"Customer")," and choose ",(0,o.kt)("strong",{parentName:"li"},"Task")," from the list. Click ",(0,o.kt)("strong",{parentName:"li"},"Continue"),(0,o.kt)("img",{src:a(95192).Z,width:"829",height:"685"}))),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Set the ",(0,o.kt)("strong",{parentName:"li"},"Table label")," field to ",(0,o.kt)("strong",{parentName:"li"},"Complaint Investigation")," Select ",(0,o.kt)("strong",{parentName:"li"},"Auto number")," Set the ",(0,o.kt)("strong",{parentName:"li"},"Prefix")," field to ",(0,o.kt)("strong",{parentName:"li"},"CMPLINV"),(0,o.kt)("img",{src:a(81371).Z,width:"829",height:"685"}),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Setting the Prefix allows us to distinguish our tasks from records created that are also extended from the Customer Service Task table.")))),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"The next step is to setup permission for the Complaint Investigation table. Assign full permissions to the admin role by selecting ",(0,o.kt)("strong",{parentName:"li"},"All"),". Select the ",(0,o.kt)("strong",{parentName:"li"},"Create"),", ",(0,o.kt)("strong",{parentName:"li"},"Read")," and ",(0,o.kt)("strong",{parentName:"li"},"Write")," permissions for the user role. When finished, click ",(0,o.kt)("strong",{parentName:"li"},"Continue"),".\n",(0,o.kt)("img",{src:a(34715).Z,width:"998",height:"580"}))),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Now, we wait for the platform to create our table. Select ",(0,o.kt)("strong",{parentName:"li"},"Continue")," once the table is created to move on to mapping our imported data to the appropriate fields.\n",(0,o.kt)("img",{src:a(77215).Z,width:"869",height:"580"}))),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Once the screen loads, you can exit out of any guided tour popup that may appear initially. Looking at the right hand column, you'll notice the platform automatically mapped our fields for us! This is indicated by the wand icon next to the column name\n",(0,o.kt)("img",{src:a(95907).Z,width:"703",height:"42"}))),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"Scroll through the list to ensure all your fields are accounted for. You'll notice that ",(0,o.kt)("strong",{parentName:"li"},"Group")," is not associated with the ",(0,o.kt)("strong",{parentName:"li"},"Assignment Group")," field on our table. Drag and drop it from the left side to the right next to the ",(0,o.kt)("strong",{parentName:"li"},"Assignment Group")," field.\n",(0,o.kt)("img",{src:a(43864).Z,width:"1331",height:"806"}))),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"We also need to associate these existing complaint investigations with the cases they are related to. Scroll down until you see the ",(0,o.kt)("strong",{parentName:"li"},"Parent")," field on the right. Click the magic wand icon on the right of the field then the small arrow next to ",(0,o.kt)("strong",{parentName:"li"},"Source")," and choose the ",(0,o.kt)("strong",{parentName:"li"},"Complaint Case")," option from the menu.\n",(0,o.kt)("img",{src:a(95254).Z,width:"679",height:"343"}),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is referred to as 'dot-walking'.    ")))),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Continue"),(0,o.kt)("img",{src:a(75671).Z,width:"692",height:"357"}))),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Done")," once the table has been created to return to the App Home.\n",(0,o.kt)("img",{src:a(34453).Z,width:"1055",height:"436"}))),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},"Let's check our table to make sure the data is mapped correctly. You should see our newly created ",(0,o.kt)("strong",{parentName:"li"},"Complaints Investigation")," table listed under ",(0,o.kt)("strong",{parentName:"li"},"Data"),". Click on the ",(0,o.kt)("strong",{parentName:"li"},"Preview")," link\n",(0,o.kt)("img",{src:a(27224).Z,width:"924",height:"69"}))),(0,o.kt)("ol",{start:16},(0,o.kt)("li",{parentName:"ol"},"Your screen should look similar to the one below\n",(0,o.kt)("img",{src:a(26089).Z,width:"1194",height:"465"}),"\nOnce you've finished reviewing the data, close the window to return to App Engine Studio")),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},"Next, let's focus on the data we want to be shown on the screens when viewing these investigation records. In ",(0,o.kt)("strong",{parentName:"li"},"App Engine Studio"),", click on the table and click on ",(0,o.kt)("strong",{parentName:"li"},"Forms")," at the top of the screen to open ",(0,o.kt)("strong",{parentName:"li"},"Form Builder"),(0,o.kt)("img",{src:a(40132).Z,width:"1199",height:"846"}))),(0,o.kt)("ol",{start:18},(0,o.kt)("li",{parentName:"ol"},"To make this form more useful for us, remove the ",(0,o.kt)("strong",{parentName:"li"},"Configuration Item")," field by hovering over the field and clicking on the ",(0,o.kt)("strong",{parentName:"li"},"X")," that appears\n",(0,o.kt)("img",{src:a(56182).Z,width:"1199",height:"846"}))),(0,o.kt)("ol",{start:19},(0,o.kt)("li",{parentName:"ol"},"Now we'll add some fields that help us with our investigation process. On the ",(0,o.kt)("strong",{parentName:"li"},"Add form elements")," side bar, search for the ",(0,o.kt)("strong",{parentName:"li"},"Assignment Group")," field and drag/drop it on the form. Repeat the process for ",(0,o.kt)("strong",{parentName:"li"},"Contact")," and save your form once complete. Your form should look similar to below\n",(0,o.kt)("img",{src:a(18750).Z,width:"1375",height:"969"}))),(0,o.kt)("ol",{start:20},(0,o.kt)("li",{parentName:"ol"},"Let's also rename the ",(0,o.kt)("strong",{parentName:"li"},"Parent")," field so it is more meaningful for our process. Click on the ",(0,o.kt)("strong",{parentName:"li"},"Parent")," field and change the ",(0,o.kt)("strong",{parentName:"li"},"Label")," field in the right configuration section to say ",(0,o.kt)("strong",{parentName:"li"},"Complaint Case")," and click ",(0,o.kt)("strong",{parentName:"li"},"Save"),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This label change will only be reflected in our Complaint Investigation table and will not impact the rest of the platform.")),(0,o.kt)("img",{src:a(7481).Z,width:"797",height:"552"}))),(0,o.kt)("p",null,"Excellent! Now that we have our legacy data in the plaform, let's look to see how we create our own Workspace to start managing these investigations using ServiceNow!"))}m.isMDXComponent=!0},50605:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-18-09-19-43-75db8b881cb3eced190af14455c9afc4.png"},85696:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-18-09-23-58-4be45c0c68f1de5f540fdcc84e01e124.png"},32883:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-08-18-09-26-54-cc541d8742f5b5e9b65205b3bffcb22c.png"},13284:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-09-30-54-8cbc62fabc89a701fffcc544fa14e2c5.png"},93771:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-09-47-16-824cae568b1b4f9b3935ce59341c6d9b.png"},95192:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-10-00-11-1596b039ea732b78a1e7e674ae47265c.png"},81371:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-10-01-48-da97332f0d95bdace4687aa4a77add03.png"},34715:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-10-03-57-9e18522a64ca17fd4deda84d50badc71.png"},77215:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-10-05-52-e1f249f6cca20af34c625bb01a39e865.png"},95907:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-11-58-37-c732414f382999eceb007133d9235b52.png"},43864:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-12-02-09-c3ff41d792aefc04c2e22a65a9806097.png"},75671:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-12-34-05-5b81e9e8f7ceca966436e1bff39b511f.png"},95254:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-12-43-01-af4c7234bf15e95defc0c5e2f643ac18.png"},34453:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-12-47-55-725f560d6d3b000e537f1be0fa2578a6.png"},27224:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-12-50-28-c6ee8309c9ac69fbbe4e02e0506b8c72.png"},26089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-11-12-51-44-bcd9079a8cdbf76a5ca0dffb12c74b2c.png"},40132:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-30-29-fb1cf3a5770640607b2f38c6018dd2d7.png"},56182:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-32-49-73bff1e78855102c661d194a3f9eada3.png"},18750:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-36-08-85635e128665b925450b18c8f5df5490.png"},7481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-44-01-9e70bc8f8b765ced22dec7ffaa6cc3d9.png"}}]);