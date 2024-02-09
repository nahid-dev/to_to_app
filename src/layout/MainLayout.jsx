import React from "react";
import Menu from "../components/menu/Menu";
import { Outlet } from "react-router-dom";
// import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className=" h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="h-[400px] bg-white w-[600px] shadow-lg rounded-sm">
        {/* Main menu here */}
        <Menu></Menu>

        {/* Main page load here */}
        <Outlet></Outlet>
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
};

export default MainLayout;
