import { useTheme } from '@app/contexts/ThemeProvider';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import React from 'react';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex">
      <SunIcon className="h-5 w-5" />
      <div className="relative inline-block w-10 mx-1 align-middle select-none">
        <input
          onChange={() => setTheme(theme == 'light' ? 'dark' : 'light')}
          type="checkbox"
          name="toggle"
          id="theme-switcher"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-green-400"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer dark:bg-green-400"
        ></label>
      </div>
      <MoonIcon className="h-5 w-5" />
    </div>
  );
};

export default ThemeSwitcher;
