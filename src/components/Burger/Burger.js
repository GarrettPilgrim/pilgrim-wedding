import React from "react";
import { bool, func } from "prop-types";

import BurgerStyle from "./burger.style";

const Burger = ({ open, setOpen }) => {
  return (
    <>
      <BurgerStyle open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyle>
    </>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
