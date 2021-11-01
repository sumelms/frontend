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
      className="fixed flex flex-col justify-between w-20 h-screen m-0 divide-y sidebar bg-primary divide"
      data-testid="sidebar-element"
    >
      <div>
        <div className="items-center justify-center py-4 bg-white sidebar-header">
          <div className="flex h-8 dark:text-primary">
            <Logo />
          </div>
        </div>
        <div className="mt-2">
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
    {items.map((item, key) => (
      <MenuListItem key={key} route={item.route} icon={item.icon} />
    ))}
  </ul>
);

interface MenuListItemProps {
  route: string;
  icon: React.ComponentType<any>;
}

const MenuListItem = ({ route, icon: IconComponent }: MenuListItemProps) => (
  <li className="flex justify-center ">
    <Link
      to={route}
      className="flex flex-row items-center justify-center w-12 h-12 mt-2 mb-2 transition-transform duration-150 rounded-lg group hover:bg-gray-100 hover:shadow-lg "
    >
      <div className="w-6 h-6 m-auto text-white group-hover:text-red-600 ">
        <IconComponent />
      </div>
    </Link>
  </li>
);

export default Sidebar;
