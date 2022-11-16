import React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarItemProps {
  label: string;
  route: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ route, label }) => {
  return (
    <Link
      className="flex items-center justify-center px-3 py-4 text-sm font-medium bg-white rounded-lg text-zinc-500 hover:bg-red-100 hover:text-red-600 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500"
      to={route}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
