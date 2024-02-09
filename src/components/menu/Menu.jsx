import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
const Menu = () => {
  const location = useLocation();
  const [todos, setTodos] = useState([]);

  // Load all todos here
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const incompleteTodos = todos?.filter((item) => item.completed == false);

  return (
    <div className="border-b flex items-center justify-between pr-3">
      {/* App title */}
      <div className="text-2xl flex items-center m-3 ">
        <Link to="/">
          <IoMdArrowBack />
        </Link>
        {location.pathname == "/addTask" ? (
          <span>Add Task</span>
        ) : (
          <span>Task List</span>
        )}
      </div>

      <div className="flex space-x-10 items-center">
        {/* Filter option */}
        <div className="" title="Priority filter">
          <div className="cursor-pointer">
            <FiFilter />
          </div>
        </div>

        {/* Total task and incomplete task list area here */}
        <div className="font-medium flex space-x-5">
          <div>
            <p>
              Total task:{" "}
              <span className="bg-gray-400 text-white px-1  text-sm rounded-sm">
                {todos.length}
              </span>
            </p>
          </div>
          <div>
            <p>
              Incomplete task:{" "}
              <span className="bg-emerald-500 text-white px-1 text-sm rounded-sm">
                {incompleteTodos.length}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
