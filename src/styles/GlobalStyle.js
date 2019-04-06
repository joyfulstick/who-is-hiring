import { createGlobalStyle } from 'styled-components'

const theme = {
  primary: '#fe6600',
  secondary: '#0098fe',
  secondaryDark: '#00233a',
  background: '#212121',
  overlayLite: 'rgba(255, 255, 255, 0.67)',
  overlay: 'rgba(255, 255, 255, 0.1)',
  shadow: '1px 2px 3px 0 rgba(0, 0, 0, 0.1)',
  maxWidth: '1200px',
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 3vmin;
    @media (min-width: ${theme.maxWidth}) {
      font-size: 16px;
    }
    background: ${theme.background};
    color: ${theme.overlayLite};
  }
`

export { theme, GlobalStyle as default }
