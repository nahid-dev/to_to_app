import React, { useEffect, useState } from "react";
import { RiFileEditLine } from "react-icons/ri";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [todos, setTodos] = useState([]);
  let borderColor;
  console.log(borderColor);
  todos?.map((item) => {
    if (item.priority === "high") {
      borderColor = "border-red-500";
    } else if (item.priority === "medium") {
      borderColor = "border-yellow-500";
    } else {
      borderColor = "border-emerald-500";
    }
  });

  useEffect(() => {
    // Retrieve todos from localStorage when the component mounts
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);
  return (
    <div className="!relative h-[343px]">
      {/* All task list here */}
      <div>
        {todos?.map((todo) => (
          <div key={todo.id} className="border-b p-3">
            <div className={`border-l-4 ${borderColor}  flex`}>
              <input type="checkbox" className="mx-2 w-5" />
              <div className=" w-full flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-medium">Title-1</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <div className="flex items-center space-x-5">
                    {/* Update Icon */}
                    <div>
                      <RiFileEditLine
                        title="Edit task"
                        className="cursor-pointer"
                        size={24}
                      />
                    </div>
                    {/* Delete task icon */}
                    <div>
                      <AiTwotoneDelete
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
