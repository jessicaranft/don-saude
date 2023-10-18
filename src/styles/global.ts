import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antaliased;

    font-size: 16px;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme['txt-primary']};
    font-size: 2.4rem;
    font-weight: 700;
  }
`
