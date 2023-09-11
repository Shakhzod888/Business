import React from "react";
import Systems from "./systems/systems";
import About from "./about/about";
import Services from "./services/services";
import Applications from "./applications/applications";

function Pages() {
  return (
    <>
      <div className="page_wrapper">
        <Systems />
        <About />
        <Services />
        <Applications />
      </div>
    </>
  );
}

export default Pages;
