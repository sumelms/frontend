import './assets/css/tailwind.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AuthService from './modules/Auth/services/auth';

const entrypoint = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

AuthService.init(entrypoint);
