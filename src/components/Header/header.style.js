import styled from "styled-components";
import img from "../../images/engaged.jpg";
import theme from "../../styles/theme";

const HeaderStyle = styled.header`
  .container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img {
    background: 35% 70% / cover no-repeat url(${img});
    width: 70vw;
    height: 80vh;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  }

  .h1 {
    position: absolute;
    bottom: 20%;
    right: 35%;
    padding: 1rem 2rem;
    margin: 0;
    font-size: 10vw;
    z-index: 10;
  }

  nav {
    position: relative;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    z-index: 50;
  }

  ul {
    position: fixed;
    right: 1px;
    top: 1px;
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

  svg {
    fill: ${theme.color.light};
  }

  .flower-one {
    position: absolute;
    top: 25%;
    width: calc(2rem + 8vw);
    transform: scaleY(-1);
  }

  .flower-two {
    position: absolute;
    top: 0;
    right: 5%;
    width: calc(5rem + 15vw);
  }

  button {
    display: none;
  }

  @media (max-width: 450px) {
    .img {
      background: 35% 100% / cover no-repeat url(${img});
      width: 70vw;
      height: 75vh;
    }
  }

  @media (max-width: 900px) {
    nav {
      writing-mode: initial;
    }

    ul {
      display: flex;
      width: 50vw;
      justify-items: stretch;
      align-items: stretch;
      flex-direction: column;
      background: ${theme.color.lightTransparent};
    }

    li {
      position: relative;
      width: 100%;
      margin: 1rem 0;
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

export default HeaderStyle;
