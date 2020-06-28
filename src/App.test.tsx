import React from 'react';
import { mount } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import App from './App';

const setup = () => {
  return mount(<App />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
