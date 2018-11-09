import * as user from './async';

jest.mock('./request');

// The assertion for a promise must be returned.
it('works with promises', async () => {
  // return user.getUserName(4).then(data => expect(data).toEqual('Mark'));

  const res = await user.getUserName(4);
  expect(res).toBe('Mark');

  await expect(user.getUserName(5)).resolves.toBe('Paul');
});

test('tests error with promises', () => {
  return user.getUserName(2).catch(e =>
    expect(e).toEqual({
      error: 'User with 2 not found.',
    }),
  );
});

// Or using async/await.
it('tests error with async/await', async () => {
  try {
    await user.getUserName(1);
  } catch (e) {
    expect(e).toEqual({
      error: 'User with 1 not found.',
    });
  }
});

// Or using async/await with `.rejects`.
it('tests error with async/await and rejects', async () => {
  expect.assertions(1);
  await expect(user.getUserName(3)).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});
