import React from "react";
import Systems from "./systems/systems";
import About from "./about/about";
import Services from "./services/services";

function Pages() {
  return (
    <>
      <div className="page_wrapper">
        <Systems />
        <About />
        <Services />
      </div>
    </>
  );
}

export default Pages;
