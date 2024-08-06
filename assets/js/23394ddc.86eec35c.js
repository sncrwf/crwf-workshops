"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[8377],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,u=d["".concat(i,".").concat(c)]||d[c]||k[c]||l;return a?r.createElement(u,o(o({ref:t},m),{},{components:a})):r.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},65494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"1. Securely Expand",sidebar_label:"1. Securely Expand",hide_table_of_contents:!0},o="Vis\xe3o Geral",s={unversionedId:"Governance/Securely-Expand",id:"Governance/Securely-Expand",title:"1. Securely Expand",description:"Amanda implementou com sucesso seu aplicativo para sua equipe, e ele chamou a aten\xe7\xe3o de outra equipe que tamb\xe9m deseja us\xe1-lo. Uma condi\xe7\xe3o principal \xe9 manter a privacidade dos registros entre as duas equipes.",source:"@site/labs/telework-201_vancouver/01-Governance/1-Securely-Expand.md",sourceDirName:"01-Governance",slug:"/Governance/Securely-Expand",permalink:"/labs/telework-201_vancouver/Governance/Securely-Expand",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Securely Expand",sidebar_label:"1. Securely Expand",hide_table_of_contents:!0},sidebar:"teleworkvancouver",previous:{title:"Portal",permalink:"/labs/telework-201_vancouver/Portal/3.3 Create a Widget"},next:{title:"Conclus\xe3o",permalink:"/labs/telework-201_vancouver/Conclusion/"}},i={},p=[{value:"Ajuda dos Administradores do App Engine",id:"ajuda-dos-administradores-do-app-engine",level:2},{value:"Refinar os controles de acesso",id:"refinar-os-controles-de-acesso",level:2},{value:"Atribuir o papel a Abel",id:"atribuir-o-papel-a-abel",level:2},{value:"Abrir o usu\xe1rio Abel",id:"abrir-o-usu\xe1rio-abel",level:3},{value:"Vamos testar",id:"vamos-testar",level:2}],m={toc:p},d="wrapper";function k(e){let{components:t,...l}=e;return(0,n.kt)(d,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vis\xe3o-geral"},"Vis\xe3o Geral"),(0,n.kt)("p",null,"Amanda implementou com sucesso seu aplicativo para sua equipe, e ele chamou a aten\xe7\xe3o de outra equipe que tamb\xe9m deseja us\xe1-lo. Uma condi\xe7\xe3o principal \xe9 manter a privacidade dos registros entre as duas equipes."),(0,n.kt)("p",null,"Neste exerc\xedcio, vamos compartimentalizar os casos de teletrabalho para os usu\xe1rios do departamento de Desenvolvimento e para os usu\xe1rios da equipe de Suporte ao Cliente.  "),(0,n.kt)("p",null,"Vamos configurar isso definindo:"),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},'Um papel de "fulfiller" para cada equipe: Fulfiller_Development e Fulfiller_Customer_Support '))),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote",start:2},(0,n.kt)("li",{parentName:"ol"},"Em seguida, definiremos controles de acesso espec\xedficos para cada um."))),(0,n.kt)("blockquote",null,(0,n.kt)("ol",{parentName:"blockquote",start:3},(0,n.kt)("li",{parentName:"ol"},"No final, uma equipe ter\xe1 visibilidade apenas sobre solicita\xe7\xf5es dos usu\xe1rios do departamento de Desenvolvimento, enquanto a outra equipe ter\xe1 acesso apenas \xe0s solicita\xe7\xf5es dos usu\xe1rios do departamento de Suporte ao Cliente. "))),(0,n.kt)("p",null,"Isso garantir\xe1 que ambas as equipes possam usar o aplicativo mantendo a separa\xe7\xe3o e privacidade necess\xe1rias dos dados."),(0,n.kt)("p",null,"Vamos come\xe7ar."),(0,n.kt)("p",null,"Desenvolvedores cidad\xe3os como Amanda precisam de privil\xe9gios especiais para configurar controles de acesso, ent\xe3o Amanda vai solicitar..."),(0,n.kt)("h2",{id:"ajuda-dos-administradores-do-app-engine"},"Ajuda dos Administradores do App Engine"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Conecte-se como Admin")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Elevar para Security Admin"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Passos"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278a")),(0,n.kt)("td",{parentName:"tr",align:null},"No canto superior direito, clique no ",(0,n.kt)("strong",{parentName:"td"},"Avatar"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278b")),(0,n.kt)("td",{parentName:"tr",align:null},"Selecione ",(0,n.kt)("strong",{parentName:"td"},"Elevate role"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278c")),(0,n.kt)("td",{parentName:"tr",align:null},"Marque ","[\u2714]"," security_admin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278d")),(0,n.kt)("td",{parentName:"tr",align:null},"Clique em ",(0,n.kt)("span",{className:"button-purple"},"Update"),".")))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(11945).Z,width:"1099",height:"713"})))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"V\xe1 para ",(0,n.kt)("strong",{parentName:"p"},"App Engine Studio > Security")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Passos")),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278a")),(0,n.kt)("td",{parentName:"tr",align:null},"No AES, clique em ",(0,n.kt)("strong",{parentName:"td"},"More"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278b")),(0,n.kt)("td",{parentName:"tr",align:null},"Clique em ",(0,n.kt)("strong",{parentName:"td"},"Security"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278c")),(0,n.kt)("td",{parentName:"tr",align:null},"Clique em ",(0,n.kt)("strong",{parentName:"td"},"Add"))))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(94958).Z,width:"783",height:"577"})))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Quando Amanda criou o aplicativo, ele era apenas para uma equipe e ter um \xfanico papel de usu\xe1rio era suficiente.\nAgora que precisamos abrir o aplicativo para outra equipe, precisamos de pap\xe9is mais espec\xedficos para garantir a seguran\xe7a adequada.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Crie o papel ",(0,n.kt)("strong",{parentName:"p"},"Fulfiller_Development")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Passos")),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278a")),(0,n.kt)("td",{parentName:"tr",align:null},"Clique em ",(0,n.kt)("strong",{parentName:"td"},"build a new role"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278b")),(0,n.kt)("td",{parentName:"tr",align:null},"Clique em ",(0,n.kt)("span",{className:"button-purple"},"Continue"),".")))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(39763).Z,width:"764",height:"553"})))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"D\xea um nome e descri\xe7\xe3o ao papel."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Passos")),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Nome"),(0,n.kt)("td",{parentName:"tr",align:null},"Fulfiller_Development")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,n.kt)("td",{parentName:"tr",align:null},"Fulfiller no departamento de Desenvolvimento")))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(28174).Z,width:"905",height:"609"})))),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"D\xea ao papel as permiss\xf5es desejadas"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(65980).Z,width:"894",height:"712"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Sucesso")),(0,n.kt)("p",{parentName:"li"},"Clique em ",(0,n.kt)("span",{className:"button-purple"},"Done"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(6189).Z,width:"898",height:"630"})))),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Repita os passos 4 a 7 para criar o papel ",(0,n.kt)("strong",{parentName:"p"},"Fulfiller_Customer_Support")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Passos")),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Nome"),(0,n.kt)("td",{parentName:"tr",align:null},"Fulfiller_Customer_Support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,n.kt)("td",{parentName:"tr",align:null},"Fulfiller no departamento de Suporte ao Cliente")))))),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Voc\xea deve ver os dois novos pap\xe9is no aplicativo"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(73738).Z,width:"737",height:"364"})))),(0,n.kt)("h2",{id:"refinar-os-controles-de-acesso"},"Refinar os controles de acesso"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Navegar at\xe9 a Lista de Controle de Acesso (ACL)"),(0,n.kt)("img",{src:a(91662).Z,width:"953",height:"334"}))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Filtrar a lista de registros")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Filtro")),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278a")),(0,n.kt)("td",{parentName:"tr",align:null},"Defina o filtro conforme mostrado abaixo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278b")),(0,n.kt)("td",{parentName:"tr",align:null},"Clique em ",(0,n.kt)("strong",{parentName:"td"},"Run"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278c")),(0,n.kt)("td",{parentName:"tr",align:null},"Clique em ",(0,n.kt)("strong",{parentName:"td"},"Updated by")," para obter o ACL do administrador no topo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278d")),(0,n.kt)("td",{parentName:"tr",align:null},"Abra o primeiro registro")))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(89154).Z,width:"930",height:"551"})))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Revise o ACL ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Defina a condi\xe7\xe3o: Aberto por algu\xe9m no departamento de Desenvolvimento"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clique no campo de condi\xe7\xe3o, role para baixo para selecionar ",(0,n.kt)("strong",{parentName:"p"},"Show related fields")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(7938).Z,width:"907",height:"696"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Selecione "Opened by \u27f9 User fields"'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(77237).Z,width:"900",height:"140"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clique novamente no campo e agora podemos ver os campos dentro do Opened by"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(22313).Z,width:"933",height:"285"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Role para baixo e selecione ",(0,n.kt)("strong",{parentName:"p"},"department")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(30921).Z,width:"978",height:"287"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clique novamente no campo e depois selecione ",(0,n.kt)("strong",{parentName:"p"},"Opened by Department")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(88542).Z,width:"978",height:"289"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Finalmente defina o valor da condi\xe7\xe3o como ",(0,n.kt)("strong",{parentName:"p"},"Development")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(55827).Z,width:"977",height:"113"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Salve o registro"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(86211).Z,width:"988",height:"97"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Observe que o ServiceNow gerou uma descri\xe7\xe3o"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(67220).Z,width:"984",height:"690"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Para garantir o acesso aos dados, vamos revisar os outros ACL do nosso trabalho "),(0,n.kt)("p",{parentName:"li"},"Precisamos excluir qualquer ACL que n\xe3o tenha nenhuma restri\xe7\xe3o"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(94664).Z,width:"995",height:"702"})))))),(0,n.kt)("h2",{id:"atribuir-o-papel-a-abel"},"Atribuir o papel a Abel"),(0,n.kt)("h3",{id:"abrir-o-usu\xe1rio-abel"},"Abrir o usu\xe1rio Abel"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"V\xe1 para a lista de usu\xe1rios"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Passos"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278a")),(0,n.kt)("td",{parentName:"tr",align:null},"Clique no menu ",(0,n.kt)("strong",{parentName:"td"},"All"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278b")),(0,n.kt)("td",{parentName:"tr",align:null},"Pesquise por ",(0,n.kt)("strong",{parentName:"td"},"Users"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("span",{className:"large-number"},"\u278c")),(0,n.kt)("td",{parentName:"tr",align:null},"Clique em ",(0,n.kt)("strong",{parentName:"td"},"Users"))))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(43229).Z,width:"473",height:"533"})))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Abra o usu\xe1rio ",(0,n.kt)("strong",{parentName:"p"},"Abel")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(54791).Z,width:"954",height:"297"})))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clique em ",(0,n.kt)("strong",{parentName:"p"},"Edit")," Roles"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(2720).Z,width:"936",height:"290"})))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Conceda a Abel o papel de usu\xe1rio de teletrabalho"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(15170).Z,width:"953",height:"725"})))),(0,n.kt)("h2",{id:"vamos-testar"},"Vamos testar"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"V\xe1 para o App Engine Studio")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Visualize a tabela de casos de teletrabalho"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(96370).Z,width:"939",height:"325"})))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Observe que podemos ver todos os registros"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(39783).Z,width:"954",height:"338"})))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Volte para a vis\xe3o de admin e Importe ",(0,n.kt)("strong",{parentName:"p"},"Abel")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(772).Z,width:"604",height:"286"})))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Volte para a lista de casos de teletrabalho e observe que podemos ver todos os registros"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(16163).Z,width:"881",height:"337"})))))}k.isMDXComponent=!0},43229:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/06-Create-new-user-1-94bb22cf08656457d78d855411451aa8.png"},11945:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_01_Elevate_Security_Admin-8ce369048b7cae1e75a477e32fd39e33.png"},94958:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_02_AES_Go_to_Security-cc6c597486bbd94949d85cc59d3ea6f6.png"},39763:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_03_AES_Create_Role_01-25d1b1e42b82a05384836e476aaf5367.png"},28174:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_03_AES_Create_Role_02-74bf69ad1a2163e9d1d9e858b11308d3.png"},65980:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_03_AES_Create_Role_03_Permission-0592cb7c77486a45ccca5f2a85eecc53.png"},6189:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_03_AES_Create_Role_04_Success-3bb03b073a27238893c412a13807d532.png"},73738:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_03_AES_Create_Role_05_Result-5863f517f8a96a5fe55078c3e5f40288.png"},91662:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_ACL_01_Go_to_ACL-d1c62be6af7b24f141e91108035858f5.png"},89154:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_ACL_02_Filter_ACLs-f3f7e2fad64fb1dd894c394121611a3c.png"},7938:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_ACL_03_Condition_01-8eb3ec929f7311ddefffea8e1b2df539.png"},77237:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_ACL_03_Condition_02-5b1b18ac3d243e8018609e8a3ec608c3.png"},22313:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_ACL_03_Condition_03-e219298720283c47c42e302f135dd6be.png"},30921:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_ACL_03_Condition_04-0e8f24fcbc3476fd355d2e15b84e1416.png"},88542:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_ACL_03_Condition_05-627ec16a46adaa5eb6ade9a9d20705e8.png"},55827:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_ACL_03_Condition_06-d20b322e56d984fb59e2b77343323a6b.png"},86211:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_ACL_03_Condition_07_Save_ACL-d463ada6e95c6703e261a79dfb3c63d0.png"},67220:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_ACL_03_Condition_08-f05ee85ada4649b314edb484981af2b4.png"},94664:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_ACL_03_Delete_ACL_with_no_restriction-36de25b1852798847587c43e58615821.png"},54791:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_Assign_Role_01-064e1b9d2e1e95722268f4eea7ee703e.png"},2720:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_Assign_Role_02-dfabc913f6b43602c9ca51514b40dfe1.png"},15170:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_Assign_Role_03-b485f48d1dd1bbee74316c8fbe0bac55.png"},96370:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_Test_01-6ebe456fc1ae727e2cc4d48c3a163906.png"},39783:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_Test_02-e39da0f7839adb839143918cad58c19d.png"},772:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_Test_03-0df8d1ebc23842667eaf87e1877ddfc9.png"},16163:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/segment_04_Test_04-c0ec56320aec7d214002636ff24c67a1.png"}}]);