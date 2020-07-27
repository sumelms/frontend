import React, { ReactNode } from 'react';

import Header from './Header';
import Main from './Main';
import Menu from './Menu';
import { Container } from './styles';

interface Props {
  children: ReactNode;
}

const Default: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container>
      <Menu />
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default Default;
