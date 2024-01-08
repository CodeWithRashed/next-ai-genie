"use client";
// Import necessary dependencies
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { savePackage } from "@/helpers/savePackageData";

const PaymentSuccess = () => {
  const router = useRouter();
  const searchData = useSearchParams();
  const sessionData = searchData.get("session_id");
  const packageName = searchData.get("packageName")?.toUpperCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (sessionData) {
          // Assuming savePackage returns a promise
          await savePackage(sessionData, packageName);

          // Redirect to the success page
          router.push("/checkout/success");
        } else {
          console.error("No session_id found in the query parameters");
          // Redirect to an error page or handle the situation accordingly
        }
      } catch (error) {
        console.error("Error saving package data:", error);
        // Handle the error, redirect to an error page, or display an error message
      }
    };

    fetchData();
  }, [router, sessionData, packageName]);

  return (
    <div>
      <div>
        <div className="h-screen flex justify-center items-center">
          <div className="bg-white p-6  md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Payment Done!
              </h3>
              <p className="text-gray-600 my-2">
                Thank you for completing your secure online payment.
              </p>
              <p> Have a great day! </p>
              <div className="py-10 text-center">
                <Link
                  href="/dashboard"
                  className="px-12 bg-color-primary hover:bg-color-primary-dark text-white font-semibold py-3 rounded-main"
                >
                  GO TO DASHBOARD
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
