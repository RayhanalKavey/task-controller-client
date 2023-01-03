import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../Button/Button";
import DeleteButton from "../Button/DeleteButton";
import EditTask from "../../PAGES/AddTask/EditTask";

const MyTaskCard = ({ task, handleCompleteTask, handleDeleteTask }) => {
  const { taskTitle, taskDetails, startingDate } = task;
  const [toggleEdit, setToggleEdit] = useState(false);
  //handle toggle edit
  const handleToggle = () => {
    setToggleEdit(!toggleEdit);
  };

  //---------------///------------------//
  return (
    <div className="w-[96%]  mx-auto bg-white border border-gray-200 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4">
      <div className="flex justify-end px-4 pt-4 gap-3 dark:text-white"></div>
      <div className="flex flex-col px-5  pb-5 mt-3">
        <p className="text-teal-800 dark:text-white text-end">
          <span className="font-semibold">Issue Date:- </span>
          {startingDate}
        </p>
        <h3 className="text-teal-800  dark:text-white inline-block font-bold  pb-1">
          <span className="uppercase">Task Title:- </span> {taskTitle}
        </h3>

        <div className="relative flex  items-center mb-2">
          <div className="flex-grow border-t border-gray-200  "></div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {taskDetails}
        </p>
        <div className="flex justify-center flex-wrap self-start mt-4 space-x-3 md:mt-6 mr-5 gap-1 items-center">
          <Button clickHandler={() => handleCompleteTask(task)}>
            Completed
          </Button>
          {/* Edit task */}

          <Button clickHandler={handleToggle}>
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
        <div className="relative">
          {toggleEdit && (
            <EditTask task={task} handleToggle={handleToggle}></EditTask>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTaskCard;
