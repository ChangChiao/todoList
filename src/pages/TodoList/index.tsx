import { useEffect, useState } from "react";
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
  const [undone, setUndone] = useState<number>(0);
  const [list, setList] = useState<TodoType[]>([
    { id: 1649401936476, title: "吃早餐", isDone: false },
    { id: 1649401936477, title: "慢跑", isDone: false },
    { id: 1649401936478, title: "跳舞", isDone: true },
  ]);
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

  useEffect(() => {
    const count = list.filter((item) => !item.isDone)?.length;
    setUndone(count);
  }, [list]);
  return (
    <div className="h-screen bg-main">
      <Header />
      <section className="mx-auto w-1/2 max-w-[700px]">
        <div className="box mb-5 flex items-center justify-between px-2 py-1">
          <input
            className="w-[calc(100%-50px)] pl-2 text-secondary"
            maxLength={50}
            type="text"
            name=""
            id="addContent"
          />
          <button className="h-10 w-10 rounded-lg bg-black text-center leading-10">
            <FontAwesomeIcon
              className="text-xl text-white"
              icon={faPlus}
              onClick={addTodo}
            />
          </button>
        </div>
        <div className="box w-full">
          <TabList setTab={setTab} tab={tab} />
          <ul className="p-6">
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
                <TodoItem key={item.id} {...item} deleteTodo={deleteTodo} />
              ))}
            <li className="flex items-center justify-between pt-6">
              <span>{undone}個待完成項目</span>
              <span className="text-secondary">清除已完成項目</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TodoList;
