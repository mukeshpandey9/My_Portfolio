import React from "react";
import LayoutComponent from "./LayoutComponent";

const Footer = () => {
  const date = new Date();

  return (
    <LayoutComponent className="py-10">
      <div className="w-full dark:text-light flex items-center justify-between font-medium text-xl">
        <h1>{date.getFullYear()} © All Rights Reserved</h1>
        <h1>
          Build With <span className="text-2xl">&#9825;</span> by Mukesh Pandey
        </h1>
      </div>
    </LayoutComponent>
  );
};

export default Footer;
