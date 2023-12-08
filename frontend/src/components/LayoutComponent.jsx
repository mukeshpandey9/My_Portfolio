import React from "react";

const LayoutComponent = ({ children, className = "" }) => {
  return (
    <div
      className={` w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default LayoutComponent;
