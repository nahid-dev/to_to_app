import React, { useContext, useState } from "react";
import { RiFileEditLine } from "react-icons/ri";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TodoContext } from "../provider/TodoProvider";

const Home = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [checkedTodos, setCheckedTodos] = useState({});

  // Delete a todo function here
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    alert("deleted todo");
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (id, e) => {
    const isChecked = e.target.checked;
    setCheckedTodos((prevState) => ({
      ...prevState,
      [id]: isChecked,
    }));

    const todoIndex = todos.findIndex((todo) => todo.id === id);

    // make the checkbox toggle here
    todos[todoIndex] = {
      ...todos[todoIndex],
      completed: !todos[todoIndex].completed,
    };
    setTodos([...todos]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className=" h-full relative ">
      <div className="h-[343px] overflow-y-auto w-full flex flex-col items-end">
        {/* All task list here */}
        <div className=" h-full w-full overflow-visible">
          {todos?.map((todo) => (
            <div key={todo.id} className="border-b p-3">
              <div
                className={`border-l-4 ${
                  todo.priority === "high"
                    ? "border-red-500"
                    : todo.priority === "medium"
                    ? "border-yellow-500"
                    : "border-emerald-500"
                }  flex`}
              >
                {/* Checkbox for complete task */}
                <input
                  checked={todo.completed}
                  onChange={(e) => handleCheckboxChange(todo.id, e)}
                  type="checkbox"
                  className="mx-2 w-5"
                />

                <div className=" w-full flex justify-between items-center">
                  <div>
                    <h2
                      className={`text-xl font-medium ${
                        todo.completed ? "line-through" : ""
                      }`}
                    >
                      {todo.title}
                    </h2>
                    <p className={`${todo.completed ? "line-through" : ""}`}>
                      {todo.desc}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-5">
                      {/* Update Icon */}
                      <div>
                        <Link to={`/updateTodo/${todo.id}`}>
                          <RiFileEditLine
                            title="Edit task"
                            className="cursor-pointer"
                            size={24}
                          />
                        </Link>
                      </div>

                      {/* Delete task icon */}
                      <div>
                        <AiTwotoneDelete
                          onClick={() => deleteTodo(todo.id)}
                          size={24}
                          className="text-red-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add task button here */}
      <div className="absolute bottom-0 right-0 z-50 m-4  inline-block">
        <Link to="/addTask">
          <button
            className="bg-emerald-500 text-white p-4 rounded-full shadow-xl overflow-visible"
            title="Add task"
          >
            <FaPlus size={24} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
