import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle `
body { margin: 0; padding: 0; font-family: 'Arial, sans-serif'; background: ${emp.theme.colors.background}; color: ${emp.theme.colors.text}; box-sizing: border-box; }
h1, h2, h3, h4, h5, h6 { color: ${emp.theme.colors.primaryText}; }
a { text-decoration: none; color: inherit; }
`

const StyledContainer = styled.div`
width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: ${emp.theme.colors.background};`

export { GlobalStyle, StyledContainer };