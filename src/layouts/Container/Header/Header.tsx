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
      <div className="flex text-white bg-zinc-800 min-h-fit h-80">
        <div className="container flex flex-col self-end px-5 mx-auto lg:px-10 pb-9 space-y-11">
          <div className="space-y-6">
            <p className="text-4xl font-bold">{title}</p>
            <p className="text-xl font-semibold">{subtitle}</p>
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
