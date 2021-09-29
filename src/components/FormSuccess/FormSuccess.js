import React from "react";
import SuccessStyle from "./formsucces.style";
import Section from "../Section/Section";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Flower from "../../svg/FlowerTwo.svg";

const FormSuccess = () => {
  return (
    <>
      <SuccessStyle>
        <div>
          <Section>
            <h2>Success!</h2>
            <p>
              You have successfully submitted your RSVP. We look forward to
              seeing you on our wedding day. Thank you!
            </p>
            <AnchorLink to="/">Return</AnchorLink>
          </Section>
        </div>
        <Flower className="flower" />
      </SuccessStyle>
    </>
  );
};

export default FormSuccess;
