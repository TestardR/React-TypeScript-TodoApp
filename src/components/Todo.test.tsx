import React from 'react';
import { shallow } from 'enzyme';

import Todo from './Todo';

describe('Todo component Unit Tests', () => {
  const mockFn = jest.fn();
  const props = {
    onDeleteTodo: mockFn,
    item: {
      id: '1',
      text: 'buy milk',
    },
  };

  let component;
  beforeEach(() => {
    component = shallow(<Todo {...props} />);
  });

  it('should render 1 Todo component', () => {
    expect(component).toHaveLength(1);
    expect(component.find('li')).toHaveLength(1);
  });

  it('should render props correctly', () => {
    expect(component.props().children[0].props.children).toEqual('buy milk')
  });

  it('should set props correctly', () => {
    component.setProps({ item: {
        id: '2',
        text: 'go running'
    } });

    expect(component.props().children[0].props.children).toEqual('go running');
  });

  it('should call onClick handler when Todo component is clicked', () => {
    component.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
