import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ThemeContextProps {
  theme: string;
  setTheme: (v: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = (args: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light');

  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);

  const defaultContext = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={defaultContext}>{args?.children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextProps {
  return useContext<ThemeContextProps>(ThemeContext);
}

export default ThemeProvider;
