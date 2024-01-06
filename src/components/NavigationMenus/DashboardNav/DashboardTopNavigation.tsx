import { options } from "@/app/api/auth/[...nextauth]/options";
import { ProfileDropdownMenu } from "@/components/ui/DropdownMenu";
import { getServerSession } from "next-auth";
import React from "react";

const DashboardTopNavigation = async () => {
  const session = await getServerSession(options)
  return (
    <div className="shadow-lg flex justify-between px-5 py-2 rounded-main">
      <div className="welcome-text">
        <p className="text-color-primary font-bold">Welcome</p>
        <p className="text-color-subtitle">{session?.user.name}</p>
      </div>
      <div className="profile-menu">
        <ProfileDropdownMenu/>
      </div>
    </div>
  );
};

export default DashboardTopNavigation;
