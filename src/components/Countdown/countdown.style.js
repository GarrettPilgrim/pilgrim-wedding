import styled from "styled-components";
import theme from "../../styles/theme";

const CountdownStyle = styled.div`
  margin: 6rem 0;

  .flex {
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex-direction: column;
  }

  .flex div {
    margin-bottom: 3rem;
  }
  h3 {
    font-size: 1.6rem;
    margin: 0;
  }

  p {
    font-size: 4rem;
    margin: 0;
  }

  @media (min-width: 600px) {
    .flex {
      flex-direction: row;
    }

    h3 {
      font-size: calc(1.6rem + 1vw);
    }

    p {
      font-size: calc(4rem + 1vw);
    }
  }
`;

export default CountdownStyle;
