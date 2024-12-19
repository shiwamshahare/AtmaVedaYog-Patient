import React, { useState, memo } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = memo(() => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add search logic here
  };

  const handleSubmit = () => {
    /* Add search submit logic */
  };

  const inputClasses = `
    input px-4 py-2 rounded-xl
    transition-all duration-300 ease-in-out
    ${isFocused ? "w-72" : "w-60"}
    border-2 border-green-600
    shadow-md shadow-orange-100
    focus:border-orange-300 focus:shadow-green-200
    outline-none
    placeholder-gray-400 text-sm
    bg-white/90 backdrop-blur-sm
  `;

  return (
    <div className="relative">
      <input
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search doctors, services..."
        className={inputClasses}
        name="search"
        type="search"
        autoComplete="off"
      />
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 
                   hover:bg-orange-50 rounded-full transition-colors"
        onClick={handleSubmit}
      >
        <FaSearch />
      </button>
    </div>
  );
});

Searchbar.displayName = "Searchbar";

export default Searchbar;
