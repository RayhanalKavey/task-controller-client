import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import TextPhotoForm from "../TextPhotoForm/TextPhotoForm";
import Button from "../Button/Button";
import DeleteButton from "../Button/DeleteButton";

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
  task,
  handleCompleteTask,
  handleDeleteTask,
}) => {
  // console.log(taskTitle);
  return (
    <div className="w-[96%] mb-5 mx-auto bg-white border border-gray-200 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4">
      <div className="flex justify-end px-4 pt-4 gap-3 dark:text-white"></div>
      <div className="flex flex-col px-5  pb-5 mt-3">
        <h5 className="mb-1 text-xl font-medium text-teal-800 dark:text-white">
          <span>Title: </span> {taskTitle}
        </h5>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {taskDetails}
        </p>
        <div className="flex justify-center flex-wrap self-start mt-4 space-x-3 md:mt-6 mr-5 gap-1 items-center">
          <Button clickHandler={() => handleCompleteTask(task)}>
            Completed
          </Button>

          <Button>
            {" "}
            <TbEdit size={"1rem"} />
          </Button>
          <DeleteButton
            clickHandler={() => handleDeleteTask(task)}
            CClass="bg-pink-500"
            style={{ cursor: "pointer" }}
          >
            {" "}
            <RiDeleteBin6Line size={"1rem"} style={{ cursor: "pointer" }} />
          </DeleteButton>
        </div>
      </div>
    </div>
  );
};

export default MyTaskCard;
