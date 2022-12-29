import React from "react";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";
import { useAuth } from "../../CONTEXT/AuthProvider/AuthProvider";

const AddCommentForm = ({ task }) => {
  const {} = task;

  const { setRefetching } = useTask();
  const { user } = useAuth();
  //------------- redirect user
  const navigate = useNavigate();
  ///Hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleComment = (data) => {
    const { comment } = data;
    console.log(comment);
    // const addComment = {
    //   taskID: task?._id,
    //   commentDetails: comment,
    //   userEmail: user?.email,
    // };

    fetch(`${process.env.REACT_APP_api_url}/tasks/comments/${task?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ comment }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("result", result);
        setRefetching(true);
        toast.success(`Task is added.`);
        // //Navigate user to the desired path
        // navigate("/completed-task");
      });
  };

  return (
    <form className="sm:flex-1" onSubmit={handleSubmit(handleComment)}>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <textarea
          id="chat"
          rows="1"
          type="text"
          {...register("comment", {
            required: "Task description is required !",
          })}
          className="block h-10 p-2.5 w-full text-sm text-teal-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          placeholder="Add comment..."
        ></textarea>
        {/* erroR message */}
        {errors?.comment && (
          <p className="text-rose-500 mt-1"> {errors.comment?.message}</p>
        )}
        <Button Type="submit" CClass="mt-2 mx-2">
          Add
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  );
};

export default AddCommentForm;
