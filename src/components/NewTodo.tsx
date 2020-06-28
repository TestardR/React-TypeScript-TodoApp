import React, { useRef } from 'react';
import { INewTodoProps } from '../models/todo.model';

const NewTodo = ({ onAddTodo }: INewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler} data-test="component-form">
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} data-test="form-input" />
      </div>
      <button type="submit" data-test="button-add-todo">
        ADD TODO
      </button>
    </form>
  );
};

export default NewTodo;
