import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../COMPONENTS/Button/Button";
import useTitle from "../../HOOKS/useTitle/useTitle";
import { useForm } from "react-hook-form";
import { useAuth } from "../../CONTEXT/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";
import DeleteButton from "../../COMPONENTS/Button/DeleteButton";

const EditTask = ({ task, handleToggle }) => {
  useTitle("Edit Task");
  const [photoo, usePhotoo] = useState("");

  const { setRefetching } = useTask();
  const { user } = useAuth();
  //------------- redirect user
  const navigate = useNavigate();

  const taskImportance = ["To Do", "Important", "Must Do"];

  ///Hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //image bb image hosting key
  const imageHostKey = process.env.REACT_APP_imagebb_key;

  ///--------------------------------------
  const handleTask = (data) => {
    const { taskTitle, description, photoURL, importance } = data;
    // img: photoURL,
    const taskValue = {
      taskTitle: taskTitle,
      taskDetails: description,
      importance,
    };

    postTaskForm(taskValue);
  };

  function postTaskForm(taskValue) {
    // /// --2 save product information to the database
    fetch(`${process.env.REACT_APP_api_url}/tasks-edit/${task?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskValue),
    })
      .then((res) => res.json())
      .then((result) => {
        setRefetching(true);
        toast.success(`Task edited successfully.`);
        reset();
        // //Navigate user to the desired path
        navigate("/my-task");
      });
  }

  return (
    <div className="absolute  w-full rounded-md shadow-2xl  border border-3 border-teal-900 bg-gray-100 dark:bg-teal-700">
      <h5 className="mb-5 text-center  pt-8 text-xl font-medium text-teal-800 dark:text-white">
        Edit Task
      </h5>
      <form
        className="flex flex-col w-[90%] p-5 gap-8 mb-5 mx-auto bg-white border border-gray-200 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4"
        // className="flex gap-8 flex-col w-[98%] mx-auto"
        onSubmit={handleSubmit(handleTask)}
      >
        {/*/// Title */}
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-teal-800 dark:text-white"
          >
            Title
          </label>
          <textarea
            id="message"
            rows="4"
            type="text"
            {...register("taskTitle", {
              required: "Task description is required !",
            })}
            className="block h-10 p-2.5 w-full text-sm text-teal-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            placeholder="Add title..."
            defaultValue={task?.taskTitle}
          ></textarea>
          {/* erroR message */}
          {errors?.taskTitle && (
            <p className="text-rose-500 mt-1"> {errors.taskTitle?.message}</p>
          )}
        </div>
        {/* /// Select task importance */}
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-teal-800 dark:text-white"
          >
            Task Importance
          </label>

          <select
            {...register("importance")}
            className="block p-2.5 w-full text-sm text-teal-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          >
            <option disabled>Please Select an importance for your task.</option>
            {taskImportance?.map((importance, i) => (
              <option value={importance} key={i}>
                {importance}
              </option>
            ))}
          </select>
        </div>
        {/*/// task */}
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-teal-800 dark:text-white"
          >
            Task
          </label>
          <textarea
            id="message"
            rows="4"
            type="text"
            {...register("description", {
              required: "Task description is required !",
            })}
            className="block p-2.5 w-full text-sm text-teal-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            placeholder="Add task description..."
            defaultValue={task?.taskDetails}
          ></textarea>
          {/* erroR message */}
          {errors?.description && (
            <p className="text-rose-500 mt-1"> {errors.description?.message}</p>
          )}
        </div>
        {/*/// Photo URL */}
        {/* <div>
          <label className="block mb-2 text-sm font-medium text-teal-800 dark:text-white">
            Image
          </label>
          <input
            type="file"
            {...register("photoURL", { required: "Image is required !" })}
            className=" block w-full text-sm text-gray-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-teal-600 dark:placeholder-gray-400"
            placeholder="your image"
            accept="image/*"
          />

          {errors.photoURL && (
            <p className="text-rose-500 mt-1"> {errors.photoURL?.message}</p>
          )}
        </div> */}
        <div className="flex flex-warp justify-start ">
          <Button Type="submit" CclassName="">
            Edit
            <span className="sr-only">Send message</span>
          </Button>
          <DeleteButton CclassName="" clickHandler={handleToggle}>
            Cancel
            <span className="sr-only">Send message</span>
          </DeleteButton>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
