import React from "react";

const Mark = ({ children }) => {
  return (
    <mark
      color="teal "
      className="px-1 rounded fort-bold text-teal-900 bg-white dark:text-teal-200 dark:bg-teal-700 "
    >
      {children}
    </mark>
  );
};

export default Mark;
