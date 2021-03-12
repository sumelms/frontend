import React from 'react';

import UserService from '../../../../services/user_service';
import { Container, Header } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <h1>Dashboard</h1>
          <span>Welcome back, {UserService.GetFirstName()}!</span>
        </div>
      </Header>
    </Container>
  );
};

export default Dashboard;
