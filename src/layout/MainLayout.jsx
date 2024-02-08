import React from "react";
import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="h-[400px] bg-white w-[600px] shadow-lg rounded-sm">
        {/* Main page load here */}
        <Home></Home>
      </div>
    </div>
  );
};

export default MainLayout;
