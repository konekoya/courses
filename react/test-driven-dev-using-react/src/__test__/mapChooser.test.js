import mapChooser from '../mapChooser';

describe('mapChooser', () => {
  it('returns an image based on input given to it', () => {
    const expected = 'portland.jpg';
    const actual = mapChooser('portland');
    expect(actual).toEqual(expected);
  });

  it('return default.jpg', () => {
    expect(mapChooser('')).toEqual('default.jpg');
  });
});
