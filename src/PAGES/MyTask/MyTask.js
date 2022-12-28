import React from "react";
import useTitle from "../../HOOKS/useTitle/useTitle";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";
import MyTaskCard from "../../COMPONENTS/MyTaskCard/MyTaskCard";

const MyTask = () => {
  useTitle("My Task");
  //nested destructuring
  const {
    state: { data },
  } = useTask();
  console.log(data);
  return (
    <div className="h-screen">
      <h5 className="mb-5 text-center  mt-8 text-xl font-medium text-gray-900 dark:text-white">
        My Tasks
      </h5>

      {data?.map((task, i) => (
        <MyTaskCard key={i} task={task}></MyTaskCard>
      ))}
    </div>
  );
};

export default MyTask;
