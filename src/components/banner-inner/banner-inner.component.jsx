import React from "react";
import { useLocation } from "react-router-dom";
import second from "../../assets/banner/2.jpg";
import first from "../../assets/banner/1.jpg";
import third from "../../assets/banner/3.jpg";
import fourth from "../../assets/banner/4.jpg";
import fifth from "../../assets/banner/5.jpg";
import "./banner-inner.styles.scss";

const imagesArray = [first, second, third, fourth, fifth];
const BannerInner = ({ index }) => {
  const location = useLocation();
  const heading = location.pathname
    .replace(/\//g, " ")
    .replace(/-/g, " ")
    .replace("project", "")
    .replace("electrical", "")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="banner-inner-component">
      {console.log(imagesArray[index].index)}
      <div
        className="banner-image"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 30%, 
        rgb(10, 108, 177,0.9)), url(${imagesArray[index]})`,
        }}
      >
        <div className="title">
          <span>{heading === " S" ? "Projects" : heading}</span>
        </div>
      </div>
    </div>
  );
};

export default BannerInner;
