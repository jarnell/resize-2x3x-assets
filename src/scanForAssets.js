const chalk = require('chalk');
const checkAsset = require('./checkAsset');

const scanForAssets = () => {
  const dir = process.cwd();
  const fs = require('fs');
  const pattern = /(@2x|@3x).png$/;

  console.log();
  console.log(chalk.bold('Searching in folder for high res assets...'));

  fs.readdirSync(dir).forEach(file => {
    fs.stat(file, function(err, stat) {
      if (!stat.isDirectory() && pattern.test(file)) {
        defaultFile = file.replace(pattern, '.png');
        if (fs.existsSync(dir + '/' + defaultFile)) {
          checkAsset(file, defaultFile, dir);
        } else {
          console.log(chalk.red('- ' + file + ' does not have a 1x version.'));
        }
      }
    });
  });
};

module.exports = scanForAssets;
