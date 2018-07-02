import React from 'react';
import { shallow } from 'enzyme';

import StoreLocator from '../StoreLocator';

describe('StoreLocator', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<StoreLocator />);
  });

  it('renders without crashing', () => {
    let wrapper = shallow(<StoreLocator />);
  });

  it('renders <Header />', () => {
    const header = wrapper.find('Header');
    expect(header.length).toBe(1);
  });

  it('renders two buttons', () => {
    const btns = wrapper.find('Button');
    expect(btns.length).toBe(2);
  });
});
