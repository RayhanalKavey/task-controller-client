import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import Button from "../Button/Button";

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
        <h5 className="mb-1 text-xl font-medium text-teal-800 dark:text-white">
          <span className="font-bold">Title: </span> {taskTitle}
        </h5>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {taskDetails}
        </p>
        <div className="mt-4 ">
          <h2 className="font-bold mb-1"> Comments</h2>
          <ul className="flex flex-col gap-2">
            <li className="border border-1 p-2">Comment 1</li>
            <li className="border border-1 p-2">Comment 1</li>
            <li className="border border-1 p-2">Comment 1</li>
          </ul>
        </div>
        <div className="flex  flex-wrap items-center justify-center mt-4 space-x-3 md:mt-6 ">
          <AddCommentForm></AddCommentForm>
          <Button CClass="mt-2">Not Completed!!</Button>
        </div>
      </div>
    </div>
  );
};

export default CompletedTaskCard;
