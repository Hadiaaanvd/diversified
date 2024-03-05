import React from "react";

import about1 from "../../assets/about-us/home1.jpg";
import about2 from "../../assets/about-us/home2.jpg";
import "./home-about.styles.scss";
import { Animator, batch, FadeIn, MoveIn } from "react-scroll-motion";
import { useNavigate } from "react-router-dom";
const HomeProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="home-about-components">
      {/* <ScrollPage page={0}> */}
      <div className="about-us-container">
        <Animator animation={batch(FadeIn(), MoveIn(-100, 0))}>
          <div className="about-us-images">
            <img src={about2} alt="" />
            <img src={about1} alt="" />
          </div>
        </Animator>

        <div className="about-us-text">
          <h2>About Us</h2>
          <Animator animation={batch(FadeIn(), MoveIn(100, 0))}>
            <div>
              While we are dedicated to investing in tools, equipment, and
              technology to provide our customers with a high-quality product,
              our most important investment is our employees. Our staff is
              expected to adhere to high standards of professionalism and
              personal integrity .
            </div>
          </Animator>
          <Animator animation={batch(FadeIn(), MoveIn(150, 0))}>
            <button onClick={() => navigate("/about-us")}> Read More</button>
          </Animator>
        </div>
      </div>
      {/* </ScrollPage> */}
    </div>
  );
};

export default HomeProjects;
