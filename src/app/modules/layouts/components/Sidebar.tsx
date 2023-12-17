"use client";
import React, { useEffect, useState } from "react";

export interface SidebarProps {
  openNavbar: boolean;
  setOpenNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = (props: SidebarProps) => {
  const validWindow = typeof window !== "undefined";
  const { openNavbar, setOpenNavbar } = props;

  const [windowWidth, setWindowWidth] = useState(validWindow ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (validWindow) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (validWindow) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [openNavbar]);

  const handleBgSidebar = () => {
    if (!openNavbar) return false;

    return windowWidth <= 767 && !!windowWidth;
  };

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-30 w-60 h-screen transition-transform ${
          !openNavbar && "-translate-x-full"
        } md:translate-x-0 bg-[#1c2434]`}
        aria-label="Sidebar"
      >
        <div className="p-4 border-b-[1px] border-slate-200">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
        </div>
        <h1 className="text-slate-200"> Sidebar</h1>
      </aside>
      {handleBgSidebar() && (
        <div
          className={` absolute top-0 left-0 z-20 bg-slate-500 w-screen h-screen bg-opacity-60  ${
            !openNavbar && "-translate-x-full"
          }  md:translate-x-0`}
          onClick={() => setOpenNavbar(false)}
        />
      )}
    </>
  );
};

export default Sidebar;