import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import { useState, useEffect, useRef } from "react";

const DropDown = ({ title, url, items, onItemSelect }) => {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const dropdownRef = useRef(null);

  // Handle click outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if items is an object with list and icons
  const itemsList = items.list || items;
  const icons = items.icons;
  const hasIcons = Array.isArray(icons);

  const handleOnClick = (item) => {
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-center group">
      <motion.div
        ref={dropdownRef}
        animate={open ? "open" : "closed"}
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className="flex items-center gap-2 z-[999]">
          <NavLink to={url}>
            <span className="capitalize">{title}</span>
          </NavLink>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>
        <div
          style={{
            originY: "top",
            translateX: "-50%",
            transform: "rotate(45deg)",
          }}
          className="w-5 h-5 bg-white items-center absolute right-[50%] left-[35%] rotate-45 top-[110%] flex justify-center z-[31] border-t-2 border-l-2 p-1  group-hover:opacity-100 opacity-0 transition-opacity ease-in-out duration-150 border-black/30"
        />
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 pt-4 rounded-lg bg-white z-[30] shadow-xl absolute top-[150%] left-[50%] overflow-hidden min-w-[200px] w-max border-2 group border-black/30"
        >
          {itemsList.map((item, idx) => (
            <Option
              key={idx}
              text={item.text}
              to={item.to} // Pass 'to' prop for navigation
              icon={hasIcons ? icons[idx] : null}
              isActive={idx === hoveredIndex}
              onHover={() => setHoveredIndex(idx)}
              onClick={() => handleOnClick(item)}
              onItemSelect={onItemSelect}
            />
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  icon,
  isActive,
  onHover,
  onClick,
  onItemSelect,
  to,
}) => {
  const handleClick = () => {
    if (onItemSelect) {
      onItemSelect(text); // Call onItemSelect if passed
    }
    onClick(); // Close the dropdown after clicking
  };

  return (
    <motion.li
      variants={itemVariants}
      className={`flex items-center gap-2 w-full p-2 whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 transition-colors cursor-pointer z-30 ${
        isActive ? "bg-indigo-100" : ""
      }`}
      onMouseEnter={onHover}
    >
      {to ? (
        // Using NavLink for navigation
        <NavLink
          to={to}
          className="flex items-center gap-2 w-full"
          onClick={handleClick}
        >
          {icon && (
            <motion.img
              variants={actionIconVariants}
              src={icon}
              alt=""
              className="w-5 h-5 object-contain"
              loading="lazy"
              width={20}
              height={20}
            />
          )}
          <span>{text}</span>
        </NavLink>
      ) : (
        <>
          {icon && (
            <motion.img
              variants={actionIconVariants}
              src={icon}
              alt="hello"
              className="w-5 h-5 object-contain"
              loading="lazy"
              width={20}
              height={20}
            />
          )}
          <span>{text}</span>
        </>
      )}
    </motion.li>
  );
};

// Animation variants
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

export default DropDown;
