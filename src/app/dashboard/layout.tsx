import AdminDashboardNav from "@/components/NavigationMenus/DashboardNav/AdminDashboardNav";
import DashboardTopNavigation from "@/components/NavigationMenus/DashboardNav/DashboardTopNavigation";
import UserDashboardNavbar from "@/components/NavigationMenus/DashboardNav/UserDashboardNavbar";
import type { Metadata } from "next";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";

export const metadata: Metadata = {
  title: "Ai Genie | Dashboard",
  description: "Your Personal AI Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-12 h-screen overflow-hidden">
      <div className="sidebar col-span-3 px-5 py-5 bg-gray-50">
        <nav className="flex flex-col justify-between">
          <div>
            {/* //Dashboard// */}
            <Link href="/dashboard" className="px-3 flex gap-2 items-center">
              <MdDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <hr className="my-3" />
          </div>
          <div className="h-[90vh]">
            <UserDashboardNavbar />
            <AdminDashboardNav />
          </div>
        </nav>
      </div>
      <div className="col-span-9 ">
        <div >
          <DashboardTopNavigation/>
        </div>
        <div className="py-5 px-5">{children}</div>
      </div>
    </main>
  );
}
