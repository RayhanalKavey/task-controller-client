import React from "react";
import { useRouteError } from "react-router-dom";
import useTitle from "../../../HOOKS/useTitle/useTitle";
import errorImg from "../../../ASSETS/error-img.png";
import Navbar from "../Navbar/Navbar";
const ErrorPage = () => {
  useTitle("Error Page");
  const { status, statusText } = useRouteError();
  return (
    <div className="container mx-auto bg-gray-50 dark:bg-teal-700">
      <Navbar></Navbar>
      <section className="flex justify-items-center h-screen p-5  text-primary">
        <div className="container flex flex-col gap-6 items-center justify-items-center px-5 text-center my-8">
          <img
            className="w-[30rem] rounded-full"
            src={errorImg}
            alt="error page"
          />
          <div className="max-w-lg  text-center">
            <h2 className=" text-2xl">
              <div className="flex justify-center items-center h-full">
                <p className="text-5xl font-thin text-teal-800 dark:text-gray-300">
                  Err
                </p>
                <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin mt-5 border-orange-400 mb-4"></div>{" "}
                <p className="text-5xl font-thin text-teal-800 dark:text-gray-300">
                  r:
                </p>
                <span className="text-orange-500 text-5xl  font-bold">
                  {status}
                </span>
              </div>
            </h2>
            <p className="  mb-8 text-5xl text-teal-800 dark:text-gray-300">
              Text Status:{" "}
              <span className="text-orange-500  font-bold">{statusText}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
