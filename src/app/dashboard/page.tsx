import Image from "next/image";
import aiGenieIcon from "../../assets/favicon.png";
import { GetPackageData } from "../helpers/getPackageData";
const DashboardPage = async () => {
  const isPro = false;
  const packageData: any = await GetPackageData();


  console.log("PackageData on Dashboard", packageData);
  return (
    <div className="h-[80vh] overflow-scroll grid grid-cols-2 gap-5">
      <div className="flex flex-col">
        <div className="p-3 border border-color-primary shadow-lg rounded-main">
          <p>Current Package</p>
          <div className="p-2 cursor-not-allowed">
            {/* Golden Package Card */}
            <div className="card shadow-xl  flex flex-col justify-between rounded-main border border-color-primary-light px-5 py-10 transition-all ease-in-out duration-700">
              <div className="card-title space-y-5 ">
                <h1 className="text-4xl font-bold text-color-primary  text-left transition-all ease-in-out duration-700">
                  {packageData?.packageName}
                </h1>

                <h1>
                  <span className="text-4xl font-medium  transition-all ease-in-out duration-700">
                    ${packageData?.packagePrice}/
                  </span>
                  mo
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="p-3 border border-color-primary shadow-lg rounded-main">
            <p>Prompt Details</p>
            <div className="p-2 cursor-not-allowed">
              {/* Golden Package Card */}
              <div className="card shadow-xl  flex flex-col justify-between rounded-main border border-color-primary-light px-5 py-10 transition-all ease-in-out duration-700">
                <div className="card-title flex gap-5 justify-center items-center">
                  <div className="total-prompt flex flex-col justify-center items-center">
                    <h1 className=" border-b-2 border-b-color-primary">
                      Total Prompt
                    </h1>
                    <div className="mt-4 p-3 text-xl w-12 h-12 flex justify-center items-center rounded-full border-2 border-grey-bg font-bold text-color-primary  text-left transition-all ease-in-out duration-700">
                      <p>
                        {packageData?.packageName === "FREE" && "3"}
                        {packageData?.packageName === "PREMIUM" && "10"}
                        {packageData?.packageName === "GOLDEN" && "100"}
                      </p>
                    </div>
                  </div>

                  <div className="available-prompt flex flex-col justify-center items-center">
                    <h1 className=" border-b-2 border-b-color-primary">
                      Available Prompt
                    </h1>
                    <div className="mt-4 p-3 text-xl w-12 h-12 flex justify-center items-center rounded-full border-2 border-grey-bg font-bold text-color-primary  text-left transition-all ease-in-out duration-700">
                      <p> {packageData?.promptCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* //Upgrade Card// */}
          {!isPro && (
            <div className="relative w-full mt-10 mx-auto rounded-main  bg-color-primary bg-gradient-to-t  from-[#4A25E1]  to-color-primary p-5 text-white text-center">
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 border-2 border-white p-2 bg-color-primary rounded-full mx-auto">
                <Image
                  width={40}
                  height={40}
                  className="h-10 w-10"
                  src={aiGenieIcon}
                  alt="ai genie logo"
                />
              </div>

              <div className="content mt-3">
                <h1 className="text-lg">Go Unlimited with PRO</h1>
              </div>

              <div className="mt-4 flex gap-3 justify-center items-center mx-auto">
                <button className="bg-color-primary rounded-main px-3 py-2">
                  Upgrade Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
