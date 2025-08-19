import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [scrollingNav, setScrollingNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 88) {
        setScrollingNav(true);
      } else {
        setScrollingNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          scrollingNav ? "md:top-0 md:w-[100%] shadow-lg" : "md:top-20 md:w-[85%] "
        } z-[1000] p-3  w-full bg-white flex items-center justify-between gap-5 relative md:fixed md:flex-row flex-row-reverse transition-all duration-300`}
      >
        {/* between box ul */}
        <ul className="flex items-center justify-center gap-3">
          <ul className="gap-3 flex items-center justify-center">
            <ul className="text-xl text-black">
              <CiSearch />
            </ul>

            {toggleNav ? (
              <FaBars
                className="md:hidden text-xl cursor-pointer"
                onClick={() => {
                  setToggleNav((prev) => !prev);
                }}
              />
            ) : (
              <RxCross1
                className="text-xl md:hidden cursor-pointer"
                onClick={() => {
                  setToggleNav((prev) => !prev);
                }}
              />
            )}

            <div className="md:flex hidden w-[2px] h-6 rounded-sm bg-gray-400"></div>
          </ul>

          {/* main toggle */}
          <ul
            className={`
            ${
              toggleNav
                ? "opacity-0 max-h-0"
                : "opacity-100 max-h-[500px]"
            } 
            overflow-hidden border-t-[3px] md:border-none md:w-auto w-full border-red-600 
            md:relative absolute top-[100%] md:p-0 p-5 md:pt-0 md:top-0 right-0
            transition-all duration-500 ease-in-out
            bg-white md:bg-transparent
          `}
          >
            <ul className="flex md:flex-row flex-col items-end md:items-center md:justify-center gap-5">
              <li className="hover:text-red-700 transition-all duration-100 border-b-2 md:border-none md:w-auto w-full text-right md:text-center">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-red-700 transition-all duration-100 border-b-2 md:border-none md:w-auto w-full text-right md:text-center">
                <a href="/">Contact</a>
              </li>
              <li className="hover:text-red-700 transition-all duration-100 border-b-2 md:border-none md:w-auto w-full text-right md:text-center">
                <a href="/">About</a>
              </li>
              <li className="hover:text-red-700 transition-all duration-100 border-b-2 md:border-none md:w-auto w-full text-right md:text-center">
                <a href="/">Products</a>
              </li>
              <li className="hover:text-red-700 transition-all duration-100 border-b-2 md:border-none md:w-auto w-full text-right md:text-center">
                <a href="/">Manufactures</a>
              </li>
              <div className="hidden md:flex w-[2px] h-6 rounded-sm bg-gray-400"></div>
            </ul>
          </ul>
        </ul>

        {/* logo */}
        <ul className="items-center flex justify-center gap-3">
          <ul className="flex items-center justify-center gap-3">
            <li className="md:flex hidden"> lorem </li>
            <div className="md:flex hidden w-[2px] h-6 rounded-sm bg-gray-400"></div>
          </ul>

          <li className="md:w-[150px] md:h-[100px] w-[130px]">
            <a href="/">
              <img
                src="https://themetechmount.com/wordpress/fablio/wp-content/uploads/2021/03/logo.svg"
                alt="logo"
                loading="eager"
                className="object-contain w-full h-full"
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
