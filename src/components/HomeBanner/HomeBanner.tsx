import Image from "next/image";
import bannerImage from "../../assets/banner.png";
import { ButtonOutline, ButtonPrimary } from "../ui/Button";

const HomeBanner = () => {
  return (
    <div className="banner hero-section h-screen">
      {/* Banner Content */}

      <div className="grid lg:grid-cols-2 lg:gap-3 h-full lg:justify-between justify-center items-center">
        {/* Banner Text Content */}
        <div className="text-center lg:space-y-5 lg:text-left space-y-3 md:order-first order-last">
          <h1 className="leading-normal font-bold text-color-title text-6xl ">
            AI Genie One of the Best Generative <br />
            AI Tool
          </h1>
          <p className="text-color-subtitle">No Credit Card Required</p>
          <div className="cta flex gap-3">
           <ButtonPrimary >Free Trial</ButtonPrimary>
           <ButtonOutline>Watch How It Works</ButtonOutline>
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
