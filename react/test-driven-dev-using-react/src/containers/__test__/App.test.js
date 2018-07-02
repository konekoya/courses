import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a StoreLocator', () => {
    const wrapper = shallow(<App />);
    const locator = wrapper.find('StoreLocator');

    expect(locator.length).toBe(1);
  });
});
