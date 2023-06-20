import React from "react";
import about from "../../assets/about-us/about-us.jpg";
import "./about-us.styles.scss";

const AboutusContent = () => {
  return (
    <div className="about-us-component">
      <div className="main-about">
        <div className="content-container">
          Diversified Utility Services, a minority-owned business, was
          established as a natural gas distribution contractor to perform work
          for the local natural gas utility company in metro Atlanta. As we
          grew, we began to receive additional opportunities in the transmission
          pipeline market, necessitating the hiring of additional personnel and
          investing in tools, equipment and technology. Today, we continue to
          expand in to new areas and create lasting relationships with our
          customers. <br /> <br />
          While we are dedicated to investing in tools, equipment, and
          technology to provide our customers with a high-quality product, our
          most important investment is our employees. Our staff is expected to
          adhere to high standards of professionalism and personal integrity. We
          achieve that through comprehensive and on-going training programs that
          include Leadership, Safety, Quality, and Environmental Compliance.
        </div>
        <div className="image-container">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutusContent;
