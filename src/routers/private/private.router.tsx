import React from "react";
import { Outlet } from "react-router-dom";

interface RouteStatus {
  isAuthenticated: boolean;
  rol: string;
  isLoading: boolean;
}

export const RouterPrivateUser: React.FC<RouteStatus> = ({
  isAuthenticated,
  rol,
}) => {
  if (isAuthenticated === true && rol === "USER") {
    return ;
  }
  return <Outlet />;
};
