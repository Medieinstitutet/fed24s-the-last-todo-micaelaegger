import { Todo } from "../models/Todo";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <ul className="">
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};
