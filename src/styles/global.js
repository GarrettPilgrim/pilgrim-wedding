import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  /* Override */
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    background: ${theme.color.dark};
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, p, a, fieldset, button {
    font-family: ${theme.font.serif};
    color: ${theme.color.light};
  }

  h2 {
    font-size: calc(2rem + 2vw);
  }

  p, label {
    font-family: ${theme.font.sans};
  }

  a {
    transition: 200ms ease-in-out;
  }

  section { 
    margin: 10rem 0;
  }

  @keyframes wipe-enter {
    0% {
      transform: scale(0, 0.025);
    }

    50% {
      transform: scale(1, .025);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    
  }
`;

export default GlobalStyles;
