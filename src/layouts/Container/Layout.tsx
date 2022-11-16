import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumb';
import Header, { HeaderItemProps, HeaderLinkProps } from './Header';
import Navbar, { NavbarItemProps } from './Navbar';

export interface LayoutProps {
  title: string;
  subtitle?: string;
  // @TODO breadcrumb must accept the component breacrumb
  breadcrumb?: boolean;
  headerLinks?: HeaderLinkProps[];
  headerItems?: HeaderItemProps[];
  navbarItems?: NavbarItemProps[];
}

const Layout: React.FC = () => {
  const {
    title,
    subtitle,
    breadcrumb = true,
    headerItems,
    headerLinks,
    navbarItems,
  } = useLoaderData() as LayoutProps;

  return (
    <>
      <Header
        title={title}
        subtitle={subtitle}
        items={headerItems}
        links={headerLinks}
      />
      <div className="container flex-col px-5 mx-auto py-7 lg:py-14 lg:px-8 bg-neutral-100">
        {breadcrumb && (
          <div>
            <Breadcrumb />
          </div>
        )}
        {navbarItems && (
          <div className="mt-9 mb-11">
            <Navbar items={navbarItems} />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
