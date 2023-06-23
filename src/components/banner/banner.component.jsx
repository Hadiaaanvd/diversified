import React, { useEffect, useRef } from "react";
import video from "../../assets/backvideo.mp4";
import footer from "../../assets/footer.png";

import "./banner.styles.scss";

const Banner = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      const spans = element.querySelectorAll(".animation-target");
      console.log("hereee", isElementInViewport(element));
      if (element && isElementInViewport(element)) {
        console.log("here");
        spans.forEach((span) => {
          span.classList.add("run-animation");
        });
      } else {
        spans.forEach((span) => {
          span.classList.remove("run-animation");
        });
      }
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      console.log("rect", rect, rect.bottom <= window.innerHeight);
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="banner-component" ref={elementRef}>
      <div className="banner-content">
        <h1>
          <span className="animation-target">Natural</span>
          <span className="animation-target">Gas Utility</span>
          <span className="animation-target last-span">Construction</span>
        </h1>

        <p className="animation-target">
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
