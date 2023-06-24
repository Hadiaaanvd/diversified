import React from "react";

function useMasonryImages({ imagesSrc }) {
  const [images, setImages] = React.useState([]);

  const getRandomPercent = (min, max) => {
    return ((Math.random() * (max - min) + min) * 100).toFixed(0);
  };

  React.useEffect(() => {
    const processImages = async () => {
      // Shuffle array
      for (let i = imagesSrc.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesSrc[i], imagesSrc[j]] = [imagesSrc[j], imagesSrc[i]];
      }

      const newImages = [];
      let idCounter = 0;

      // Assuming we have at least 6 images to satisfy your first four sets condition.
      if (imagesSrc.length >= 6) {
        // First set: one image
        newImages.push({
          images: [
            { src: imagesSrc[0].src, height: "100%", index: idCounter++ },
          ],
        });
        // Second set: two images
        let imageObj1Height = getRandomPercent(0.4, 0.6);
        let imageObj2Height = 100 - imageObj1Height;
        newImages.push({
          images: [
            {
              src: imagesSrc[1].src,
              height: imageObj1Height + "%",
              index: idCounter++,
            },
            {
              src: imagesSrc[2].src,
              height: imageObj2Height + "%",
              index: idCounter++,
            },
          ],
        });
        // Third set: one image
        newImages.push({
          images: [
            { src: imagesSrc[3].src, height: "100%", index: idCounter++ },
          ],
        });
        // Fourth set: two images
        imageObj1Height = getRandomPercent(0.4, 0.6);
        imageObj2Height = 100 - imageObj1Height;
        newImages.push({
          images: [
            {
              src: imagesSrc[4].src,
              height: imageObj1Height + "%",
              index: idCounter++,
            },
            {
              src: imagesSrc[5].src,
              height: imageObj2Height + "%",
              index: idCounter++,
            },
          ],
        });
      }

      for (let i = 6; i < imagesSrc.length; i++) {
        let imageObj1Height = getRandomPercent(0.4, 0.6);
        const imageObj1 = {
          src: imagesSrc[i].src,
          height: imageObj1Height + "%", // assign height here
          index: idCounter++,
        };

        // Get EXIF data to determine image orientation
        const orientation = imagesSrc[i].orientation;

        // Check if the image is portrait
        if (orientation === "portrait") {
          // If the image is portrait, set its height to 100% and add it to the array by itself
          imageObj1.height = "100%";
          newImages.push({ images: [imageObj1] });
        } else {
          // If the image is not portrait (i.e., landscape), pair it with the next image, if one exists
          if (imagesSrc[i + 1]) {
            let imageObj2Height = 100 - imageObj1Height;
            const imageObj2 = {
              src: imagesSrc[i + 1].src,
              height: imageObj2Height + "%",
              index: idCounter++,
            };
            newImages.push({ images: [imageObj1, imageObj2] });
            i++; // Skip next image as it's already been processed
          } else {
            // If there's no next image, just add the current image by itself
            newImages.push({ images: [imageObj1] });
          }
        }
      }

      setImages(newImages);
    };

    processImages();
  }, [imagesSrc]);

  return images;
}

export default useMasonryImages;
