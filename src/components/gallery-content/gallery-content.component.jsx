import React from "react";

import "./gallery-content.styles.scss";
import GalleryWrapper from "../gallery-wrapper/gallery-wrapper.component";
import { images } from "../../utils/images";

const GalleryContent = () => {
  return (
    <div className="gallery-container">
      <GalleryWrapper imagesSrc={images} />
    </div>
  );
};

export default GalleryContent;
