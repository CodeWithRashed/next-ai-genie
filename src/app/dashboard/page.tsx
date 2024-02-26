import Image from "next/image";
import aiGenieIcon from "../../assets/favicon.png";
import { GetPackageData } from "../../helpers/getPackageData";
import Link from "next/link";
import UserMainDashboard from "@/components/DashboardPages/user-dashboard/UserMainDashboard";
const DashboardPage = async () => {
  // const packageData: any = await GetPackageData();
  const packageData = true;
  return (
    <div className="overflow-hidden">
      
    <UserMainDashboard/>
    </div>
  );
};

export default DashboardPage;
