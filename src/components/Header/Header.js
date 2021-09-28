import React from "react";
import HeaderStyle from "./header.style";
import { useState } from "react";

import Menu from "../Menu/Menu";
import FlowerOne from "../../svg/FlowerOne.svg";
import FlowerTwo from "../../svg/FlowerTwo.svg";
import Burger from "../Burger/Burger";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderStyle>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <div className="container">
          <h1 className="h1">Pilgrimage</h1>
          <div className="img" />
        </div>
        <FlowerOne class="flower-one" />
        <FlowerTwo class="flower-two" />
      </HeaderStyle>
    </>
  );
};

export default Header;
