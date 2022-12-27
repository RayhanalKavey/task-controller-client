import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./ROUTES/Routes/Routes";
import ThemeProvider from "./CONTEXT/ThemeProvider/ThemeProvider";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

function App() {
  return (
    <div className="">
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
