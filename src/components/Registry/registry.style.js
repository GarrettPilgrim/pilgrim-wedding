import styled from "styled-components";
import theme from "../../styles/theme";

const RegistryStyle = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  h2 {
    grid-column: 1 / -1;
  }

  a {
    font-size: 2rem;
    padding: 8rem;
    background: ${theme.color.lightTransparent};
    backdrop-filter: blur(1rem);
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  }

  a:first-of-type {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  a:last-of-type {
    grid-column: 2 / -1;
    grid-row: 2 / 3;
  }

  .flower-one {
    position: relative;
    right: -5rem;
    top: -5rem;
    grid-column: 2 / -1;
    grid-row: 2 / 3;
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
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    justify-self: start;
    width: calc(8rem + 20%);
    transform: rotate(0deg);
    fill: ${theme.color.primary};
    z-index: -1;
  }
`;

export default RegistryStyle;
