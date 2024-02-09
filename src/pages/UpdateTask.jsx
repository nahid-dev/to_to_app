import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { TodoContext } from "../provider/TodoProvider";

const UpdateTask = () => {
  const { id } = useParams();
  const { todos, setTodos } = useContext(TodoContext);

  // Find the main todo
  const mainTodo = todos.find((item) => item.id == id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Main submit function here
  const onSubmit = (data) => {
    // Update the todo task in Local storage
    const existingTasks = JSON.parse(localStorage.getItem("todos")) || [];

    // Check if the todo already exists in local storage based on its ID
    const todoIndex = existingTasks.findIndex(
      (todo) => todo.id === mainTodo.id
    );

    if (todoIndex !== -1) {
      // If the todo exists, update it
      existingTasks[todoIndex] = {
        ...existingTasks[todoIndex],
        title: data.title,
        desc: data.description,
        priority: data.priority,
      };
      alert("todo updated");
    } else {
      // If the todo doesn't exist, add it
      existingTasks.push({
        id: new Date().getTime(), // Generate a new ID if it's a new todo
        title: data.title,
        desc: data.description,
        priority: data.priority,
        completed: false,
      });
      alert("add new one");
    }

    // Update local storage with the updated todo list
    localStorage.setItem("todos", JSON.stringify(existingTasks));
    setTodos([...existingTasks]);
  };

  return (
    <div className="p-3 pl-5 h-[343px]">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-5">
          {/* Title input */}
          <div className="flex flex-col ">
            <label htmlFor="" className="text-2xl ">
              Title
            </label>
            <input
              type="text"
              placeholder="Input title"
              defaultValue={mainTodo?.title}
              className=" border-b focus-visible:outline-none"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-600">Title is required</span>
            )}
          </div>

          {/* Task details here */}
          <div className="flex flex-col ">
            <label className="text-2xl " htmlFor="">
              Description
            </label>
            <input
              type="text"
              placeholder="Input description"
              className=" border-b focus-visible:outline-none"
              defaultValue={mainTodo?.desc}
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-600">Description is required</span>
            )}
          </div>

          {/* priority input here */}
          <div>
            <label className="text-2xl mr-5" htmlFor="">
              Priority :
            </label>
            <select
              id=""
              className="focus-visible:outline-none border"
              {...register("priority", { required: true })}
            >
              <option selected value="high">
                High
              </option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            {errors.priority && (
              <span className="text-red-600">Priority is required</span>
            )}
          </div>

          {/* submit button */}
          <div className=" text-right mr-5">
            <button
              className="font-medium bg-orange-500 px-3 py-1 rounded-sm text-white"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
