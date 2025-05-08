import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  task: string;
  setTask: (task: string) => void;
  priority: string;
  setPriority: (priority: string) => void;
};

export const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  task,
  setTask,
  priority,
  setPriority,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-gray-dark p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold text-white mb-4">
          Create a New Todo
        </h2>
        <form onSubmit={onSubmit}>
          {/* Task Input */}
          <div className="mb-4">
            <label
              htmlFor="task"
              className="block text-sm font-medium text-gray-light"
            >
              Task
            </label>
            <input
              type="text"
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="mt-1 block w-full bg-gray-medium p-1 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-light"
              placeholder="Enter your task"
            />
          </div>

          {/* Priority Selector */}
          <div className="mb-4">
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-light"
            >
              Priority
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="mt-1 block w-full bg-gray-medium p-1 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-light text-white px-4 py-2 rounded-lg hover:bg-gray-medium transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
