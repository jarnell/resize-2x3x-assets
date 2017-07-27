const Jimp = require('jimp');
const chalk = require('chalk');
const resizeAsset = require('./resizeAsset');

const getScaleFromFilename = (filename) => {
  const scale = filename.match(/@(2|3)x.png$/);
  return scale[1];
}

const checkAsset = (file, defaultFile, dir) => {
  Jimp.read(dir + '/' + defaultFile).then(function (defaultImage) {
    Jimp.read(dir + '/' + file).then(function (image) {
        const imageScale = getScaleFromFilename(file);
        const expectedWith = defaultImage.bitmap.width * imageScale;
        const expectedHeight = defaultImage.bitmap.height * imageScale;

        if (image.bitmap.width === expectedWith && image.bitmap.height === expectedHeight) {
          console.log(chalk.green('- ' + file + ' has the correct size.'));
        } else if (image.bitmap.width < expectedWith || image.bitmap.height < expectedHeight) {
          if (resizeAsset(file, image, expectedWith, expectedHeight)) {
            console.log(chalk.yellow('- ' + file + ' was successfully resized.'));
          } else {
            console.log(chalk.red('- ' + file + ' could not be resized.'));
          }
        } else {
          console.log(chalk.red('- ' + file + ' is larger than ' + imageScale + 'x - can not resize without clipping or resampling.'));
        }

    }).catch(function (err) {
        // handle an exception
    });
  }).catch(function (err) {
      // handle an exception
  });
};

module.exports = checkAsset;
