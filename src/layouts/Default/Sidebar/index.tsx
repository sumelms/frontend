import Logo from '@app/components/Logo';
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside
      className="sidebar w-16 transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-900"
      data-testid="sidebar-element"
    >
      <div className="sidebar-header flex items-center justify-center bg-white py-4">
        <div className="flex h-8">
          <Logo />
        </div>
      </div>
      <div className="sidebar-content px-4 py-6">
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <a
              href=""
              className="flex flex-row items-center h-10 px-2 rounded-lg bg-gray-100"
            >
              Icon
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
