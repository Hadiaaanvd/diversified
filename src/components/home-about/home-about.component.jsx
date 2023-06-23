import React from "react";

import about1 from "../../assets/about-us/home1.jpg";
import about2 from "../../assets/about-us/home2.jpg";
import "./home-about.styles.scss";
import { Animator, batch, FadeIn, MoveIn } from "react-scroll-motion";
const HomeProjects = () => {
  return (
    <div className="home-about-components">
      <div className="about-us-container">
        <Animator animation={batch(FadeIn(), MoveIn(-200, 0))}>
          <div className="about-us-images">
            <img src={about2} alt="" />
            <img src={about1} alt="" />
          </div>
        </Animator>

        <div className="about-us-text">
          <h2>About Us</h2>
          <Animator animation={batch(FadeIn(), MoveIn(200, 0))}>
            <div>
              While we dedicated to investing in tools, equipment, and
              technology to provide our customers with a high-quality product,
              our most important investment is our employees. Our staff is
              expected to adhere to high standards of professionalism and
              personal integrity .
            </div>
          </Animator>
          <Animator animation={batch(FadeIn(), MoveIn(100, 0))}>
            <button>Read More</button>
          </Animator>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
