import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../provider/TodoProvider";

const AddTask = () => {
  const { setTodos } = useContext(TodoContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Save the todo task in Local storage
    const existingTask = JSON.parse(localStorage.getItem("todos")) || [];
    const updateTaskList = [
      ...existingTask,
      {
        id: new Date().getTime(),
        title: data.title,
        desc: data.description,
        priority: data.priority,
        completed: false,
      },
    ];
    localStorage.setItem("todos", JSON.stringify(updateTaskList));
    reset();
    setTodos([...updateTaskList]);
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
              className="font-medium bg-emerald-500 px-3 py-1 rounded-sm text-white"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
