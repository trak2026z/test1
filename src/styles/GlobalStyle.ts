import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle `
body { margin: 0; padding: 0; font-family: 'Arial, sans-serif'; background: ${((emp => emp.theme.colors.background)}}; color: ${((emp) => emp.theme.colors.text}}; box-sizing: border-box; }
a { text-decoration: none; color: inherit; }
`

const StyledContainer = styled.div`
width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: ${((emp) => emp.theme.colors.background}};`

export { GlobalStyle, StyledContainer };