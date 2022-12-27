import { createBrowserRouter } from "react-router-dom";
import Main from "../../LAYOUT/Main/Main";
import AddTask from "../../PAGES/AddTask/AddTask";
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
    ],
  },
]);
export default router;
