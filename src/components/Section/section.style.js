import styled from "styled-components";

const SectionStyle = styled.section`
  display: grid;
  grid-template-columns: minmax(10px, 1fr) auto minmax(10px, 1fr);

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
`;

export default SectionStyle;
