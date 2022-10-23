import { FlowbiteTheme } from 'flowbite-react';

const theme: Partial<FlowbiteTheme> = {
  navbar: {
    base: 'border-gray-50 bg-white px-2 py-2.5 sm:px-4',
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
    brand: 'flex items-center',
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
        on: 'bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700',
        off: 'border-b border-gray-100 text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-400 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-gray-400',
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
    base: 'h-full',
    inner:
      'h-full overflow-y-auto overflow-x-hidden bg-white py-4 px-3 dark:bg-zinc-900',
    collapsed: {
      on: 'w-16',
      off: 'w-64',
    },
    collapse: {
      button:
        'group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
      icon: {
        base: 'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
        open: {
          off: '',
          on: 'text-gray-900',
        },
      },
      label: {
        base: 'ml-3 flex-1 whitespace-nowrap text-left',
        icon: 'h-6 w-6',
      },
      list: 'space-y-2 py-2',
    },
    cta: {
      base: 'mt-6 rounded-lg p-4',
      color: {
        blue: 'bg-blue-50 dark:bg-blue-900',
        dark: 'bg-dark-50 dark:bg-dark-900',
        failure: 'bg-red-50 dark:bg-red-900',
        gray: 'bg-alternative-50 dark:bg-alternative-900',
        green: 'bg-green-50 dark:bg-green-900',
        light: 'bg-light-50 dark:bg-light-900',
        red: 'bg-red-50 dark:bg-red-900',
        purple: 'bg-purple-50 dark:bg-purple-900',
        success: 'bg-green-50 dark:bg-green-900',
        yellow: 'bg-yellow-50 dark:bg-yellow-900',
        warning: 'bg-yellow-50 dark:bg-yellow-900',
      },
    },
    item: {
      base: 'flex items-center justify-center rounded-lg p-2 text-base font-normal text-zinc-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
      active: 'bg-gray-100 dark:bg-gray-700',
      collapsed: {
        insideCollapse: 'group w-full pl-8 transition duration-75',
        noIcon: 'font-bold',
      },
      content: {
        base: 'px-3 flex-1 whitespace-nowrap',
      },
      icon: {
        base: 'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
        active: 'text-gray-700 dark:text-gray-100',
      },
    },
    items: '',
    itemGroup:
      'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700',
    logo: {
      base: 'mb-5 flex items-center pl-2.5',
      collapsed: {
        on: 'hidden',
        off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white',
      },
      img: 'mr-3 h-6 sm:h-7',
    },
  },
  tooltip: {
    target: 'w-fit',
    base: 'absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm',
    animation: 'transition-opacity',
    hidden: 'invisible opacity-0',
    style: {
      dark: 'bg-zinc-900 text-white dark:bg-zinc-700',
      light: 'border border-gray-200 bg-white text-zinc-900',
      auto: 'border border-gray-200 bg-white text-zinc-900 dark:border-none dark:bg-zinc-900 dark:text-white',
    },
    content: 'relative z-20',
    arrow: {
      base: 'absolute z-10 h-2 w-2 rotate-45',
      style: {
        dark: 'bg-gray-900 dark:bg-zinc-700',
        light: 'bg-white',
        auto: 'bg-white dark:bg-zinc-700',
      },
      placement: '-4px',
    },
  },
};

export default theme;
