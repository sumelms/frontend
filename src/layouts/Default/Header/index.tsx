import { useKeycloak } from '@react-keycloak/web';
import { Avatar, Button, DarkThemeToggle, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { HiLogout } from 'react-icons/hi';
// eslint-disable-next-line import/no-unresolved
import logoUrl from '~/assets/svg/sume-icon-dark.svg?url';

const Header: React.FC = () => {
  const { keycloak } = useKeycloak();

  const user = {
    name: keycloak.tokenParsed?.name,
    role: 'student',
    avatar: 'https://avatars.githubusercontent.com/u/191027?v=4',
  };

  const ActionButtons = () => {
    return (
      <div className="flex pl-4 ml-4 border-l">
        <DarkThemeToggle />
        <Button onClick={() => keycloak.logout()} className="!bg-transparent !text-gray-600">
          <HiLogout className="w-4 h-4" />
        </Button>
      </div>
    );
  };

  const UserDetails = () => {
    return (
      <div className="flex items-center">
        <div className="flex flex-col mr-2 text-right">
          <p className="text-sm font-semibold">{user.name}</p>
          <span className="text-xs font-medium">{user.role}</span>
        </div>
        <div>
          <Avatar alt={`${user.name}'s settings menu`} img={user.avatar} rounded={true} />
        </div>
      </div>
    );
  };

  return (
    <Navbar fluid={true} rounded={false}>
      <Navbar.Brand href="https://sumelms.com/">
        <img src={logoUrl} className="h-6 mr-3 sm:h-9" alt="Sume Logo" />
      </Navbar.Brand>
      <div className="flex bg-white md:order-2">
        <Dropdown arrowIcon={true} inline={true} label={<UserDetails />}>
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block text-sm font-medium truncate">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => keycloak.logout()}>Sign out</Dropdown.Item>
        </Dropdown>
        <ActionButtons />
      </div>
    </Navbar>
  );
};

export default Header;
