import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    //runs in the intial render then will set isscrool wheather with true or false then setisscrooll will cause the component to rerender so useeffect will start again and set agin and rerender again for infintyyyy
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={` bg-[#2c3e50] z-50 sticky top-0 right-0 left-0 transition-all duration-300 text-white ${
          isScrolled ? "py-2" : "py-6"
        } `}
      >
        <div className="w-[90%] flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h1 className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
              START FRAMEWORK
            </h1>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only text-red-700">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="  flex  flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
              <li className="transition-all duration-1000">
                <NavLink
                  to="about"
                  className="block py-2 md:px-3 text-white font-bold rounded min-[350px]:w-1/4 min-[350px]:text-center md:w-full"
                  aria-current="page"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="transition-all duration-1000">
                <NavLink
                  to="portfolio"
                  className="block py-2 md:px-3  font-bold rounded min-[350px]:w-1/4 min-[350px]:text-center md:w-full "
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="transition-all duration-1000">
                <NavLink
                  to="contact"
                  className="block py-2 md:px-3 font-bold  rounded min-[320px]:w-1/4 min-[320px]:text-center md:w-full "
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
