import { useKeycloak } from '@react-keycloak/web';
import { Avatar, Button, DarkThemeToggle, Dropdown, Navbar, type CustomFlowbiteTheme, Tooltip } from 'flowbite-react';
import React from 'react';
import {
  HiOutlineAcademicCap,
  HiOutlineArrowPath,
  HiOutlineArrowRightOnRectangle,
  HiOutlineBell,
  HiOutlineBookOpen,
  HiOutlineMoon,
  HiOutlinePlayCircle,
  HiOutlineSun,
  HiOutlineUser,
} from 'react-icons/hi2';
// eslint-disable-next-line import/no-unresolved
import logoUrl from '@/assets/svg/new-logo.svg';

const NavbarTheme: CustomFlowbiteTheme['navbar'] = {};

const Header: React.FC = () => {
  const { keycloak } = useKeycloak();

  const user = {
    name: keycloak.tokenParsed?.name,
    role: 'student',
    avatar: 'https://avatars.githubusercontent.com/u/191027?v=4',
  };

  const ActionButtons = () => {
    return (
      <div className="flex gap-2 pl-4 ml-4 border-l">
        <Tooltip content="Change color theme" placeholder="bottom">
          <DarkThemeToggle iconLight={HiOutlineSun} iconDark={HiOutlineMoon} />
        </Tooltip>
        <Tooltip content="Resume last activity" placeholder="bottom">
          <Button color="gray" className="w-12 h-12 border-none">
            <HiOutlinePlayCircle className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </Button>
        </Tooltip>
        <Tooltip content="See the notifications" placeholder="bottom">
          <Button color="gray" className="w-12 h-12 border-none">
            <HiOutlineBell className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </Button>
        </Tooltip>
        <Tooltip content="Logout" placeholder="bottom">
          <Button onClick={() => keycloak.logout()} color="gray" className="w-12 h-12 border-none">
            <HiOutlineArrowRightOnRectangle className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </Button>
        </Tooltip>
      </div>
    );
  };

  const UserDetails = () => {
    return (
      <div className="flex items-center gap-3">
        <div className="flex flex-col mr-2 text-right">
          <p className="text-xs font-semibold text-gray-900 dark:text-gray-400">{user.name ?? 'Student Name'}</p>
          <span className="text-xs font-thin text-gray-900 dark:text-gray-400">{user.role ?? 'Student Role'}</span>
        </div>
        <div>
          <Avatar alt={`${user.name}'s settings menu`} size="sm" img={user.avatar} rounded={true} />
        </div>
      </div>
    );
  };

  return (
    <Navbar theme={NavbarTheme} fluid={true} rounded={false}>
      <Navbar.Brand href="https://sumelms.com/">
        <img src={logoUrl} className="mr-3" alt="Sume Logo" />
      </Navbar.Brand>
      <div className="flex items-center text-gray-900 md:order-2 dark:text-gray-400">
        <Dropdown arrowIcon={true} inline={true} label={<UserDetails />}>
          <Dropdown.Item icon={HiOutlineArrowPath}>Change Account</Dropdown.Item>
          <Dropdown.Item icon={HiOutlineUser}>My Account</Dropdown.Item>
          <Dropdown.Item icon={HiOutlineAcademicCap}>My Courses</Dropdown.Item>
          <Dropdown.Item icon={HiOutlineBookOpen}>My Classrooms</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiOutlineArrowRightOnRectangle} onClick={() => keycloak.logout()}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <ActionButtons />
      </div>
    </Navbar>
  );
};

export default Header;
