const Jimp = require('jimp');
const chalk = require('chalk');

const resizeAsset = (file, image, newWidth, newHeight) => {
  const newImage = new Jimp(newWidth, newHeight, function (err, newImage) {
    const leftOffset = Math.floor((newWidth - image.bitmap.width) / 2);
    const topOffset = Math.floor((newHeight - image.bitmap.height) / 2);
    newImage.composite(image, leftOffset, topOffset);
    newImage.write(file);
  });
  if (newImage) {
    return true;
  }
};

module.exports = resizeAsset;
