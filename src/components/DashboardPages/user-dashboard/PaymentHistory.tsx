// @ts-nocheck
"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const PaymentHistory = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [customerPortalLink, setCustomerPortalLink] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
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
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  }
  if (isLoading)  return 

  return (
    <div>
      <div>
        <p>Payment History</p>
        <div className="p-2 border mt-3 rounded-main">
          <p className="font-medium">Payment Successful</p>
          <p>Subscribed at: {convertData(paymentData?.plan?.created)}</p>
          <p>Next Payment Cycle: {convertData(paymentData?.current_period_end)}</p>
        </div>
      </div>

      <div className="w-full">
        <Link
          className={`${!customerPortalLink && "cursor-not-allowed"} underline underline-offset-4 hover:text-blue-500 transition-all ease-in-out`}
          href={customerPortalLink || ""}
        >
          Manage Payment
        </Link>
      </div>
    </div>
  );
}

export default PaymentHistory;
