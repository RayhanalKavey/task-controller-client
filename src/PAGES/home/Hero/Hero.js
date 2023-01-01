import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import heroImg from "../../../ASSETS/home-hero.png";
const Hero = () => {
  return (
    <section className="bg-white dark:bg-teal-700">
      <div className="grid max-w-screen-xl pl-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-teal-800 dark:text-white">
            Task management tool for your upcoming tasks !!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Design your task and get it done.
          </p>
          <Link
            to="/add-task"
            className=" inline-flex items-center justify-center pr-5 py-3 mr-3 text-base font-medium text-center text-teal-800 dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started{" "}
            <span className="ml-2">
              {" "}
              <AiOutlineDoubleRight />
            </span>
          </Link>
        </div>
        <div className="hidden  lg:mt-0 lg:col-span-5  lg:flex">
          <img className="rounded-lg h-[30rem]" src={heroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
