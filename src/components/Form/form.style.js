import styled from "styled-components";
import theme from "../../styles/theme";

const FormStyle = styled.div`
  fieldset {
    border: none;
  }
  legend {
    font-size: 5rem;
  }
  form {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export default FormStyle;
