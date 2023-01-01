import React from "react";
import CompletedTaskCard from "../../COMPONENTS/CompletedTaskCard/CompletedTaskCard";
import TaskLoading from "../../COMPONENTS/TaskLoading/TaskLoading";
import { useAuth } from "../../CONTEXT/AuthProvider/AuthProvider";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";
import useTitle from "../../HOOKS/useTitle/useTitle";
import toast from "react-hot-toast";

const CompletedTask = () => {
  useTitle("Completed Task");

  //User from auth provider
  const { user } = useAuth();

  // Task data from context
  const {
    state: { data, loading, error },
    setRefetching,
  } = useTask();

  /// Make task as not complete yet
  const handleNotCompleteTask = (task) => {
    fetch(`${process.env.REACT_APP_api_url}/tasks/not-complete/${task?._id}`, {
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

  // Delete task handler
  const handleDeleteTask = (task) => {
    fetch(`${process.env.REACT_APP_api_url}/tasks/${task?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Task deleted successfully!!`);
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
    content = <p>Something went wrong</p>;
  }
  if (!loading && !error && data.length === 0) {
    content = (
      <p className="text-center mt-8 text-lg text-teal-800 dark:text-white">
        No task to do?? Add some task!!
      </p>
    );
  }
  // If the task has logged in users email and  it's  isComplete value is true.
  if (!loading && !error && data.length) {
    content = data
      ?.filter(
        (task) => task?.isComplete === true && user?.email === task?.userEmail
      )
      ?.map((task, i) => (
        <CompletedTaskCard
          key={i}
          task={task}
          handleNotCompleteTask={handleNotCompleteTask}
          handleDeleteTask={handleDeleteTask}
        ></CompletedTaskCard>
      ));
  }

  //---------------///------------------//
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-teal-700">
      <h5 className="mb-5 text-center  pt-8 text-xl font-medium text-teal-800 dark:text-white">
        Completed Tasks
      </h5>
      {content}
    </div>
  );
};

export default CompletedTask;
