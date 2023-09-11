import React from "react";
import "../services/services.scss";
import Printer from "../assets/Printer.png";
import Website from "../assets/Website.png";
import Align from "../assets/Align Bottom.png";
import Bot from "../assets/Bot.png";
import Albums from "../assets/Albums.png";
import Proximity from "../assets/Proximity Sensor.png";

function Services() {
  return (
    <div className="section_3" id="services">
      <div className="container section_3_container">
        <p className="text_about">Our Services</p>
        <div className="services_category">
          <div className="categoryes">
            <div className="category_wrapper">
              <div className="category">
                <img src={Printer} alt="" />
                <p>Computer Vision</p>
              </div>
              <p className="category_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="category_wrapper">
              <div className="category">
                <img src={Website} alt="" />
                <p>Web Development</p>
              </div>
              <p className="category_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="category_wrapper">
              <div className="category">
                <img src={Align} alt="" />
                <p>Machine learning</p>
              </div>
              <p className="category_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
          <div className="categoryes">
            <div className="category_wrapper">
              <div className="category">
                <img src={Bot} alt="" />
                <p>AI / ML</p>
              </div>
              <p className="category_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="category_wrapper">
              <div className="category">
                <img src={Albums} alt="" />
                <p>Computer Vision</p>
              </div>
              <p className="category_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="category_wrapper">
              <div className="category">
                <img src={Proximity} alt="" />
                <p>IOT</p>
              </div>
              <p className="category_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
