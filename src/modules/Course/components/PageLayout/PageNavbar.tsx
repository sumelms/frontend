import React from 'react';

interface PageNavbarTheme {
  navbar: {
    base: string;
    item: {
      base: string;
    };
  };
}

export interface PageNavbarItemsProps {
  label: string;
  route: string;
}

interface PageNavbarProps {
  items: PageNavbarItemsProps[];
}

const PageNavbar: React.FC<PageNavbarProps> = ({ items }) => {
  const theme: PageNavbarTheme = {
    navbar: {
      base: 'flex gap-x-8 gap-y-4 flex-wrap',
      item: {
        base: 'flex bg-white text-zinc-500 hover:bg-red-100 hover:text-red-600 rounded-lg items-center justify-center px-3 py-4 text-sm font-medium  disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
      },
    },
  };

  return (
    <div className="my-8 space-y-8">
      <div className={theme.navbar.base}>
        {items.map((item, key) => (
          <a
            className={theme.navbar.item.base}
            href={item.route}
            key={key.toString()}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PageNavbar;
