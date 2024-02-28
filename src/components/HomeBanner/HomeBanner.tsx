import Image from "next/image";
import bannerImage from "../../assets/banner.png";
import { ButtonOutline, ButtonPrimary } from "../ui/Button";
import Link from "next/link";
import { getPackageData } from "@/helpers/getPackageData";

const HomeBanner = async () => {
  const packageData = await getPackageData();
  return (
    <div className="banner hero-section h-screen">
      {/* Banner Content */}

      <div className="grid lg:grid-cols-2 lg:gap-3 h-full lg:justify-between justify-center items-center">
        {/* Banner Text Content */}
        <div className="text-center lg:space-y-5 lg:text-left space-y-3 md:order-first order-last">
          <h1 className="leading-normal font-bold text-color-title text-2xl md:text-5xl lg:text-6xl ">
            AI Genie One of the Best Generative <br />
            AI Tool
          </h1>
          <p className="text-color-subtitle py-5">No Credit Card Required</p>
          <div className="cta mx-auto w-4/5 lg:w-full flex flex-col lg:flex-row gap-3">
            {!packageData ? (
              <Link
                href="/checkout?package=free"
                className="bg-color-primary hover:bg-color-primary-dark px-5 py-2 rounded-main text-white"
              >
                Free Trial
              </Link>
            ) : (
              <Link
                href="/dashboard"
                className="bg-color-primary hover:bg-color-primary-dark px-5 py-2 rounded-main text-white"
              >
                Dashboard
              </Link>
            )}

            <Link
              className="hover:bg-color-primary-light text-color-title  border-2  border-color-primary px-5 py-2 rounded-main transition-all ease-in-out"
              href="https://youtu.be/_GQggGqlcDs"
            >
              Watch How It Works
            </Link>
          </div>
        </div>

        {/* Banner Image  */}
        <div className="hidden lg:flex justify-center items-center">
          <Image
            width={500}
            height={500}
            className="w-[80%] object-cover"
            src={bannerImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
