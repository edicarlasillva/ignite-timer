import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    // Context Providers
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
