import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './containers/App'
import GlobalStyle, { theme } from './styles/GlobalStyle'

const app = (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
)

ReactDOM.render(app, document.getElementById('root'))
