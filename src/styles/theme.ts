import type { CustomFlowbiteTheme } from 'flowbite-react';

const theme: CustomFlowbiteTheme = {
  button: {
    outline: {
      // hotfix - https://github.com/themesberg/flowbite-react/pull/654
      on: 'bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full flex justify-center',
    },
  },
};

export default theme;
