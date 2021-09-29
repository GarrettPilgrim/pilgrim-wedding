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
          <a
            href="https://www.amazon.com/wedding/share/garrett-natalie-pilgrimage-registry"
            target="_blank"
            rel="noreferrer"
          >
            Amazon
          </a>
          <a
            href="https://www.target.com/gift-registry/gift/pilgrimage-registry1"
            target="_blank"
            rel="noreferrer"
          >
            Target
          </a>
        </div>
      </RegistryStyle>
    </>
  );
};

export default Registry;
