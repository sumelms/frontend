import React, { ReactNode } from 'react';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen min-h-screen">
      <Header />
      <div className="flex flex-row flex-1 overflow-y-hidden">
        <div className="flex-1 overflow-y-auto">
          <Main>{children}</Main>
        </div>
        <div className="order-first overflow-y-auto">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
