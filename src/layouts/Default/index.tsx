import React, { ReactNode } from 'react';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

export interface DefaultProps {
  children: ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }: DefaultProps) => {
  return (
    <>
      <Sidebar />
      <Main>
        <Header />
        <div>{children}</div>
      </Main>
    </>
  );
};

export default Default;
