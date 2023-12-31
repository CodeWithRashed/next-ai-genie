"use client"
// Import necessary dependencies
import { useEffect } from "react";
import { savePackage } from "@/app/helpers/savePackageData";
import { useRouter, useSearchParams } from "next/navigation";

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
        PaymentSuccess
      </div>
    </div>
  );
};

export default PaymentSuccess;
