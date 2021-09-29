import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { bool } from "prop-types";
import MenuStyle from "./menu.style";

const Menu = ({ open }) => {
  return (
    <>
      <MenuStyle open={open}>
        <nav>
          <ul>
            <li>
              <AnchorLink to="/#date">Date</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#countdown">Countdown</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#details">Details</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#registry">Registry</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#rsvp">RSVP</AnchorLink>
            </li>
          </ul>
        </nav>
      </MenuStyle>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
