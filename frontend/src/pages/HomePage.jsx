import React from "react";
import lightBulb from "../assets/images/svgs/miscellaneous_icons_1.svg";
import profileImage from "../assets/images/profile/developer-pic-1.png";
import LayoutComponent from "../components/LayoutComponent";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";
import { LinkArrow } from "../components/Icons";
import Hireme from "../components/Hireme";
function HomePage() {
  return (
    <main className="flex items-center dark:text-light text-dark w-full min-h-[90vh] border-dark border-solid border-b-2">
      <LayoutComponent className="pt-0 pb-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <img
              src={profileImage}
              alt="Mukesh Pandey"
              className="h-full w-full"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-5 items-center self-center ">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left "
            />
            <p>
              As a skilled full-stack developer (MERN stack), I am dedicated to
              turning ideas into innovative web applications. Explore my latest
              projects and articles, showcasing my expertise in React.js and web
              development.
            </p>
            <div className="flex items-end self-start gap-5">
              <Link
                download="../../public/dummy.pdf"
                className="font-semibold flex text-center text-lg bg-dark p-2.5 px-6 text-light rounded-md hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light hover:dark:text-light hover:dark:bg-dark dark:text-dark dark:bg-light"
              >
                Resume
                <LinkArrow />
              </Link>
              <Link
                to="/contact"
                className="text-xl dark:text-light text-semibold underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </LayoutComponent>
      <Hireme />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <img src={lightBulb} alt="Mukesh Pandey" className="w-full h-full" />
      </div>
    </main>
  );
}

export default HomePage;
