"use client"
import Link from 'next/link'
import React from 'react'

const PaymentHistory =  () => {
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/get/payment?data=link")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  }, []);

  console.log(data)

  if (isLoading)
    return (
     <div>Loading</div>
    );
  if (!data) return <p>No profile data</p>;

  return (
    <div>
       <div>
            <p>Payment History</p>
            <div className="p-2 border mt-3 rounded-main">
              <p className="font-medium">Payment Successful</p>
              <p>Sunday, December 03, 2023 at 9:00 AM</p>
            </div>
          </div>

          <div className="w-full">
            {/* <Link
              className={`${
                !customerPortalLink && "cursor-not-allowed"
              } underline underline-offset-4 hover:text-blue-500 transition-all ease-in-out`}
              href={customerPortalLink || ""}
            >
              Manage Payment
            </Link> */}
          </div>
    </div>
  )
}

export default PaymentHistory
