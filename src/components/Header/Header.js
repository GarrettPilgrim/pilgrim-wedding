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
            <button>x</button>
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
        <FlowerOne class="flower-one" />
        <FlowerTwo class="flower-two" />
      </HeaderStyle>
    </>
  );
};

export default Header;
