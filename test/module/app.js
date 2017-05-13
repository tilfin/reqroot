console.log('*** Test in a module ***');

const Book = require('./models/book');
const util = require('./utils/array');

console.info(util.mapField([{ val: 1 }, { val: 2 }], 'val'));
console.info(Book.list());
