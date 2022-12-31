import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../COMPONENTS/Button/Button";
import useTitle from "../../HOOKS/useTitle/useTitle";
import { useForm } from "react-hook-form";
import { useAuth } from "../../CONTEXT/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";
import DeleteButton from "../../COMPONENTS/Button/DeleteButton";

const AddTask = () => {
  useTitle("Add Task");
  // const [imgU, setImgU] = useState("");
  const [toggle, setToggle] = useState(false);

  //handle toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const { setRefetching } = useTask();
  const { user } = useAuth();
  //------------- redirect user
  const navigate = useNavigate();

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
    const { taskTitle, description, photoURL } = data;
    // img: photoURL,
    const task = {
      taskTitle: taskTitle,
      taskDetails: description,
      photoText: "A laptop resell website",
      isComplete: false,
      userEmail: user?.email,
    };

    toggle || postTaskForm(task);
    toggle && updatePhoto(photoURL, task);
  };

  function updatePhoto(photoURL, task) {
    const image = photoURL[0];
    const formData = new FormData();
    formData.append("image", image);

    /// send image to the dedicated image hosting server imgbb
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    image !== undefined &&
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            const photoURL = imgData.data.url;
            task.img = photoURL;

            postTaskForm(task);
            ///// add to media
          }
        });
  }

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
    <div className="h-screen bg-gray-50 dark:bg-teal-700">
      <h5 className="mb-5 text-center  pt-8 text-xl font-medium text-teal-800 dark:text-white">
        Add Task
      </h5>
      <div className="flex flex-col w-[96%] p-5 gap-8 mb-5 mx-auto bg-white border border-gray-200 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4">
        <form
          className="flex flex-col gap-8"
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
            ></textarea>
            {/* erroR message */}
            {errors?.taskTitle && (
              <p className="text-rose-500 mt-1"> {errors.taskTitle?.message}</p>
            )}
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
            ></textarea>
            {/* erroR message */}
            {errors?.description && (
              <p className="text-rose-500 mt-1">
                {" "}
                {errors.description?.message}
              </p>
            )}
          </div>
          {/*/// photoURL */}
          {toggle && (
            <div>
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

              {/* erroR message */}
              {errors.photoURL && (
                <p className="text-rose-500 mt-1">
                  {" "}
                  {errors.photoURL?.message}
                </p>
              )}
            </div>
          )}
          {/* /// */}
          <div className="flex justify-start ">
            <Button Type="submit" CclassName="">
              Add Task
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </form>
        <div>
          {toggle || (
            <Button clickHandler={handleToggle}>
              Add Image Field
              <span className="sr-only">Send message</span>
            </Button>
          )}

          {toggle && (
            <DeleteButton clickHandler={handleToggle}>
              Remove Image Field
              <span className="sr-only">Send message</span>
            </DeleteButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTask;
