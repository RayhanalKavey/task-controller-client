import React from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { HiMoon } from "react-icons/hi";
import { RxSun } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../../CONTEXT/ThemeProvider/ThemeProvider";
import { useAuth } from "../../../CONTEXT/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  // Create a hook of THEME_CONTEXT in the ThemeProvider to use theme
  const { theme, setTheme } = useTheme();
  // Theme Switch handler
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
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
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {" "}
              Logout
            </Link>
          </li>
          {user?.photoURL ? (
            <li className="mr-1 sm:mr-5">
              <img
                className="block w-10 h-10 rounded-full py-2 pl-3  text-gray-700  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
        </>
      ) : (
        <>
          <li>
            <NavLink
              to={"/login"}
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/register"}
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-white  border-gray-200 px-2 sm:px-4 py-2.5 shadow dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between  mx-auto">
        <Link to={"/"} className="flex items-center">
          {/* <img
            src=""
            className="h-6 mr-3 sm:h-9"
            alt="logo"
          /> */}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Task Controller
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <ul className="flex items-center flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                className="block py-2 text-2xl pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleThemeSwitch}
              >
                {theme === "dark" ? <RxSun /> : <HiMoon />}
              </Link>
            </li>

            <li>
              <NavLink
                to={"/my-task"}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                My Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/add-task"}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Add Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/completed-task"}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Completed Task
              </NavLink>
            </li>

            {logInOut}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
