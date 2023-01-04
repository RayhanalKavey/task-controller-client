import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../CONTEXT/AuthProvider/AuthProvider";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";
import Button from "../Button/Button";
import toast from "react-hot-toast";
import DeleteButton from "../Button/DeleteButton";
import { format } from "date-fns";

const AddTaskForm = ({ handleToggle }) => {
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
  //current date
  const currentDate = format(new Date(), "PP");
  // console.log(currentDate);
  const handleTask = (data) => {
    const { taskTitle, description, importance } = data;
    // img: photoURL,
    const task = {
      taskTitle: taskTitle,
      taskDetails: description,
      photoText: "",
      isComplete: false,
      userEmail: user?.email,
      startingDate: currentDate,
      importance,
    };

    // postTaskForm(task);
    postTaskForm(task);
  };

  function postTaskForm(task) {
    // /// --2 save product information to the database
    fetch(`${process.env.REACT_APP_api_url}/tasks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((result) => {
        setRefetching(true);
        toast.success(`Task is added.`);
        reset();
        // //Navigate user to the desired path
        navigate("/my-task");
      });
  }
  return (
    <form
      className="absolute z-20 top-12  flex flex-col w-fit p-5 gap-8 mb-5 mx-auto bg-white border border-gray-200 rounded-md shadow-2xl dark:bg-gray-800 dark:border-gray-700 mt-4"
      onSubmit={handleSubmit(handleTask)}
    >
      {/*/// Title */}
      <div className="w-full">
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
          className="block h-12 p-2.5 w-full text-sm text-teal-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          placeholder="Add title..."
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
      <div className="w-full">
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
          className="block p-2.5 h-12 w-full text-sm text-teal-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          placeholder="Add task description..."
        ></textarea>
        {/* erroR message */}
        {errors?.description && (
          <p className="text-rose-500 mt-1"> {errors.description?.message}</p>
        )}
      </div>
      <div className="flex justify-start mt-2">
        <Button Type="submit" CclassName="">
          Add Task
          <span className="sr-only">Send message</span>
        </Button>
        <DeleteButton clickHandler={handleToggle}>Cancel</DeleteButton>
      </div>
    </form>
  );
};

export default AddTaskForm;
