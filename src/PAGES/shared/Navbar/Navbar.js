import React from "react";
import { RiSwitchFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../CONTEXT/ThemeProvider/ThemeProvider";

const Navbar = () => {
  // Create a hook of THEME_CONTEXT in the ThemeProvider to use theme
  const { theme, setTheme } = useTheme();
  // Theme Switch handler
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className=" bg-white dark:bg-slate-900 flex justify-center items-center">
      <h1 className="text-3xl font-bold dark:text-fuchsia-100 ">Hello World</h1>
      <button
        className="bg-green-200 dark:bg-black p-4 rounded-3xl"
        onClick={handleThemeSwitch}
      >
        <RiSwitchFill color={`${theme === "dark" ? "white" : "black"}`} />
      </button>
      <NavLink to={"/my-task"}>My Task</NavLink>
      <NavLink to={"/add-task"}>Add Task</NavLink>
      <NavLink to={"/completed-task"}>Completed Task</NavLink>
    </div>
  );
};

export default Navbar;
