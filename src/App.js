import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./ROUTES/Routes/Routes";
import { Toaster } from "react-hot-toast";

// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
