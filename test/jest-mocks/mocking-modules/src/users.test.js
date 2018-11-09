import axios from 'axios';
import Users from './users';

// Ref: https://jestjs.io/docs/en/mock-functions

jest.mock('axios');
// jest.mock('axios', () => {
//   return {
//     get: jest.fn(() => Promise.resolve({ data: [{ name: 'Bob' }] })),
//   };
// });

describe('Mocking Modules', () => {
  it('should fetch users', async () => {
    const resp = { data: [{ name: 'Bob' }] };
    // axios.get.mockResolvedValue(resp);
    axios.get.mockImplementation(() => Promise.resolve(resp));

    const res = await Users.all();
    expect(res).toBe(resp.data);
    expect(axios.get.mock.calls.length).toBe(1);
    expect(axios.get.mock.calls[0][0]).toBe('/users.json');
    // expect(axios.get.mock.results.value).toBe('');
    // return Users.all().then(users => expect(users).toEqual(resp.data));
  });

  it('should fetch users with a different mock implementation', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: [{ name: 'Josh' }] }),
    );

    const res = await Users.all();
    expect(res[0].name).toBe('Josh');
  });
});

describe('Mock implementation', () => {
  const myMockFn = jest.fn(cb => cb(null, true));

  myMockFn((err, val) => console.log(val));
  // > true

  myMockFn((err, val) => console.log(val));
  // > true
});
