import React from 'react';

import { Container, Header } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <h1>Dashboard</h1>
          <span>Welcome back, Ricardo!</span>
        </div>
      </Header>
    </Container>
  );
};

export default Dashboard;
