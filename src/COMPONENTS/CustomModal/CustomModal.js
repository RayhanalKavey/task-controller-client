import React, { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import Button from "../Button/Button";
import DeleteButton from "../Button/DeleteButton";

const CustomModal = ({ handleModal }) => {
  return (
    <div className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-gray-700/50">
      <div className="flex z-20 items-center justify-center h-full">
        {" "}
        <div className=" max-w-md text-teal-800 dark:text-gray-500 bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-6 text-center ">
            <div className="flex flex-col items-center mb-5">
              {" "}
              <BsExclamationCircle size={"5rem"} />
            </div>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete ?
            </h3>
            <Button
              clickHandler={() => handleModal(true)}
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Yes, I'm sure
            </Button>
            <DeleteButton
              clickHandler={() => handleModal(false)}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </DeleteButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
