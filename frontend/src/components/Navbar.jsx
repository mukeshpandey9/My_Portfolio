import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { ReactNavbar } from "overlay-navbar";
const Navbar = () => {
  const customClass = ({ isActive }) =>
    `block  font-semibold  duration-200 ${
      isActive
        ? "dark:text-light text-dark"
        : "text-gray-500 dark:text-gray-400"
    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-dark lg:p-0`;

  const [open, setOpen] = useState(true);
  const [mode, setmode] = useThemeSwitcher();

  return (
    <>
      <div className="dark:bg-dark/90 py-8 w-full md:py-0 bg-light  dark:text-light ">
        <span
          className="cursor-pointer md:hidden p-8 text-2xl"
          onClick={() => setOpen(true)}
        >
          &#9776;
        </span>
        <header
          className={` absolute ${
            open ? "top-0" : "  top-[-50%]"
          } md:relative w-full backdrop-blur-md  gap-10 md:gap-0  px-32 font-medium flex flex-col z-50 md:flex-row transition-all duration-500 ease-in-out justify-between items-center`}
        >
          <nav className="flex gap-9 pt-10 flex-col md:flex-row relative">
            <p
              className="text-5xl absolute md:hidden -right-full top-2"
              onClick={() => setOpen(false)}
            >
              &times;
            </p>
            <NavLink to="/" className={customClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={customClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={customClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={customClass}>
              Contact
            </NavLink>
          </nav>

          <nav className="flex items-center mt-8 gap-8">
            <motion.a
              href="https://github.com/mukeshpandey9"
              target="_blank"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-7 fill-dark"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://github.com/mukeshpandey9"
              target="_blank"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-7"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/mukeshpandey9"
              target="_blank"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-7"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/mukeshpandey9"
              target="_blank"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-7"
            >
              <DribbbleIcon />
            </motion.a>
            <button
              onClick={() => setmode(mode === "light" ? "dark" : "light")}
              className="flex items-center justify-center rounded-frll p-1"
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
          <div className="absolute left-[50%] hidden md:block top-2 translate-x-[-50%]">
            <Logo />
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
