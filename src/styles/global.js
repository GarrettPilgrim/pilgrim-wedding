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
    ${
      "" /* background:
      radial-gradient(
        circle at bottom left,
        ${theme.color.secondary} -100%,
        transparent 30%
      ),
      radial-gradient(
        circle at top right,
        ${theme.color.primary} -0%,
        ${theme.color.dark} 30%
      )
    ; */
    }
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, p, a {
    font-family: ${theme.font.serif};
    color: ${theme.color.light};
    max-width: 60ch;
  }

  p {
    font-family: ${theme.font.sans};
  }
`;

export default GlobalStyles;
