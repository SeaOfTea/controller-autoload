/*jslint node: true, stupid: true */
'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function (server, folder) {
  fs.readdirSync(path.join(process.cwd(), folder)).forEach(function (file) {
    if (file.substr(-3, 3) === '.js' && file !== 'index.js') {
      require(path.join(process.cwd(), folder, file.replace('.js', '')))(server);
    }
  });
};
