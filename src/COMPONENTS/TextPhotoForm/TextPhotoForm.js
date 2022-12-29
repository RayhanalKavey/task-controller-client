import React from "react";
import Button from "../Button/Button";

const TextPhotoForm = () => {
  return (
    <form>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <button
          type="button"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-teal-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Upload image</span>
        </button>

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

export default TextPhotoForm;
