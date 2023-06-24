import React from "react";
import BannerInner from "../../components/banner-inner/banner-inner.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import { ReactComponent as ServiceImg } from "../../assets/service/scg-icon.svg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import images, {
  distribution,
  other,
  transmission,
} from "../../utils/imagesDb";
import "./services.styles.scss";

const Services = () => {
  const chunkSize = 3; // Number of services per slide
  const distributionSlides = Math.ceil(distribution.length / chunkSize);
  const distributionChunks = Array.from(
    { length: distributionSlides },
    (_, index) => distribution.slice(index * chunkSize, (index + 1) * chunkSize)
  );
  const transmissionSlides = Math.ceil(transmission.length / chunkSize);
  const transmissionChunks = Array.from(
    { length: transmissionSlides },
    (_, index) => transmission.slice(index * chunkSize, (index + 1) * chunkSize)
  );
  const otherSlides = Math.ceil(other.length / chunkSize);
  const otherChunks = Array.from({ length: otherSlides }, (_, index) =>
    other.slice(index * chunkSize, (index + 1) * chunkSize)
  );

  return (
    <div className="">
      <BannerInner index={5} />
      <div className="services-component">
        <h3>Distribution</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {distributionChunks.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="services-container">
                {chunk.map((item, itemIndex) =>
                  item.heading ? (
                    <div className="card-container" key={itemIndex}>
                      <div className="card-header">
                        <div className="card-image">
                          <div className="image-container">
                            <div className="image-overlay"></div>
                            <img src={item.image} alt="" />
                          </div>
                          <div className="service-icon">
                            <ServiceImg className="image" />
                          </div>
                        </div>
                      </div>

                      <div className="card-content">
                        <div className="card-heading">{item.heading}</div>
                        <div className="card-description">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="empty"></div>
                  )
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <h3>Transmission</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {transmissionChunks.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="services-container">
                {chunk.map((item, itemIndex) =>
                  item.heading ? (
                    <div className="card-container" key={itemIndex}>
                      <div className="card-header">
                        <div className="card-image">
                          <div className="image-container">
                            <div className="image-overlay"></div>
                            <img src={item.image} alt="" />
                          </div>
                          <div className="service-icon">
                            <ServiceImg className="image" />
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="card-heading">{item.heading}</div>
                        <div className="card-description">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="empty"></div>
                  )
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h3>Other Services</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {otherChunks.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="services-container">
                {chunk.map((item, itemIndex) => (
                  <div className="card-container" key={itemIndex}>
                    <div className="card-header">
                      <div className="card-image">
                        <div className="image-container">
                          <div className="image-overlay"></div>
                          <img src={item.image} alt="" />
                        </div>
                        <div className="service-icon">
                          <ServiceImg className="image" />
                        </div>
                      </div>
                    </div>

                    <div className="card-content">
                      <div className="card-heading">{item.heading}</div>
                      <div className="card-description">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
