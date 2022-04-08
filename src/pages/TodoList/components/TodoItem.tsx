import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";

type todoItem = {
  id: number;
  title: string;
  isDone: boolean;
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<todoItem> = ({ id, title, isDone, deleteTodo }) => {
  return (
    <li>
      <label
        htmlFor="
        "
      >
        <input type="checkbox" checked={isDone} />
        <input value={title} type="text" readOnly />
        <FontAwesomeIcon icon={faXmark} onClick={() => deleteTodo(id)} />
        <FontAwesomeIcon icon={faPen} />
      </label>
    </li>
  );
};

export default TodoItem;
