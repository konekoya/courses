import React from 'react';
import ArticleList from '../ArticleList.js';

import { shallow } from 'enzyme';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
  };

  test('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps} />);
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
