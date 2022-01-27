import React from "react";
import SectionStyle from "./section.style";

const Section = ({ children }) => {
  return (
    <>
      <SectionStyle>
        <div>{children}</div>
      </SectionStyle>
    </>
  );
};

export default Section;
