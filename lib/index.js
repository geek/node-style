'use strict';

const Belly = require('belly-button');
const Path = require('path');

const configFile = Path.join(__dirname, '..', '.eslintrc.js');

exports.run = function(argv, callback) {
  argv.push('-c');
  argv.push(configFile);

  return Belly.run(argv, callback);
};
