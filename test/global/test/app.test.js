describe('Loading modules', () => {
  it('resolves app', () => {
    const app = reqroot('app');
  });

  it('resolves rel/app', () => {
    const app = reqroot('rel/app');
  });
});
