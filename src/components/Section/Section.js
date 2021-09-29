import React from "react";
import SectionStyle from "./section.style";

const Section = ({ children }) => {
  return (
    <>
      <SectionStyle>{children}</SectionStyle>
    </>
  );
};

export default Section;
