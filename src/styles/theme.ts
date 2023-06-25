import type { CustomFlowbiteTheme } from 'flowbite-react';

const theme: CustomFlowbiteTheme = {
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
