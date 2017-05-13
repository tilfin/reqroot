const Book = require('../../models/book');

describe('Book', () => {
  describe('#list', () => {
    it('returns names', () => {
      Book.list()[0] === 'A boy';
    });
  });
});
