import firebase from 'firebase';

export const inicializarFirebase = () => {
  firebase.initializeApp({
		// ... Adicionar Firebase Config -> Encontra-se em
		// Visão Geral do Projeto -> Configurações do Projeto -> Geral 
		//-> Em "Seus aplicativos", gere as chaves escolhendo a aplicação Web, e cole aqui as informações contidas dentro das chaves
		// var config = {...}
  });
}

export const pedirPermissaoParaReceberNotificacoes = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token do usuário:', token);
    return token;
  } catch (error) {
    console.error(error);
  }
}