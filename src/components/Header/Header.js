import React from "react";
import HeaderStyle from "./header.style";
import { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/hooks";

import Menu from "../Menu/Menu";
import FlowerOne from "../../svg/FlowerOne.svg";
import FlowerTwo from "../../svg/FlowerTwo.svg";
import Burger from "../Burger/Burger";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <HeaderStyle>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
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
