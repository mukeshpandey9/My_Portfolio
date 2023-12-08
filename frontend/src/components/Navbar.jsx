import React from "react";
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

const Navbar = () => {
  const customClass = ({ isActive }) =>
    `block  font-semibold  duration-200 ${
      isActive
        ? "dark:text-light text-dark"
        : "text-gray-500 dark:text-gray-400"
    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-dark lg:p-0`;

  const [mode, setmode] = useThemeSwitcher();
  return (
    <header className="w-full bg-light dark:bg-dark dark:text-light  px-32 py-8 font-medium flex justify-between items-center">
      <nav className="flex gap-9">
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

      <nav className="flex gap-8">
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
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
