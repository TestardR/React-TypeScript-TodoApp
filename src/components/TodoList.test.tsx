import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList';

describe('TodoList component Unit Tests', () => {
  const mockFn = jest.fn();
  const props = {
    onDeleteTodo: mockFn,
    items: [{
      id: '1',
      text: 'buy milk',
    }],
  };

  let component;
  beforeEach(() => {
    component = shallow(<TodoList {...props} />);
  });

  it('should render 1 TodoList component', () => {
    expect(component).toHaveLength(1);
    expect(component.find('ul')).toHaveLength(1);
  });
});
