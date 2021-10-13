import './services/i18n';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from './modules/Auth/contexts/auth';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
