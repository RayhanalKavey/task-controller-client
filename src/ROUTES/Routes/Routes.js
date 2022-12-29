import { createBrowserRouter } from "react-router-dom";
import Main from "../../LAYOUT/Main/Main";
import AddTask from "../../PAGES/AddTask/AddTask";
import Login from "../../PAGES/Authentication/Login/Login";
import Register from "../../PAGES/Authentication/Register/Register";
import CompletedTask from "../../PAGES/CompletedTask/CompletedTask";
import MyTask from "../../PAGES/MyTask/MyTask";
import Profile from "../../PAGES/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            {" "}
            <MyTask></MyTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-task",
        element: (
          <PrivateRoute>
            {" "}
            <MyTask></MyTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-task",
        element: (
          <PrivateRoute>
            {" "}
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/completed-task",
        element: (
          <PrivateRoute>
            <CompletedTask></CompletedTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
