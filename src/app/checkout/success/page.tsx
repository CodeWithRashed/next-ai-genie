import { options } from "@/app/api/auth/[...nextauth]/options";
import { hasSubscription } from "@/helpers/doPayment";
import { savePackage } from "@/helpers/savePackageData";
import { getServerSession } from "next-auth";
import Link from "next/link";
const PaymentSuccess = async () => {

  const session = await getServerSession(options);
  if (!session || !session.user || !session.user.email) {
    console.error('Invalid session or missing user information');
    return;
  }

  const data = await hasSubscription();
  
  if (!data.active) {
    console.log('Subscription is not active');
    return;
  }

  let packageName = "FREE";
  let promptCount = 3;

  if (data.amount === 900) {
    packageName = "PREMIUM";
    promptCount = 10;
  } else if (data.amount === 1900) {
    packageName = "GOLDEN";
    promptCount = 100;
  }

  const packageData = {
    packageName: packageName,
    promptCount: promptCount,
    packageFor: session.user.email,
    packagePrice: data.amount / 100
  };

  try {
    const res = await savePackage(packageData);
    console.log('Package saved successfully:', res);
  } catch (error) {
    console.error('Error saving package:', error);
  }

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
