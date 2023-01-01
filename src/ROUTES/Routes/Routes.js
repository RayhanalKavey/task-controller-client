import { createBrowserRouter } from "react-router-dom";
import Main from "../../LAYOUT/Main/Main";
import AddTask from "../../PAGES/AddTask/AddTask";
import EditTask from "../../PAGES/AddTask/EditTask";
import Login from "../../PAGES/Authentication/Login/Login";
import Register from "../../PAGES/Authentication/Register/Register";
import CompletedTask from "../../PAGES/CompletedTask/CompletedTask";
import Home from "../../PAGES/home/Home/Home";
import Media from "../../PAGES/Media/Media";
import MyTask from "../../PAGES/MyTask/MyTask";
import Profile from "../../PAGES/Profile/Profile";
import ErrorPage from "../../PAGES/shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/edit-task",
        element: (
          <PrivateRoute>
            <EditTask></EditTask>{" "}
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
        path: "/media",
        element: <Media></Media>,
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
