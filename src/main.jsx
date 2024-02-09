import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import TodoProvider from "./provider/TodoProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={router}></RouterProvider>
    </TodoProvider>
  </React.StrictMode>
);
