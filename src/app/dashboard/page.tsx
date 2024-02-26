import Image from "next/image";
import aiGenieIcon from "../../assets/favicon.png";
import { GetPackageData } from "../../helpers/getPackageData";
import Link from "next/link";
import UserMainDashboard from "@/components/DashboardPages/user-dashboard/UserMainDashboard";
import { createCustomerIfNull } from "@/helpers/doPayment";
const DashboardPage = async () => {
 const stripeCustomerId = await createCustomerIfNull();
 console.log("stripeCustomerId", stripeCustomerId)
  const packageData = true;
  return (
    <div className="overflow-hidden">
      <UserMainDashboard stripeCustomerId={stripeCustomerId}/>
    </div>
  );
};

export default DashboardPage;
