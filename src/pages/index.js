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
      <Section
        title="Details"
        text="This is some basic starter text for a paragraph. Let us tell you a long winded story about us that you'll never actually read because you're only here for basic information about the wedding. Or perhaps you're a stalker trying to find out where one of us lives so you can watch us from your van."
      ></Section>
      <Section title="RSVP" text="RSVP Here!" />
      <Section title="Registry" text="Look at our Registries" />
    </>
  );
};

export default IndexPage;
