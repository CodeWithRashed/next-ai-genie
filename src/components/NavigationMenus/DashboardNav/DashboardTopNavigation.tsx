import { ProfileDropdownMenu } from "@/components/ui/DropdownMenu";
import React from "react";

const DashboardTopNavigation = () => {
  return (
    <div className="shadow-lg flex justify-between px-5 py-2">
      <div className="welcome-text">
        <p>Welcome, Back</p>
        <p>Rashed</p>
      </div>
      <div className="profile-menu">
        <ProfileDropdownMenu/>
      </div>
    </div>
  );
};

export default DashboardTopNavigation;
