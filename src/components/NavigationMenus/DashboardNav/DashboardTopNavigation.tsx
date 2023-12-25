import { ProfileDropdownMenu } from "@/components/ui/DropdownMenu";
import React from "react";

const DashboardTopNavigation = () => {
  return (
    <div className="shadow-lg flex justify-between px-5 py-2">
      <div className="welcome-text">
        <p className="text-color-primary font-bold">Welcome</p>
        <p className="text-color-subtitle">Rashed</p>
      </div>
      <div className="profile-menu">
        <ProfileDropdownMenu/>
      </div>
    </div>
  );
};

export default DashboardTopNavigation;
