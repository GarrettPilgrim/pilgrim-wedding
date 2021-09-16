import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import RegistryStyle from "./registry.style";

const Registry = () => {
  return (
    <>
      <RegistryStyle>
        <h2>Registry</h2>
        <AnchorLink to="https://www.amazon.com/">Amazon</AnchorLink>
        <AnchorLink to="https://www.target.com/">Target</AnchorLink>
      </RegistryStyle>
    </>
  );
};

export default Registry;
