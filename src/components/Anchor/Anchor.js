import React from "react";
import AnchorStyle from "./anchor.style";

const Anchor = ({ AnchorText, AnchorLink }) => {
  return (
    <>
      <AnchorStyle href={AnchorLink}>{AnchorText}</AnchorStyle>
    </>
  );
};

export default Anchor;
