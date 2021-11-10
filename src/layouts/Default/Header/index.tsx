import { BellIcon, LogoutIcon, PlayIcon } from '@heroicons/react/outline';
import { useKeycloak } from '@react-keycloak/web';
import React from 'react';

import UserDropdown from './UserDropdown';

const Header: React.FC = () => {
  const { keycloak } = useKeycloak();

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
          <div className="mx-4">
            <UserDropdown user={user} />
          </div>
          <div className="flex items-center h-16">
            <nav className="inline-grid items-center grid-cols-3 mx-4 gap-x-4">
              <button className="hover:text-red-600">
                <PlayIcon className="w-6 h-6" />
              </button>
              <button className="hover:text-red-600">
                <BellIcon className="w-6 h-6" />
              </button>
              <button
                className="hover:text-red-600"
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
