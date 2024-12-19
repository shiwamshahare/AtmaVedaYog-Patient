import React from "react";
import Navbar from "./Navbar/Navbar";
import Searchbar from "../../ui/Searchbar";
import { NavLink } from "react-router-dom";
import ScrollProgressBar from "../../ui/ScrollProgressbar";

// Reusable classNames for consistency and readability
const headerStyles =
  "lg:sticky lg:top-0 g:left-0 lg:right-0 z-[1] transition-all duration-800 shadow-xl w-full backdrop-blur-md";
const containerStyles = "w-full h-16 xl:px-12 px-6 content-center";
const innerContainerStyles = "relative flex justify-between items-center";
const logoAndSearchStyles = "flex justify-center items-center gap-12";
const logoStyles = "h-10 w-auto object-contain";

const Header = () => {
  return (
    <header className={headerStyles}>
      <div className={containerStyles}>
        <div className={innerContainerStyles}>
          {/* Logo and Search Bar Section */}
          <div className={logoAndSearchStyles}>
            <NavLink to="" aria-label="Go to home h-16 page">
              <img
                src="/Images/brand-logo.png"
                alt="AtmavedaYog logo"
                className={logoStyles}
              />
            </NavLink>
            <Searchbar />
          </div>

          {/* Navbar Section */}
          <Navbar />
        </div>
      </div>
      <ScrollProgressBar />
    </header>
  );
};

export default Header;
