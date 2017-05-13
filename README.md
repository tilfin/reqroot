# reqroot

[![NPM Version][npm-image]][npm-url]
[![Build Status](https://travis-ci.org/tilfin/reqroot.svg?branch=master)](https://travis-ci.org/tilfin/reqroot)

requiring a module path resolved from application root dir

## Use in global

Define `require('reqroot')` in the file run directly from Node.js.

### Example

#### app.js

*app.js* is called by node for example `node app.js`.

```js
require('reqroot');

const arrayUtil = reqroot('utils/array');
const Book = reqroot('models/book');

Book.fetch().then(books => {
  console.log(arrayUtil.mapField(books));
});

Book.fetchNames().then(names => {
  console.log(names);
});
```

#### models/book.js

`reqroot` can be used directly in relative modules because global.reqroot is defined at the time required in *app.js*.

```js
const arrayUtil = reqroot('utils/array');

const books = [{ name: 'A boy'}, { name: 'Ito' }];

exports.fetch = () => {
  return Promise.resolve(books);
}

exports.fetchNames = () => {
  return Promise.resolve(arrayUtil.mapField(books, 'name'));
}
```

## Use in a module

```js
const reqroot = require('reqroot');

const arrayUtil = reqroot('utils/array')

...
```

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/reqroot.svg
[npm-url]: https://npmjs.org/package/reqroot

