import styled from "styled-components";

const SectionStyle = styled.section`
  display: grid;
  grid-template-columns: minmax(10px, 1fr) auto minmax(10px, 1fr);
  justify-items: stretch;

  * {
    grid-column: 2 / 3;
  }
`;

export default SectionStyle;
