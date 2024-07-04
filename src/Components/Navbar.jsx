import React, { useState } from "react";
import { FiHome, FiCalendar, FiInfo, FiLogIn } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { clearStorage, getUserType } from "../utils/handleCookie";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  console.log(getUserType());
  return (
    <>
      <span>
        {dropdown && (
          <div
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
            className="fixed right-28 md:right-14 bg-white shadow-xl border top-11 md:top-11 py-4 rounded-md px-5 w-32 z-30 cursor-pointer"
          >
            <ul>
              <a href="/myaccount">
                <li className="py-1 hover:text-red-700 text-sm font-bold">My Account</li>
              </a>
              <li
                onClick={() => {
                  clearStorage();
                  window.location.href = '/login'; // redirect to login after logout
                }}
                className="py-1 hover:text-red-700 text-sm font-bold"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </span>
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
            {getUserType() === "Producers" && (
              <li className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
                <FiCalendar />
                <a href="/post">Add Post</a>
              </li>
            )}
            {getUserType() === "Consumers" && (
              <>
                <li className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
                  <FiCalendar />
                  <a href="/bestposts">Post</a>
                </li>
                <li className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
                  <FiInfo />
                  <a href="/tracking">Tracking</a>
                </li>
              </>
            )}
            {getUserType() === "Delivery Partner" && (
              <li className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
                <FiInfo />
                <a href="/tracking">Delivery</a>
              </li>
            )}
            {getUserType() === null && (
              <li className="hover:text-blue-700 flex items-center space-x-2 transition-colors duration-200">
                <FiLogIn />
                <a href="/login">Sign In</a>
              </li>
            )}
            <span
              onMouseOver={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
            >
              {getUserType() != null && <MdAccountCircle className="text-xl md:text-2xl mx-2" />}
            </span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
