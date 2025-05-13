import { useState } from "react";
import { Header } from "./Header";
import { Todo } from "../models/Todo";
import { TodoList } from "./TodoList";
import { Tabs } from "./Tabs";
import { SortButtons } from "./SortButtons";
import "../index.css";
import { Modal } from "./Modal";
import { getFilteredAndSortedTodos } from "../helpers/FilterAndSortTodos";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn React", false, "High"),
    new Todo("Build a Todo App", false, "Medium"),
    new Todo("Build a cool API", false, "Low"),
    new Todo("Explore WebSockets further", true, "Medium"),
    new Todo("Refactor Codebase", false, "High"),
    new Todo("Learn Vue", true, "Low"),
  ]);
  const [activeTab, setActiveTab] = useState<"Pending" | "Completed" | "All">(
    "Pending"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [sortMethod, setSortMethod] = useState<"createdAt" | "status" | null>(
    null
  );

  const filteredAndSortedTodos = getFilteredAndSortedTodos(
    todos,
    activeTab,
    sortMethod
  );

  const addTodo = (task: string, priority: string) => {
    const newTodo = new Todo(task, false, priority);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === id ? { ...t, isUpdating: true } : t))
    );
    setTimeout(() => {
      setTodos((prevTodos) =>
        prevTodos.map((t) =>
          t.id === id ? { ...t, isDone: !t.isDone, isUpdating: false } : t
        )
      );
    }, 600);
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setTask("");
    setPriority("Medium");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTodo(task, priority);
    toggleModal();
  };

  return (
    <div className=" text-white grid grid-rows-[auto,1fr,auto] grid-cols-1 min-h-screen">
      <header className="flex items-center px-5 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
        <Header />
      </header>
      <main className="py-8 px-4 sm:px-6">
        <div className="flex flex-col items-start w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
          <h2 className="text-xl font-semibold mb-4">Tasks</h2>
          <section className="bg-gray-medium px-6 py-4 rounded-lg flex flex-col gap-6 w-full">
            <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
            <SortButtons
              sortMethod={sortMethod}
              setSortMethod={setSortMethod}
              toggleModal={toggleModal}
            />
            <TodoList
              todos={filteredAndSortedTodos}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          </section>
        </div>
      </main>
      <footer className="flex items-center justify-center">
        <p>© 2025 Todo App by Micaela Egger </p>
      </footer>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onSubmit={handleSubmit}
        task={task}
        setTask={setTask}
        priority={priority}
        setPriority={setPriority}
      />
    </div>
  );
};
