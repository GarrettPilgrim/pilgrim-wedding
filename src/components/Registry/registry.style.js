import styled from "styled-components";
import theme from "../../styles/theme";

const RegistryStyle = styled.section`
  position: relative;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: stretch;
    align-items: center;
  }

  h2 {
    grid-column: 1 / -1;
    max-width: 60ch;
    margin: 0 auto 5rem auto;
  }

  a {
    padding: 10rem 0;
    margin: 1.4rem;
    font-size: 2rem;
    background: ${theme.color.lightTransparent};
    backdrop-filter: blur(1rem);
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  a:hover {
    background: ${theme.color.primary};
  }

  .link-container {
  }

  .flower-one {
    position: relative;
    right: -5rem;
    top: -5rem;
    justify-self: end;
    width: calc(8rem + 20%);
    transform: scaleY(-1) rotate(-150deg);
    fill: ${theme.color.secondary};
    z-index: -1;
  }

  .flower-two {
    position: relative;
    left: -5rem;
    top: -5rem;
    justify-self: start;
    width: calc(8rem + 20%);
    transform: rotate(0deg);
    fill: ${theme.color.primary};
    z-index: -1;
  }

  @media (max-width: 600px) {
  }

  @media (max-width: 900px) {
    .grid {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

export default RegistryStyle;