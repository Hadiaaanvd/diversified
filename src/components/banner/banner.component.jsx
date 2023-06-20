import React from "react";
import video from "../../assets/backvideo.mp4";
import footer from "../../assets/footer.png";

import "./banner.styles.scss";
const Banner = () => {
  return (
    <div className="banner-component">
      <div className="banner-content">
        <h1>
          Natural <br /> Gas Utility <br /> Contruction
        </h1>
        <p>
          Diversified Utility Services, a minority-owned business, was
          established as a natural gas distribution contractor to perform work
          for the local natural gas utility company in metro Atlanta.
        </p>
      </div>
      <div className="banner-image">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
        <img className="footer-logo" src={footer} alt="" />
      </div>
    </div>
  );
};

export default Banner;
