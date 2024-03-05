import React, { useEffect, useRef } from "react";
import image from "../../assets/back-image.jpg";
import footer from "../../assets/footer.png";

import "./banner.styles.scss";

const Banner = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      const spans = element.querySelectorAll(".animation-target");
      if (element && isElementInViewport(element)) {
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
        <img src={image} alt="" id="myVideo" />

        <img className="footer-logo" src={footer} alt="" />
      </div>
    </div>
  );
};

export default Banner;
