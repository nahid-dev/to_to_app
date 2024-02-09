import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import UpdateTask from "../pages/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/updateTodo/:id",
        element: <UpdateTask></UpdateTask>,
      },
    ],
  },
]);

export default router;
