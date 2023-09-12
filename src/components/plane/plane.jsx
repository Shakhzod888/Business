import React from "react";
import "../plane/plane.scss";
import Rupee from "../assets/Rupee 1.png";
import Done from "../assets/Done 1.png";

function Plane() {
  return (
    <div className="section_6">
      <div className="container section_6_container">
        <p className="text_app">Our Plans</p>
        <div className="plans_boxes">
          <div className="plan_box">
            <p className="plan_box_title">Personal</p>
            <div className="cost_of_our_plan">
              <img src={Rupee} alt="" />
              <p>45,400</p>
            </div>
            <div className="possibilities">
              <div className="possib_box">
                <div className="possibiliti">
                  <img src={Done} alt="" />
                  <p>CMS</p>
                </div>
                <div className="possibiliti">
                  <img src={Done} alt="" />
                  <p>Ecommerce</p>
                </div>
                <div className="possibiliti">
                  <img src={Done} alt="" />
                  <p>Web hosting</p>
                </div>
              </div>
            </div>
          </div>
          <div className="plan_box">
            <p className="plan_box_title">Business</p>
            <div className="cost_of_our_plan">
              <img src={Rupee} alt="" />
              <p>75,400</p>
            </div>
            <div className="possibilities">
              <div className="possib_box">
                <div className="possibiliti">
                  <img src={Done} alt="" />
                  <p>CMS</p>
                </div>
                <div className="possibiliti">
                  <img src={Done} alt="" />
                  <p>Ecommerce</p>
                </div>
                <div className="possibiliti">
                  <img src={Done} alt="" />
                  <p>Web hosting</p>
                </div>
              </div>
            </div>
          </div>
          <div className="plan_box">
            <p className="plan_box_title">Enterprise</p>
            <div className="cost_of_our_plan">
              <img src={Rupee} alt="" />
              <p>95,400</p>
            </div>
            <div className="possibilities">
              <div className="possib_box">
                <div className="possibiliti">
                  <img src={Done} alt="" />
                  <p>CMS</p>
                </div>
                <div className="possibiliti">
                  <img src={Done} alt="" />
                  <p>Ecommerce</p>
                </div>
                <div className="possibiliti">
                  <img src={Done} alt="" />
                  <p>Web hosting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plane;
