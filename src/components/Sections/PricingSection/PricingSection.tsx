import { FaRegCheckCircle } from "react-icons/fa";

const PricingSection = () => {
  return (
    <div className="my-10">
      <div>
        {/* Container */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Free Card */}
          <div className="card group shadow-2xl hover:drop-shadow-2xl hover:scale-105 hover:text-white flex flex-col justify-between hover:bg-color-primary rounded-main border border-color-primary-light px-5 py-10 transition-all ease-in-out">
            <div className="card-title space-y-5 ">
              <h1 className="text-4xl font-bold text-color-primary group-hover:text-white text-left">
                Free
              </h1>

              <h1>
                <span className="text-4xl font-medium group-hover:text-white">
                  $0/
                </span>
                mo
              </h1>
            </div>
            <div className="card-body text-left my-5 text-color-primary space-y-8 group-hover:text-white">
              <ul className="space-y-2 my-8">
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />
                  Access 3 AI Models
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />
                  Single User License
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />
                  Community Support
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />3 Prompt Monthly
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <button className="w-full group-hover:text-color-title group-hover:bg-white px-5 py-3 rounded-main transition-all ease-in-out bg-color-primary text-white">
                Get Started
              </button>
            </div>
          </div>

          {/* Premium Package Card */}
          <div className="card group shadow-2xl hover:drop-shadow-2xl hover:scale-105 hover:text-white flex flex-col justify-between hover:bg-color-primary rounded-main border border-color-primary-light px-5 py-10 transition-all ease-in-out">
            <div className="card-title space-y-5 ">
              <h1 className="text-4xl font-bold text-color-primary group-hover:text-white text-left">
                Premium
              </h1>

              <h1>
                <span className="text-4xl font-medium group-hover:text-white">
                  $9.99/
                </span>
                mo
              </h1>
            </div>
            <div className="card-body text-left my-5 text-color-primary space-y-8 group-hover:text-white">
              <ul className="space-y-2 my-8">
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />
                  Access 5 AI Models
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />
                  Single User License
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />
                  Premium Support
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />
                  10 Prompt Monthly
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <button className="w-full group-hover:text-color-title group-hover:bg-white px-5 py-3 rounded-main transition-all ease-in-out bg-color-primary text-white">
                Get Started
              </button>
            </div>
          </div>

          {/* Golden Package Card */}
          <div className="card group shadow-2xl hover:drop-shadow-2xl hover:scale-105 hover:text-white flex flex-col justify-between hover:bg-color-primary rounded-main border border-color-primary-light px-5 py-10 transition-all ease-in-out">
            <div className="card-title space-y-5 ">
              <h1 className="text-4xl font-bold text-color-primary group-hover:text-white text-left">
                Premium
              </h1>

              <h1>
                <span className="text-4xl font-medium group-hover:text-white">
                  $19.99/
                </span>
                mo
              </h1>
            </div>
            <div className="card-body text-left my-5 text-color-primary space-y-8 group-hover:text-white">
              <ul className="space-y-2 my-8">
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />
                  Access 7 AI Models
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />
                  Single User License
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />
                  Premium Support
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2" />
                  100 Prompt Monthly
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <button className="w-full group-hover:text-color-title group-hover:bg-white px-5 py-3 rounded-main transition-all ease-in-out bg-color-primary text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;