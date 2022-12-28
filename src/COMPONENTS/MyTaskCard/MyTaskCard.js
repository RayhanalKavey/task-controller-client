import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyTaskCard = ({
  task: {
    taskTitle,
    taskDetails,
    img,
    task_id,
    isComplete,
    photoText,
    taskComment,
    userEmail,
  },
}) => {
  console.log(taskTitle);
  return (
    <div className="w-[96%] mb-5 mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span
            className="sr-only"
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: "0",
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
            }}
          >
            Open dropdown
          </span>
          <BsThreeDots size="1.8rem" />
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-1" aria-labelledby="dropdownButton">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Edit
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col px-5  pb-5 ">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          <span>Title: </span> {taskTitle}
        </h5>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {taskDetails}
        </p>
        <div className="flex self-end mt-4 space-x-3 md:mt-6 mr-5">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTaskCard;
