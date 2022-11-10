import './services/i18n';

import React from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './routes';

const App: React.FC = () => {
  const router = useRoutes(routes);

  return (
    <div className="flex flex-col font-sans text-gray-800 bg-white dark:bg-zinc-100 dark:text-gray-900">
      {router}
    </div>
  );
};

export default App;
