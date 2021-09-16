import styled from "styled-components";
import theme from "../../styles/theme";

const FooterStyle = styled.footer`
  position: relative;
  margin-top: 3rem;
  padding: 8rem 0;
  background: radial-gradient(
      ellipse at bottom right,
      ${theme.color.primary} 70%,
      transparent 70%
    ),
    radial-gradient(
      ellipse at bottom left,
      ${theme.color.secondary} 70%,
      transparent 70%
    );
  z-index: 10;

  svg {
    fill: ${theme.color.light};
  }

  .flower-three {
    position: absolute;
    top: -5rem;
    width: calc(10rem + 10%);
    transform: rotate(130deg);
  }
`;

export default FooterStyle;
