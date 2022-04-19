import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
type todoItem = {
  id: number;
  title: string;
  isDone: boolean;
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<todoItem> = ({ id, title, isDone, deleteTodo }) => {
  return (
    <li className="flex items-center border-b-2 border-[#E5E5E5] py-[15px]">
      <div
        className={clsx(
          "mx-2 h-4 w-4 rounded-sm border border-secondary",
          isDone && "border-0"
        )}
      >
        {/* <input type="checkbox" className="hidden" checked={isDone} /> */}
        {isDone && (
          <FontAwesomeIcon className="font-bold text-main" icon={faCheck} />
        )}
      </div>
      <input
        className={clsx("flex-1", isDone && "line-through")}
        value={title}
        type="text"
        readOnly
      />
      <FontAwesomeIcon
        className="mx-2"
        icon={faXmark}
        onClick={() => deleteTodo(id)}
      />
      <FontAwesomeIcon icon={faPen} />
    </li>
  );
};

export default TodoItem;
