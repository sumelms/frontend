import React, { ReactNode } from "react";

import { Container } from "./styles";

import Menu from "./Menu";
import Header from "./Header";
import Main from "./Main";

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
