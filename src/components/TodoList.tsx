import React from 'react';
import { ITodoListProps } from '../models/todo.model';
import Todo from './Todo';

const TodoList = ({onDeleteTodo, items}: ITodoListProps) => {
  return (
    <ul className='todo-list'>
      {items.map(item => (
        <Todo 
        key={item.id} 
        item={item}
        onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
