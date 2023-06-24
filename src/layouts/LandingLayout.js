import React from "react";
import { Outlet } from "react-router-dom";
import "./css/LandingLayout.css";

const LandingLayout = () => {
  return (
    <div className="landing_layout">
      <Outlet />
    </div>
  );
};

export default LandingLayout;
