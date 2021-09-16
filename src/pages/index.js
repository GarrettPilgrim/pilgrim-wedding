import React from "react";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Countdown from "../components/Countdown/Countdown";
import Animation from "../components/Animation/Animation";

import GlobalStyles from "../styles/global";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Animation direction="left">
        <Countdown />
      </Animation>
      <Animation direction="right">
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
        <Section>
          <h2>Registry</h2>
        </Section>
      </Animation>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;
