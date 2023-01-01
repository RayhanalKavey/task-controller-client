import React from "react";
import { FaTasks } from "react-icons/fa";
import { CgMoveTask } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { CgComment } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import Mark from "../../../COMPONENTS/Mark/Mark";

const Features = () => {
  return (
    <section className="bg-white dark:bg-teal-700">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-teal-900 dark:text-white">
            Features you can use to manage your task
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            From `My Task` user can `update`, `delete`, and `edit` tasks. If the
            task is done then user can press the `complete` button to make it
            complete.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-teal-800 dark:text-teal-100 lg:w-6 lg:h-6 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">My Task</h3>
            <p className="text-gray-500 dark:text-gray-400">
              From the <Mark>My Task</Mark>, you can <Mark>update</Mark>,{" "}
              <Mark>delete</Mark>, and <Mark>edit</Mark> task. If the task is
              done then you can press <Mark>complete</Mark> button to make it
              complete.
            </p>
          </div>
          <div>
            <div className="flex text-teal-800 dark:text-teal-100 justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              {/* --2 */}
              <CgMoveTask size={"1.5rem"} />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Add Task</h3>
            <p className="text-gray-500 dark:text-gray-400">
              From the <Mark>Add Task</Mark> page, you can add a task. After
              adding it will appear on the <Mark>My Task</Mark> page. You can
              attach an image if you want, which will appear on the{" "}
              <Mark>All Media</Mark> page.
            </p>
          </div>
          <div>
            <div className="flex text-teal-800 dark:text-teal-100 justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              {/* --2 */}
              <FaTasks />
            </div>

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Completed Task
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              The completed task will appear on the <Mark>Completed Task</Mark>{" "}
              page. Here you can <Mark>reassign</Mark> as well as{" "}
              <Mark>delete</Mark> your task.
            </p>
          </div>
          <div>
            <div className="flex text-teal-800 dark:text-teal-100 justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <CgProfile />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Update Profile
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              You can update your <Mark>name</Mark> and{" "}
              <Mark>profile image</Mark>.
            </p>
          </div>
          <div>
            <div className="flex  text-teal-800 dark:text-teal-100 justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <CgComment />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Experience Comment
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              You can <Mark>add</Mark>, <Mark>edit</Mark>, or{" "}
              <Mark>delete</Mark> comments in a completed task.
            </p>
          </div>
          <div>
            <div className="flex text-teal-800 dark:text-teal-100 justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <MdDarkMode />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Dark Mood
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              The exclusive <Mark>dark mood</Mark> is here !!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
