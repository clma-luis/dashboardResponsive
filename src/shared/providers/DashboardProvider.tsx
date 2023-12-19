"use client";
import React, { useState } from "react";

interface IDashboardContext {
  openNavbar: boolean;
  setOpenNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardContext = React.createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  const valueContext = {
    openNavbar,
    setOpenNavbar,
  };

  return <DashboardContext.Provider value={valueContext}>{children}</DashboardContext.Provider>;
};
