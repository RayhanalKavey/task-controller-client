import React from "react";
import useTitle from "../../HOOKS/useTitle/useTitle";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";
import MyTaskCard from "../../COMPONENTS/MyTaskCard/MyTaskCard";
import TaskLoading from "../../COMPONENTS/TaskLoading/TaskLoading";

const MyTask = () => {
  useTitle("My Task");
  //nested destructuring
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
    content = <p>Something went wrong</p>;
  }
  if (!loading && !error && data.length) {
    content = data?.map((task, i) => (
      <MyTaskCard key={i} task={task}></MyTaskCard>
    ));
  }
  return (
    <div className="h-screen">
      <h5 className="mb-5 text-center  mt-8 text-xl font-medium text-gray-900 dark:text-white">
        My Tasks
      </h5>
      {content}
    </div>
  );
};

export default MyTask;
