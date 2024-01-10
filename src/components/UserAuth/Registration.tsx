import Logo from "../../assets/logo.png";
import signUpImage from "../../assets/sign_up.png";

import Link from "next/link";
import Image from "next/image";
import { UserRegisterFrom } from "../Forms/Forms";
import { GoogleLoginButton } from "../Buttons/Buttons";

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
              <Image
                alt="ai genie logo"
                width={200}
                height={150}
                className="object-cover"
                src={Logo}
              />
            </Link>
          </div>
          <p className="my-2 text-lg text-color-subtitle">Create An Account</p>
        </div>

        <UserRegisterFrom />

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
        <GoogleLoginButton />

        {/* Google Button End */}
      </div>
      {/* Input Container End*/}

      {/* Image Container Start*/}
      <div className="hidden lg:flex lg:justify-center lg:items-center">
        <Image
          width={500}
          height={500}
          src={signUpImage}
          alt="login banner image"
        />
      </div>
      {/* Image Container End*/}
    </div>
  );
};

export default Registration;
