"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import getStipePromise from "@/lib/stripe";
const Checkout = () => {
    const {data: session} = useSession()
    console.log(session)
  const searchData = useSearchParams();
  const selectedPackage = searchData.get("package")?.toUpperCase();
  const packageName = selectedPackage;
  let promptCount: number;
  let packagePrice: number;
  if (selectedPackage === "FREE") {
    packagePrice = 1000.0;
    promptCount = 3;
  } else if (packageName === "PREMIUM") {
    packagePrice = 9.99;
    promptCount = 10;
  } else {
    packagePrice = 19.99;
    promptCount = 100;
  }

  const packageData = [{
    packageName,
    packagePrice,
    promptCount,
    packageOwner: session?.user.email
  }];

  const doCheckout = async () => {
    const stripe = await getStipePromise();
    console.log(packageData)
    const res = await axios.post("/api/checkout", packageData);
    console.log(res);
    if (res.data.session) {
      stripe?.redirectToCheckout({ sessionId: res.data.session.id });
    }
  };
  return (
    <div>
      {/* //Order Content// */}
      {selectedPackage === "FREE" ||
      selectedPackage === "GOLDEN" ||
      selectedPackage === "PREMIUM" ? (
        <div className="grid lg:grid-cols-2">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">
              Check your Package. And select a suitable payment method.
            </p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <div className="bg-color-primary text-white flex justify-center items-center p-4">
                  <p>Package</p>
                </div>
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{selectedPackage}</span>

                  <p className="mt-auto text-lg font-bold">${packagePrice}</p>
                </div>
              </div>
            </div>
          </div>

          {/* //Card Details// */}
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
          
            <button
              onClick={() =>{ doCheckout()}}
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="h-[90vh] w-full">
          <p>Please Select a Valid Package</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
