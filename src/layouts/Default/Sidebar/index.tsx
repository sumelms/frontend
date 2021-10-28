import Logo from '@app/components/Logo';
import {
  ChatIcon,
  CogIcon,
  FolderOpenIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const mainMenuItems = [
    { route: '/', icon: HomeIcon },
    { route: '/', icon: FolderOpenIcon },
    { route: '/', icon: ChatIcon },
  ];

  const settingsMenuItems = [
    { route: '/', icon: QuestionMarkCircleIcon },
    { route: '/', icon: CogIcon },
  ];

  return (
    <aside
      className="sidebar fixed flex flex-col h-screen justify-center w-24 m-0 
      bg-primary justify-between divide divide-y"
      data-testid="sidebar-element"
    >
      <div>
        <div className="sidebar-header items-center justify-center bg-white py-4">
          <div className="flex h-8 dark:text-primary">
            <Logo />
          </div>
        </div>
        <div>
          <MenuList items={mainMenuItems} />
        </div>
      </div>
      <div>
        <MenuList items={settingsMenuItems} />
      </div>
    </aside>
  );
};

interface MenuListProps {
  items: MenuListItemProps[];
}

const MenuList = ({ items }: MenuListProps) => (
  <ul className="flex flex-col w-full">
    {items.map((item) => (
      <MenuListItem key={item.route} route={item.route} icon={item.icon} />
    ))}
  </ul>
);

interface MenuListItemProps {
  route: string;
  icon: React.ComponentType<any>;
}

const MenuListItem = ({ route, icon: IconComponent }: MenuListItemProps) => (
  <li>
    <Link
      to={route}
      className="flex-row items-center justify-center h-12 w-12 px-2 mt-2 mb-2 
    rounded-lg group hover:bg-gray-100 hover:shadow-lg transition-transform duration-150 "
    >
      <div className="text-white group-hover:text-red-600 h-6 w-6 m-auto ">
        <IconComponent />
      </div>
    </Link>
  </li>
);

export default Sidebar;
