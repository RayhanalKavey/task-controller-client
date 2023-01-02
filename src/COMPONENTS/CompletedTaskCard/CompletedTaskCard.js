import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import Button from "../Button/Button";
import DeleteButton from "../Button/DeleteButton";
import EditComment from "../EditComment/EditComment";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";
import toast from "react-hot-toast";
import CustomModal from "../../COMPONENTS/CustomModal/CustomModal";

const CompletedTaskCard = ({
  task,
  handleNotCompleteTask,
  handleDeleteTask,
}) => {
  const { setRefetching } = useTask();
  const { taskTitle, taskDetails, taskComment } = task;
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  //handle toggle Add
  const handleToggleAdd = () => {
    setToggleAdd(!toggleAdd);
  };
  //handle toggle Edit
  const handleToggleEdit = () => {
    setToggleEdit(!toggleEdit);
  };
  ///Custom modal starT
  const [closeModal, setCloseModal] = useState(false);
  // Handle task in the modal after conformation
  const handleModal = (result) => {
    setCloseModal(false);
    if (result) {
      fetch(
        `${process.env.REACT_APP_api_url}/tasks/comments/remove-comment/${task?._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          setRefetching(true);
          toast.success("Experience deleted successfully");
        });
    }
  };
  ///Custom modal enD
  const handleCommentDelete = () => {
    setCloseModal(true);
  };
  //-------------///-------------------//
  return (
    <div className="w-[96%] mb-5 mx-auto bg-white border border-gray-200 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4">
      {closeModal && <CustomModal handleModal={handleModal}></CustomModal>}
      <div className="flex justify-end px-4 pt-6 gap-1 dark:text-white">
        <Button clickHandler={() => handleNotCompleteTask(task)}>
          Add to My Task
        </Button>
        <DeleteButton clickHandler={() => handleDeleteTask(task)}>
          <RiDeleteBin6Line style={{ cursor: "pointer" }} />
        </DeleteButton>
        <div
          id="confirmation-modal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        ></div>
        {/* enD */}
      </div>
      <div className="flex flex-col px-5  pb-5 mt-2">
        <h5 className="mb-1 text-xl font-medium text-teal-800 dark:text-white">
          <span className="font-bold">Title: </span> {taskTitle}
        </h5>
        <div className="relative flex  items-center mb-3">
          <div className="flex-grow border-t border-gray-200  "></div>
        </div>
        <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
          {taskDetails}
        </p>
        {/* Display comments  */}
        {task?.taskComment && (
          <div className="mt-8 text-teal-800 dark:text-white">
            {/* divider top */}
            {/* <div className="flex-grow border-t border-gray-200"></div> */}
            <h3 className="inline-block font-bold  pb-1">Task experience :</h3>
            <div className="relative flex  items-center mb-3">
              <div className="flex-grow border-t border-gray-200  "></div>
            </div>

            <ul className="flex flex-col">
              <li className="text-sm pt-0 text-gray-500 dark:text-gray-400">
                {task?.taskComment}
              </li>
            </ul>
            {/* divider bottom */}
            {/* <div className="relative flex pt-1 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
            </div> */}
          </div>
        )}
        {/* Add comment from / When we don't have comment */}
        <div className="flex  flex-wrap items-center justify-center mt-4 space-x-3 md:mt-6 ">
          {toggleAdd && !toggleEdit && (
            <AddCommentForm task={task}></AddCommentForm>
          )}
          {toggleEdit && !toggleAdd && (
            <EditComment
              task={task}
              taskComment={taskComment}
              handleToggleEdit={handleToggleEdit}
            ></EditComment>
          )}
        </div>
        {/* Edit comment / When we have comment */}
        <div>
          {taskComment ? (
            <>
              {toggleEdit || (
                <Button CClass="" clickHandler={handleToggleEdit}>
                  Edit Experience
                  <span className="sr-only">Send message</span>
                </Button>
              )}
              {toggleEdit && (
                <DeleteButton
                  CClass=" mx-3"
                  clickHandler={() => handleToggleEdit(task)}
                >
                  Cancel Edit
                  <span className="sr-only">Send message</span>
                </DeleteButton>
              )}
            </>
          ) : (
            <>
              {toggleAdd || (
                <Button CClass=" " clickHandler={handleToggleAdd}>
                  Add Experience
                  <span className="sr-only">Send message</span>
                </Button>
              )}
              {toggleAdd && (
                <DeleteButton CClass=" mx-3" clickHandler={handleToggleAdd}>
                  Cancel
                  <span className="sr-only">Send message</span>
                </DeleteButton>
              )}
            </>
          )}
          {taskComment && (
            <DeleteButton CClass=" mx-3" clickHandler={handleCommentDelete}>
              Delete Experience
              <span className="sr-only">Send message</span>
            </DeleteButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedTaskCard;
