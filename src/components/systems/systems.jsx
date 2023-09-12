import React, { useState } from "react";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "../systems/systems.scss";
import Tele from "../assets/Tele.png";
import Tv from "../assets/TV.png";
import Sensor from "../assets/Sensor.png";
import Light from "../assets/Light.png";
import Medical from "../assets/Medical.png";
import Game from "../assets/Game.png";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function Systems() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const [openBurger, setOpenBurger] = useState(false);

  const controlBurger = (e) => {
    setOpenBurger(!openBurger);
  };

  document.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key === "Escape") {
      setOpenBurger(false);
      toggle();
    }
  });

  return (
    <>
      <section className="section_1" id="home">
        <div
          onClick={(e) => {
            setOpenBurger(false);
            toggle();
          }}
          className={`open_menu_burger ${openBurger ? "" : "displayNone"}`}
        >
          <div className="burger_links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
          </div>
        </div>

        <header className="section_1_header">
          <div className="header_box">
            <p>Landing Page</p>
            <ul className="header_links">
              <li className="header_link activeLink">
                <a href="#home">Home</a>
              </li>
              <li className="header_link">
                <a href="#about">About</a>
              </li>
              <li className="header_link">
                <a href="#services">Services</a>
              </li>
              <Burger
                color="#fff"
                className="burgerBtn"
                opened={opened}
                onClick={() => {
                  toggle();
                  controlBurger();
                }}
                aria-label={label}
              />
            </ul>
          </div>
        </header>

        <div className="section_1_container">
          <div className="systemText">
            <h2>Embedded Systems</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <button>Explore now</button>
          </div>

          <div className="systemTypes">
            <div>
              <img className="systemTypeImg" src={Tele} alt="" />
            </div>
            <div className="system_container">
              <div className="system_container_body">
                <div className="system_duble">
                  <img className="systemTypeImg" src={Game} alt="" />
                  <img className="systemTypeImg" src={Medical} alt="" />
                </div>
                <div className="system_duble">
                  <img className="systemTypeImg" src={Tv} alt="" />
                  <img className="systemTypeImg" src={Sensor} alt="" />
                </div>
              </div>
            </div>
            <div>
              <img className="systemTypeImg" src={Light} alt="" />
            </div>
          </div>
        </div>

        <div className="system_boxes">
          <div className="system_box">
            <p className="boxes_title">Discovery</p>
            <div className="boxess_box">
              <span>Text</span>
            </div>
          </div>
          <div className="system_box">
            <p className="boxes_title">Vision</p>
            <div className="boxess_box">
              <span>Text</span>
            </div>
          </div>
          <div className="system_box">
            <p className="boxes_title">Mission</p>
            <div className="boxess_box">
              <span>Text</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Systems;
