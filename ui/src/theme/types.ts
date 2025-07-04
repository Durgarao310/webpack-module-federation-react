// src/theme/types.ts

export interface AppTheme {
  // Base theme identifiers
  mode: 'light' | 'dark'; // explicitly typed for clarity
  name?: string; // optional theme name like 'default', 'corporate', etc.

  body: string;
  text: string;
  toggleBorder: string;
  background: string;
  borderColor: string;

  colors: {
    primary: string;
    secondary: string;
    tertiary?: string;
    background: string;
    surface: string;
    surfaceVariant?: string;
    error: string;
    success: string;
    warning: string;

    onPrimary: string;
    onSecondary?: string;
    onTertiary?: string;

    onSurface: {
      withOpacity: (opacity: number) => string;
      highEmphasis: string;
      mediumEmphasis: string;
      disabled: string;
    };

    onSurfaceVariant: string;
    divider: string;
  };

  spacing: {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl'?: string;
  };

  typography: {
    fontFamily: string;
    h1: TypographyStyle;
    h2: TypographyStyle;
    h3: TypographyStyle;
    body1: TypographyStyle;
    body2: TypographyStyle;
    button: TypographyStyle;
    label: {
      small: TypographyStyle;
      medium: TypographyStyle;
      large: TypographyStyle;
    };
    caption: TypographyStyle;
    overline?: TypographyStyle;
  };

  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };

  componentSizes: {
    inputHeight: {
      small: string;
      medium: string;
      large: string;
    };
    buttonHeight?: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: string;
  };

  zIndex?: {
    appBar: number;
    drawer: number;
    modal: number;
    popover: number;
    tooltip: number;
  };

  transitions: {
    duration: string;
    easing: string;
  };

  shadows?: {
    level1: string;
    level2: string;
    level3: string;
    level4?: string;
  };

  animations?: {
    fadeIn?: string;
    scaleIn?: string;
  };
}

export interface TypographyStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
  textTransform?: string;
}
