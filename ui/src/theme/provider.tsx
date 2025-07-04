// src/theme/ThemeProviderWrapper.tsx
import React, {
    ReactNode,
    useState,
    createContext,
    useContext,
  } from 'react';
  import { ThemeProvider as StyledThemeProvider } from 'styled-components';
  import { lightTheme } from './light';
  import { darkTheme } from './dark';
  
  type ThemeMode = 'light' | 'dark';
  
  interface ThemeModeContextType {
    theme: ThemeMode;
    toggle: () => void;
  }
  
  const ThemeModeContext = createContext<ThemeModeContextType>({
    theme: 'dark',
    toggle: () => {},
  });
  
  export const useThemeMode = () => {
    const context = useContext(ThemeModeContext);
    if (!context) {
      throw new Error('useThemeMode must be used within ThemeProviderWrapper');
    }
    return context;
  };
  
  export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
    const getInitialTheme = (): ThemeMode => {
      const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
      if (savedTheme) return savedTheme;
  
      // Optional: system preference fallback
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    };
  
    const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  
    const toggle = () =>
      setTheme((prev) => {
        const newTheme = prev === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        return newTheme;
      });
  
    return (
      <ThemeModeContext.Provider value={{ theme, toggle }}>
        <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          {children}
        </StyledThemeProvider>
      </ThemeModeContext.Provider>
    );
  };
  
  export default ThemeProviderWrapper;
