// @ts-nocheck
"use client";
import dynamic from "next/dynamic";
import React from "react";
import DashBoardLoading from "./DashBoardLoading";
import DashboardDataCard from "./DashboardDataCard";
import ActiveFreeTrial from "./ActiveFreeTrial";
import Link from "next/link";

const ChartComp = dynamic(() => import("@/components/ChartsComp/ChartsComp"), {
  ssr: false,
});

const UserMainDashboard = () => {
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const [paymentData, setPaymentData] = React.useState(null);
  const [customerPortalLink, setCustomerPortalLink] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/get/packages")
      .then((res) => res.json())
      .then((data) => {
        setData(data.packageData);
        setLoading(false);
      });
    fetch("/api/get/payment")
      .then((res) => res.json())
      .then((data) => {
        setPaymentData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
    fetch("/api/get/payment?data=customer_portal_link")
      .then((res) => res.json())
      .then((data) => {
        setCustomerPortalLink(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const convertData = (timestamp) => {
    let date = new Date(timestamp * 1000);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(data);
    console.log(timestamp);
    console.log(date);
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const useParentage = Math.round((data?.promptUsed / data?.promptCount) * 100);
  if (isLoading) return <DashBoardLoading></DashBoardLoading>;
  if (!data)
    return (
      <div className="overflow-hidden">
        <ActiveFreeTrial />
      </div>
    );

  return (
    <div className="bg-gray-100 rounded-main overflow-hidden p-3">
      <div className="header grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        <DashboardDataCard title="Current Package" data={data?.packageName} />
        <DashboardDataCard
          title="Available Prompt"
          data={data?.promptCount - data?.promptUsed}
        />
        <DashboardDataCard title="Prompt Count" data={data?.promptCount} />
      </div>

      {/* Data */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="shadow-md p-5 rounded-main h-full w-full bg-white">
          <p>Prompt History</p>
          <div>
            <ChartComp series={[useParentage]} />
          </div>
        </div>
        <div className="shadow-md p-5 rounded-main h-full w-full bg-white flex flex-col justify-between">
          {/* PAYMENT HISTORY */}
          <div>
            <div>
              <p>Payment History</p>
              <div className="p-2 border mt-3 rounded-main">
                <p className="font-medium">Payment Successful</p>
                <p>Subscribed at: {convertData(paymentData?.plan?.created)}</p>
                <p>
                  Next Payment Cycle: {convertData(paymentData?.current_period_end)}
                </p>
              </div>
            </div>

            <div className="w-full">
              <Link
                className={`${
                  !customerPortalLink && "cursor-not-allowed"
                } underline underline-offset-4 hover:text-blue-500 transition-all ease-in-out`}
                href={customerPortalLink || ""}
              >
                Manage Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMainDashboard;
