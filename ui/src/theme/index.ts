// src/theme/index.ts
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#6200EE',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    error: '#B00020',
    onSurface: {
      withOpacity: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    },
    onSurfaceVariant: '#49454F',
  },
  body: '#FFFFFF',
  text: '#000000',
  toggleBorder: '#6B8096',
  background: '#FFFFFF',
  spacing: {
    small: '8px',
    medium: '16px',
  },
  typography: {
    label: {
      small: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '11px',
        fontWeight: 500,
        lineHeight: '16px',
        letterSpacing: '0.5px',
      },
    },
  },
};
