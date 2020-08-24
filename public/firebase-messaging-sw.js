importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
firebase.initializeApp({
	// ... Adicionar Firebase Config -> Encontra-se em
	// Visão Geral do Projeto -> Configurações do Projeto -> Geral 
	//-> Em "Seus aplicativos", gere as chaves escolhendo a aplicação Web, e cole aqui as informações contidas dentro das chaves
	// var config = {...}
});
const messaging = firebase.messaging();