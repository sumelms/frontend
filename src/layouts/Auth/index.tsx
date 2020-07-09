import React, { ReactNode } from "react";

import logoImg from "../../assets/svg/sume-logo.svg";
import { Card, Container, Content } from "./styles";

interface Props {
  children: ReactNode;
}

const Auth: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Sumé" />
        <Card>{children}</Card>
      </Content>
    </Container>
  );
};

export default Auth;
