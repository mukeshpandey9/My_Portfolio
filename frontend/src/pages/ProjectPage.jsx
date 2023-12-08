import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";
import { GithubIcon } from "../components/Icons";
import img1 from "../assets/images/projects/nft-collection-website-cover-image.jpg";
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-4xl border border-solid border-dark bg-light shadow-2xl p-12 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-br-3xl rounded-[2rem]  bg-dark" />
      <Link
        to={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <img src={img} alt="project" className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary text-xl font-medium">{type}</span>
        <Link to={link} target="_blank">
          <h2 className="my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-2">
            {title}
          </h2>
        </Link>
        <p className="py-2 font-medium text-dark">{summary}</p>
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

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark" />
      <Link
        to={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <img src={img} alt="project" className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary text-xl font-medium">{type}</span>
        <Link to={link} target="_blank">
          <h2 className="my-2 w-full text-left text-3xl font-bold hover:underline underline-offset-2">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex justify-between w-full items-center">
          <Link
            to={link}
            target="_blank"
            className="text-right text-lg font-semibold"
          >
            Visit
          </Link>
          <Link to={github} className="w-10" target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectPage = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <LayoutComponent className="pt-16">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
        <div className="grid grid-cols-12 gap-24 my-10">
          <div className="col-span-12">
            <FeaturedProject
              title="EzBazaar - E-commerce website"
              link="https://ez-bazaar.vercel.app"
              github="https://github.com/mukeshpandey9/EzBazaar"
              summary="A full stack e-commerce website using react and tailwind for frontend and NodeJs for the backend"
              type="Featured Project"
              img={img1}
            />
          </div>
          <div className="col-span-6">
            <Project
              title="EzBazaar - E-commerce website"
              link="https://ez-bazaar.vercel.app"
              github="https://github.com/mukeshpandey9/EzBazaar"
              type="Project"
              img={img1}
            />
          </div>
          <div className="col-span-6">Project-2</div>
          <div className="col-span-12">Featured Project</div>
          <div className="col-span-6">Project-3</div>
          <div className="col-span-6">Project-4</div>
        </div>
      </LayoutComponent>
    </main>
  );
};

export default ProjectPage;
