import React from "react";
import LayoutComponent from "./LayoutComponent";

const Footer = () => {
  const date = new Date();

  return (
    <LayoutComponent className="py-10 px-7 md:px-32">
      <div className="w-full sticky bottom-0  text-center md:text-left dark:text-light flex flex-col md:flex-row items-center justify-between font-medium text-xl">
        <h1>{date.getFullYear()} © All Rights Reserved</h1>
        <h1>
          Build With <span className="text-xl md:text-2xl">&#9825;</span> by
          Mukesh Pandey
        </h1>
      </div>
    </LayoutComponent>
  );
};

export default Footer;
