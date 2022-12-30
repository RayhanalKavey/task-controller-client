import React from "react";
import TaskLoading from "../../COMPONENTS/TaskLoading/TaskLoading";

import useTitle from "../../HOOKS/useTitle/useTitle";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";

import toast from "react-hot-toast";
import { useAuth } from "../../CONTEXT/AuthProvider/AuthProvider";

const Media = () => {
  useTitle("Media");
  const {
    state: { data, loading, error },
    setRefetching,
  } = useTask();

  //User from auth provider
  const { user } = useAuth();
  let content;

  if (loading) {
    content = <TaskLoading />;
  }
  if (error) {
    content = <p>Something went wrong</p>;
  }
  if (!loading && !error && data.length === 0) {
    content = (
      <p className="text-center mt-8 text-lg text-teal-800 dark:text-white">
        No task to do?? Add some task!!
      </p>
    );
  }
  if (!loading && !error && data.length) {
    content = data
      ?.filter((task) => task?.img && user?.email === task?.userEmail)
      ?.map((task, i) => (
        <figure
          key={i}
          className="relative max-w-[240px] transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
        >
          <a href="/">
            <img className="rounded-lg" src={task?.img} alt=" description" />
          </a>
          <figcaption className="absolute bottom-6 px-4 text-lg text-white">
            <p>{task?.taskDetails}</p>
          </figcaption>
        </figure>
      ));
  }

  return (
    <div className="min-h-screen py-5 px-2  bg-gray-50 dark:bg-teal-700">
      <div className="flex flex-wrap gap-2 justify-center items-center ">
        {" "}
        {content}
      </div>
    </div>
  );
};

export default Media;
