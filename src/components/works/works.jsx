import React from "react";
import "../works/work.scss";
import Products from "./products/products";
import { useState } from "react";
import LandingPage from "./landingPages/landinPage";
import Projects from "./Projects/projects";

function Works() {
  const [showProducts, setShowProducts] = useState(true);
  const [showLandings, setShowLandings] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  return (
    <div className="section_7">
      <div className="container section_7_container">
        <p className="text_app">Our Amazing Work</p>
        <div className="works_link">
          <p
            onClick={() => {
              setShowProducts(true);
              setShowLandings(false);
              setShowProjects(false);
            }}
            className={`${showProducts && "active"}`}
          >
            Products
          </p>
          <p
            onClick={() => {
              setShowProducts(false);
              setShowLandings(true);
              setShowProjects(false);
            }}
            className={`${showLandings && "active"}`}
          >
            Landing Pages
          </p>
          <p
            onClick={() => {
              setShowProducts(false);
              setShowLandings(false);
              setShowProjects(true);
            }}
            className={`${showProjects && "active"}`}
          >
            Projects
          </p>
        </div>
        <div>
          {showProducts && <Products />}
          {showLandings && <LandingPage />}
          {showProjects && <Projects />}
        </div>
      </div>
    </div>
  );
}

export default Works;
