import React, { useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import LayoutComponent from "../components/LayoutComponent";
import profileImage from "../assets/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import ReactFullpage from "@fullpage/react-fullpage";
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const AboutPage = () => {
  return (
    <main className="flex w-full flex-col items-center text-dark dark:text-light justify-center">
      <LayoutComponent className="py-16 px-0 md:px-32">
        {/* Main Starts here */}

        <AnimatedText
          text={"Passion Fuels Purpose!"}
          className="md:!text-8xl mb-10"
        />
        <div className="grid w-full place-items-center px-6 grid-cols-6 md:grid-cols-8 gap-16">
          <div className="md:col-span-3 order-2 md:order-1 col-span-6 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-xl font-bold uppercase dark:text-light/75 text-dark/75">
              About Me
            </h2>
            <p>
              Hi, I'm Mukesh Pandey, a full stack MERN developer with a passion
              for creating beautiful, functional, and user-centered digital
              experiences. I have no experience in the field. I am always
              looking for new and innovative ways to bring my clients' visions
              to life.
            </p>
            <p className="my-4">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p>
              Whether I'm working on a website or other digital product, I bring
              my commitment to design excellence and user-centered thinking to
              every project I work on. I look forward to the opportunity to
              bring my skills and passion to your next project.
            </p>
          </div>
          <div className="md:col-span-3 order-1 md:order-2  col-span-6 relative h-max rounded-2xl border-2 border-solid border-dark  dark:border-light bg-light dark:bg-dark p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark dark:bg-light" />
            <img src={profileImage} alt="Mukesh Pandey" />
          </div>
          <div className="md:col-span-2 order-3 col-span-6 flex md:flex-col items-center md:items-end justify-between">
            <div className="flex flex-col items-center md:items-end justify-center ">
              <span className="inline-block text-4xl md:text-7xl font-bold">
                <AnimatedNumbers value={10} />+
              </span>
              <h2 className="font-medium capitalize text-sm md:text-xl dark:text-light/75 text-dark/75">
                Satisfied Clients
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center ">
              <span className="inline-block text-4xl md:text-7xl font-bold">
                <AnimatedNumbers value={30} />+
              </span>
              <h2 className="font-medium capitalize text-sm md:text-xl dark:text-light/75 text-dark/75">
                Projects Completed
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center ">
              <span className="inline-block text-4xl md:text-7xl font-bold">
                <AnimatedNumbers value={1} />+
              </span>
              <h2 className="font-medium capitalize text-sm md:text-xl dark:text-light/75 text-dark/75">
                Years Of Experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        {/* <Experience /> */}
        <Education />
      </LayoutComponent>
    </main>
  );
};

export default AboutPage;
