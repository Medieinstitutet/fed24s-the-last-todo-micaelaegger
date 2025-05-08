import { Todo } from "../models/Todo";
import "../index.css";
import { Checkbox } from "../assets/Checkbox";
import { RemoveButton } from "../assets/RemoveButton";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

export const TodoItem = ({ todo, toggleTodo, removeTodo }: TodoItemProps) => {
  return (
    <li
      className={`flex items-center justify-between py-3 w-full border-bottom ${
        todo.isUpdating ? "updating" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <label className="relative flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={todo.isDone || todo.isUpdating}
            onChange={() => toggleTodo(todo.id)}
            className="peer hidden"
          />
          <div className="w-5 h-5 bg-gray-light peer-checked:bg-gray-medium flex items-center justify-center transition-all duration-300 rounded-sm">
            {(todo.isDone || todo.isUpdating) && <Checkbox />}
          </div>
        </label>

        <div
          className={`w-3 h-3 rounded-full ${
            todo.priority === "High"
              ? "priority-high"
              : todo.priority === "Medium"
              ? "priority-medium"
              : "bg-green-500"
          }`}
        ></div>
        <p
          className={`text-white ${
            todo.isDone ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.task}
        </p>
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        <RemoveButton />
      </button>
    </li>
  );
};
