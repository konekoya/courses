import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Search from './Search';
import ShowCard from './ShowCard';
import preload from '../public/data.json';

test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show', () => {
  const component = shallow(<Search />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search shuld render correct amount of shows based on search', () => {
  const searchWord = 'house'
  const component = shallow(<Search />)
  component.find('input').simulate('change', { target: { value: searchWord } })
  const showCount = preload.shows.filter((show) => {
                  return `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(searchWord.toUpperCase()) >= 0
                }).length
  expect(component.find(ShowCard).length).toEqual(showCount)
})
