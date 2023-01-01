import React from "react";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTask } from "../../CONTEXT/TaskProvider/TaskProvider";

const EditComment = ({ task, taskComment }) => {
  const { setRefetching } = useTask();

  ///Hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleComment = (data) => {
    const { comment } = data;

    fetch(`${process.env.REACT_APP_api_url}/tasks/comments/${task?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ comment }),
    })
      .then((res) => res.json())
      .then((result) => {
        setRefetching(true);
        toast.success("Experience edited successfully");
      });
  };

  return (
    <>
      <form className="sm:flex-1" onSubmit={handleSubmit(handleComment)}>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-start px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
          <div className="flex-1">
            {" "}
            <textarea
              id="chat"
              rows="1"
              type="text"
              {...register("comment", {
                required: "Comment is required !",
              })}
              className="block h-20 p-2.5 w-full text-sm text-teal-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Add comment ...."
              defaultValue={taskComment}
            ></textarea>
            {/* erroR message */}
            {errors?.comment && (
              <p className="text-rose-500 mt-2"> {errors.comment?.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Button Type="submit" CClass=" mx-3">
              Submit
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditComment;
