import "../index.css";

type TabsProps = {
  setActiveTab: (tab: "Pending" | "Completed" | "All") => void;
  activeTab: "Pending" | "Completed" | "All";
};

export const Tabs = ({ setActiveTab, activeTab }: TabsProps) => {
  return (
    <div className="flex items-center gap-6 text-gray-light py-3 border-bottom">
      <button
        onClick={() => setActiveTab("Pending")}
        className={`${
          activeTab === "Pending" ? "text-white" : "hover:text-white"
        } transition-colors duration-200`}
      >
        Pending
      </button>
      <button
        onClick={() => setActiveTab("Completed")}
        className={`${
          activeTab === "Completed" ? "text-white" : "hover:text-white"
        } transition-colors duration-200`}
      >
        Completed
      </button>
      <button
        onClick={() => setActiveTab("All")}
        className={`${
          activeTab === "All" ? "text-white" : "hover:text-white"
        } transition-colors duration-200`}
      >
        All
      </button>
    </div>
  );
};
