import { useKeycloak } from '@react-keycloak/web';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';

const Header: React.FC = () => {
  const { keycloak } = useKeycloak();

  const user = {
    name: keycloak.tokenParsed?.name,
    role: 'student',
    avatar: 'https://avatars.githubusercontent.com/u/191027?v=4',
  };

  const UserDetails = () => {
    return (
      <Avatar
        alt="User settings"
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        rounded={true}
      />
    );
  };

  return (
    <Navbar fluid={true} rounded={false}>
      <Navbar.Brand href="https://sumelms.com/">
        <img
          src="../../../assets/svg/sume-icon-dark.svg"
          className="h-6 mr-3 sm:h-9"
          alt="Sume Logo"
        />
      </Navbar.Brand>
      <div className="flex bg-white md:order-2">
        <Dropdown arrowIcon={false} inline={true} label={<UserDetails />}>
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block text-sm font-medium truncate">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => keycloak.logout()}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
