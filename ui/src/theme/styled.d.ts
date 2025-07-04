// src/theme/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
      };
    };
  }
}
