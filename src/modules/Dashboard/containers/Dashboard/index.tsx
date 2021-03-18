import React from 'react';

import { useAuth } from '../../../Auth/contexts/auth';
import { Body, Container, Header } from './styles';

const Dashboard: React.FC = () => {
  const { profile, hasRole } = useAuth();

  const all_roles: Array<string> = ['admin', 'teacher', 'student'];
  const valid_roles: Array<string> = all_roles.filter(hasRole);

  return (
    <Container>
      <Header>
        <div>
          <h1>Dashboard</h1>
          <span>Welcome back, {profile?.firstName}!</span>
        </div>
      </Header>
      <Body>
        <div>
          <h2>{profile?.firstName} you have the folowing roles:</h2>
          <ul>
            {valid_roles.map((role, key) => {
              return <li key={key}>{role}</li>;
            })}
          </ul>
        </div>
      </Body>
    </Container>
  );
};

export default Dashboard;
