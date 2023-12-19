
import React from "react";
import { DashboardProvider } from "src/shared/providers/DashboardProvider";


const Providers = ({ children }: { children: React.ReactNode }) => {
  return <DashboardProvider>{children}</DashboardProvider>;
};

export default Providers;
