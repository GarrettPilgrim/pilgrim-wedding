import styled from "styled-components";
import theme from "../../styles/theme";

const BurgerStyle = styled.button`
  position: fixed;
  top: 0.5rem;
  right: 0.2rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;

  div {
    width: 1.6rem;
    height: 0.15rem;
    background: ${theme.color.light};
    border-radius: 1rem;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export default BurgerStyle;
