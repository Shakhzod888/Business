import React from "react";
import "../footer/footer.scss";
import BigLogo from "../assets/bigLogo.png";
import Iphone from "../assets/iPhone 14 Pro 1.png";
import Gmail from "../assets/Gmail Logo 1.png";
import Security from "../assets/Security SSL 1.png";
import Facebook from "../assets/Facebook 2.png";
import LinkeIn from "../assets/LinkedIn 3.png";
import Twitter from "../assets/Twitter 2.png";

function Footer() {
  return (
    <div className="section_9">
      <div className="container footer_container">
        <p className="footer_text">Contact Address</p>
        <div className="footer_links">
          <div className="main_contact">
            <img src={Iphone} alt="" />
            <img src={Gmail} alt="" />
          </div>
          <div className="main_logo">
            <img src={BigLogo} alt="" />
          </div>
          <div className="security">
            <img src={Security} alt="" />
          </div>
        </div>
        <div className="social_links">
          <div>
            <a href="https://t.me/shaxzod1513">
              <img src={Facebook} alt="" />
            </a>
            <a href="https://t.me/shaxzod1513">
              <img src={LinkeIn} alt="" />
            </a>
            <a href="https://t.me/shaxzod1513">
              <img src={Twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
