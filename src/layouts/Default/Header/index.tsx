import React from 'react';

import {
  Actions,
  Container,
  LogoutIcon,
  NotificationIcon,
  ResumeIcon,
  Separator,
} from './styles';
import UserInfo from './UserInfo';

const Header: React.FC = () => {
  return (
    <Container>
      <UserInfo />

      <Separator />

      <Actions>
        <ResumeIcon />
        <NotificationIcon />
        <LogoutIcon />
      </Actions>
    </Container>
  );
};

export default Header;
