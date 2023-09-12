import React from "react";
import Systems from "./systems/systems";
import About from "./about/about";
import Services from "./services/services";
import Applications from "./applications/applications";
import Facts from "./facts/facts";
import Plane from "./plane/plane";
import Works from "./works/works";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

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
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Pages;
