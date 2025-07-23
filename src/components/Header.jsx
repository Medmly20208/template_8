import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const toggleMenu = () => {
    setIsNavOpened(!isNavOpened);
  };

  const listStyle = "font-semibold cursor-pointer text-lg hover:text-blue-600";
  return (
    <header className="flex justify-between items-center py-4">
      <div className="flex gap-6 items-center">
        <div>
          <img src={logo} alt="business logo" className="w-18 h-auto" />
        </div>
        <ul className="hidden gap-4  md:flex">
          <a href="#home">
            <li className={listStyle}>Home</li>
          </a>
          <a href="#features">
            <li className={listStyle}>Features</li>
          </a>
          <a href="#aboutus">
            <li className={listStyle}>About Us</li>
          </a>
        </ul>
      </div>
      <div className="hidden md:flex gap-4">
        <button className="main-btn">Login</button>
        <button className="secondary-btn">Get started</button>
      </div>
      <FiMenu
        onClick={toggleMenu}
        className="h-8 w-auto cursor-pointer md:hidden"
      />
      <MobileNav toggleMenu={toggleMenu} isNavOpened={isNavOpened} />
    </header>
  );
};

export default Header;
