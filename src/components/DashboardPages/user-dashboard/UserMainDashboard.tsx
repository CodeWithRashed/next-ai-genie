"use client";
import dynamic from "next/dynamic";
import React from "react";
import DashBoardLoading from "./DashBoardLoading";
import DashboardDataCard from "./DashboardDataCard";
import PaymentHistory from "./PaymentHistory";
import ActiveFreeTrial from "./ActiveFreeTrial";

const ChartComp = dynamic(() => import("@/components/ChartsComp/ChartsComp"), {
  ssr: false,
});

const UserMainDashboard = () => {
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/get/packages")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.packageData);
        setLoading(false);
      });
  }, []);

  const promptUsed = 5
  if (isLoading)
    return (
      <DashBoardLoading></DashBoardLoading>
    );
  if (!data) return <div className="overflow-hidden"><ActiveFreeTrial/></div>;

  return (
    <div className="bg-gray-100 rounded-main overflow-hidden p-3">
      <div className="header grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        <DashboardDataCard title="Current Package" data={data?.packageName} />
        <DashboardDataCard title="Available Prompt" data={data?.packageName} />
        <div className="shadow-md p-5 rounded-main bg-white">
          <p>Prompt Used</p>
          <p className="text-5xl my-5 font-bold text-color-primary">
            {promptUsed || "-"}
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
         <PaymentHistory/>
        </div>
      </div>
    </div>
  );
};

export default UserMainDashboard;
