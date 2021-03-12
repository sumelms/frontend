import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import UserService from './services/user_service';

const entrypoint = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

UserService.InitKeycloak(entrypoint);
