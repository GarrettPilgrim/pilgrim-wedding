import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import RegistryStyle from "./registry.style";

const Registry = () => {
  return (
    <>
      <RegistryStyle>
        <AnchorLink>Amazon</AnchorLink>
        <AnchorLink>Target</AnchorLink>
      </RegistryStyle>
    </>
  );
};

export default Registry;
