import React from 'react';

import UserService from '../../../../services/user_service';
import { Avatar, Container, Profile } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <strong>{UserService.GetUserName()}</strong>
        <span>Student</span>
      </Profile>
      <Avatar />
    </Container>
  );
};

export default UserInfo;
