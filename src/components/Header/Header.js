import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import HeaderStyle from "./header.style";
import FlowerOne from "../../svg/FlowerOne.svg";
import FlowerTwo from "../../svg/FlowerTwo.svg";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div className="container">
          <h1 className="h1">Pilgrimage</h1>
          <div className="img" />
        </div>
        <nav>
          <ul>
            <li>
              <AnchorLink to="/#here">Countdown</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#here">Detail</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#here">RSVP</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#here">Registry</AnchorLink>
            </li>
          </ul>
        </nav>
        <FlowerOne class="flower-one" />
        <FlowerTwo class="flower-two" />
      </HeaderStyle>
    </>
  );
};

export default Header;
