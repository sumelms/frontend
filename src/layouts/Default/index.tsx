import React, { ReactNode } from 'react';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

interface Props {
  children: ReactNode;
}

const Default: React.FC<Props> = ({ children }: Props) => {
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
