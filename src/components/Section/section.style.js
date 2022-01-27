import styled from "styled-components";
import theme from "../../styles/theme";

const SectionStyle = styled.section`
  display: grid;
  grid-template-columns: minmax(10px, 1fr) auto minmax(10px, 1fr);

  div {
    max-width: 90vw;
    padding: 10rem calc(1rem + 6vw);
    margin: 1rem;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1rem);
  }

  * {
    grid-column: 2 / 3;
    max-width: 60ch;
  }

  .full-width {
    grid-column: 1 / -1;
  }

  span {
    font-size: calc(1rem + 5vw);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default SectionStyle;
