import React from "react";
import { useInView } from "react-intersection-observer";
import AnimationStyle from "./animation.style";

const Animation = ({ children, direction }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-10% 0px",
  });

  return (
    <AnimationStyle ref={ref}>
      <div className={inView ? "animated" : direction}>{children}</div>
    </AnimationStyle>
  );
};

export default Animation;
