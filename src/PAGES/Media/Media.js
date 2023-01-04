import React from "react";
import TaskLoading from "../../COMPONENTS/TaskLoading/TaskLoading";

import useTitle from "../../HOOKS/useTitle/useTitle";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";

import toast from "react-hot-toast";
import { useAuth } from "../../CONTEXT/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

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
          className="relative shadow-xl rounded-md max-w-[240px] transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 dark:bg-teal-600"
        >
          {/* The difference between two condition is whether the task is complete or not. */}
          {task?.isComplete || (
            <Link to="/my-task">
              <img
                className=" rounded-t-md"
                src={task?.img}
                alt=" description"
              />
              <figcaption className=" bottom-6 p-2 text-lg text-teal-600">
                <p>
                  <span className=" uppercase text-sm">Task Title:</span>{" "}
                  <span className="text-sm">{task?.taskTitle}</span>
                </p>
                <p className="mb-2">
                  {" "}
                  <span className=" uppercase text-sm">
                    Task Issue Date:
                  </span>{" "}
                  <span className="text-sm">{task?.startingDate}</span>
                </p>

                <p>
                  <span className=" uppercase text-sm">Task Details:</span>{" "}
                  <span className="text-sm">{task?.taskDetails}</span>
                </p>
                <p>
                  <span className=" uppercase text-sm">Completion Status:</span>{" "}
                  <span className="text-sm">
                    {task?.isComplete ? "Task Completed!" : "Yet to do!"}
                  </span>
                </p>
              </figcaption>
            </Link>
          )}
          {task?.isComplete && (
            <Link to="/completed-task">
              <img
                className=" rounded-t-md"
                src={task?.img}
                alt=" description"
              />
              <figcaption className="dark:text-gray-200 bottom-6 p-2 text-lg text-teal-600">
                <p>
                  <span className=" uppercase text-sm">Task Title:</span>{" "}
                  <span className="text-sm">{task?.taskTitle}</span>
                </p>
                <p className="mb-2">
                  {" "}
                  <span className=" uppercase text-sm">
                    Task Issue Date:
                  </span>{" "}
                  <span className="text-sm">{task?.startingDate}</span>
                </p>

                <p>
                  <span className=" uppercase text-sm">Task Details:</span>{" "}
                  <span className="text-sm">{task?.taskDetails}</span>
                </p>
                <p>
                  <span className=" uppercase text-sm">Completion Status:</span>{" "}
                  <span className="text-sm">
                    {task?.isComplete ? "Task Completed!" : "Yet to do!"}
                  </span>
                </p>
              </figcaption>
            </Link>
          )}
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
