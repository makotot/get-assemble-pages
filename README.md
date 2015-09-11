# get-assemble-pages

[![npm version](http://img.shields.io/npm/v/get-assemble-pages.svg?style=flat-square)](https://github.com/makotot/get-assemble-pages)
[![travis](http://img.shields.io/travis/makotot/get-assemble-pages.svg?style=flat-square)](https://github.com/makotot/get-assemble-pages)
[![dependencies](http://img.shields.io/david/makotot/get-assemble-pages.svg?style=flat-square)](https://github.com/makotot/get-assemble-pages)
[![devDependencies](http://img.shields.io/david/dev/makotot/get-assemble-pages.svg?style=flat-square)](https://github.com/makotot/get-assemble-pages)
[![License](http://img.shields.io/npm/l/get-assemble-pages.svg?style=flat-square)](https://github.com/makotot/get-assemble-pages)

> Get [assemble](http://assemble.io/) page files.


## Install

```sh
$ npm i --save get-assemble-pages
```


## Usage

In assemble plugin:
```js
var getLayouts = require('get-assemble-pages');

module.exports = function (params, cb) {

  getLayouts(params, function (err, data) {
    console.log(data);
    // => [ 'src/pages/docs.hbs',
            'src/pages/example.hbs',
            'src/pages/index.hbs',
            ... ]
    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};
```


## License

MIT
