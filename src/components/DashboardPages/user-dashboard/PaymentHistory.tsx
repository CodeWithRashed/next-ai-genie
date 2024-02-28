import Link from 'next/link'
import React from 'react'

const PaymentHistory = () => {
  const [paymentData, setPaymentData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/get/payment")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPaymentData(data.data);
        setLoading(false);
      });
  }, []);

  const convertData = (timestamp:any) => {
    let date = new Date(timestamp * 1000);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  }

  console.log(paymentData.current_period_end)

  if (isLoading)
    return (
      <div>Loading</div>
    );
  if (!paymentData) return <p>No profile data</p>;

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
