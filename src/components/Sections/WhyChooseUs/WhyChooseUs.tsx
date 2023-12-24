import keyPointImage from "../../../assets/keyPoint.png";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <div className="pt-10">
      <div className="grid lg:grid-cols-2 justify-center lg:justify-between mx-auto key-point-container">
        <div className="image lg:flex  lg:justify-start mb-8 lg:mb-0">
          <Image
            width={400}
            height={450}
            src={keyPointImage}
            alt="why choose banner"
          />
        </div>
        <div className="content flex justify-center items-center">
          <div className="items-container space-y-8">
            <div className="card flex gap-5">
              <div>
                <div className="text-xl bg-color-primary-light rounded-full p-2 text-color-primary">
                  <FaCheckCircle className="text-color-primary"></FaCheckCircle>
                </div>
              </div>
              <div>
                <h1 className="text-xl text-color-title font-bold">Ultra Fast Speed</h1>
                <p className="text-sm text-color-subtitle">
                  Get the result faster then any generative ai out there
                </p>
              </div>
            </div>
            <div className="card flex gap-5">
              <div>
                <div className="text-xl bg-color-primary-light rounded-full p-2 text-color-primary">
                  <FaCheckCircle className="text-color-primary"/>
                </div>
              </div>
              <div>
                <h1 className="text-2xl text-color-title font-bold">Secure & Safe</h1>
                <p className="text-sm text-color-subtitle">
                  All your personal information is securely stored in the cloud.
                </p>
              </div>
            </div>
            <div className="card flex gap-5">
              <div>
                <div className="text-xl bg-color-primary-light rounded-full p-2 text-color-primary">
                  <FaCheckCircle className="text-color-primary"/>
                </div>
              </div>
              <div>
                <h1 className="text-2xl text-color-title font-bold">
                  API for Developers
                </h1>
                <p className="text-sm text-color-subtitle">
                  Now you can build your own ai application with our APIS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
