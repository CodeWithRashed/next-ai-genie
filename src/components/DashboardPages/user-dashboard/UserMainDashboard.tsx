import { generateCustomerPortalLink } from "@/helpers/doPayment";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const ChartComp = dynamic(() => import("@/components/ChartsComp/ChartsComp"), {
  ssr: false,
});

const UserMainDashboard = async ({stripeCustomerId}:{stripeCustomerId: string}) => {

  const customerPortalLink = await generateCustomerPortalLink(stripeCustomerId)

  const packageName = "Free";
  const availablePrompt = 20;
  const promptUsed = 12;

  return (
    <div className="bg-gray-100 rounded-main overflow-hidden p-3">
      <div className="header grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        <div className="shadow-md p-5 rounded-main bg-white">
          <p>Current Package</p>
          <p className="text-5xl my-5 font-bold text-color-primary">
            {packageName}
          </p>
        </div>
        <div className="shadow-md p-5 rounded-main bg-white">
          <p>Available Prompt</p>
          <p className="text-5xl my-5 font-bold text-color-primary">
            {availablePrompt}
          </p>
        </div>
        <div className="shadow-md p-5 rounded-main bg-white">
          <p> Prompt Used</p>
          <p className="text-5xl my-5 font-bold text-color-primary">
            {promptUsed}
          </p>
        </div>
      </div>

      {/* Data */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="shadow-md p-5 rounded-main h-full w-full bg-white">
          <p>Prompt History</p>
          <div>
            <ChartComp />
          </div>
        </div>
        <div className="shadow-md p-5 rounded-main h-full w-full bg-white flex flex-col justify-between">
          <div>
            <p>Payment History</p>
            <div className="p-2 border mt-3 rounded-main">
              <p className="font-medium">Payment Successful</p>
              <p>Sunday, December 03, 2023 at 9:00 AM</p>
            </div>
          </div>

          <div className="w-full">
            <Link className={`${!customerPortalLink && "cursor-not-allowed"} underline underline-offset-4 hover:text-blue-500 transition-all ease-in-out`} href={customerPortalLink|| ""}>Manage Payment</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMainDashboard;
