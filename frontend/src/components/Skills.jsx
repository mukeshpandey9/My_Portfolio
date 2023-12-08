import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center rounded-full font-semibold dark:bg-light dark:text-dark bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen realtive flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center rounded-full font-semibold bg-dark text-light p-8 w-24 h-24 shadow-dark cursor-pointer dark:text-dark dark:bg-white "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y={"-12vw"} />
        <Skill name="HTML" x="-20vw" y={"2vw"} />
        <Skill name="React" x="20vw" y={"6vw"} />
        <Skill name="NodeJs" x="0vw" y={"12vw"} />
        <Skill name="Javascript" x="-20vw" y={"15vw"} />
        <Skill name="MongoDB" x="15vw" y={"-12vw"} />
        <Skill name="ExpressJS" x="32vw" y={"-5vw"} />
        <Skill name="Tailwind" x="0vw" y={"-20vw"} />
        <Skill name="Bootstrap" x="23vw" y={"16vw"} />
        <Skill name="Github" x="-24vw" y={"-15vw"} />
      </div>
    </>
  );
};

export default Skills;
