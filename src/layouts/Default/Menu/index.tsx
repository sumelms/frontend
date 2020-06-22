import React from "react";
import { Folder, Trello } from "styled-icons/feather";

import logoImg from "../../../assets/sume-icon.svg";

import { Container, Brand } from "./styles";

import MenuButton from "./MenuButton";

const Menu: React.FC = () => {
  return (
    <Container>
      <Brand>
        <img src={logoImg} alt="Sumé" />
      </Brand>

      <MenuButton icon={<Trello />} />
      <MenuButton icon={<Folder />} />
    </Container>
  );
};

export default Menu;
