/* Localização da área de contas e dos comunicados.
   Somente textos estáticos: não altera dados, tokens, perfis ou mensagens do servidor.
   Conteúdos oficiais conservam o idioma de publicação. */
(function(){
"use strict";
const entries=[
["Pular para o conteúdo","Skip to content","Ir al contenido"],
["Pular para conteúdo","Skip to content","Ir al contenido"],
["Diretoria de Relações Internacionais","International Relations Office","Dirección de Relaciones Internacionales"],
["Projeto acadêmico não oficial","Unofficial academic project","Proyecto académico no oficial"],
["Portal","Portal","Portal"],["Universidades","Universities","Universidades"],["Documentos","Documents","Documentos"],["Como funciona","How it works","Cómo funciona"],
["Página inicial","Home","Inicio"],["Notícias documentais","Archived news","Noticias archivadas"],["Minha conta","My account","Mi cuenta"],
["ACESSO PESSOAL · PROTÓTIPO ACADÊMICO","PERSONAL ACCESS · ACADEMIC PROTOTYPE","ACCESO PERSONAL · PROTOTIPO ACADÉMICO"],
["Seu próximo passo, do seu jeito.","Your next step, your way.","Su siguiente paso, a su manera."],
["Uma área de preparação para alunos, docentes e gestores. Organize universidades de interesse, consulte documentos e acompanhe suas próximas etapas.","A planning space for students, faculty and managers. Explore universities, documents and next steps.","Un espacio de preparación para estudiantes, docentes y gestores. Explore universidades, documentos y próximos pasos."],
["Continuar explorando sem login →","Explore without signing in →","Seguir explorando sin iniciar sesión →"],
["Vida acadêmica na Unifor","Campus life at Unifor","Vida universitaria en Unifor"],
["Integração Nhost pendente.","Nhost connection pending.","Conexión Nhost pendiente."],
["As telas estão prontas, mas o projeto de autenticação e o banco precisam ser criados e conectados para aceitar cadastros reais. Nenhuma senha é armazenada neste site.","The screens are ready, but a Nhost project and database must be connected before real registration works. No passwords are stored here.","Las pantallas están listas, pero es necesario conectar un proyecto Nhost y su base de datos. Este sitio no almacena contraseñas."],
["Entrar","Sign in","Ingresar"],["Criar conta","Create account","Crear cuenta"],
["Boas-vindas de volta","Welcome back","¡Bienvenido de nuevo!"],
["Escolha sua área de acesso e use seu e-mail e sua senha.","Select your access role and enter your email and password.","Seleccione su perfil e introduzca su correo y contraseña."],
["Entrar como","Sign in as","Entrar como"],["Aluno","Student","Estudiante"],["Professor / docente","Professor / faculty","Profesor / docente"],
["Administrador / gestor","Administrator / manager","Administrador / gestor"],
["E-mail","Email","Correo electrónico"],["Senha","Password","Contraseña"],["Entrar na minha conta","Sign in to my account","Acceder a mi cuenta"],
["Crie sua conta","Create your account","Cree su cuenta"],
["Escolha seu perfil. O cadastro administrativo é uma solicitação e exige aprovação.","Choose your role. Administrator registration is a request and requires approval.","Elija su perfil. El acceso de administrador es una solicitud y requiere aprobación."],
["Tipo de cadastro","Account type","Tipo de cuenta"],
["Administrador / gestor (solicitar acesso)","Administrator / manager (request access)","Administrador / gestor (solicitar acceso)"],
["Para estudantes: salve destinos e organize sua preparação.","For students: save destinations and plan your next steps.","Para estudiantes: guarde destinos y organice su preparación."],
["Nome","Name","Nombre"],["Senha (mínimo 10 caracteres)","Password (at least 10 characters)","Contraseña (mínimo 10 caracteres)"],
["Confirme a senha","Confirm password","Confirme la contraseña"],["Solicitar cadastro","Request account","Solicitar registro"],
["COMO FUNCIONAM OS PERFIS?","HOW DO ROLES WORK?","¿CÓMO FUNCIONAN LOS PERFILES?"],
["Três caminhos, um mesmo portal.","Three paths, one portal.","Tres caminos, un mismo portal."],
["Consulte programas, salve universidades e organize seu checklist de preparação.","Browse programs, save universities and organize your checklist.","Consulte programas, guarde universidades y organice su lista de preparación."],
["Docente","Faculty","Docente"],
["Acesse orientações de mobilidade acadêmica e mantenha seus interesses organizados.","Find academic mobility guidance and keep your interests organized.","Acceda a orientaciones de movilidad académica y organice sus intereses."],
["Administrador","Administrator","Administrador"],
["Gerencie conteúdos apenas após aprovação formal do acesso pelo responsável do projeto.","Manage content only after your access request is approved.","Gestione contenidos únicamente después de la aprobación de su acceso."],
["Por segurança, escolher “administrador” não concede permissões de gestor. Todo acesso administrativo depende de autorização no banco de dados.","For security, choosing administrator does not grant management privileges. Access requires server-side authorization.","Por seguridad, seleccionar administrador no otorga privilegios. El acceso requiere autorización en el servidor."],
["SUA ÁREA","YOUR SPACE","SU ESPACIO"],["Olá!","Hello!","¡Hola!"],["Sair da conta","Sign out","Cerrar sesión"],
["Universidades favoritas","Saved universities","Universidades favoritas"],
["Salve instituições de referência para pesquisar depois. Não há inscrição automática.","Save institutions to review later. This does not submit an application.","Guarde instituciones para consultar después. No se realiza ninguna solicitud."],
["Escolha uma instituição","Choose an institution","Elija una institución"],
["Salvar universidade","Save university","Guardar universidad"],["Meu checklist","My checklist","Mi lista de preparación"],
["O progresso é salvo na sua conta, se o backend estiver configurado.","Progress is saved to your account when the backend is configured.","Su progreso se guarda en su cuenta si el servidor está configurado."],
["Definir a modalidade","Choose a program type","Definir la modalidad"],["Consultar o edital vigente","Check current calls","Consultar la convocatoria vigente"],
["Pesquisar a universidade","Research the university","Investigar la universidad"],
["Conferir idioma e documentos","Check language and documents","Verificar idioma y documentos"],
["Planejar custos e viagem","Plan costs and travel","Planificar costos y viaje"],
["Confirmar orientações com a DRI","Confirm details with DRI","Confirmar orientaciones con la DRI"],
["Consultar documentação →","Browse documents →","Consultar documentación →"],
["Espaço do docente","Faculty space","Espacio docente"],
["Consulte os programas de mobilidade docente, pesquisa internacional e cooperação acadêmica.","Review faculty mobility, international research and academic cooperation.","Consulte movilidad docente, investigación internacional y cooperación académica."],
["Abrir orientações para docentes →","Open faculty guidance →","Abrir orientaciones para docentes →"],
["Acesso de gestor em análise.","Manager access under review.","Acceso de gestor en revisión."],
["Seu pedido foi registrado no cadastro; um administrador autorizado precisa conceder acesso no banco. Enquanto isso, você pode utilizar a área comum.","Your request is pending approval in the database. You can use the regular account area.","Su solicitud espera aprobación en la base de datos. Mientras tanto puede utilizar el área común."],
["GESTÃO AUTORIZADA","AUTHORIZED MANAGEMENT","GESTIÓN AUTORIZADA"],
["Publicar orientação institucional","Publish institutional guidance","Publicar orientación institucional"],
["Apenas usuários explicitamente autorizados no banco podem enviar registros editoriais. Estes conteúdos são um módulo complementar e não alteram as páginas fixas existentes.","Only approved managers may create editorial entries. This module does not change existing public pages.","Solo gestores autorizados pueden crear contenidos. Este módulo no modifica las páginas públicas existentes."],
["Título","Title","Título"],["Texto","Text","Texto"],["Fonte oficial (https://)","Official source (https://)","Fuente oficial (https://)"],
["Status","Status","Estado"],["Rascunho","Draft","Borrador"],["Em revisão","In review","En revisión"],["Publicado","Published","Publicado"],
["Salvar conteúdo","Save content","Guardar contenido"],
["Protótipo acadêmico não oficial · Grupo 08 ·","Unofficial academic prototype · Group 08 ·","Prototipo académico no oficial · Grupo 08 ·"],
["Contatos oficiais DRI","Official DRI contacts","Contactos oficiales de la DRI"],
["Identidade visual Unifor","Unifor visual identity","Identidad visual de Unifor"],
["Voltar ao portal","Back to portal","Volver al portal"],
["CONTEÚDO EDITORIAL · PROTÓTIPO ACADÊMICO","EDITORIAL CONTENT · ACADEMIC PROTOTYPE","CONTENIDO EDITORIAL · PROTOTIPO ACADÉMICO"],
["Comunicados e orientações","Announcements and guidance","Comunicados y orientaciones"],
["Registros complementares do projeto. Para prazos, editais e orientações oficiais, consulte sempre a DRI da Unifor.","Complementary information. Always check deadlines and official calls with Unifor's DRI.","Información complementaria. Consulte fechas y convocatorias oficiales con la DRI de Unifor."],
["Voltar ao portal →","Back to portal →","Volver al portal →"],
["Imagem institucional de referência","Institutional image","Imagen institucional de referencia"],
["Este é um protótipo acadêmico independente e não oficial; informações cadastradas não equivalem à aprovação da DRI ou da Unifor.","This is an independent, unofficial academic prototype. Entries are not approved by DRI or Unifor.","Este es un prototipo académico independiente y no oficial. Los registros no equivalen a la aprobación de la DRI o Unifor."],
["Carregando publicações...","Loading announcements...","Cargando publicaciones..."],
["Confirmar com a DRI","Confirm with DRI","Confirmar con la DRI"],
["voce@exemplo.com","you@example.com","usted@ejemplo.com"],["Sua senha","Your password","Su contraseña"],
["Nenhuma universidade salva ainda.","No saved universities yet.","Aún no hay universidades guardadas."]
];
const maps={en:new Map(entries.map(row=>[row[0],row[1]])),es:new Map(entries.map(row=>[row[0],row[2]]))};
const originalTexts=new WeakMap();
const originalPlaceholders=new WeakMap();
function translate(){
 const language=window.PortalPreferences?.language||"pt";
 const dict=maps[language];
 const walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{
  acceptNode(node){
   if(!node.parentElement||node.parentElement.closest("script,style,textarea,option[data-private],#authStatus,#favoritesList,#editorialList,#accountGreeting,#accountDetails"))return NodeFilter.FILTER_REJECT;
   return node.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;
  }
 });
 const nodes=[];while(walk.nextNode())nodes.push(walk.currentNode);
 for(const node of nodes){
  if(!originalTexts.has(node))originalTexts.set(node,node.nodeValue);
  const before=originalTexts.get(node),key=before.trim();
  const replacement=language==="pt"?key:(dict?.get(key)||key);
  node.nodeValue=before.replace(key,replacement);
 }
 for(const el of document.querySelectorAll("input[placeholder],textarea[placeholder]")){
  if(!originalPlaceholders.has(el))originalPlaceholders.set(el,el.getAttribute("placeholder"));
  const before=originalPlaceholders.get(el);
  el.setAttribute("placeholder",language==="pt"?before:(dict?.get(before)||before));
 }
 const isPosts=!!document.getElementById("publicList");
 document.title=isPosts
  ? (language==="es"?"Comunicados | Internacionaliza":language==="en"?"Announcements | Internacionaliza":"Comunicados | Internacionaliza")
  : (language==="es"?"Mi cuenta | Internacionaliza":language==="en"?"My account | Internacionaliza":"Minha conta | Internacionaliza");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",translate,{once:true});else translate();
window.addEventListener("portal:language",translate);
})();