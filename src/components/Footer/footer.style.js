import styled from "styled-components";
import theme from "../../styles/theme";

const FooterStyle = styled.footer`
  position: relative;
  margin-top: 6rem;
  padding: 8rem 0;
  background: radial-gradient(
      circle at bottom right,
      ${theme.color.primary} 0%,
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      ${theme.color.secondary} 0%,
      transparent 30%
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
