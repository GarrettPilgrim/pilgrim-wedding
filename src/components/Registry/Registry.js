import React from "react";
import FlowerOne from "../../svg/FlowerOne.svg";
import FlowerTwo from "../../svg/FlowerTwo.svg";
import FlowerThree from "../../svg/FlowerThree.svg";

import RegistryStyle from "./registry.style";

const Registry = () => {
  return (
    <>
      <RegistryStyle>
        <div class="grid">
          <h2>Registry</h2>
          <a href="https://www.amazon.com/" target="_blank">
            Amazon
          </a>
          <a href="https://www.target.com/" target="_blank">
            Target
          </a>
        </div>
      </RegistryStyle>
    </>
  );
};

export default Registry;
