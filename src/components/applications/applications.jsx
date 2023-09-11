import React from "react";
import "../applications/applications.scss";
import AppImg_1 from "../assets/appImg_1.png";

function Applications() {
  const AppBox = (props) => {
    return (
      <div class="grid-item">
        <p>{props.name}</p>
        <img src={props.appImg} alt="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="179"
          height="97"
          viewBox="0 0 179 97"
          fill="none"
        >
          <path
            d="M169 96.8706C174.523 96.8706 179.05 92.3829 178.524 86.8852C176.416 64.8627 167.382 44.1704 152.786 28.3727C136.002 10.206 113.237 1.93967e-06 89.5 0C65.7631 -1.93967e-06 42.9985 10.206 26.214 28.3727C11.6183 44.1704 2.58442 64.8627 0.476472 86.8851C-0.0497572 92.3829 4.47715 96.8706 10 96.8706L89.5 96.8706H169Z"
            fill="url(#paint0_linear_53_387)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_53_387"
              x1="90"
              y1="-198.5"
              x2="90"
              y2="97"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0F3D3E" />
              <stop offset="1" stop-color="#0F3D3E" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };
  return (
    <div className="section_4">
      <div className="container section_4_container">
        <p className="text_app">Our Services</p>
        <div class="app-container">
          <AppBox name="Smart Home" appImg={AppImg_1} />
          <AppBox name="Health monitor" appImg={AppImg_1} />
          <AppBox name="Fitness tracking" appImg={AppImg_1} />
          <AppBox name="Smart Farming" appImg={AppImg_1} />
          <AppBox name="GPS Sensor" appImg={AppImg_1} />
          <AppBox name="Smart Home" appImg={AppImg_1} />
          <AppBox name="Health monitor" appImg={AppImg_1} />
          <AppBox name="Fitness tracking" appImg={AppImg_1} />
          <AppBox name="Smart Farming" appImg={AppImg_1} />
          <AppBox name="GPS Sensor" appImg={AppImg_1} />
          <AppBox name="Smart Home" appImg={AppImg_1} />
          <AppBox name="Health monitor" appImg={AppImg_1} />
          <AppBox name="Fitness tracking" appImg={AppImg_1} />
          <AppBox name="Smart Farming" appImg={AppImg_1} />
          <AppBox name="GPS Sensor" appImg={AppImg_1} />
        </div>
      </div>
    </div>
  );
}

export default Applications;
