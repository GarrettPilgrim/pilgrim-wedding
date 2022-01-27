import React from "react";

import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Countdown from "../components/Countdown/Countdown";
import Animation from "../components/Animation/Animation";
import Registry from "../components/Registry/Registry";
import GlobalStyles from "../styles/global";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Animation direction="right">
        <div id="date" />
        <Section>
          <h2>
            Date <br />
            <span> March 19, 2022</span>
          </h2>
        </Section>
      </Animation>
      <Animation direction="right">
        <div id="details" />
        <Section>
          <h2>
            Location <br />
            <span>FedEx Event Center at Shelby Farms</span>
          </h2>
        </Section>
      </Animation>
      <Animation direction="left">
        <div id="date" />
        <Section>
          <h2>
            Ceremony at 5 pm
            <br />
          </h2>
          <h3>Reception to follow</h3>
        </Section>
      </Animation>
      <Animation direction="left">
        <div id="countdown" />
        <Countdown />
      </Animation>
      <Animation direction="right">
        <div id="registry" />
        <Registry />
      </Animation>
      <div id="rsvp" />
      <Footer />
    </>
  );
};

export default IndexPage;
