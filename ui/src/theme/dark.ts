// src/theme/dark.ts
import { AppTheme } from './types';
// Example helper
const withOpacity = (hex: string, opacity: number) => {
  const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
  return `${hex}${alpha}`;
};

export const darkTheme: AppTheme = {
  colors: {
    primary: '#6200EE',
    background: '#121212',
    surface: '#1E1E1E',
    error: '#CF6679',
    onSurface: {
      withOpacity: (opacity: number) => withOpacity('#FFFFFF', opacity),
    },
    onSurfaceVariant: '#E8E8E8',
  },
  body: '#121212',
  text: '#FFFFFF',
  toggleBorder: '#6B8096',
  background: '#121212',
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
      medium: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0.25px',
      },
      large: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
        letterSpacing: '0.15px',
      },
    },
  },
};
