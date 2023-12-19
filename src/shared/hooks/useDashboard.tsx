import React from "react";
import { DashboardContext } from "../providers/DashboardProvider";

const useDashboard = () => {
  const { openNavbar, setOpenNavbar } = React.useContext(DashboardContext);

  return { openNavbar, setOpenNavbar };
};

export default useDashboard;
