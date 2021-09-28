import styled from "styled-components";
import theme from "../../styles/theme";

const MenuStyle = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
  z-index: 90;

  nav {
    margin-top: 3rem;
    writing-mode: vertical-rl;
    text-orientation: sideways;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0 0 0 0;
    list-style: none;
  }

  li {
    margin: 1rem;
  }

  a {
    display: block;
    padding: 1.5rem 1rem;
    border: none;
    font-size: 1rem;
    text-decoration: none;
    backdrop-filter: blur(1rem);
  }

  a:hover,
  a:active,
  a:focus {
    background: ${theme.color.primary};
    font-size: 110%;
    border: none;
  }

  @media (max-width: 900px) {
    background: ${theme.color.lightTransparent};

    nav {
      writing-mode: initial;
    }

    ul {
      display: flex;
      width: 50vw;
      margin-top: 2rem;
      justify-content: flex-start;
      align-items: stretch;
      flex-direction: column;
    }

    li {
      position: relative;
      width: 100%;
      margin: 0;
    }

    a {
      position: relative;
      width: 100%;
    }
  }
`;

export default MenuStyle;
