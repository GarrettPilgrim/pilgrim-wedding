import styled from "styled-components";
import img from "../../images/engaged.jpg";
import theme from "../../styles/theme";

const HeaderStyle = styled.header`
  position: relative;

  .container {
    height: 100vh;
    max-width: 100vw;
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

  @media (max-width: 500px) {
    .img {
      background: 35% 100% / cover no-repeat url(${img});
      width: 70vw;
      height: 75vh;
    }
  }
`;

export default HeaderStyle;
