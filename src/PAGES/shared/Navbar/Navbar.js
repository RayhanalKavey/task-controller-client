import React, { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { HiMoon } from "react-icons/hi";
import { RxSun } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../../CONTEXT/ThemeProvider/ThemeProvider";
import { useAuth } from "../../../CONTEXT/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import AddTaskForm from "../../../COMPONENTS/AddTaskForm/AddTaskForm";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import logo from "../../../ASSETS/task-logo.png";

const Navbar = () => {
  // Create a hook of THEME_CONTEXT in the ThemeProvider to use theme
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);

  //handle toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Theme Switch handler
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  //User information from auth context
  const { logout, setUser, user } = useAuth();

  /// Handle log out
  const handleSignOut = () => {
    logout()
      .then((result) => {
        toast.success("Logged out successfully!");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const logInOut = (
    <>
      {user?.uid ? (
        <>
          {" "}
          <li>
            {" "}
            <Link
              onClick={handleSignOut}
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {" "}
              Logout
            </Link>
          </li>
          <Link to={"/profile"}>
            {user?.photoURL ? (
              <li className="mr-1 sm:mr-5  ">
                <img
                  className="block w-10 h-10 rounded-full py-2 pl-3  text-gray-700  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  src={user?.photoURL}
                  alt=""
                  title={user?.displayName}
                />
              </li>
            ) : (
              <li title={user?.displayName}>
                <FaUser size="1.8rem" />
              </li>
            )}
          </Link>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to={"/login"}
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/register"}
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="relative  bg-teal-100 flex flex-col border-gray-200 px-2 sm:px-4 py-2.5 shadow dark:bg-teal-800">
      <div className="container flex flex-wrap gap-4 items-center justify-between  mx-auto">
        <ul className="flex items-center justify-center gap-3 ">
          <li>
            {" "}
            <Link to={"/"} className="flex flex-col justify-end items-start">
              <img
                src={logo}
                className="border border-teal-800 bg-teal-100 p-1 rounded h-7"
                alt="logo"
              />
              <span className="self-start text-2xl font-semibold whitespace-nowrap text-teal-800 dark:text-white">
                Controller
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="   border dark:border-teal-50 border-teal-700 block text-teal-700 rounded-full  hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-gray-600 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              onClick={() => handleToggle()}
            >
              {toggle ? (
                <AiOutlineMinus
                  size={"1.4rem"}
                  style={{
                    borderRadius: "50%",
                    padding: ".1rem",
                  }}
                />
              ) : (
                <IoMdAdd
                  size={"1.4rem"}
                  style={{
                    borderRadius: "50%",
                    padding: ".1rem",
                  }}
                />
              )}{" "}
            </Link>
          </li>
          <li>
            <Link
              className="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              onClick={handleThemeSwitch}
            >
              {theme === "dark" ? (
                <RxSun
                  size={"1.5rem"}
                  color="teal"
                  style={{
                    border: "1px solid white",
                    borderRadius: "50%",
                    padding: ".3rem",
                    color: "white",
                  }}
                />
              ) : (
                <HiMoon
                  size={"1.5rem"}
                  color="teal"
                  style={{
                    border: "1px solid teal",
                    borderRadius: "50%",
                    padding: ".1rem",
                  }}
                />
              )}
            </Link>
          </li>
        </ul>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center  p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span
            className="sr-onl absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden whitespace-nowrap border-0 "
            style={{ clip: "rect(0, 0 ,0 ,0)" }}
          >
            Open main menu
          </span>
          <IoIosMenu size="1.8rem" />
          {/* <IoIosClose size="1.8rem" /> */}
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className=" shadow-lg flex items-center text-center flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-teal-700 dark:border-gray-700">
            <li>
              <NavLink
                to={"/"}
                className="block py-2  pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/my-task"}
                className="block py-2  pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                My Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/add-task"}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Add Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/completed-task"}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Completed Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/media"}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                All Media
              </NavLink>
            </li>

            {logInOut}
          </ul>
        </div>
      </div>

      {toggle && (
        <div className="  self-stretch flex items-center">
          <AddTaskForm handleToggle={handleToggle}></AddTaskForm>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
