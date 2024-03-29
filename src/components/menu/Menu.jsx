import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { TodoContext } from "../../provider/TodoProvider";
const Menu = () => {
  const location = useLocation();
  const { todos, setTodos } = useContext(TodoContext);

  const completeTodos = todos?.filter((item) => item.completed !== false);

  const handleFilter = () => {
    // Sort todos by priority
    const sortedTodos = todos.sort((a, b) => {
      const priorityValues = { high: 3, medium: 2, low: 1 };
      const priorityA = priorityValues[a.priority];
      const priorityB = priorityValues[b.priority];
      return priorityB - priorityA;
    });
    setTodos([...sortedTodos]);
  };

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
          <div className="cursor-pointer " onClick={handleFilter}>
            <FiFilter />
          </div>
        </div>

        {/* Total task and complete task list area here */}
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
              Complete task:{" "}
              <span className="bg-emerald-500 text-white px-1 text-sm rounded-sm">
                {completeTodos.length}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
