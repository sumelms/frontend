import { DeepPartial, FlowbiteTheme } from 'flowbite-react';

const theme: DeepPartial<FlowbiteTheme> = {
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
    inner: 'h-full overflow-y-auto overflow-x-hidden py-4 px-3 bg-zinc-900',
    collapsed: {
      on: 'w-16',
      off: 'w-64',
    },
    item: {
      base: 'group flex items-center justify-center rounded-lg p-2 text-base font-normal text-zinc-900 hover:bg-white',
      active: 'bg-white',
      icon: {
        base: 'h-6 w-6 flex-shrink-0 text-gray-300 transition duration-75 hover:text-red-600 group-hover:text-red-600',
        active: 'text-red-600',
      },
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
