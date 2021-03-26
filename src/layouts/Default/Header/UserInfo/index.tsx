import React from 'react';

import { useAuth } from '../../../../modules/Auth/contexts/auth';
import { Avatar, Container, Profile } from './styles';

const UserInfo: React.FC = () => {
  const { profile } = useAuth();

  return (
    <Container>
      <Profile>
        <strong>{profile?.username}</strong>
        <span>Student</span>
      </Profile>
      <Avatar />
    </Container>
  );
};

export default UserInfo;
