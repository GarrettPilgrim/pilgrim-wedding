import styled from "styled-components";
import theme from "../../styles/theme";

const SuccessStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  background: radial-gradient(
      circle at top right,
      ${theme.color.primary} 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at bottom left,
      ${theme.color.secondary} 0%,
      transparent 50%
    );

  div {
    padding: 0 calc(0.1rem + 6vw);
    background: ${theme.color.lightTransparent};
    backdrop-filter: blur(1rem);
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }

  a {
    background: ${theme.color.darkTransparent};
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    justify-self: center;
    text-decoration: none;
  }

  a:hover,
  a:active,
  a:focus {
    background: ${theme.color.secondary};
    transform: scale(110%);
    border: none;
  }

  section {
    margin: 6rem 0;
  }

  section h2 {
    margin-bottom: 0;
  }

  .flower {
    position: absolute;
    top: 0px;
    left: -40px;
    width: calc(5rem + 15vw);
    fill: ${theme.color.light};
    transform: scaleY(-1) rotate(290deg);
  }
`;

export default SuccessStyle;
