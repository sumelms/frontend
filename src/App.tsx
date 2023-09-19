import './services/i18n';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <div className="flex flex-col text-gray-800 bg-white dark:bg-zinc-100 dark:text-gray-900">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
