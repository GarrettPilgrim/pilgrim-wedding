import styled from "styled-components";
import theme from "../../styles/theme";

const BurgerStyle = styled.button`
  div {
    width: 2rem;
    height: 0.5rem;
    background: ${theme.color.light};
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export default BurgerStyle;
