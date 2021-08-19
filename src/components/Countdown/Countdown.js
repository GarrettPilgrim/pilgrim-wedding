import React from "react";
import Section from "../Section/Section";

import CountdownStyle from "./countdown.style";

const Countdown = () => {
  const deadline = "March 19 2022 16:00:00 CST";

  function getTimeLeft(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <CountdownStyle>
      <Section title="Countdown" />
      <div className="flex">
        <div>
          <h3>Days</h3>
          <p>{getTimeLeft(deadline).days}</p>
        </div>
        <div>
          <h3>Hours</h3>
          <p>{getTimeLeft(deadline).hours}</p>
        </div>
        <div>
          <h3>Minutes</h3>
          <p>{getTimeLeft(deadline).minutes}</p>
        </div>
      </div>
    </CountdownStyle>
  );
};

export default Countdown;
