const list = [
  { id: "all", title: "全部" },
  { id: "pending", title: "待完成" },
  { id: "completed", title: "已完成" },
];

type TabListProps = {
  setTab: (id: string) => void;
};

const TabList: React.FC<TabListProps> = ({ setTab }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id} onClick={() => setTab(item.id)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default TabList;
