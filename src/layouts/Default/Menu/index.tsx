import React from 'react';
import { FiFolder, FiTrello } from 'react-icons/fi';

import logoImg from '../../../assets/svg/sume-icon.svg';
import MenuButton from './MenuButton';
import { Brand, Container } from './styles';

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
