const arrayUtil = reqroot('utils/array');

const books = [{ name: 'A boy'}, { name: 'Ito' }];

exports.list = () => {
  return arrayUtil.mapField(books, 'name');
}
