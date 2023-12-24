import Image from "next/image";
import newsLetterImage from "../../../assets/newsletter.jpg";
const Subscribe = () => {
  return (
    <div className="mx-auto lg:w-[70%]">
      <div className="flex gap-10 bg-white shadow-xl rounded-main">
   
          <div className="hidden lg:flex rounded-l-main">
            <Image
              width={300}
              height={300}
              src={newsLetterImage}
              alt="Genie Holding News"
              className="rounded-l-main"
            />
          </div>
          <div className="rounded-main flex justify-center lg:justify-start items-center w-full overflow-hidden">
            <div className="p-6 flex items-center flex-col">
              <h2 className="mb-6 text-xl text-center lg:text-left lg:text-3xl font-bold">
                Do not miss any updates.
              </h2>

              <div className="mb-6 flex-row md:mb-0 md:flex">
                <div
                  className="relative mb-3 w-full md:mr-3 md:mb-0"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="px-3 border border-color-primary w-full h-11 rounded-main outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="text-center rounded-main">

               
                <button
                  type="submit"
                  className="inline-block rounded-main bg-color-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Subscribe
                </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
