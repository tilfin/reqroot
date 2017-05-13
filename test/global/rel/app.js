require('reqroot');

const Book = reqroot('models/book');
const util = reqroot('utils/array');

console.info(util.mapField([{ val: 1 }, { val: 2 }], 'val'));
console.info(Book.list());
