"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const Checkout = () => {
  const { data: session } = useSession();
  const searchData = useSearchParams();
  const selectedPackage = searchData.get("package")?.toUpperCase();
  const router = useRouter();
  let packagePrice, promptCount, stripePackageId;


  if (selectedPackage === "FREE") {
    packagePrice = 0.0;
    promptCount = 3;
    stripePackageId = "price_1Oo4KoFKwGa2QKQKoegNM2Js";
  } else if (selectedPackage === "PREMIUM") {
    packagePrice = 9.0;
    promptCount = 10;
    stripePackageId = "price_1Oo673FKwGa2QKQKAxm2S6pw";
  } else {
    packagePrice = 19.0;
    promptCount = 100;
    stripePackageId = "price_1Oo67ZFKwGa2QKQKoji4Gmpo";
  }

  const packageData = {
    packageName: selectedPackage,
    packagePrice,
    promptCount,
    packageFor: session?.user.email,
    stripePackageId,
  };

  const doCheckout = async () => {
    try {
      const res = await axios.post("/api/checkout", packageData);

      router.push(res.data);
    } catch (error) {
      ("");
    }
  };

  return (
    <div>
      {["FREE", "GOLDEN", "PREMIUM"].includes(selectedPackage || "") ? (
        <div className="flex flex-col py-20">
          {/* Order Summary */}
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

          {/* Card Details */}
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <button
              onClick={doCheckout}
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="h-[90vh] w-full flex justify-center items-center">
          <p>Please Select a Valid Package</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
