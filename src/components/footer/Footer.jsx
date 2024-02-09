import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Add task button here */}
      <div className="">
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

export default Footer;
