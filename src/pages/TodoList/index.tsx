import { useState } from "react";
import Header from "../../components/Header";
import TabList from "./components/TabList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TodoItem from "./components/TodoItem";
const TodoList: React.FC = () => {
  type TodoType = {
    id: number;
    title: string;
    isDone: boolean;
  };
  const [tab, setTab] = useState<string>("all");
  const [list, setList] = useState<TodoType[]>([
    { id: 1649401936476, title: "吃早餐", isDone: false },
    { id: 1649401936477, title: "慢跑", isDone: false },
    { id: 1649401936478, title: "跳舞", isDone: true },
  ]);
  const dataList = [];
  const addTodo = () => {
    const addInput = document.getElementById("addContent") as HTMLInputElement;
    const id = Date.now();
    setList((prevState) => {
      return [
        ...prevState,
        {
          id,
          title: addInput.value,
          isDone: false,
        },
      ];
    });
  };
  const deleteTodo = (id: number) => {
    const listTemp = [...list];
    setList(listTemp.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header />
      <TabList setTab={setTab} />
      <div className="w-full rounded-sm md:w-4/5 md:max-w-[500px]">
        <input maxLength={50} type="text" name="" id="addContent" />
        <FontAwesomeIcon icon={faPlus} onClick={addTodo} />
        <ul>
          {list
            .filter((item: TodoType) => {
              if (tab === "pending") {
                return !item.isDone;
              } else if (tab === "completed") {
                return item.isDone;
              } else {
                return item;
              }
            })
            .map((item) => (
              <TodoItem {...item} deleteTodo={deleteTodo} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
