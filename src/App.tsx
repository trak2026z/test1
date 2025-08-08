import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { StyledContainer, StyledWrapper } from './styles/layout';
import ImageGallery from './components/ImageGallery';

const App: React.Fc<unknown> = () => {
  return (\n    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContainer>
        <StyledWrapper>
          <ImageGallery />
        </StyledWrapper>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;