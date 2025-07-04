// src/theme/ThemeProviderWrapper.tsx
import React, { ReactNode, useState, createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from './index';

const ThemeModeContext = createContext<{
  toggle: () => void;
}>({ toggle: () => {} });

export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggle = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const themeObject = theme === 'light' ? lightTheme : lightTheme; // Replace with `darkTheme` later

  return (
    <ThemeModeContext.Provider value={{ toggle }}>
      <StyledThemeProvider theme={themeObject}>{children}</StyledThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeProviderWrapper;
