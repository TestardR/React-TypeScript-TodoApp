export interface ITodo {
  id: string;
  text: string;
}

export interface ITodoListProps {
  items: ITodo[];
  onDeleteTodo: (id: string) => void;
}

export interface INewTodoProps {
  onAddTodo: (todoText: string) => void;
}
