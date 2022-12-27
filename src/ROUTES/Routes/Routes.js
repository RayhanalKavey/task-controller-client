import { createBrowserRouter } from "react-router-dom";
import Main from "../../LAYOUT/Main/Main";
import AddTask from "../../PAGES/AddTask/AddTask";
import Login from "../../PAGES/Authentication/Login/Login";
import Register from "../../PAGES/Authentication/Register/Register";
import CompletedTask from "../../PAGES/CompletedTask/CompletedTask";
import MyTask from "../../PAGES/MyTask/MyTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <MyTask></MyTask>,
      },
      {
        path: "/my-task",
        element: <MyTask></MyTask>,
      },
      {
        path: "/add-task",
        element: <AddTask></AddTask>,
      },
      {
        path: "/completed-task",
        element: <CompletedTask></CompletedTask>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
