import 'styled-components';

// Rozszythenie typing TypeScript da theme objectt
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primaryText: string;
    };
  }
}