import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import { ReactComponent as ServiceImg } from "../../assets/service/scg-icon.svg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./home-content.styles.scss";
import { useNavigate } from "react-router-dom";
import { makeUrl } from "../../utils/imagesDb";
const services = [
  {
    type: "distribution",
    heading: "New Business Main, Service & Meter",
    description:
      "We can install new main, service, and meter lines for your natural gas utility needs.",
  },
  {
    type: "distribution",
    heading: "Pressure Improvements",
    description:
      "We can increase the pressure in your natural gas lines to ensure that you have a reliable supply of gas.",
  },
  {
    type: "distribution",
    heading: "Regulator Stations",
    description:
      "We can install and maintain regulator stations to control the pressure of your natural gas lines.",
  },
  {
    heading: "Customer/Developer/DOT Relocations",
    type: "distribution",
    description:
      "We can relocate your natural gas lines to accommodate new construction or development. ",
  },
  {
    heading: "DIMP Retirements & Renewals",
    type: "distribution",
    description:
      "We can retire and renew your DIMP lines to ensure that they are in compliance with safety regulations. ",
  },
  {
    type: "distribution",
    heading: "Master Meter Conversions",
    description:
      "We can convert your natural gas meters to master meters to improve the efficiency of your utility operations.",
  },
  {
    type: "transmission",
    heading: "Mainline Pipe Work (up to 36”)",
    description:
      "We can install and maintain mainline pipe work up to 36 inches in diameter",
  },
  {
    type: "transmission",
    heading: "New Installation",
    description:
      "We can install new mainline pipe work to connect new customers to the natural gas distribution system.",
  },
  {
    type: "transmission",
    heading: "Renewals & Relocations",
    description:
      "We can relocate and renew existing mainline pipe work to accommodate new construction or development.",
  },
  {
    type: "transmission",
    heading: "Retirement & Retesting",
    description:
      "We can retire and retest existing mainline pipe work to ensure that it is in compliance with safety regulations. ",
  },
  {
    type: "transmission",
    heading: "Interconnects",
    description:
      "We can install and maintain interconnects between different  natural gas distribution systems.",
  },
  {
    type: "transmission",
    heading: "HCA Casing Remediation",
    description:
      "We can repair damaged HCA (High Carbon Steel) casing to prevent leaks and ensure the integrity of your natural gas lines.",
  },
];

const HomeContent = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const element = contentRef.current;
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
        rect.bottom <=
          (window.innerWidth || document.documentElement.clientWidth) &&
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
    <div className="home-content-component" ref={contentRef}>
      <h2 className="animation-target">Our Services</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-slide-container">
              <div className="service-icon">
                <ServiceImg className="image animation-target" />
              </div>
              <div className="heading-container">{service.heading}</div>
              <div className="description-container">{service.description}</div>
              <div
                onClick={() =>
                  navigate(
                    `/services/${service.type}/${makeUrl(service.heading)}`
                  )
                }
                className="read-more"
              >
                Read More
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <i className="fa-solid fa-chevron-left"></i>
          </div>

          <div className="swiper-button-next slider-arrow">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HomeContent;
