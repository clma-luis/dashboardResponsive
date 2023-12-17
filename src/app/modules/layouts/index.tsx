"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [openNavbar, setOpenNavbar] = useState(false);


  return (
    <div  className="flex justify-between h-100vh relative" >
      <div className=" hidden md:block w-60 h-screen transition-transform -translate-x-full  bg-[#1c2434]" />
      <Sidebar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
      <div className="flex flex-col flex-1">
        <Navbar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
        <div className="w-full flex-1">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
