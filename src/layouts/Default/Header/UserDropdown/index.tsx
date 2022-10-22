import React, { useState } from 'react';
import {
  HiChevronDown,
  HiCog,
  HiFolderOpen,
  HiInbox,
  HiUser,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

import Avatar from '../../../../components/Avatar';

interface UserDropdownItemProps {
  to: string;
  title: string;
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
}

const UserDropdownItem: React.FC<UserDropdownItemProps> = ({
  to,
  title,
  text,
  icon: Icon,
}: UserDropdownItemProps) => (
  <Link
    to={to}
    className="flex items-start p-2 bg-transparent rounded-lg row dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
  >
    <div className="p-3 text-white bg-blue-400 rounded-lg">
      <Icon className="w-6 h-6" />
    </div>
    <div className="ml-3">
      <p className="font-semibold">{title}</p>
      <p className="text-sm">{text}</p>
    </div>
  </Link>
);

export interface UserDropdownProps {
  user: {
    name: string;
    avatar: string;
    role: string;
  };
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  user,
}: UserDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownMenuItems: UserDropdownItemProps[] = [
    {
      to: '/',
      title: 'Profile',
      text: 'Manage your account profile',
      icon: HiUser,
    },
    {
      to: '/',
      title: 'Messages',
      text: 'Check your latest comments',
      icon: HiInbox,
    },
    {
      to: '/',
      title: 'My Courses',
      text: 'Browse to the subscribed courses',
      icon: HiFolderOpen,
    },
    {
      to: '',
      title: 'Settings',
      text: 'Configure your preferences',
      icon: HiCog,
    },
  ];

  return (
    <div className="relative">
      <div className="flex flex-row items-center">
        <div className="flex flex-col text-right">
          <span className="font-semibold text-md">{user.name}</span>
          <span className="text-sm text-gray-400">{user.role}</span>
        </div>
        <div className="flex content-center mx-2">
          <Avatar
            name={user.name}
            url={user.avatar}
            size="sm"
            status="online"
          />
        </div>
        <div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <HiChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div
        className={`absolute right-0 w-full mt-2 origin-top-right md:max-w-screen-sm md:w-screen ${
          isOpen ? 'visible' : 'hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {dropdownMenuItems.map((item, key) => (
              <UserDropdownItem key={key} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
