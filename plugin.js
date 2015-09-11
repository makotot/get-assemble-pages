var getPages = require('./index.js');

module.exports = function (params, cb) {

  getPages(params, function (err, data) {
    console.log(data);
    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};
