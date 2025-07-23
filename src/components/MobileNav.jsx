import React from "react";
import { RxCross1 } from "react-icons/rx";

const MobileNav = ({ toggleMenu, isNavOpened }) => {
  const listStyle = "font-semibold cursor-pointer text-lg hover:text-blue-600";

  return (
    <div
      className={`bg-white md:hidden fixed top-0 left-0 w-screen h-screen z-[1000] transition-all duration-200 ${
        isNavOpened ? "left-[-50em]" : "hidden"
      } `}
    >
      <div className="flex justify-end relative top-12 right-12">
        <RxCross1 onClick={toggleMenu} className="h-6 w-auto cursor-pointer" />
      </div>
      <div className="flex flex-col h-screen justify-center items-center gap-4">
        <ul>
          <ul className=" gap-8  flex flex-col">
            <a href="#home">
              {" "}
              <li className={listStyle}>Home</li>
            </a>
            <a onClick={toggleMenu} href="#features">
              <li className={listStyle}>Features</li>
            </a>
            <a onClick={toggleMenu} href="#aboutus">
              <li className={listStyle}>About Us</li>
            </a>
          </ul>
        </ul>
        <div className="flex gap-8 flex-col justify-stretch items-stretch">
          <button className="main-btn">Login</button>
          <button className="secondary-btn ">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
