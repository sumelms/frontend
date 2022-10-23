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

  return (
    <Navbar fluid={true} rounded={false}>
      <Navbar.Brand href="https://sumelms.com/">
        <img
          src="../../../assets/svg/sume-icon-dark.svg"
          className="h-6 mr-3 sm:h-9"
          alt="Sume Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2 bg-white">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
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
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
