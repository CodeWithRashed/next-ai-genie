"use client"

//React Icons
import { MdInbox } from "react-icons/md";
import { PiDatabaseFill } from "react-icons/pi";
import { CiShop } from "react-icons/ci";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";

//Functions Components
export default function AdminDashboardNav() {
  const routes = usePathname()
  return (
    <div className="flex flex-col gap-1 transition-all ease-in-out">
            {/* Manage Users */}
      <Link href="/dashboard/manage-users" className={`${routes === "/dashboard/manage-users" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <PiDatabaseFill className="h-5 w-5" />
       Manage Users
      </Link>

      {/* Manage Products */}
      <Link href="/dashboard/manage-products" className={`${routes === "/dashboard/manage-products" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <PiDatabaseFill className="h-5 w-5" />
        Manage Products
      </Link>

      {/* Orders */}
      <Link href="/dashboard/orders" className={`${routes === "/dashboard/orders" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <CiShop className="h-5 w-5" />
       Orders
      </Link>
   

      <hr className="my-3" />

      {/* //Support Inbox// */}
      <Link href="/dashboard/support" className={`${routes === "/dashboard/support" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <MdInbox className="h-5 w-5" />
        Support Request
      </Link>

      {/* //Profile// */}
      <Link href="/dashboard/profile" className={`${routes === "/dashboard/profile" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <FaRegUserCircle className="h-5 w-5" />
        Profile
      </Link>

    </div>
  );
}

