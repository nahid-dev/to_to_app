import React from "react";
import Menu from "../components/menu/Menu";
import { RiFileEditLine } from "react-icons/ri";
import { AiTwotoneDelete } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      {/* Menu bar */}
      <Menu title={"Task List"}></Menu>

      {/* All task list here */}
      <div>
        <div className="border-b p-3">
          <div className={`border-l-4 border-red-500  flex`}>
            <input type="checkbox" className="mx-2 w-5" />
            <div className=" w-full flex justify-between items-center">
              <div>
                <h2 className="text-xl font-medium">Title</h2>
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
      </div>
    </div>
  );
};

export default Home;
