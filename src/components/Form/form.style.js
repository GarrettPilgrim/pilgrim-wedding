import styled from "styled-components";
import theme from "../../styles/theme";

const FormStyle = styled.div`
  fieldset {
    max-width: 60ch;
    margin: 0 auto;
    padding: 3rem;
    background: ${theme.color.darkTransparent};
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
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  label {
    display: grid;
    grid-template-columns: 1fr;
  }

  input {
    height: 1.8rem;
    margin: 0.4rem 0;
    border: none;
    background: ${theme.color.lightTransparent};
    color: ${theme.color.light};
  }

  button {
    justify-self: end;
    padding: 1rem 1.5rem;
    border: none;
    background: ${theme.color.lightTransparent};
    font-size: 2rem;
    cursor: pointer;
  }

  button:hover {
    background: ${theme.color.secondary};
  }

  p {
    margin: 0;
  }

  @media (max-width: 500px) {
    form {
      grid-template-columns: 1fr;
    }
  }
`;

export default FormStyle;
