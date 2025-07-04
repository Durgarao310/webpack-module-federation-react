// src/theme/light.ts
import { AppTheme } from './types';

// Example helper
const withOpacity = (hex: string, opacity: number) => {
  const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
  return `${hex}${alpha}`;
};

export const lightTheme: AppTheme = {
  mode: 'light',
  name: 'light',
  body: '#FFFFFF',
  text: '#000000',
  toggleBorder: '#6B8096',
  background: '#FFFFFF',
  borderColor: '#E0E0E0',
  
  colors: {
    primary: '#6200EE',
    secondary: '#03DAC6',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    error: '#B00020',
    success: '#4CAF50',
    warning: '#FFC107',
    onPrimary: '#FFFFFF',
    onSurface: {
      withOpacity: (opacity: number) => withOpacity('#000000', opacity),
      highEmphasis: '#000000',
      mediumEmphasis: 'rgba(0, 0, 0, 0.87)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    onSurfaceVariant: '#49454F',
    divider: 'rgba(0, 0, 0, 0.12)',
  },

  spacing: {
    none: '0px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },

  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '40px',
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '32px',
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '0em',
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.00938em',
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.01071em',
    },
    button: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
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
    caption: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.03333em',
    },
  },

  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },

  componentSizes: {
    inputHeight: {
      small: '32px',
      medium: '40px',
      large: '48px',
    },
    buttonHeight: {
      small: '32px',
      medium: '40px',
      large: '48px',
    },
    borderRadius: '8px',
  },

  transitions: {
    duration: '0.2s',
    easing: 'ease-in-out',
  },
};
