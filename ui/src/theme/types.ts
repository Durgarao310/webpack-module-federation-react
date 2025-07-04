export interface AppTheme {
  body: string;
  text: string;
  toggleBorder: string;
  background: string;
  colors: {
    primary: string;
    background: string;
    surface: string;
    error: string;
    onSurface: {
      withOpacity: (opacity: number) => string;
    };
    onSurfaceVariant: string;
  };
  spacing: {
    small: string;
    medium: string;
  };
  typography: {
    label: {
      small: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
        letterSpacing: string;
      };
      // --- ADD THESE NEW PROPERTIES FOR MEDIUM AND LARGE LABEL SIZES ---
      medium: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
        letterSpacing: string;
      };
      large: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
        letterSpacing: string;
      };
      // -----------------------------------------------------------------
    };
  };
}