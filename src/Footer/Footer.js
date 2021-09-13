import React from "react";
import FooterStyle from "./footer.style";

import Form from "../components/Form/Form";
import FlowerOne from "../svg/FlowerOne.svg";
import FlowerTwo from "../svg/FlowerTwo.svg";
import FlowerThree from "../svg/FlowerThree.svg";

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <FlowerThree className="flower-three" />
        <Form />
      </FooterStyle>
    </>
  );
};

export default Footer;
