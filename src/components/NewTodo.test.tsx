import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import NewTodo from './NewTodo';

describe('NewTodo component Unit Tests', () => {
  const mockFn = jest.fn();
  const props = {
    onAddTodo: mockFn,
    onSubmit: sinon.spy(),
  };

  let component;
  beforeEach(() => {
    component = mount(<NewTodo {...props} />);
  });

  it('should render 1 NewTodo component', () => {
    expect(component).toHaveLength(1);
    expect(component.find('form')).toHaveLength(1);
  });

  it('should call submit form when button is cliked', () => {
    component.find('button').simulate('submit');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
