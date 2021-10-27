import Button from '@app/components/Button';
import Container from '@app/components/Container';
import ThemeSwitcher from '@app/components/ThemeSwitcher';
import { useKeycloak } from '@react-keycloak/web';
import React from 'react';

const Dashboard: React.FC = () => {
  const { keycloak } = useKeycloak();

  return (
    <Container spaced>
      <div>
        <div>
          <h1>Dashboard</h1>
          <span>Welcome back, {keycloak.tokenParsed?.given_name}!</span>
        </div>
      </div>
      <div>
        <div>
          <Button id="app-logout" onClick={() => keycloak.logout()}>
            Logout
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
