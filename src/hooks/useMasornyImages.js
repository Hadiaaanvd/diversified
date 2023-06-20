import React from "react";

function useMasornyImages({ imagesSrc }) {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const getRandomPercent = (min, max) => {
      return ((Math.random() * (max - min) + min) * 100).toFixed(0);
    };

    // Shuffle array
    for (let i = imagesSrc.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imagesSrc[i], imagesSrc[j]] = [imagesSrc[j], imagesSrc[i]];
    }

    const newImages = [];
    let idCounter = 0; // introduce counter
    for (let i = 0; i < imagesSrc.length; i += 2) {
      let imageObj1Height = getRandomPercent(0.4, 0.6);
      const imageObj1 = {
        src: imagesSrc[i],
        height: imageObj1Height + "%",
        index: idCounter++,
      }; // added id property
      if (imagesSrc[i + 1] && Math.random() > 0.5) {
        let imageObj2Height = 100 - imageObj1Height;
        const imageObj2 = {
          src: imagesSrc[i + 1],
          height: imageObj2Height + "%",
          index: idCounter++, // added id property
        };
        newImages.push({ images: [imageObj1, imageObj2] });
      } else {
        imageObj1.height = "100%";
        newImages.push({ images: [imageObj1] });
      }
    }
    setImages(newImages);
  }, [imagesSrc]);

  return images;
}

export default useMasornyImages;
