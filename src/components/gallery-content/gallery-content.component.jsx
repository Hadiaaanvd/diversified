import React from "react";

import "./gallery-content.styles.scss";
import GalleryWrapper from "../gallery-wrapper/gallery-wrapper.component";
import { imagesSrc } from "../../utils/imagesDb";

const GalleryContent = () => {
  return (
    <div className="gallery-container">
      <GalleryWrapper imagesSrc={imagesSrc} />
    </div>
  );
};

export default GalleryContent;
