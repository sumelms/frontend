import Button from '@app/components/Button';
import ThemeSwitcher from '@app/components/ThemeSwitcher';
import { useAuth } from '@app/modules/Auth/contexts/auth';
import React from 'react';

const Dashboard: React.FC = () => {
  const { profile, hasRole, doLogout } = useAuth();

  const allRoles: Array<string> = ['admin', 'teacher', 'student'];
  const validRoles: Array<string> = allRoles.filter(hasRole);

  return (
    <>
      <div>
        <div>
          <h1>Dashboard</h1>
          <span>Welcome back, {profile?.firstName}!</span>
        </div>
      </div>
      <div>
        <div>
          <h2>{profile?.firstName} you have the folowing roles:</h2>
          <ul>
            {validRoles.map((role, key) => {
              return <li key={key}>{role}</li>;
            })}
          </ul>
          <Button id="app-logout" onClick={() => doLogout()}>
            Logout
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
