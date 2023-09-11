import React from "react";
import "../about/about.scss";
import Person_1 from "../assets/People 1.png";
import Person_2 from "../assets/People 2.png";
import Person_3 from "../assets/People 3.png";
import Person_4 from "../assets/People 4.png";

function About() {
  return (
    <div className="section_2" id="about">
      <div className="container section_2_container">
        <p className="text_about">About us</p>
        <div className="about_container">
          <div className="about_container_first about_box">
            <div className="about_container_box">
              <div className="about_mini_box ">
                <img src={Person_1} alt="" />
                <div>
                  <p className="persons_name">Vinod</p>
                  <p className="persons_job">Software engineer</p>
                </div>
              </div>
              <p className="about_personal_text">
                it has a more-or-less normal distribution of letters, as opposed
                to using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum'
              </p>
            </div>
            <div className="about_container_box">
              <div className="about_mini_box ">
                <img src={Person_3} alt="" />
                <div>
                  <p className="persons_name">Stuart</p>
                  <p className="persons_job">Software engineer</p>
                </div>
              </div>
              <p className="about_personal_text">
                it has a more-or-less normal distribution of letters, as opposed
                to using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum'
              </p>
            </div>
          </div>
          <div className="about_container_second about_box">
            <div className="about_container_box">
              <div className="about_mini_box ">
                <img src={Person_2} alt="" />
                <div>
                  <p className="persons_name">Anand</p>
                  <p className="persons_job">Fullstack engineer</p>
                </div>
              </div>
              <p className="about_personal_text">
                it has a more-or-less normal distribution of letters, as opposed
                to using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum'
              </p>
            </div>
            <div className="about_container_box">
              <div className="about_mini_box ">
                <img src={Person_4} alt="" />
                <div>
                  <p className="persons_name">Vinod</p>
                  <p className="persons_job">Software engineer</p>
                </div>
              </div>
              <p className="about_personal_text">
                it has a more-or-less normal distribution of letters, as opposed
                to using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum'
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
