import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import Button from "../Button/Button";
import DeleteButton from "../Button/DeleteButton";

const CompletedTaskCard = ({
  task,
  handleNotCompleteTask,
  handleDeleteTask,
}) => {
  const { taskTitle, taskDetails } = task;
  //-------------///-------------------//
  return (
    <div className="w-[96%] mb-5 mx-auto bg-white border border-gray-200 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4">
      <div className="flex justify-end px-4 pt-3 gap-1 dark:text-white">
        <Button clickHandler={() => handleNotCompleteTask(task)}>
          Not Completed!!
        </Button>
        <DeleteButton clickHandler={() => handleDeleteTask(task)}>
          <RiDeleteBin6Line size={"1.7rem"} style={{ cursor: "pointer" }} />
        </DeleteButton>
      </div>
      <div className="flex flex-col px-5  pb-5 mt-2">
        <h5 className="mb-0 text-xl font-medium text-teal-800 dark:text-white">
          <span className="font-bold">Title: </span> {taskTitle}
        </h5>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {taskDetails}
        </p>
        {/* Display comments  */}
        {task?.taskComment && (
          <div className="mt-4 dark:text-white">
            <h2 className="font-bold mb-1"> Comments</h2>
            <ul className="flex flex-col gap-2">
              <li className="border border-1 p-2 rounded-md">
                {task?.taskComment}
              </li>
            </ul>
          </div>
        )}

        {/* Add comment from */}
        <div className="flex  flex-wrap items-center justify-center mt-4 space-x-3 md:mt-6 ">
          <AddCommentForm task={task}></AddCommentForm>
        </div>
      </div>
    </div>
  );
};

export default CompletedTaskCard;
