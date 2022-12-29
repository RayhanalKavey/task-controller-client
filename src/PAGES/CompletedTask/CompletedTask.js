import React from "react";
import CompletedTaskCard from "../../COMPONENTS/CompletedTaskCard/CompletedTaskCard";
import TaskLoading from "../../COMPONENTS/TaskLoading/TaskLoading";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";
import useTitle from "../../HOOKS/useTitle/useTitle";

const CompletedTask = () => {
  useTitle("Completed Task");
  const {
    state: { data, loading, error },
  } = useTask();
  // console.log(data);
  let content;
  if (loading) {
    content = <TaskLoading />;
  }
  if (error) {
    content = <p>Something went wrong</p>;
  }
  if (!loading && !error && data.length === 0) {
    content = (
      <p className="text-center mt-8 text-lg text-gray-900 dark:text-white">
        No task to do?? Add some task!!
      </p>
    );
  }
  if (!loading && !error && data.length) {
    content = data?.map((task, i) => (
      <CompletedTaskCard key={i} task={task}></CompletedTaskCard>
    ));
  }
  return (
    <div className="h-screen">
      <h5 className="mb-5 text-center  mt-8 text-xl font-medium text-gray-900 dark:text-white">
        Completed Tasks
      </h5>
      {content}
    </div>
  );
};

export default CompletedTask;
