import React from 'react';

import UserService from '../../../services/user_service';
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
  const onLogoutClick = () => UserService.DoLogOut();

  return (
    <Container>
      <UserInfo />

      <Separator />

      <Actions>
        <ResumeIcon />
        <NotificationIcon />
        <LogoutIcon onClick={onLogoutClick} />
      </Actions>
    </Container>
  );
};

export default Header;
