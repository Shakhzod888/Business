import React from "react";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "../systems/systems.scss";
import Tele from "../assets/Tele.png";
import Tv from "../assets/TV.png";
import Sensor from "../assets/Sensor.png";
import Light from "../assets/Light.png";
import Medical from "../assets/Medical.png";
import Game from "../assets/Game.png";

function Systems() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  return (
    <>
      <section className="section_1">
        <header className="section_1_header">
          <div className="header_box">
            <p>Lading Page</p>
            <ul className="header_links">
              <li className="header_link activeLink">
                <a href="/">Home</a>
              </li>
              <li className="header_link">
                <a href="/">About</a>
              </li>
              <li className="header_link">
                <a href="/">Contact</a>
              </li>
              <Burger
                color="#fff"
                className="burgerBtn"
                opened={opened}
                onClick={toggle}
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
              <span>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries
              </span>
            </div>
          </div>
          <div className="system_box">
            <p className="boxes_title">Vision</p>
            <div className="boxess_box">
              <span>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries
              </span>
            </div>
          </div>
          <div className="system_box">
            <p className="boxes_title">Mission</p>
            <div className="boxess_box">
              <span>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Systems;
