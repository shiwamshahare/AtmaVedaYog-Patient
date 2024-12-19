import React from "react";

const Sidebar = ({ options, selected, setSelected }) => {
  return (
    <div className="sticky top-36 h-fit border-slate-300 bg-white p-2">
      <div className="py-4 ps-8 text-3xl">Test Category</div>
      <div className="space-y-2 py-3">
        {options &&
          options.map((item) => (
            <Option
              key={item.id}
              title={item.title}
              index={item.id}
              selected={selected}
              setSelected={setSelected}
              notifs={item.lists}
            />
          ))}
      </div>
    </div>
  );
};

const Option = ({ index, title, selected, setSelected, notifs }) => {
  const isSelected = selected === index;

  return (
    <button
      onClick={() => setSelected(isSelected ? null : index)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors duration-200 border-t-2 justify-between ps-2 ${
        isSelected
          ? "bg-indigo-100 text-black"
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      <span className="text-md font-medium">{title}</span>
      <span
        style={{ y: "-50%" }}
        className="size-7 flex justify-center items-center rounded-full bg-green-300 text-xs text-black"
      >
        {Array.isArray(notifs) && notifs.length > 0 ? notifs.length : ""}
      </span>
    </button>
  );
};

export default Sidebar;
