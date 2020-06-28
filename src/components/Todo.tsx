import React from 'react';
import { ITodo } from '../models/todo.model';

interface ITodoProps {
  item: ITodo;
  onDeleteTodo: (id: string) => void;
}

const Todo = ({ item, onDeleteTodo }: ITodoProps) => {
  return (
    <li className="todo-item">
      <span>{item.text}</span>
      <button onClick={onDeleteTodo.bind(null, item.id)}>DELETE</button>
    </li>
  );
};

export default Todo;
