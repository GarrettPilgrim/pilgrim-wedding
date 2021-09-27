import React from "react";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Countdown from "../components/Countdown/Countdown";
import Animation from "../components/Animation/Animation";
import Footer from "../components/Footer/Footer";
import Registry from "../components/Registry/Registry";
import GlobalStyles from "../styles/global";

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
      <Animation direction="left">
        <div id="countdown" />
        <Countdown />
      </Animation>
      <Animation direction="right">
        <div id="details" />
        <Section>
          <h2>Details</h2>
          <p>
            some random default text to reperesnt this section for the time
            being some random default text to reperesnt this section for the
            time being some random default text to reperesnt this section for+
            the time being
          </p>
        </Section>
      </Animation>
      <Animation direction="left">
        <div id="registry" />
        <Registry />
      </Animation>
      <div id="rsvp" />
      <Footer />
    </>
  );
};

export default IndexPage;
