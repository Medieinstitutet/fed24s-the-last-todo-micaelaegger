import { Todo } from "../models/Todo";

export const getFilteredAndSortedTodos = (
  todos: Todo[],
  activeTab: "Pending" | "Completed" | "All",
  sortMethod: "createdAt" | "status" | null
): Todo[] => {
  const filteredTodos = todos.filter((todo) => {
    switch (activeTab) {
      case "Pending":
        return !todo.isDone || todo.isUpdating;
      case "Completed":
        return todo.isDone || todo.isUpdating;
      case "All":
      default:
        return true;
    }
  });

  if (sortMethod === "createdAt") {
    return [...filteredTodos].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  } else if (sortMethod === "status") {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return [...filteredTodos].sort((a, b) => {
      if (
        priorityOrder[a.priority as "High" | "Medium" | "Low"] !==
        priorityOrder[b.priority as "High" | "Medium" | "Low"]
      ) {
        return (
          priorityOrder[a.priority as "High" | "Medium" | "Low"] -
          priorityOrder[b.priority as "High" | "Medium" | "Low"]
        );
      }
      return Number(a.isDone) - Number(b.isDone);
    });
  }
  return filteredTodos;
};
