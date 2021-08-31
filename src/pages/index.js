import React from "react";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Countdown from "../components/Countdown/Countdown";

import GlobalStyles from "../styles/global";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Countdown />
      <Section>
        <h2>Details</h2>
        <p>
          some random default text to reperesnt this section for the time being
          some random default text to reperesnt this section for the time being
          some random default text to reperesnt this section for the time being
        </p>
      </Section>
      <Section>
        <h2>RSVP</h2>
      </Section>
      <Section>
        <h2>Registry</h2>
      </Section>
    </>
  );
};

export default IndexPage;
