import React, { ReactNode } from 'react';

import Content from './Content';

interface Props {
  children: ReactNode;
}

const Default: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
};

export default Default;
