"use client"
import Link from 'next/link';
import React from 'react'

const ManageClientPortal = () => {
    const [customerPortalLink, setCustomerPortalLink] = React.useState(null);
    const [isLoading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
        fetch("/api/get/payment?data=customer_portal_link")
        .then((res) => res.json())
        .then((data) => {
          setCustomerPortalLink(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching customer portal link:", error);
          setLoading(false);
        });
    }, []);
  
    if(isLoading){
        return  <div className="rounded-lg w-full bg-primary/10 animate-pulse p-3"></div>
    }

  return (
    <div>
       <Link
          className={`${
            !customerPortalLink && "cursor-not-allowed"
          } underline underline-offset-4 hover:text-blue-500 transition-all ease-in-out`}
          href={customerPortalLink || ""}
        >
          Manage Payment
        </Link>
    </div>
  )
}

export default ManageClientPortal
