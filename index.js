module.exports = function (params, cb) {
  var ext = 'hbs',
    assembleOptions = params.assemble.options,
    pageInfoList = assembleOptions.pages,
    pages = pageInfoList.map(function (page) {
      return page.src;
    });

  cb(null, pages);
};
