import React from "react";
import GalleryCarousel from "../gallery/gallery.component";
import useMasornyImages from "../../hooks/useMasornyImages";

import "./gallery-wrapper.styles.scss";

const GalleryWrapper = ({ imagesSrc }) => {
  const images = useMasornyImages({ imagesSrc });

  return (
    <div className="gallery-wrapper-component">
      <GalleryCarousel images={images} actualImages={imagesSrc} />
    </div>
  );
};

export default GalleryWrapper;
