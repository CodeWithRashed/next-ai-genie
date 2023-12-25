
import Logo from "../../assets/logo.png";
import signUpImage from "../../assets/sign_up.png";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaEye, FaUser } from "react-icons/fa";
import { TbPhotoPlus } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { RegisterUser } from "@/app/actions";



const Registration = () => {


  return (
    // Form Container
    <div className="grid lg:grid-cols-2 h-screen items-center">
      {/* Input Container Start*/}
      <div className="h-full my-10 lg:my-0 flex flex-col justify-center px-10 lg:shadow-[rgba(0,0,15,0.5)_10px_0px_20px_0px]">
        {/* Form Logo */}

        <div className="logo flex w-full flex-col justify-center items-center">
        <div className="image">
            <Link href="/">
              <Image alt="ai genie logo" width={200} height={150} className="object-cover" src={Logo} />
            </Link>
          </div>
          <p className="my-2 text-lg text-color-subtitle">Create An Account</p>
        </div>

        <form action={RegisterUser}  className="space-y-2">
          {/* Input Group Container */}
          <div className="group-container lg:flex gap-3">

          {/* input group start */}
          <div className="lg:w-3/4 flex flex-col">
            <div className="input-container relative">
              {/* Indicator Icon */}
              <div className="cta absolute bottom-0 right-0 flex gap-2 items-center">
                <div className="text-white bg-color-primary p-3 h-10 rounded-main">
                  <FaUser />
                </div>
              </div>
              <div className="inputs">
                <label htmlFor="name" className="block mb-2">
                  Name:
                </label>
                <input
                  name="name"
                  className="h-10 w-full bg-grey-bg text-color-subtitle focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
                  placeholder="John Doe"
                />
              </div>
            </div>

          </div>
          {/* input group end */}

          {/* input group start */}
          <div className=" flex flex-col">
            <div className="input-container relative">
              <label htmlFor="image" className="block mb-2">
                Profile Image:
              </label>
              <input
                type="file"
                name="image"
                className="h-10 lg:w-[140px] w-full file:h-10  file:border-0 file:bg-color-primary file:text-white  bg-color-primary text-color-subtitle focus:border-color-primary outline-none  rounded-main"
              />
              {/* Indicator Icon */}
              <div className="cta h-10 absolute bottom-0 right-0 flex gap-2 items-center">
                <div className="text-white bg-color-primary p-3 h-10 rounded-r-main">
                  <TbPhotoPlus />
                </div>
              </div>
            </div>


          </div>
          {/* input group end */}
          </div>


          {/* input group start */}
          <div className="flex flex-col">
            <div className="input-container relative">
              {/* Indicator Icon */}
              <div className="cta absolute bottom-0 right-0 flex gap-2 items-center">
                <div className="text-white bg-color-primary p-3 h-10 rounded-main">
                  <MdEmail />
                </div>
              </div>
              <div className="inputs">
                <label htmlFor="email" className="block mb-2">
                  Email:
                </label>
                <input
                  name="email"
                  className="h-10 w-full bg-grey-bg text-color-subtitle  focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
                  placeholder="john.doe@gmail.com"
                />
              </div>
            </div>

         
          </div>
          {/* input group end */}

          {/* input group start */}
          <div className="flex flex-col ">
            <div className="input-container relative">
              {/* Password Indicator and CTA */}
              <div className="cta absolute bottom-0 right-0 flex gap-2 items-center">
                <div
                  className="hover:bg-color-subtitle p-2 rounded-full hover:text-white transition-all ease-in-out"
                
                >
                  <FaEye />
                </div>
                <div className="text-white bg-color-primary p-3 h-10 rounded-main">
                  <RiLockPasswordFill />
                </div>
              </div>
              <div className="input-container">
                <label htmlFor="password" className="block mb-2">
                  Password:
                </label>
                <input
                  name="password"
                  type="password"
                  className="h-10 w-full bg-grey-bg text-color-subtitle  focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
                  placeholder="Enter Password"
                />
              </div>
            </div>

          </div>

          {/* input group end */}
          <button
            type="submit"
            className="flex justify-center items-center h-10 bg-color-primary font-Inter font-bold px-4 py-2 rounded-main text-white w-full !mt-5"
          >
            Sign Up
          </button>
        </form>

       
        <div className="text-center">
          <p className="mt-2 text-sm text-color-subtitle ">
            Already have an account?
            <Link
             href="/login"
              className="ml-2 text-blue-600 decoration-2 hover:underline font-medium"
            >
              Sign in here
            </Link>
          </p>
        </div>
        <div className=" py-6 flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6">
          Or
        </div>
         {/* Google Button Start */}
        <div className="grid h-10 !rounded-main overflow-hidden">
          <button
            type="button"
            className="bg-color-primary flex justify-center items-center h-10 gap-5 font-Inter font-bold px-4 py-3 rounded-main text-white w-full"
          >
            <svg
              className="w-4 h-auto"
              width="46"
              height="47"
              viewBox="0 0 46 47"
              fill="none"
            >
              <path
                d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                fill="#4285F4"
              />
              <path
                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                fill="#34A853"
              />
              <path
                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                fill="#FBBC05"
              />
              <path
                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                fill="#EB4335"
              />
            </svg>
            Sign up with Google
          </button>
        </div>

        {/* Google Button End */}
      </div>
      {/* Input Container End*/}

      {/* Image Container Start*/}
      <div className="hidden lg:flex lg:justify-center lg:items-center">
        <Image width={500} height={500} src={signUpImage} alt="login banner image" />
      </div>
      {/* Image Container End*/}
    </div>
  );
};


export default Registration;
