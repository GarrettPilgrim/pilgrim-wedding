import styled from "styled-components";
import theme from "../../styles/theme";

const BurgerStyle = styled.button`
  position: fixed;
  top: 0.8rem;
  right: 0.8rem;
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;

  div {
    position: relative;
    width: 1.6rem;
    height: 0.1rem;
    background: ${theme.color.light};
    border-radius: 1rem;
    transform-origin: 1px;
    transition: all 300ms linear;
  }

  :hover div,
  :active div {
    background: ${({ open }) =>
      open ? theme.color.primary : theme.color.secondary};
  }

  div:first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
  }

  div:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export default BurgerStyle;
