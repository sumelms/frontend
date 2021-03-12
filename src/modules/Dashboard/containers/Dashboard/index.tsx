import React from 'react';

import { useAuth } from '../../../Auth/contexts/auth';
import { Container, Header } from './styles';

const Dashboard: React.FC = () => {
  const { profile } = useAuth();

  return (
    <Container>
      <Header>
        <div>
          <h1>Dashboard</h1>
          <span>Welcome back, {profile?.firstName}!</span>
        </div>
      </Header>
    </Container>
  );
};

export default Dashboard;
