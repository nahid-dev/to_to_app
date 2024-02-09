import React, { useContext } from "react";
import { RiFileEditLine } from "react-icons/ri";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TodoContext } from "../provider/TodoProvider";

const Home = () => {
  const { todos, setTodos } = useContext(TodoContext);
  // Delete a todo function here
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    alert("deleted todo");
  };

  return (
    <div className="!relative h-[343px] overflow-y-auto">
      {/* All task list here */}
      <div className="">
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
              <input type="checkbox" className="mx-2 w-5" />
              <div className=" w-full flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-medium">{todo.title}</h2>
                  <p>{todo.desc}</p>
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

      {/* Add task button here */}
      <div className="absolute bottom-0 right-0 z-50 m-4  inline-block">
        <Link to="/addTask">
          <button
            className="bg-emerald-500 text-white p-4 rounded-full shadow-xl"
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
