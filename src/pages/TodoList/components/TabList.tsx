import clsx from "clsx";
const list = [
  { id: "all", title: "全部" },
  { id: "pending", title: "待完成" },
  { id: "completed", title: "已完成" },
];

type TabListProps = {
  setTab: (id: string) => void;
  tab: string;
};

const TabList: React.FC<TabListProps> = ({ setTab, tab }) => {
  return (
    <ul className="flex justify-between pt-4">
      {list.map((item) => (
        <li
          className={clsx(
            "w-1/3 cursor-pointer border-b border-secondary pb-2 text-center",
            tab === item.id && "border-b-[2px] border-black"
          )}
          key={item.id}
          onClick={() => setTab(item.id)}
        >
          <span
            className={clsx(
              "text-secondary",
              tab === item.id && "font-bold text-black"
            )}
          >
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TabList;
