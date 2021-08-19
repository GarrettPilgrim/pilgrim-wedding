import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Links = ({ section }) => {
  return (
    <>
      <li>
        <AnchorLink to={section}>Story</AnchorLink>
      </li>
    </>
  );
};
