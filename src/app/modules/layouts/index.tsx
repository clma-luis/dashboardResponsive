
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="flex justify-between h-100vh relative">
      <div className=" hidden md:block w-60 h-screen transition-transform -translate-x-full  bg-[#1c2434]" />
      <Sidebar/>
      <div className="flex flex-col flex-1">
        <Navbar  />
        <div className="w-full flex-1">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
