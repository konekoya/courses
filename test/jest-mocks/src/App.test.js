import * as app from './App';
import * as math from './math';

// jest.mock('./math.js');

// test('calls math.add', () => {
//   expect(math.add).not.toBeCalled();

//   const result = app.doAdd(10, 20);

//   expect(app.doAdd(2, 3)).toBe(5);

//   expect(math.add).toHaveBeenCalledWith(10, 20);
//   expect(math.add).toHaveBeenCalledTimes(1);
// });

test('calls math.add', () => {
  const addMock = jest.spyOn(math, 'add');

  // override the implementation
  addMock.mockImplementation(() => 'mock');
  expect(app.doAdd(1, 2)).toEqual('mock');

  // restore the original implementation
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});
