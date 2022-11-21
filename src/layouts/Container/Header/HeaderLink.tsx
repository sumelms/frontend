import React, { ComponentProps } from 'react';

export interface HeaderLinkProps {
  icon?: React.FC<ComponentProps<'svg'>>;
  label: string;
  href: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, icon: Icon, label }) => {
  return (
    <a
      href={href}
      className="flex content-center space-x-3 hover:text-blue-500 hover:underline hover:underline-offset-4"
    >
      {Icon && <Icon className="w-6 h-6" />}
      <span className="items-center font-medium tracking-wider">{label}</span>
    </a>
  );
};

export default HeaderLink;
