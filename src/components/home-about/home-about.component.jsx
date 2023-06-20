import React from "react";

import about1 from "../../assets/about-us/home1.jpg";
import about2 from "../../assets/about-us/home2.jpg";
import "./home-about.styles.scss";

const HomeProjects = () => {
  return (
    <div className="home-about-components">
      <div className="about-us-container">
        <div className="about-us-images">
          <img src={about2} alt="" />
          <img src={about1} alt="" />
        </div>
        <div className="about-us-text">
          <h3>About Us</h3>
          <div>
            While we dedicated to investing in tools, equipment, and technology
            to provide our customers with a high-quality product, our most
            important investment is our employees. Our staff is expected to
            adhere to high standards of professionalism and personal integrity .
          </div>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
