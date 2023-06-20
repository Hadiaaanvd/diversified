import React from "react";
import Slider from "react-slick";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { ReactComponent as Arrow } from "../../assets/gallery/arrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.styles.scss";

function CarouselComponent({ images }) {
  const { width } = useWindowDimensions();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-prev" onClick={onClick}>
        <Arrow />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-next" onClick={onClick}>
        <Arrow />
      </div>
    );
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const settings = {
    dots: false,
    infinite: width > 480 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="slider-item">
            <div className="slider-content">
              <div
                className={`slider-body ${
                  item.images.length > 1 ? "more-images" : ""
                }`}
              >
                {item.images.map((img, idx) => {
                  return (
                    <div
                      key={idx}
                      className="image-container"
                      style={{ height: img.height }}
                    >
                      <img
                        loading="lazy"
                        onClick={() => openModal(img)}
                        src={img.src}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {selectedImage && (
        <div
          className={`modal-overlay ${modalOpen ? "open" : ""}`}
          onClick={closeModal}
        >
          <button className="close-button" onClick={closeModal}>
            X
          </button>
          <div className="modal">
            <img
              src={selectedImage.src}
              alt=""
              onClick={(e) => e.stopPropagation()} // Add this line to prevent event propagation
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselComponent;
