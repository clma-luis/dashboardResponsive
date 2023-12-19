"use client";
import { Category } from "components/app/services";
import React, { useState } from "react";

interface IDashboardContext {
  openNavbar: boolean;
  setOpenNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

export const DashboardContext = React.createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const valueContext = {
    openNavbar,
    setOpenNavbar,
    categories,
    setCategories,
  };

  return <DashboardContext.Provider value={valueContext}>{children}</DashboardContext.Provider>;
};
