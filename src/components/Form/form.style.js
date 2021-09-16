import styled from "styled-components";
import theme from "../../styles/theme";

const FormStyle = styled.div`
  fieldset {
    max-width: 60ch;
    margin: 0 auto;
    padding: 3rem;
    background: rgba(73, 88, 103, 0.5);
    border: none;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1rem);
  }

  legend {
    font-size: 5rem;
    margin: 0;
    padding: 0;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
  }

  label {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 1.2rem;
  }

  label:last-child {
    width: 2rem;
  }

  input {
    height: 1.8rem;
    margin: 0.4rem 0;
    border: none;
    background: ${theme.color.light};
    color: ${theme.color.dark};
  }
`;

export default FormStyle;
