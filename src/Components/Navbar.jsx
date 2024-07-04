import React, { useState } from "react";
import { FiHome, FiCalendar, FiInfo, FiMapPin,FiLogIn} from "react-icons/fi";

const Navbar = () => {
  return (
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center py-2 px-4 shadow-md sticky top-0 bg-primary-200 bg-opacity-80 text-white z-20">
        <div className="logo m-auto md:mx-5 w-full max-w-[80px]">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="w-[120px] h-[50px]" />
          </a>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-6 mr-6 font-bold md:text-md justify-end">
            <li  className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
              <FiHome />
            <a href="/">Home</a>
            </li>
            <li  className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
              <FiCalendar />
              <a href="/post">Post</a>
            </li>
            <li  className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
              <FiInfo />
              <a href="/tracking">Delivery</a>
            </li>
            <li  className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
              <FiMapPin />
              <a href="/map">Track</a>
            </li>
            <li  className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
              <FiLogIn />
              <a href="/login">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;