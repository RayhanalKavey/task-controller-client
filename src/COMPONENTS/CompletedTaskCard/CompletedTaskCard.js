import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import Button from "../Button/Button";
import DeleteButton from "../Button/DeleteButton";
import DeleteModal from "../../COMPONENTS/DeleteModal/DeleteModal";

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
        {/* modal */}
        {/* <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="confirmation-modal"
        >
          Toggle modal
        </button> */}
        <div
          id="confirmation-modal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
          <div className="relative w-full h-full max-w-md md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="confirmation-modal"
              >
                <AiOutlineClose></AiOutlineClose>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                {/* <svg
              aria-hidden="true"
              className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg> */}
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  data-modal-toggle="confirmation-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-toggle="confirmation-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* enD */}
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
