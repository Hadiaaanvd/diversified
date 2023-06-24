import React from "react";
import Slider from "react-slick";
import { ReactComponent as Arrow } from "../../assets/gallery/arrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.styles.scss";

function CarouselComponent({ images, actualImages }) {
  console.log(images);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(0);

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

  const openModal = (index) => {
    setSelectedImage(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(0);
    setModalOpen(false);
  };

  const settings = {
    accessibility: false,
    dots: false,
    infinite: true,
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

  const handlePrevious = (e) => {
    e.stopPropagation();
    if (selectedImage === 0) {
      setSelectedImage(actualImages.length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };
  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedImage === actualImages.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
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
                {item.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="image-container"
                    style={{ height: img.height }}
                    onClick={() => openModal(img.index)}
                  >
                    <img src={img.src} alt="" loading="lazy" />
                    <div className="image-overlay"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {modalOpen && (
        <div
          className={`modal-overlay-2 ${modalOpen ? "open" : ""}`}
          onClick={closeModal}
        >
          <button className="close-button" onClick={closeModal}>
            X
          </button>
          <div className="buttons-container">
            <button onClick={handlePrevious}>
              <Arrow />
            </button>

            <button onClick={handleNext}>
              <Arrow />
            </button>
          </div>
          <div className="modal">
            <img
              onClick={(e) => e.stopPropagation()}
              src={actualImages[selectedImage].src}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselComponent;
