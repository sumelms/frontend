import './services/i18n';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useTheme } from './contexts/ThemeProvider';
import AuthProvider from './modules/Auth/contexts/auth';
import Routes from './routes';

const App: React.FC = () => {
  const { theme } = useTheme();
  console.log(theme);

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
