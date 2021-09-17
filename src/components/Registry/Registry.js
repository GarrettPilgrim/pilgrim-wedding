import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import FlowerOne from "../../svg/FlowerOne.svg";
import FlowerTwo from "../../svg/FlowerTwo.svg";
import FlowerThree from "../../svg/FlowerThree.svg";

import RegistryStyle from "./registry.style";

const Registry = () => {
  return (
    <>
      <RegistryStyle>
        <h2>Registry</h2>
        <AnchorLink to="https://www.amazon.com/">Amazon</AnchorLink>
        <AnchorLink to="https://www.target.com/">Target</AnchorLink>
        <FlowerTwo className="flower-two" />
        <FlowerOne className="flower-one" />
      </RegistryStyle>
    </>
  );
};

export default Registry;
