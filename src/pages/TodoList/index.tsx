import { useState } from "react";
import Header from "../../components/Header";
import TabList from "./components/TabList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const TodoList: React.FC = () => {
  const [tab, setTab] = useState("all");
  const [list, setList] = useState([]);
  const dataList = [];
  return (
    <>
      <Header />
      <TabList setTab={setTab} />
      <div className="w-full rounded-sm md:w-4/5 md:max-w-[500px]">
        <input maxLength={50} type="text" name="" id="" />
        <FontAwesomeIcon icon={faPlus} />
        <ul></ul>
      </div>
    </>
  );
};

export default TodoList;
