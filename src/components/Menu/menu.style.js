import styled from "styled-components";
import theme from "../../styles/theme";

const MenuStyle = styled.div`
  nav {
    position: fixed;
    right: 1px;
    top: 1px;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    z-index: 50;
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0 0 0 0;
    list-style: none;
  }

  li {
    margin: 1rem;
  }

  a,
  button {
    display: block;
    padding: 1.5rem 1rem;
    border: none;
    font-size: 1rem;
    text-decoration: none;
    backdrop-filter: blur(1rem);
  }

  a:hover,
  a:active,
  a:focus,
  button:hover,
  button:active,
  button:focus {
    background: ${theme.color.primary};
    font-size: 110%;
    border: none;
  }

  @media (max-width: 900px) {
    nav {
      writing-mode: initial;
      background: ${theme.color.lightTransparent};
    }

    ul {
      display: flex;
      width: 50vw;
      justify-items: stretch;
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

    button {
      display: block;
      align-self: flex-end;
    }
  }
`;

export default MenuStyle;
