import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import FreePackage from "./FreePackage";
import PremiumPackage from "./PremiumPackage";
import GoldenPackage from "./GoldenPackage";

const PricingSection = () => {
  return (
    <div className="my-10">
      <div>
        {/* Container */}
        <div className="grid lg:grid-cols-3 gap-10">
        
        <FreePackage/>
       <PremiumPackage/>
      <GoldenPackage/>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
