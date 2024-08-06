"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[9248],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=c(a),m=r,k=p["".concat(l,".").concat(m)]||p[m]||h[m]||o;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45329:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={id:"optional-lab-section-2",title:"Optional Lab: Section 2",pagination_label:"Optional Lab: Section 2",sidebar_label:"Section 2",hide_table_of_contents:!0,draft:!1},i=void 0,s={unversionedId:"optional-lab-section-2",id:"optional-lab-section-2",title:"Optional Lab: Section 2",description:"Overview",source:"@site/labs/spokegen/10-optional-lab-section-2.md",sourceDirName:".",slug:"/optional-lab-section-2",permalink:"/workshops/labs/spokegen/optional-lab-section-2",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"optional-lab-section-2",title:"Optional Lab: Section 2",pagination_label:"Optional Lab: Section 2",sidebar_label:"Section 2",hide_table_of_contents:!0,draft:!1},sidebar:"spokegen",previous:{title:"Optional Lab: Section 1",permalink:"/workshops/labs/spokegen/optional-lab-section-1"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Recap",id:"recap",level:2}],d={toc:c},p="wrapper";function h(t){let{components:e,...o}=t;return(0,r.kt)(p,(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"It is time to test if our Transforms work. "),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click Test to try your flow\n",(0,r.kt)("img",{alt:"Alt text",src:a(12768).Z,width:"488",height:"178"}))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Pick a record from the list (1) then click ",(0,r.kt)("strong",{parentName:"li"},"Run Test")," (2)\n",(0,r.kt)("img",{alt:"Alt text",src:a(83330).Z,width:"852",height:"416"}))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},'"Your test has finished running. View the flow execution details"'),(0,r.kt)("img",{alt:"Alt text",src:a(88925).Z,width:"681",height:"280"}))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"TRIGGER")," section, on the right-hand side, single click on the ",(0,r.kt)("strong",{parentName:"li"},"Open Current record")," to inspect the values of that record\n",(0,r.kt)("img",{alt:"Alt text",src:a(8396).Z,width:"1045",height:"263"}))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Scroll down to see the values for visitor firstname, visitor lasname, visitor dob\n",(0,r.kt)("img",{alt:"Alt text",src:a(78537).Z,width:"510",height:"258"}))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Notice the value are all stored in uppercase in ServiceNow, and the date of birth is not in the format that the API End point wants.Let Now see if our transforms have worked.")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Check if a user exists")," (1) step to check if the values were transformed correctly:\n",(0,r.kt)("img",{alt:"Alt text",src:a(50740).Z,width:"507",height:"658"}))),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"If you continue to scroll down, you should be able to see the output that contains the response from the API End point\n",(0,r.kt)("img",{alt:"Alt text",src:a(12736).Z,width:"786",height:"217"}))),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"We are going to add steps to our flow to update the source record in ServiceNow with the values received from the external system (API endpoint). Please return to the 'Verify Access Request' flow.")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Then click ",(0,r.kt)("strong",{parentName:"li"},"Add and Action, Flow Logic, or Subflow"),(0,r.kt)("img",{alt:"Alt text",src:a(1926).Z,width:"665",height:"582"}))),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"We want to incorporate logic into the flow so that if the API confirms the user's existence (indicating that the visitor has been authorized and registered in the external visitor access app), we can retrieve the output from the API and update the record with information about the user's authorizations.")),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"Add a ",(0,r.kt)("strong",{parentName:"li"},"IF")," statement by clicking ",(0,r.kt)("strong",{parentName:"li"},"Flow Logic")," (1), then ",(0,r.kt)("strong",{parentName:"li"},"If")," (2)\n",(0,r.kt)("img",{alt:"Alt text",src:a(49481).Z,width:"512",height:"422"}))),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Condition Label"),' field (1), copy and paste this text : "User has been pre registered in remote visitor system" this is just to make it easier for someone who read the flow to understand the logic then in the Condition.\n',(0,r.kt)("img",{alt:"Alt text",src:a(41859).Z,width:"990",height:"295"}))),(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},"In the Condition Section, Click the ",(0,r.kt)("strong",{parentName:"li"},"Data pill")," icon (1) then select ",(0,r.kt)("strong",{parentName:"li"},"1 - Check if A user Exists")," (2), ",(0,r.kt)("strong",{parentName:"li"},"output")," (3), then ",(0,r.kt)("strong",{parentName:"li"},"code")," (4)\n",(0,r.kt)("img",{alt:"Alt text",src:a(38210).Z,width:"901",height:"381"}))),(0,r.kt)("ol",{start:15},(0,r.kt)("li",{parentName:"ol"},"type the value ",(0,r.kt)("strong",{parentName:"li"},"0")," (1) as shown and click ",(0,r.kt)("strong",{parentName:"li"},"Done")," (2)\n",(0,r.kt)("img",{alt:"Alt text",src:a(83990).Z,width:"1105",height:"268"}),"\nWe know that when the API return code 0 means that the user have been found in the remote system")),(0,r.kt)("p",null,"Now the the condition is set correctly we need to add a step to update the user record in servicenow when we meet this condition."),(0,r.kt)("ol",{start:16},(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"then")," section as shown\n",(0,r.kt)("img",{alt:"Alt text",src:a(22711).Z,width:"231",height:"357"}))),(0,r.kt)("ol",{start:17},(0,r.kt)("li",{parentName:"ol"},"Then Click ",(0,r.kt)("strong",{parentName:"li"},"Action")," (1), type ",(0,r.kt)("strong",{parentName:"li"},"update record"),", then click ",(0,r.kt)("strong",{parentName:"li"},"Update record"),(0,r.kt)("img",{alt:"Alt text",src:a(92236).Z,width:"592",height:"197"}))),(0,r.kt)("ol",{start:18},(0,r.kt)("li",{parentName:"ol"},"Drag the ",(0,r.kt)("strong",{parentName:"li"},"Visitors Record")," (1) from the data pill on the right hand side, then drop into the Record field of the ",(0,r.kt)("strong",{parentName:"li"},"Update Record")," step (2) as shown\n",(0,r.kt)("img",{alt:"Alt text",src:a(51688).Z,width:"1232",height:"395"}))),(0,r.kt)("ol",{start:19},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This should set the right Table on the table field automatically as shown below."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add Field value")," (1)\n",(0,r.kt)("img",{alt:"Alt text",src:a(17708).Z,width:"623",height:"322"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"then add those fields"))),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Access Expiration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Building Location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Guest Title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guest email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host id number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Guest phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visitor requested")))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Drag each values from the data pill on the right hand side (Trigger - Record Updated - Visitor Record) to the corresponding field on the record\n",(0,r.kt)("img",{alt:"Alt text",src:a(89057).Z,width:"1150",height:"446"}))))),(0,r.kt)("ol",{start:20},(0,r.kt)("li",{parentName:"ol"},"The last field, ",(0,r.kt)("strong",{parentName:"li"},"visitor requesed")," is a true/false type, you just need to click the check box as shown\n",(0,r.kt)("img",{alt:"Alt text",src:a(38792).Z,width:"960",height:"165"}))),(0,r.kt)("p",null,"With the step we just added, if the user is found in the Visitor Access system, we then take all the information returned from the API and update the record in ServiceNow with those."),(0,r.kt)("p",null,"In the case the user is not found in the Visitor Access system, we just want to write a log. let just add that step."),(0,r.kt)("ol",{start:21},(0,r.kt)("li",{parentName:"ol"},"Add a Else statement to your flow as shown, click ",(0,r.kt)("strong",{parentName:"li"},"Add an Action, Flow Logic, or Subflow"),", then select ",(0,r.kt)("strong",{parentName:"li"},"Flow logic")," (1), ",(0,r.kt)("strong",{parentName:"li"},"Else")," (2)\n",(0,r.kt)("img",{alt:"Alt text",src:a(36014).Z,width:"481",height:"493"}))),(0,r.kt)("ol",{start:22},(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("strong",{parentName:"li"},"Log")," step by click on ",(0,r.kt)("strong",{parentName:"li"},"Action")," (1), then type ",(0,r.kt)("strong",{parentName:"li"},"log")," (2), then click ",(0,r.kt)("strong",{parentName:"li"},"ServiceNow Core")," (3) then click ",(0,r.kt)("strong",{parentName:"li"},"Log")," (4)\n",(0,r.kt)("img",{alt:"Alt text",src:a(11854).Z,width:"609",height:"496"}))),(0,r.kt)("ol",{start:23},(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Field"),' (1), copy and past this value : "',(0,r.kt)("strong",{parentName:"li"},"No record in Visitor access app found for that user"),'" then click ',(0,r.kt)("strong",{parentName:"li"},"Done")," (2)\n",(0,r.kt)("img",{alt:"Alt text",src:a(67716).Z,width:"1049",height:"239"}))),(0,r.kt)("ol",{start:24},(0,r.kt)("li",{parentName:"ol"},"We are done building the flow, it should look like this:\n",(0,r.kt)("img",{alt:"Alt text",src:a(84066).Z,width:"461",height:"552"}))),(0,r.kt)("ol",{start:25},(0,r.kt)("li",{parentName:"ol"},"It's time to test it, click the Test button, select a ",(0,r.kt)("strong",{parentName:"li"},"visitor record")," (2) then click ",(0,r.kt)("strong",{parentName:"li"},"Run Test")," (2)")),(0,r.kt)("ol",{start:26},(0,r.kt)("li",{parentName:"ol"},"Open the execution detail of the flow to see if has updated the record with the values coming from the API")),(0,r.kt)("ol",{start:27},(0,r.kt)("li",{parentName:"ol"},"If the step Update Record shows ",(0,r.kt)("strong",{parentName:"li"},"Completed")," it means it the record was successfully updated!\n",(0,r.kt)("img",{alt:"Alt text",src:a(67988).Z,width:"1290",height:"491"}))),(0,r.kt)("p",null,"Feel free to go on the custom visitors table to verify that the record was update with the values from the API:"),(0,r.kt)("ol",{start:28},(0,r.kt)("li",{parentName:"ol"},"click on the ",(0,r.kt)("strong",{parentName:"li"},"All")," menu (1) and in the filter navigator (2) type the x_snc_visitoracc_0_visitors_list.do and press enter to open that custom table.\n",(0,r.kt)("img",{alt:"Alt text",src:a(70419).Z,width:"349",height:"239"}))),(0,r.kt)("ol",{start:29},(0,r.kt)("li",{parentName:"ol"},"All the field on the visitor record you have used for your test should now be updated\n",(0,r.kt)("img",{alt:"Alt text",src:a(68946).Z,width:"1436",height:"208"}),(0,r.kt)("img",{alt:"Alt text",src:a(56518).Z,width:"1366",height:"140"}))),(0,r.kt)("h2",{id:"recap"},"Recap"),(0,r.kt)("p",null,"Congratulations, this marks the end of the optional section. You have learned how to transform data before sending it via a custom spoke that we have built!"))}h.isMDXComponent=!0},70419:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-21_12-01-25-5862737ce06378092bc16b3c97f83dfb.png"},12768:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_07-52-53-771ed2a1c6f9be177d9182a0979e6bbe.png"},83330:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_07-57-14-5fcdaba2d425848ee64d8f366a5bb737.png"},88925:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_07-58-35-4b0e4e5c5cfbb6b691d2d3cb34cf5462.png"},8396:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-00-51-5de064cb391fd3fe068ac45ebf0237b0.png"},78537:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-02-52-7b50d15321abdeb6e44f7b64f2263f07.png"},12736:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-06-38-86a8c10d25adc1d2d06ada8580385b00.png"},1926:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-08-30-9019351f8108780f15e0ad6517f87523.png"},49481:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-15-35-744121b842e73f97d2e2cd35741593da.png"},41859:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-17-34 (2)-2e287b6898516b9a4c3d35c8fd79605a.png"},38210:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-19-27 (1)-419348cc1b4d544dd6bfc9950e322968.png"},83990:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-22-50-a67f531a88d8d0f9211af4b8fe2583a4.png"},22711:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-25-51-2d73fe10361fc0a7d2c49f7290d6c6e6.png"},92236:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-26-55 (1)-6838e4026249ec02ea8f8f98a890374f.png"},51688:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-29-09-e7488da6826e77c842ad509c4cc9f944.png"},17708:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-31-07 (1)-70bc9752b20437e51d14a357e9928707.png"},89057:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-36-04-ea36228ad93edf2aae3c2b2bf3a5fa93.png"},38792:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-39-32-9f780df05ac2ab9d1588ebaa3393acca.png"},36014:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-42-55-44daf273d72d8d892d227421a5cb480d.png"},11854:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-46-44-45a8d67e4afe00cf4d2c1ee7b7c98794.png"},67716:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-48-49-1a93650fba65b6b8fb4b18807a0abb39.png"},84066:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-51-09-1f7d706e31935b4a2f70b31c87ffb86a.png"},67988:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_08-55-26-d36ac973cb3a01258669412f09618262.png"},68946:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_09-00-38 (1)-b28502fbf6250e3d14e8cad7b245a361.png"},56518:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-09-22_09-01-06-472a3287f70c835956a68f6a5f1f1269.png"},50740:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/2023-10-05_08-43-30-3f0e2e818ec24bb2bd6d013c35c26ea5.png"}}]);