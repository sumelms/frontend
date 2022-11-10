import './services/i18n';

import React from 'react';

import Router from './router';

const App: React.FC = () => {
  return (
    <div className="flex flex-col text-gray-800 bg-white	dark:bg-zinc-100 dark:text-gray-900 font-sans">
      <Router />
    </div>
  );
};

export default App;
