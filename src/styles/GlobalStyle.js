import { createGlobalStyle } from 'styled-components'

const theme = {
  primary: '#fe6600',
  secondary: '#0098fe',
  secondaryDark: '#00233a',
  background: '#212121',
  overlayLite: '#fffa',
  overlay: 'rgba(255, 255, 255, 0.1)',
  shadow: '1px 2px 3px 0 rgba(0, 0, 0, 0.1)',
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: ${theme.background};
    color: ${theme.overlayLite};
  }
`

export { theme, GlobalStyle as default }
