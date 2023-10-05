// Navbar.tsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Switcher from "../switcher";
import Languages from "./Languages";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dark:bg-neutral-800 bg-stone-300 p-4">
      <div className="container-fluid px-16 max-lg:px-0 mx-auto flex justify-between items-center w-full">
        <a
          href="#home"
          className="text-2xl font-bold dark:text-white text-black transition hover:text-gray-500"
        >
          Мой Портфолио
        </a>

        <div className="lg:hidden flex space-x-5">
          <Switcher />  
          <button
            onClick={toggleMenu}
            className={`text-white hover:text-gray-400 transition transform ${
              isOpen ? "rotate-90" : ""
            }`}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "translate-y" : "hidden"
          } lg:flex lg:space-x-4 space-y-4 lg:space-y-0
           absolute top-16 left-0 w-full lg:w-auto
           dark:bg-neutral-800 bg-stone-300 px-8 py-4 lg:p-0 lg:relative 
           lg:top-auto lg:left-auto transition-transform`}
        >
          <li>
            <a
              href="#home"
              className="dark:text-white text-black text-xl hover:text-gray-400 transition"
            >
              Главная
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="dark:text-white text-black text-xl hover:text-gray-400 transition"
            >
              Проекты
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="dark:text-white text-black text-xl hover:text-gray-400 transition"
            >
              Контакты
            </a>
          </li>

          <li className="lg:hidden block">
            <Languages />
          </li>
        </ul>
        <div className="lg:flex hidden space-x-4 items-center">
          <Switcher />
          <Languages />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
