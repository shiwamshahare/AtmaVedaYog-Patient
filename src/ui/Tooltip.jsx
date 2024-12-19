const Tooltip = ({ text, children }) => (
  <div className="relative group flex justify-start items-center h-full overflow-visible">
    {children}
    <div className="absolute bottom-full h-max mb-2 hidden w-max px-2 py-1 text-sm text-white bg-gray-700 rounded-md group-hover:block">
      {text}
    </div>
  </div>
);

export default Tooltip;
