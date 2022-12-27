import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./ROUTES/Routes/Routes";

// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
