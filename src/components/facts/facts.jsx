import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import "../facts/facts.scss";

function Facts() {
  const [counterOn, setcounterOn] = useState(false);
  return (
    <div className="section_5">
      {/* <h1>
          {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}%
        </h1> */}
      <div className=" container section_5_container">
        <p className="text_app">Facts about our company</p>
        <ScrollTrigger
          onEnter={() => setcounterOn(true)}
          onExit={() => setcounterOn(false)}
        >
          <div className="facts_boxes">
            <div className="fact_container">
              <p>
                {counterOn && (
                  <CountUp
                    className="countUpNumber"
                    start={0}
                    end={99}
                    duration={2}
                    delay={0}
                  />
                )}
                %
              </p>
              <span>Positive Feedback</span>
            </div>
            <div className="fact_container">
              <p>
                {counterOn && (
                  <CountUp
                    className="countUpNumber"
                    start={0}
                    end={98}
                    duration={2}
                    delay={0}
                  />
                )}
                %
              </p>
              <span>Customer satisfaction</span>
            </div>
            <div className="fact_container">
              <p>
                {counterOn && (
                  <CountUp
                    className="countUpNumber"
                    start={0}
                    end={102}
                    duration={2}
                    delay={0}
                  />
                )}
                %
              </p>
              <span>Projects completed</span>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Facts;
