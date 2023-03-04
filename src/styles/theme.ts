import { DeepPartial, FlowbiteTheme } from 'flowbite-react';

const theme: DeepPartial<FlowbiteTheme> = {
  accordion: {
    title: {
      base: 'flex w-full items-center justify-between first:rounded-t-none last:rounded-b-none py-4 px-4 text-left text-gray-500 dark:text-gray-400 border-transparent',
      arrow: {
        base: 'h-5 w-5 shrink-0',
      },
      flush: {
        off: 'hover:bg-blue-200/25 focus:ring-2 ring-inset focus:ring-blue-400 dark:hover:bg-gray-800 dark:focus:ring-blue-600',
        on: '!bg-transparent dark:!bg-transparent',
      },
      heading: 'text-base font-semibold',
      open: {
        off: 'bg-white/75',
        on: 'text-gray-900 bg-gray-200 dark:bg-gray-800 dark:text-white',
      },
    },
  },
  avatarGroup: {
    base: 'flex -space-x-1',
  },
  button: {
    outline: {
      color: {
        light:
          'border border-gray-200/75 bg-white hover:bg-gray-200/75 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-800 dark:focus:ring-gray-700',
      },
      off: '',
      on: 'bg-white text-gray-600 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white',
    },
  },
  breadcrumb: {
    item: {
      chevron: 'mx-2 h-4 w-4 text-gray-400 group-first:hidden md:mx-4',
      href: {
        off: 'flex items-center text-sm font-medium text-gray-500 dark:text-gray-400',
        on: 'flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:flex-none hover:underline hover:underline-offset-4',
      },
      icon: 'mr-4 h-4 w-4',
    },
    list: 'flex items-center',
  },
  card: {
    base: 'flex rounded-lg border border-gray-200/50 bg-white dark:border-gray-700 dark:bg-gray-800',
  },
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
  progress: {
    base: 'w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700',
    label: 'mb-1 flex justify-end font-medium text-xs text-gray-500 dark:text-white',
    bar: 'flex items-center justify-center rounded-full text-center font-medium leading-none text-blue-100',
    color: {
      dark: 'bg-gray-600/75 dark:bg-gray-300/75',
      red: 'bg-red-700/75 dark:bg-red-600/75',
    },
  },
};

export default theme;
