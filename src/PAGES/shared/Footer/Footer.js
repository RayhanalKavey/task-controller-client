import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-teal-100  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <Link to={"/"} className="hover:underline">
          Task Controller
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="/my-task" className="mr-4 hover:underline md:mr-6 ">
            My Task
          </Link>
        </li>
        <li>
          <Link href="/add-task" className="mr-4 hover:underline md:mr-6">
            Add Task
          </Link>
        </li>
        <li>
          <Link href="/completed-task" className="mr-4 hover:underline md:mr-6">
            Completed Task
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
