import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    ${({ theme }) => css`
      outline: 0;
      box-shadow: 0 0 0 2px ${theme['green-500']};
    `}
  }

  body {
    ${({ theme }) => css`
      // sintaxe de cochetes, porque gray-900 tem um hífen
      background: ${theme['gray-900']};
      color: ${theme['gray-300']};
      -webkit-font-smoothing: antialiased;
    `}
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
