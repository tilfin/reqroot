const arrayUtil = reqroot('utils/array');

describe('arrayUtil', () => {
  describe('#mapField', () => {
    it('returns fields', () => {
      arrayUtil.mapField([{ a: 1 }], 'a')[0] === 1;
    });
  });
});
