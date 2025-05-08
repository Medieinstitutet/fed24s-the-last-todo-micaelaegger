import "../index.css";
import { AddIcon } from "../assets/AddIcon";

type SortButtonsProps = {
  sortMethod: "createdAt" | "status" | null;
  setSortMethod: (method: "createdAt" | "status" | null) => void;
  toggleModal: () => void;
};

export const SortButtons = ({
  sortMethod,
  setSortMethod,
  toggleModal,
}: SortButtonsProps) => {
  const handleSortClick = (method: "createdAt" | "status") => {
    // Om samma knapp klickas igen, stäng av sorteringen
    if (sortMethod === method) {
      setSortMethod(null);
    } else {
      setSortMethod(method);
    }
  };

  return (
    <section className="flex items center gap-6">
      <button
        onClick={toggleModal}
        className="flex items-center gap-1 add-button rounded-lg px-3 py-[8px] whitespace-nowrap my-auto "
      >
        <AddIcon />
        <p>New item</p>
      </button>
      <div className="bg-gray-light rounded-lg flex text-gray-light extra-light-text px-2 py-1 pl-4 gap-2 w-full">
        <button
          onClick={() => handleSortClick("createdAt")}
          className={`px-4 py-1 rounded-lg ${
            sortMethod === "createdAt"
              ? "bg-pink-400 text-white"
              : "bg-transparent hover:bg-pink-400 hover:text-white active:bg-pink-400"
          } transition-all duration-200`}
        >
          Sort by Time
        </button>

        <button
          onClick={() => handleSortClick("status")}
          className={`px-4 py-1 rounded-lg ${
            sortMethod === "status"
              ? "bg-blue-400 text-white"
              : "bg-transparent hover:bg-blue-400 hover:text-white active:bg-blue-400"
          } transition-all duration-200`}
        >
          Sort by Priority
        </button>
      </div>
    </section>
  );
};
