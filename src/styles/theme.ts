import type { CustomFlowbiteTheme } from 'flowbite-react';

const theme: CustomFlowbiteTheme = {
  darkThemeToggle: {
    root: {
      base: 'group flex items-center justify-center p-0.5 text-center font-medium focus:z-10 text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 disabled:hover:bg-white focus:ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:disabled:hover:bg-gray-800 rounded-lg focus:ring-2 w-12 h-12 border-none',
      icon: 'h-6 w-6',
    },
  },
  navbar: {
    root: {
      base: 'bg-white p-6 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
      rounded: {
        on: 'rounded',
        off: '',
      },
      bordered: {
        on: 'border',
        off: '',
      },
      inner: {
        base: 'mx-auto flex flex-wrap items-center justify-between',
        fluid: {
          on: '',
          off: 'container',
        },
      },
    },
    brand: {
      base: 'flex items-center',
    },
    collapse: {
      base: 'w-full md:block md:w-auto',
      list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
      hidden: {
        on: 'hidden',
        off: '',
      },
    },
    link: {
      base: 'block py-2 pr-4 pl-3 md:p-0',
      active: {
        on: 'bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700',
        off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
      },
      disabled: {
        on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
        off: '',
      },
    },
    toggle: {
      base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
      icon: 'h-6 w-6 shrink-0',
    },
  },
  sidebar: {
    root: {
      base: 'h-full',
      inner: 'flex justify-center h-full overflow-y-auto overflow-x-hidden bg-gray-800 py-4 dark:bg-gray-800',
      collapsed: {
        on: 'w-[60px]',
      },
    },
    items: 'w-full',
    item: {
      base: 'flex items-center justify-center py-3 text-base font-normal text-white bg-gray-800 hover:bg-gray-700 dark:text-white dark:hover:bg-gray-700',
      active:
        'bg-gray-700 dark:bg-gray-700 relative before:absolute before:top-[10%] before:left-0 before:h-[80%] before:w-1 before:rounded-r before:bg-gray-300',
      collapsed: {
        insideCollapse: 'group w-full pl-8 transition duration-75',
        noIcon: 'font-bold',
      },
      content: {
        base: 'px-3 flex-1 whitespace-nowrap',
      },
      icon: {
        base: 'h-6 w-6 flex-shrink-0 text-white transition duration-75 group-hover:text-white dark:text-white dark:group-hover:text-white',
        active: 'text-white dark:text-white',
      },
      label: '',
      listItem: 'w-full',
    },
    itemGroup:
      'mt-4 space-y-2 border-t border-gray-700 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700',
  },
  tooltip: {
    target: '',
  },
};

export default theme;
