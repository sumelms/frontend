import React from "react";
import { FiFolder, FiTrello } from "react-icons/fi";

import logoImg from "../../../assets/svg/sume-icon.svg";

import { Container, Brand } from "./styles";

import MenuButton from "./MenuButton";

const Menu: React.FC = () => {
  return (
    <Container>
      <Brand>
        <img src={logoImg} alt="Sumé" />
      </Brand>

      <MenuButton icon={FiTrello} />
      <MenuButton icon={FiFolder} />
    </Container>
  );
};

export default Menu;
