import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from "react-router-dom";
import { GithubIcon } from "../components/Icons";
import img1 from "../assets/images/projects/nft-collection-website-cover-image.jpg";
import AnimatedText from "../components/AnimatedText";
import LayoutComponent from "../components/LayoutComponent";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="md:h-[70vh] lg:h-[60vh] p-6 md:p-12 h-full w-full flex flex-col md:flex-row gap-5 items-center justify-between rounded-3xl rounded-br-4xl border border-solid border-dark dark:bg-dark dark:text-light bg-light shadow-2xl dark:border-light  relative">
      <div className="absolute top-1 -right-3 z-[-1]  w-[101%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
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

const ProjectPage = () => {
  return (
    <LayoutComponent className="lg:px-32 pb-16 pt-0 flex flex-col gap-20 md:px-16 px-7 ">
      <AnimatedText
        text="Imagination Trumps Knowledge!"
        className="lg:!text-6xl !text-5xl md:mt-10"
      />

      <FeaturedProject
        title="EzBazaar - E-commerce website"
        link="https://ez-bazaar.vercel.app"
        github="https://github.com/mukeshpandey9/EzBazaar"
        summary="A full stack e-commerce website using react and tailwind for frontend and NodeJs for the backend"
        type="Featured Project"
        img={img1}
      />

      <FeaturedProject
        title="EzBazaar - E-commerce website"
        link="https://ez-bazaar.vercel.app"
        github="https://github.com/mukeshpandey9/EzBazaar"
        summary="A full stack e-commerce website using react and tailwind for frontend and NodeJs for the backend"
        type="Featured Project"
        img={img1}
      />

      <FeaturedProject
        title="EzBazaar - E-commerce website"
        link="https://ez-bazaar.vercel.app"
        github="https://github.com/mukeshpandey9/EzBazaar"
        summary="A full stack e-commerce website using react and tailwind for frontend and NodeJs for the backend"
        type="Featured Project"
        img={img1}
      />
    </LayoutComponent>
  );
};

export default ProjectPage;
