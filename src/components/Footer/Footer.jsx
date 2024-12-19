import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import bgWave from "./bgwave.svg";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <footer
      className="w-full h-[85vh] relative flex items-end justify-center pb-12"
      style={{ backgroundImage: `url(${bgWave})` }}
    >
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="w-full h-full grid grid-cols-7 border-b-2 border-black/25 ">
          <div className="w-full col-span-2 flex flex-col justify-center items-center p-12">
            <div className="flex flex-col gap-5 justify-center items-center">
              <img
                src="/Images/AtmaVeda.png"
                alt="logo"
                className="w-1/2 h-auto" // Adjusted to make the image smaller
              />
              <p>AtmaVeda Yog</p>
            </div>
            <div className="w-full h-auto grid items-center justify-center grid-flow-col gap-8 pt-8 text-2xl">
              <Link
                to="https://www.facebook.com/drsadanand.atmavedayog/"
                target="_blanck"
              >
                <span>
                  <FaFacebook />
                </span>
              </Link>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <Link
                to="https://www.youtube.com/@atmavedayogthenewfutureofs5365"
                target="_blanck"
              >
                <span>
                  <FaYoutube />
                </span>
              </Link>
            </div>
          </div>

          {/* Menu */}
          <div className="w-full grid content-center h-full p-12">
            <p className="font-bold py-5 text-lg">Menu</p>
            <ul className="grid w-full h-full gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Packages</li>
              <li>Offers</li>
            </ul>
          </div>

          {/* for patients */}
          <div className="w-full grid content-center h-full p-12">
            <p className="font-bold py-5 text-lg">For Patient</p>
            <ul className="grid w-full h-full gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Packages</li>
              <li>Offers</li>
            </ul>
          </div>

          {/* for doctors */}
          <div className="w-full grid content-center h-full p-12">
            <p className="font-bold py-5 text-lg">For Doctors</p>
            <ul className="grid w-full h-full gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Packages</li>
              <li>Offers</li>
            </ul>
          </div>

          {/* for b2b partners */}
          <div className="w-full grid content-center h-full p-2">
            <p className="font-bold py-5 text-lg">For B2B Partners</p>
            <ul className="grid w-full h-full gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Packages</li>
              <li>Offers</li>
            </ul>
          </div>

          {/* useful links */}
          <div className="w-full grid content-center h-full p-12">
            <p className="font-bold py-5 text-lg">Useful Links</p>
            <ul className="grid w-full h-full gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Packages</li>
              <li>Offers</li>
            </ul>
          </div>
        </div>

        {/* copyright section */}
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
