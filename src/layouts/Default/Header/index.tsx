import React from 'react';

import { useAuth } from '../../../modules/Auth/contexts/auth';
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
  const { doLogout } = useAuth();

  return (
    <Container>
      <UserInfo />

      <Separator />

      <Actions>
        <ResumeIcon />
        <NotificationIcon />
        <LogoutIcon onClick={doLogout} />
      </Actions>
    </Container>
  );
};

export default Header;
