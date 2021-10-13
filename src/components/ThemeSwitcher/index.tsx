import './style.css';

import { useTheme } from '@app/contexts/ThemeProvider';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import React from 'react';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex align-middle">
      <SunIcon className="h-5 w-5" />
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          onChange={() => setTheme(theme == 'light' ? 'dark' : 'light')}
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <MoonIcon className="h-5 w-5" />
    </div>
  );
};

export default ThemeSwitcher;
