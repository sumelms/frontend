import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen min-h-screen">
      <Header />
      <div className="flex flex-row flex-1 overflow-y-hidden">
        <div className="flex-1 overflow-y-auto">
          <Main>
            <Outlet />
          </Main>
        </div>
        <div className="order-first overflow-y-auto">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
