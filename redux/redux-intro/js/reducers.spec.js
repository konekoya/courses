import reducers from './reducers';

test('reducers', () => {
  let state;
  state = reducers(
    { searchTerm: 'hous', omdbData: {} },
    { type: 'SET_SEARCH_TERM', searchTerm: 'house' },
  );
  expect(state).toEqual({ searchTerm: 'house', omdbData: {} });
});
