import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CompletedTaskCard = ({
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
  return (
    <div className="w-[96%] mb-5 mx-auto bg-white border border-gray-200 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4">
      <div className="flex justify-end px-4 pt-4 gap-3 dark:text-white">
        {/* <TbEdit size={"1.8rem"} style={{ cursor: "pointer" }} /> */}
        <RiDeleteBin6Line size={"1.7rem"} style={{ cursor: "pointer" }} />
      </div>
      <div className="flex flex-col px-5  pb-5 mt-8">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          <span>Title: </span> {taskTitle}
        </h5>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {taskDetails}
        </p>
        <div className="flex flex-wrap self-end mt-4 space-x-3 md:mt-6 mr-5">
          <button className="text-black bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Not Complete Yet!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletedTaskCard;
