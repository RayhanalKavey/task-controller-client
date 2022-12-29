import React from "react";

const TaskLoading = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div
      role="status"
      className="p-4 space-y-4 w-[96%] mx-auto rounded-md border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
      {arr?.map((a, i) => (
        <div key={i} className="flex justify-between items-end pt-6 pb-1">
          <div>
            <div className="h-2.5  bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="flex flex-row gap-1">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-10"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-10"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-10"></div>
          </div>
        </div>
      ))}

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default TaskLoading;
