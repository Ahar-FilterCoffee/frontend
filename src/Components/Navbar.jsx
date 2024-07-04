import React, { useState } from "react";
import { FiHome, FiCalendar, FiInfo, FiMapPin, FiLogIn } from "react-icons/fi";
import { clearStorage, getUserType } from "../utils/handleCookie";

const Navbar = () => {
  console.log(getUserType())
  return (
    <div className="flex flex-col md:flex-row md:justify-between justify-center items-center py-2 px-4 shadow-md sticky top-0 bg-primary-200 bg-opacity-80 text-white z-20">
      <div className="logo m-auto md:mx-5 w-full max-w-[80px]">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="w-[120px] h-[50px]" />
        </a>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 mr-6 font-bold md:text-md justify-end">
          <li className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
            <FiHome />
            <a href="/">Home</a>
          </li>
          {
            getUserType() == "Producers" && <li className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
              <FiCalendar />
              <a href="/post">Add Post</a>
            </li>
          }
          {
            getUserType() == "Consumers" && <li className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
              <FiCalendar />
              <a href="/bestpost">Post</a>
            </li>
          }
          {
            getUserType() == "Consumers" && <li className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
              <FiInfo />
              <a href="/tracking">Tracking</a>
            </li>
          }
            {
            getUserType() == "Delivery Partner" && <li className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
              <FiInfo />
              <a href="/tracking">Delivery</a>
            </li>
          }

          {
            getUserType() != null ? <li onClick={() => clearStorage()} className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
            <FiLogIn />
            <a  href="/login">Logout</a>  </li>:<li className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
              <FiLogIn />
              <a href="/login">Sign In</a>
            </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
