import React from 'react';

import NavbarItem, { NavbarItemProps } from './NavbarItem';

export interface NavbarProps {
  items: NavbarItemProps[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <div className="my-8 space-y-8">
      <div className="flex flex-wrap gap-x-8 gap-y-4">
        {items.map((item, key) => (
          <NavbarItem key={key} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
