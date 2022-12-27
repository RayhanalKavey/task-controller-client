import { useEffect, useState } from "react";
import "./App.css";
import { RiSwitchFill } from "react-icons/ri";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

function App() {
  const [theme, setTheme] = useState("");
  // Check the user's system preference (1st render of the page)
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Check whether user select dark or light coming from  handleThemeSwitch
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  // Theme Switch handler
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="h-screen bg-white dark:bg-slate-900 flex justify-center items-center">
      <h1 className="text-3xl font-bold dark:text-fuchsia-100 ">Hello World</h1>
      <button
        className="bg-green-200 dark:bg-black p-4 rounded-3xl"
        onClick={handleThemeSwitch}
      >
        <RiSwitchFill color={`${theme === "dark" ? "white" : "black"}`} />
      </button>
    </div>
  );
}

export default App;
