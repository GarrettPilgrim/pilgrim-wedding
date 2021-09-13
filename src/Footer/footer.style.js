import styled from "styled-components";
import theme from "../styles/theme";

const FooterStyle = styled.footer`
  height: 30rem;
  background: ${theme.color.secondary};
  svg {
    fill: ${theme.color.light};
  }
  .flower-three {
    position: relative;
    top: -3rem;
    width: 15%;
    transform: rotate(130deg);
  }
`;

export default FooterStyle;
