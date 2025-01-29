"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[2927],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,u=d["".concat(p,".").concat(k)]||d[k]||c[k]||o;return t?n.createElement(u,i(i({ref:a},m),{},{components:t})):n.createElement(u,i({ref:a},m))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=k;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},37713:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const o={id:"4-advanced",title:"2.4 Adicionar Flows para processamento avan\xe7ado",hide_table_of_contents:!0,draft:!1},i=void 0,l={unversionedId:"configure-docintel/4-advanced",id:"configure-docintel/4-advanced",title:"2.4 Adicionar Flows para processamento avan\xe7ado",description:"Caso de Uso",source:"@site/labs/docintel/2-configure-docintel/4-advanced.md",sourceDirName:"2-configure-docintel",slug:"/configure-docintel/4-advanced",permalink:"/workshops/labs/docintel/configure-docintel/4-advanced",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"4-advanced",title:"2.4 Adicionar Flows para processamento avan\xe7ado",hide_table_of_contents:!0,draft:!1},sidebar:"docintel",previous:{title:"2.3 Criar Spoke para Integra\xe7\xe3o com API Externa",permalink:"/workshops/labs/docintel/configure-docintel/3-spoke"},next:{title:"3.1 Enviar como solicitante e processar um documento",permalink:"/workshops/labs/docintel/e2e/1-submit"}},p={},s=[{value:"Caso de Uso",id:"caso-de-uso",level:2},{value:"Vis\xe3o Geral - Flow",id:"vis\xe3o-geral---flow",level:2},{value:"Vis\xe3o Geral do Fluxo - Invoice Task Enrichment",id:"vis\xe3o-geral-do-fluxo---invoice-task-enrichment",level:2},{value:"Instru\xe7\xf5es",id:"instru\xe7\xf5es",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}],m={toc:s},d="wrapper";function c(e){let{components:a,...o}=e;return(0,r.kt)(d,(0,n.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"caso-de-uso"},"Caso de Uso"),(0,r.kt)("p",null,"Nosso sistema precisa integrar-se a um sistema externo respons\xe1vel pelo gerenciamento de faturas, que cont\xe9m os detalhes de cada invoice processada. O objetivo desta integra\xe7\xe3o \xe9 enriquecer os dados da nossa aplica\xe7\xe3o com as informa\xe7\xf5es fornecidas por esse sistema."),(0,r.kt)("h2",{id:"vis\xe3o-geral---flow"},"Vis\xe3o Geral - Flow"),(0,r.kt)("p",null,"Um fluxo (Flow) representa uma sequ\xeancia de etapas que s\xe3o automatizadas para alcan\xe7ar um resultado de neg\xf3cios espec\xedfico. Cada fluxo pode incluir os seguintes componentes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gatilho"),": O evento ou condi\xe7\xe3o que, quando atendido, inicia automaticamente um fluxo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Condi\xe7\xf5es"),": Permite fornecer condi\xe7\xf5es sob as quais o fluxo ser\xe1 executado. Por exemplo, execute o fluxo apenas se um campo estiver acima de um determinado valor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A\xe7\xf5es"),": As tarefas realizadas pelo Fluxo, como atualizar dados, solicitar aprova\xe7\xf5es ou enviar notifica\xe7\xf5es.")),(0,r.kt)("h2",{id:"vis\xe3o-geral-do-fluxo---invoice-task-enrichment"},"Vis\xe3o Geral do Fluxo - Invoice Task Enrichment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Etapa"),(0,r.kt)("th",{parentName:"tr",align:null},"Detalhes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Crie um Flow que seja acionado ao atualizar a tarefa de Fatura quando o campo ",(0,r.kt)("strong",{parentName:"td"},"Customer")," e ",(0,r.kt)("strong",{parentName:"td"},"Invoice Number")," forem alterados.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"O Flow busca o registro de cliente na tabela ",(0,r.kt)("strong",{parentName:"td"},"Company")," com o valor do campo ",(0,r.kt)("strong",{parentName:"td"},"Customer")," e recupera o primeiro registro.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Utilizando o nosso Spoke ",(0,r.kt)("strong",{parentName:"td"},"Invoice Checker"),", iremos consultar as informa\xe7\xf5es de ",(0,r.kt)("strong",{parentName:"td"},"Short description e Short description")," para enriquecermos a nossa tarefa com os detalhes do servi\xe7o.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Ao final, iremos atualizar os campos ",(0,r.kt)("strong",{parentName:"td"},"Company"),", ",(0,r.kt)("strong",{parentName:"td"},"Short description e Short description")," com as informa\xe7\xf5es retornadas")))),(0,r.kt)("p",null,"Com o ",(0,r.kt)("strong",{parentName:"p"},"Document Intelligence")," configurado, podemos processar o fluxo de ponta a ponta."),(0,r.kt)("h2",{id:"instru\xe7\xf5es"},"Instru\xe7\xf5es"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Retorne para homepage do Workflow Studio, selecione ",(0,r.kt)("strong",{parentName:"p"},"New")," e em seguida ",(0,r.kt)("strong",{parentName:"p"},"Flow"),"."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Caso tenha fechado a janela, volte para a aba da plataforma (se tiver fechado basta acessar o link raiz da inst\xe2ncia novamente), na p\xe1gina principal, clique em ",(0,r.kt)("strong",{parentName:"p"},"All")," (1). Em seguida, digite ",(0,r.kt)("strong",{parentName:"p"},"flow")," (2) e clique em ",(0,r.kt)("strong",{parentName:"p"},"Flow Designer")," (3) para abrir a interface do Flow Designer.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(58381).Z,width:"1582",height:"580"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Preencha as informa\xe7\xf5es do Flow."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Campo"),(0,r.kt)("th",{parentName:"tr",align:null},"Valor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1. Flow name"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoice Task Enrichment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2. Application"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoice App")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3. Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Flow to enrich Invoice Task with Company and Details")))),(0,r.kt)("admonition",{parentName:"li",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Utilize a application ",(0,r.kt)("strong",{parentName:"p"},"Invoice App")," e n\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Invoice Checker"),", para que esse fluxo seja criado no escopo da aplica\xe7\xe3o e n\xe3o do spoke.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(58048).Z,width:"962",height:"681"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Com o flow criado, iremos come\xe7ar adicionar uma trigger. Clique em ",(0,r.kt)("strong",{parentName:"p"},"+ Add a trigger")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(61746).Z,width:"1909",height:"569"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Selecione a op\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Record > Updated")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(49484).Z,width:"772",height:"546"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Agora precisamos adicionar a tabela e as condi\xe7\xf5es para o fluxo ser executado. Preencha da seguinte forma:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Campo"),(0,r.kt)("th",{parentName:"tr",align:null},"Valor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1. Trigger"),(0,r.kt)("td",{parentName:"tr",align:null},"Updated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2. Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoice Task ","[x_snc_invoice_app_invoice_task]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3. Condition"),(0,r.kt)("td",{parentName:"tr",align:null},"( ",(0,r.kt)("inlineCode",{parentName:"td"},"Customer")," ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"is not empty"))," ) ",(0,r.kt)("strong",{parentName:"td"},"AND")," ( ",(0,r.kt)("inlineCode",{parentName:"td"},"Invoice Number")," ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"is not empty"))," )")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4. Run Trigger"),(0,r.kt)("td",{parentName:"tr",align:null},"Once")))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clique em ",(0,r.kt)("span",{className:"button-purple"},"Done")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(6547).Z,width:"1582",height:"530"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clique agora em ",(0,r.kt)("strong",{parentName:"p"},"+ Add an Action, Flow Logic, or Subflow"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(51499).Z,width:"1043",height:"499"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clique em Action e selecione a op\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"Look Up Record"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(51533).Z,width:"595",height:"456"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Agora iremos buscar a base de empresas cadastradas na tabela ",(0,r.kt)("strong",{parentName:"p"},"Company")," e que correspoda ao valor do campo ",(0,r.kt)("strong",{parentName:"p"},"Customer"),". Preencha da seguinte forma:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Campo"),(0,r.kt)("th",{parentName:"tr",align:null},"Valor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1. Action"),(0,r.kt)("td",{parentName:"tr",align:null},"Look Up Record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2. Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Company ","[core_company]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3. Order by"),(0,r.kt)("td",{parentName:"tr",align:null},"Name = a to z")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4. If multiple records are found action"),(0,r.kt)("td",{parentName:"tr",align:null},"Return only the first record")))),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{src:t(75187).Z,width:"1553",height:"508"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Para adicionar a condi\xe7\xe3o utilizaremos os ",(0,r.kt)("strong",{parentName:"p"},"Data Pills")," que funcionam como vari\xe1veis dentro do fluxo. Iremos criar a condi\xe7\xe3o de busca pelo Name (Tabela Company) = Customer (Tabela Invoice Task)."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"No campo ",(0,r.kt)("strong",{parentName:"li"},"(-- choose filed --)")," busque pelo valor ",(0,r.kt)("strong",{parentName:"li"},"Name")),(0,r.kt)("li",{parentName:"ol"},"Mantenha a condi\xe7\xe3o ",(0,r.kt)("strong",{parentName:"li"},'"is"')),(0,r.kt)("li",{parentName:"ol"},"Na barra lateral (Data), expanda o data pill ",(0,r.kt)("inlineCode",{parentName:"li"},"Invoice Task Record")," e busque o campo ",(0,r.kt)("inlineCode",{parentName:"li"},"Customer"),", arraste-o para o campo vazio de condi\xe7\xe3o.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(34679).Z,width:"1903",height:"863"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Clique em ",(0,r.kt)("span",{className:"button-purple"},"Done")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Nosso pr\xf3ximo passo \xe9 buscar os detalhes da invoice na aplica\xe7\xe3o externa, para isso utilizaremos o Spoke ",(0,r.kt)("strong",{parentName:"p"},"Invoice Checker")," para retornar essas informa\xe7\xf5es."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Abaixo da action anterior, selecion ",(0,r.kt)("strong",{parentName:"p"},"+ Add an Action, Flow Logic, or Subflow"),". Clique em ",(0,r.kt)("strong",{parentName:"p"},"Action"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Busque pelo Spoke ",(0,r.kt)("strong",{parentName:"p"},"Invoice Checker"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Selecione o Spoke")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Selecione a action dispon\xedvel"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(39181).Z,width:"882",height:"596"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Perceba que ele tr\xe1s o input necess\xe1rio para realizar a consulta. Iremos passar essa informa\xe7\xe3o utilizando o Data Pill ",(0,r.kt)("strong",{parentName:"p"},"Invoice Number"),". Arraste o data pills para o campo number."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(96936).Z,width:"1903",height:"525"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Clique em ",(0,r.kt)("span",{className:"button-purple"},"Done")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Por \xfaltimo, precisamos atualizar os valores na tabela com as informa\xe7\xf5es buscadas. Adicione uma nova ",(0,r.kt)("strong",{parentName:"p"},"Action")," ",(0,r.kt)("strong",{parentName:"p"},"ServiceNow Core > Update Record"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(87996).Z,width:"760",height:"418"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Iremos utilizar o registro que foi disparado na Trigger. Arraste para o campo ",(0,r.kt)("strong",{parentName:"p"},"Record")," o data pill ",(0,r.kt)("strong",{parentName:"p"},"Invoice Task Record"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(41917).Z,width:"1909",height:"658"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Perceba que ele preencheu a Tabela automaticamente. Agora adicione os campos do registro que devem ser alterados clicando em: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(1) ",(0,r.kt)("inlineCode",{parentName:"li"},"+ Add field value")," (Clique 3 vezes)"),(0,r.kt)("li",{parentName:"ul"},"(2) Adicione os campos ",(0,r.kt)("strong",{parentName:"li"},"Company, Short Description e Description"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(26991).Z,width:"1187",height:"400"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Agora iremos adicionar os valores por meio dos data pills."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Campo"),(0,r.kt)("th",{parentName:"tr",align:null},"Valor (Data Pill)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1. Company"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1 - Look Up Record")," > ",(0,r.kt)("inlineCode",{parentName:"td"},"Company Record"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2. Short Description"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2 - Retrieve descriptions for a specific inv...")," > ",(0,r.kt)("inlineCode",{parentName:"td"},"output")," > ",(0,r.kt)("inlineCode",{parentName:"td"},"short_description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3. Description"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2 - Retrieve descriptions for a specific inv...")," > ",(0,r.kt)("inlineCode",{parentName:"td"},"output")," > ",(0,r.kt)("inlineCode",{parentName:"td"},"description"))))),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{src:t(79871).Z,width:"1902",height:"639"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Clique em ",(0,r.kt)("span",{className:"button-purple"},"Done")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clique em ",(0,r.kt)("span",{className:"button-purple"},"Save")," e em seguida ",(0,r.kt)("span",{className:"button-purple"},"Activate")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(34836).Z,width:"665",height:"172"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Vamos testar o nosso fluxo. Clique em ",(0,r.kt)("strong",{parentName:"p"},"Test")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(17473).Z,width:"665",height:"172"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Selecione o registro ",(0,r.kt)("inlineCode",{parentName:"p"},"INVTASK0001001")," e clique em ",(0,r.kt)("span",{className:"button-purple"},"Run Test")," e ap\xf3s a execu\xe7\xe3o, clique no link abaixo."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(71007).Z,width:"803",height:"482"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verifique o resultado da exeu\xe7\xe3o."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(65911).Z,width:"803",height:"482"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Abra o step ",(0,r.kt)("strong",{parentName:"p"},"3. Update Record")," e clique no link ",(0,r.kt)("inlineCode",{parentName:"p"},"INVTASK0001001")," e verifique que os campos ",(0,r.kt)("strong",{parentName:"p"},"Company, Short Description e Description")," foram devidamente alterados."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(90822).Z,width:"1897",height:"609"})))),(0,r.kt)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \ud83c\udf89\ud83c\udf89 Parab\xe9ns! Voc\xea acaba de criar um fluxo ponta-a-ponta de integra\xe7\xe3o de faturas utilizando DocIntel para processar documentos por meio de OCR e ML e IntegrationHub para integrar com uma API Rest externa. ")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"DESAFIO: TESTE SEUS CONHECIMENTOS")),(0,r.kt)("p",{parentName:"admonition"},"Ap\xf3s finalizar o laborat\xf3rio te desafio a incrementar o fluxo para que ele fique mais inteligente!"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Cen\xe1rio: Criar fluxo de exce\xe7\xe3o"),(0,r.kt)("li",{parentName:"ul"},"Detalhes: Se n\xe3o houver nenhum registro correspondente ao nome do cliente, o Flow deve cria uma aprova\xe7\xe3o. Se aprovado, o Flow cria o registro na tabela ",(0,r.kt)("strong",{parentName:"li"},"Company"),"."))))}c.isMDXComponent=!0},58381:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-09-00-1df3fa4caeaef65cc99062549118826f.png"},58048:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-15-34-fdbb06c21a6c82b347a00edfdf0ee101.png"},61746:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-17-35-73a5613528d28aeb40d5fcc9f038a69d.png"},49484:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-18-30-6253f92449cc4dc9a2d29b014c9069bb.png"},6547:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-25-43-deb3c0dcf8714f9a6850d41592689124.png"},51499:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-28-05-5b39b7e4d219a6ab279fa7a0e7e380a3.png"},51533:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-29-18-9563c05c2eecd912f3ee831b6d18ee26.png"},75187:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-37-55-65e58b2b44647acefc27bcee7777368c.png"},34679:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-46-56-bf3229a353489862672788a5214bebdc.png"},39181:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-52-52-99efe293d010dd72fb416d8394732be5.png"},96936:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-57-48-9a7f202e7883a0f3e7e221a3f2941d5a.png"},87996:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-13-59-53-5b458a3c011d049dc04f09fc72c9f944.png"},41917:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-14-01-15-a9b444649ad46c9a2cff12da95d2c794.png"},26991:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-14-04-26-8827af54ca117772f80d15b551020ca2.png"},79871:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-14-11-55-91ac0c71d79dba68995eb91d671c490c.png"},34836:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-14-13-25-90989f385c5fbfdc1b2929290d2fee07.png"},17473:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-14-14-50-121846ae1b725b183de7c37ac1aa044b.png"},71007:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-14-17-36-f57bfad8a565ed00d3146a9330a13ad0.png"},65911:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-14-18-05-f57bfad8a565ed00d3146a9330a13ad0.png"},90822:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2025-01-29-14-20-17-99f77e6cb23a63ea633ab7907bfe7e0b.png"}}]);