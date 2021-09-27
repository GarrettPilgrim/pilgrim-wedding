import styled from "styled-components";
import theme from "../../styles/theme";

const AnimationStyle = styled.div`
  overflow: hidden;
  @keyframes slide-in-right {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .right {
    transform: translateX(100%);
    opacity: 0;
    transition: ease-in-out 450ms;
  }

  .left {
    transform: translateX(-100%);
    opacity: 0;
    transition: ease-in-out 450ms;
  }

  .animated {
    transition: ease-in-out 450ms;
  }
`;

export default AnimationStyle;
