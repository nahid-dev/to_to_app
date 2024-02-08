import React from "react";
import { LuListTodo } from "react-icons/lu";
import { FaFilter } from "react-icons/fa";

const Menu = ({ title }) => {
  return (
    <div className="border-b flex items-center justify-between pr-3">
      {/* App title */}
      <div className="text-2xl flex items-center m-3 ">
        <LuListTodo className="mr-2" />
        <span>{title}</span>
      </div>

      <div className="flex space-x-10 items-center">
        {/* Filter option */}
        <div className="" title="Priority filter">
          <div className="cursor-pointer">
            <FaFilter />
          </div>
        </div>

        {/* Total task and incomplete task list area here */}
        <div className="font-medium flex space-x-5">
          <div>
            <p>
              Total task:{" "}
              <span className="bg-gray-400 text-white px-1  text-sm rounded-sm">
                0
              </span>
            </p>
          </div>
          <div>
            <p>
              Incomplete task:{" "}
              <span className="bg-emerald-500 text-white px-1 text-sm rounded-sm">
                0
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
