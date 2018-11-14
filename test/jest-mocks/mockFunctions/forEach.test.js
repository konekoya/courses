const { forEach } = require('./forEach');

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

describe('forEach', () => {
  it('The mock function is called twice', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
    // console.log(mockCallback.mock);
  });
  it('The first argument of the first call to the function was 0', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });
  it('The first argument of the second call to the function was 1', () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });

  it('The return value of the first call to the function was 42', () => {
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  it('The return value of the second call to the function was 43', () => {
    expect(mockCallback.mock.results[1].value).toBe(43);
  });

  it('displays mock props', () => {
    const myMock = jest.fn();

    const a = new myMock();
    const b = {};
    const bound = myMock.bind(b);
    bound();

    console.log(myMock.mock.instances);

    console.log(myMock.mock.instances);
  });

  it('mocks return values', () => {
    const myMock = jest.fn();
    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValueOnce(true);

    expect(myMock()).toBe(10);
    expect(myMock()).toBe('x');
    expect(myMock()).toBe(true);
  });

  it('filterTestFn', () => {
    const filterTestFn = jest.fn();
    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(filterTestFn);

    expect(result).toEqual([11]);
    expect(filterTestFn.mock.calls.length).toBe(2);
    expect(filterTestFn.calls).toEqual([11][12]);
    expect(filterTestFn).toHaveBeenCalledTimes(2);
    // console.log(filterTestFn.mock);
  });
});
