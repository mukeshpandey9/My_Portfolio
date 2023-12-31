import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[65%] md:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-col gap-2"
      >
        <h3 className="capitalize font-bold text-lg md:text-2xl">{type}</h3>
        <span className="capitalize text-sm md:text-xl dark:text-light/75 text-dark/75 font-medium ">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="section h-full my-36 md:my-64">
      <h2 className="font-bold text-6xl md:text-8xl mb-20 md:mb-32 w-full text-center">
        Education
      </h2>

      <div ref={ref} className="w-full md:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[2px] md:w-[4px] h-full bg-dark dark:bg-light origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between md:ml-4">
          <Details
            type="Bachelor Of Technology in Computer Science Engineering"
            time="2022-Present"
            place="Dev Bhoomi Uttarakhand University"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
          />
          <Details
            type="Bachelor Of Technology in Computer Science Engineering"
            time="2022-Present"
            place="Dev Bhoomi Uttarakhand University"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
          />
          <Details
            type="Bachelor Of Technology in Computer Science Engineering"
            time="2022-Present"
            place="Dev Bhoomi Uttarakhand University"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
          />
          <Details
            type="Bachelor Of Technology in Computer Science Engineering"
            time="2022-Present"
            place="Dev Bhoomi Uttarakhand University"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
