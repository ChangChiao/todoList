import { useState } from "react";
import Header from "../../components/Header";
import TabList from "./components/tabList";
const TodoList: React.FC = () => {
  const [tab, setTab] = useState("all");
  return (
    <>
      <Header />
      <TabList setTab={setTab} />
      <div className=" rounded-sm"></div>
    </>
  );
};

export default TodoList;
