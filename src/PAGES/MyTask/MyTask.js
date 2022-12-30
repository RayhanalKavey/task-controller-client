import React from "react";
import useTitle from "../../HOOKS/useTitle/useTitle";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";
import MyTaskCard from "../../COMPONENTS/MyTaskCard/MyTaskCard";
import TaskLoading from "../../COMPONENTS/TaskLoading/TaskLoading";
import toast from "react-hot-toast";

const MyTask = () => {
  useTitle("My Task");

  // Get task data from task context
  const {
    state: { data, loading, error },
    setRefetching,
  } = useTask();

  // Handle make task as complete
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
  if (!loading && !error && data.length) {
    content = data
      ?.filter((task) => task.isComplete !== true)
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
    <div className=" min-h-screen bg-gray-50 dark:bg-teal-700">
      <h5 className="mb-5 text-center  py-8 text-xl font-medium text-teal-800 dark:text-white">
        My Tasks
      </h5>
      {content}
    </div>
  );
};

export default MyTask;
