const images = [];

// Use require.context to get all the image file paths in the gallery-images folder
const importAll = (r) => {
  r.keys().forEach((key) => {
    images.push(r(key));
  });
};

// Require all the images using the require.context function
const imagesContext = require.context(
  "../assets/gallery-images",
  false,
  /\.(png|jpe?g|svg)$/
);
importAll(imagesContext);

export default images;
