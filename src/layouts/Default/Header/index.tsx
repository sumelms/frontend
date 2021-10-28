import Avatar from '@app/components/Avatar';
import {
  BellIcon,
  ChevronDownIcon,
  CogIcon,
  FolderOpenIcon,
  InboxIcon,
  LogoutIcon,
  PlayIcon,
  UserIcon,
} from '@heroicons/react/outline';
import { useKeycloak } from '@react-keycloak/web';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const { keycloak } = useKeycloak();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const user = {
    name: keycloak.tokenParsed?.name,
    role: 'student',
    avatar: 'https://avatars.githubusercontent.com/u/191027?v=4',
  };

  return (
    <header className="bg-white header" data-testid="header-element">
      <div className="flex items-center justify-between h-20">
        <div></div>
        <div></div>
        <div className="flex items-center divide-x divide-gray-200 divide">
          <div className="relative mx-4">
            <div className="flex flex-row items-center">
              <div className="flex flex-col text-right">
                <span className="font-semibold text-md">{user.name}</span>
                <span className="text-sm text-gray-400">{user.role}</span>
              </div>
              <div className="mx-2">
                <Avatar
                  name={user.name}
                  url={user.avatar}
                  size="sm"
                  status="online"
                />
              </div>
              <div>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <ChevronDownIcon className="w-3 h-3" />
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
                  <a
                    className="flex items-start p-2 bg-transparent rounded-lg row dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    <div className="p-3 text-white bg-blue-400 rounded-lg">
                      <UserIcon className="w-6 h-6" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">Profile</p>
                      <p className="text-sm">Manage your account profile</p>
                    </div>
                  </a>

                  <a
                    className="flex items-start p-2 bg-transparent rounded-lg row dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    <div className="p-3 text-white bg-blue-400 rounded-lg">
                      <InboxIcon className="w-6 h-6" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">Messages</p>
                      <p className="text-sm">Check your latest comments</p>
                    </div>
                  </a>

                  <a
                    className="flex items-start p-2 bg-transparent rounded-lg row dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    <div className="p-3 text-white bg-blue-400 rounded-lg">
                      <FolderOpenIcon className="w-6 h-6" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">My Courses</p>
                      <p className="text-sm">
                        Browse to the subscribed courses
                      </p>
                    </div>
                  </a>

                  <a
                    className="flex items-start p-2 bg-transparent rounded-lg row dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    <div className="p-3 text-white bg-blue-400 rounded-lg">
                      <CogIcon className="w-6 h-6" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">Settings</p>
                      <p className="text-sm">Configure your preferences</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center h-16">
            <nav className="inline-grid items-center grid-cols-3 mx-4 gap-x-4">
              <button className="hover:text-red-400">
                <PlayIcon className="w-6 h-6" />
              </button>
              <button className="hover:text-red-400">
                <BellIcon className="w-6 h-6" />
              </button>
              <button
                className="hover:text-red-400"
                id="app-logout"
                onClick={() => keycloak.logout()}
              >
                <LogoutIcon className="w-6 h-6" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
