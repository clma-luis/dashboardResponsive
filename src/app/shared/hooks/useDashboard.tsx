import React from "react";
import { DashboardContext } from "../providers/DashboardProvider";

const useDashboard = () => {
  const { openNavbar, setOpenNavbar, categories, setCategories } = React.useContext(DashboardContext);

  return { openNavbar, setOpenNavbar, categories, setCategories };
};

export default useDashboard;
