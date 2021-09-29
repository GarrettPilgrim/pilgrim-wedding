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

  a:hover,
  a:active {
    background: ${theme.color.secondary};
  }

  .link-container {
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
