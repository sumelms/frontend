import React from 'react';

import { Avatar, Container, Profile } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <strong>Ricardo Lüders</strong>
        <span>Student</span>
      </Profile>
      <Avatar />
    </Container>
  );
};

export default UserInfo;
