import React, { Component } from 'react';
import './App.css';
import { pedirPermissaoParaReceberNotificacoes } from './push-notification';

import Test from "./Component/TestApi";

class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">
           <p>Testes Firabase Cloud Messaging</p>
           <button onClick={pedirPermissaoParaReceberNotificacoes} >
             Clique aqui para receber notificações
           </button>
           <Test /> 
       </header>
     </div>
    );
  }
}

export default App;
