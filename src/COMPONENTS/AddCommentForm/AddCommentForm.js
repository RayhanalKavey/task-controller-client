import React from "react";
import Button from "../Button/Button";

const AddCommentForm = () => {
  return (
    <form className="sm:flex-1">
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <textarea
          id="chat"
          rows="1"
          className="block mx-4 p-2.5 w-full text-sm text-teal-800 bg-white rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
          placeholder="Add comment..."
        ></textarea>
        <Button Type="submit" CClass="mt-2">
          Add
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  );
};

export default AddCommentForm;
