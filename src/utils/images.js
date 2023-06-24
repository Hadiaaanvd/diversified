import imageData from "./imagesDb.json"; // replace with the actual path to your JSON file

// map the array of data to require each image
export const images = imageData.map((image) => ({
  ...image, // copy the existing data (orientation)
  src: require(`../${image.src}`), // require the image source
}));
