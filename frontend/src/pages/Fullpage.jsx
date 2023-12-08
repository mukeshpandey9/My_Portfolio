import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from "react-router-dom";
import { GithubIcon } from "../components/Icons";
import img1 from "../assets/images/projects/nft-collection-website-cover-image.jpg";
import LayoutComponent from "../components/LayoutComponent";
import AnimatedText from "../components/AnimatedText";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="overflow-hidden md:h-[70vh] lg:h-[60vh] p-4 md:p-12 w-full flex flex-col md:flex-row gap-5 items-center justify-between rounded-3xl rounded-br-4xl border border-solid border-dark dark:bg-dark dark:text-light bg-light shadow-2xl dark:border-light  relative">
      <div className="absolute top-0 -right-3  -z-10 w-[99%] h-[103%] rounded-br-3xl rounded-[2rem]  bg-dark dark:bg-light  " />
      <Link
        to={link}
        target="_blank"
        className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <img src={img} alt="project" className="w-full h-full" />
      </Link>
      <div className="w-full md:w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary text-xl font-medium">{type}</span>
        <Link to={link} target="_blank">
          <h2 className="my-2 w-full text-left text-2xl md:text-4xl font-bold hover:underline underline-offset-2">
            {title}
          </h2>
        </Link>
        <p className="py-2 font-medium text-sm md:text-base text-dark dark:text-light">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link to={github} className="w-10" target="_blank">
            <GithubIcon />
          </Link>
          <Link
            to={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-right p-2 px-6 text-lg font-semibold text-light"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const FullPage = () => {
  return (
    <div className="lg:px-32 md:px-16 px-0 dark:bg-dark bg-light">
      <AnimatedText
        text="Imagination Trumps Knowledge!"
        className="lg:!text-6xl"
      />
      <ReactFullpage
        className="z-50 "
        licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"} // Replace with your license key
        scrollingSpeed={1000}
        //   anchors={anchors}
        navigation
        //   navigationTooltips={anchors}
        //   onLeave={(origin, destination, direction) => {
        //     console.log("onLeave event", { origin, destination, direction });
        //   }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section   flex items-start pt-5 justify-center  min-h-screen">
                <FeaturedProject
                  title="EzBazaar - E-commerce website"
                  link="https://ez-bazaar.vercel.app"
                  github="https://github.com/mukeshpandey9/EzBazaar"
                  summary="A full stack e-commerce website using react and tailwind for frontend and NodeJs for the backend"
                  type="Featured Project"
                  img={img1}
                />
              </div>

              <div className="section     flex items-start pt-5 justify-center   min-h-screen">
                <FeaturedProject
                  title="EzBazaar - E-commerce website"
                  link="https://ez-bazaar.vercel.app"
                  github="https://github.com/mukeshpandey9/EzBazaar"
                  summary="A full stack e-commerce website using react and tailwind for frontend and NodeJs for the backend"
                  type="Featured Project"
                  img={img1}
                />
              </div>

              <div className="section    flex items-start pt-5  justify-center  min-h-screen">
                <FeaturedProject
                  title="EzBazaar - E-commerce website"
                  link="https://ez-bazaar.vercel.app"
                  github="https://github.com/mukeshpandey9/EzBazaar"
                  summary="A full stack e-commerce website using react and tailwind for frontend and NodeJs for the backend"
                  type="Featured Project"
                  img={img1}
                />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default FullPage;
