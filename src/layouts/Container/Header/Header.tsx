import React, { ComponentProps } from 'react';

import HeaderItem, { HeaderItemProps } from './HeaderItem';
import HeaderLink from './HeaderLink';

export interface HeaderLinksProps {
  icon?: React.FC<ComponentProps<'svg'>>;
  label: string;
  href: string;
}

export interface HeaderProps {
  title: string;
  subtitle?: string;
  items?: HeaderItemProps[];
  links?: HeaderLinksProps[];
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, items, links, ...props }: HeaderProps) => {
  return (
    <header {...props}>
      <div className="flex justify-center  text-white bg-gray-900 min-h-fit h-56">
        <div className="container self-center flex-col pl-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-5xl font-extrabold">{title}</p>
              <p className="text-xl font-medium">{subtitle}</p>
            </div>
            {items && (
              <div className="space-x-2 divide-x">
                {items.map((itemProps, index) => (
                  <HeaderItem {...itemProps} key={index.toString()} />
                ))}
              </div>
            )}
          </div>
          {links && (
            <div className="w-60">
              {links.map((link, key) => (
                <HeaderLink key={key} {...link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
