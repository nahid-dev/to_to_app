import React from "react";
import { LuListTodo } from "react-icons/lu";

const Menu = ({ title }) => {
  return (
    <div className="border-b">
      <div className="text-2xl flex items-center m-3 ">
        <LuListTodo className="mr-2" />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Menu;
