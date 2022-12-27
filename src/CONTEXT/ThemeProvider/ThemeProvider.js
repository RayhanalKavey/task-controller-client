import React, { createContext, useContext, useEffect, useState } from "react";

const THEME_CONTEXT = createContext();
const ThemeProvider = ({ children }) => {
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

  const value = { theme, setTheme };
  // Theme Switch handler
  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };
  // const value={};
  return (
    <THEME_CONTEXT.Provider value={value}>{children}</THEME_CONTEXT.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(THEME_CONTEXT);
  return context;
};
export default ThemeProvider;
