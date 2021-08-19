import React from "react";
import SectionStyle from "./section.style";

const Section = ({ title, text, children }) => {
  return (
    <>
      <SectionStyle>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </SectionStyle>
    </>
  );
};

export default Section;
