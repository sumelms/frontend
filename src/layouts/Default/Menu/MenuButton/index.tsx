import React, { ReactNode } from 'react';

import { Button } from './styles';

export interface Props {
  icon: ReactNode;
}

const MenuButton: React.FC<Props> = ({ icon }: Props) => {
  return <Button>{icon}</Button>;
};

export default MenuButton;
