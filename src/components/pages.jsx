import React from "react";
import Systems from "./systems/systems";
import About from "./about/about";
import Services from "./services/services";
import Applications from "./applications/applications";
import Facts from "./facts/facts";
import Plane from "./plane/plane";

function Pages() {
  return (
    <>
      <div className="page_wrapper">
        <Systems />
        <About />
        <Services />
        <Applications />
        <Facts />
        <Plane />
      </div>
    </>
  );
}

export default Pages;
