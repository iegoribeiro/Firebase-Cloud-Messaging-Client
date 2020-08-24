import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { inicializarFirebase } from './push-notification';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

inicializarFirebase();