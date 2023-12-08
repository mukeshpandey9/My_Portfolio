import React from "react";
import { CircularText } from "./Icons";
import { Link } from "react-router-dom";

const Hireme = () => {
  return (
    <div className="fixed top-0 -right-0 md:top-auto md:right-auto left-auto bottom-auto md:left-4 md:bottom-0 flex items-center justify-center overflow-hidden">
      <div className="md:w-48 w-24 h-auto flex items-center justify-center relative">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow"}
        />
        <Link
          to="mailto:abcd@gmail.com"
          className="rounded-full w-12 h-12 text-center md:w-20 md:h-20 text-[.6rem] md:text-md font-semibold shadow-md flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2   text-light bg-dark dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light  hover:bg-light border-2 border-solid border-transparent hover:border-dark hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
