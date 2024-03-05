import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import { ReactComponent as ServiceImg } from "../../assets/service/scg-icon.svg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.scss";
import { useNavigate } from "react-router-dom";
import { makeUrl } from "../../utils/imagesDb";

const Slider = ({ services, other }) => {
  const navigate = useNavigate();
  console.log(other);

  return (
    <div className={`slider-component ${other === "other" ? "other" : ""}`}>
      <h3 className="animation-target">More Services</h3>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={other === "other" ? false : true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.59,
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
                  navigate(`/services/${other}/${makeUrl(service.heading)}`)
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

export default Slider;
