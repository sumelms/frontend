import React, { ReactNode } from 'react';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <Main>
        <Header />
        {children}
      </Main>
    </>
  );
};

export default Layout;
