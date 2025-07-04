// src/theme/light.ts
import { AppTheme } from './types';

// Example helper
const withOpacity = (hex: string, opacity: number) => {
  const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
  return `${hex}${alpha}`;
};


export const lightTheme: AppTheme = {
  colors: {
    primary: '#6200EE',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    error: '#B00020',
    onSurface: {
      withOpacity: (opacity: number) => withOpacity('#000000', opacity),
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
