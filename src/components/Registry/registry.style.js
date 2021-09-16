import styled from "styled-components";
import theme from "../../styles/theme";

const RegistryStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  h2 {
    grid-column: 1 / -1;
  }

  a {
    font-size: 2rem;
    background: ${theme.color.primary};
    padding: 20vw;
  }
`;

export default RegistryStyle;
