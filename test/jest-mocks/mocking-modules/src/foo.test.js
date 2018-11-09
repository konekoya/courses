const foo = require('./foo');

jest.mock('./foo'); // this happens automatically with automocking

it('Expect foo to be called', () => {
  // foo();
});

it('mocks foo implementation', () => {
  // foo is a mock function
  foo.mockImplementation(() => 42);
  expect(foo()).toBe(42);
  expect(foo.mock.calls.length).toBe(1);
});

it('mocks multiple times', () => {
  const myMockFn = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false));

  myMockFn((err, val) => console.log(val));
  // > true

  myMockFn((err, val) => console.log(val));
  // > false
});

it('uses default mock', () => {
  const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');

  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
  // > 'first call', 'second call', 'default', 'default'
});

it('mock name', () => {
  const mockFn = jest.fn().mockName('mockFn');

  mockFn();

  expect(mockFn).toHaveBeenCalledTimes(1);
});
