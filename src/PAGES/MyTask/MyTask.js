import React, { useState } from "react";
import useTitle from "../../HOOKS/useTitle/useTitle";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";
import MyTaskCard from "../../COMPONENTS/MyTaskCard/MyTaskCard";
import TaskLoading from "../../COMPONENTS/TaskLoading/TaskLoading";
import toast from "react-hot-toast";
import { useAuth } from "../../CONTEXT/AuthProvider/AuthProvider";
import CustomModal from "../../COMPONENTS/CustomModal/CustomModal";

const MyTask = () => {
  useTitle("My Task");
  // Get task data from task context
  const {
    state: { data, loading, error },
    setRefetching,
  } = useTask();

  //User from auth provider
  const { user } = useAuth();

  ///Custom modal starT
  const [closeModal, setCloseModal] = useState(false);
  const [deletedTask, setDeletedTask] = useState({});
  // Handle task in the modal after conformation
  const handleModal = (result) => {
    setCloseModal(false);
    if (result) {
      fetch(`${process.env.REACT_APP_api_url}/tasks/${deletedTask?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`Task deleted successfully!!`);
            setRefetching(true);
          }
        });
    }
  };
  ///Custom modal enD

  // Delete task handler
  const handleDeleteTask = (task) => {
    setCloseModal(true); // open the modal
    setDeletedTask(task); //Bring the data
  };

  const handleCompleteTask = (task) => {
    fetch(`${process.env.REACT_APP_api_url}/tasks/${task?._id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Done with task ${task?.taskTitle}!`);
          setRefetching(true);
        }
      });
  };

  // Setup conditions for rendering the task accordingly
  let content;

  if (loading) {
    content = <TaskLoading />;
  }
  if (error) {
    content = (
      <div className="min-h-screen ">
        <div className="text-3xl text-center mt-8 text-red-500  flex flex-col gap-2 justify-start mx-auto p-3 rounded-lg shadow-lg border  border-red-500 w-fit">
          <h3 className="font-bold ">
            {" "}
            Something went wrong with the server!!
          </h3>
          <p>Check your internet connection !!</p>
          <p>It might be something else !!</p>
        </div>
      </div>
    );
  }
  if (!loading && !error && data.length === 0) {
    content = (
      <div className="min-h-screen">
        <div className="text-3xl text-center mt-8 text-teal-800 dark:text-gray-300  flex flex-col gap-2 justify-start mx-auto p-3 rounded-lg shadow-lg border  border-red-500 w-fit">
          No task to do?? Add some task!!
        </div>
      </div>
    );
  }
  if (!loading && !error && data.length) {
    content = data
      ?.filter(
        (task) => task.isComplete !== true && user?.email === task.userEmail
      )
      ?.map((task, i) => (
        <MyTaskCard
          key={task?._id}
          task={task}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        ></MyTaskCard>
      ));
  }

  return (
    <div className=" min-h-screen bg-gray-50 dark:bg-teal-700 pb-10">
      <h5 className="pb-5 text-center  pt-8 text-xl font-medium text-teal-800 dark:text-white">
        My Tasks
      </h5>
      {closeModal && <CustomModal handleModal={handleModal}></CustomModal>}{" "}
      {content}
    </div>
  );
};

export default MyTask;
