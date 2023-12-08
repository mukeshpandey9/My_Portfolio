import React from "react";
import { CircularText } from "./Icons";
import { Link } from "react-router-dom";

const Hireme = () => {
  return (
    <div className="fixed left-4 bottom-0 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow"}
        />
        <Link
          to="mailto:abcd@gmail.com"
          className="rounded-full w-20 h-20 text-md font-semibold shadow-md flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2   text-light bg-dark dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light  hover:bg-light border-2 border-solid border-transparent hover:border-dark hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
