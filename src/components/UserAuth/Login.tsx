
import Logo from "../../assets/logo.png";
import signInImage from "../../assets/login.png";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { GoogleLoginButton, SignInButton } from "../Buttons/Buttons";
import { UserLoginFrom } from "../Forms/Forms";
import { signIn } from "next-auth/react";



const Login = () => {
   
  return (
    // Form Container
    <div className="grid h-screen lg:grid-cols-2 items-center">
      {/* Input Container Start*/}
      <div className="h-full my-10 lg:my-0 flex flex-col justify-center px-10 lg:shadow-[rgba(0,0,15,0.5)_10px_0px_20px_0px]">
        {/* Form Logo */}

        <div className="logo flex w-full flex-col justify-center items-center mb-10">
          <div className="image">
            <Link href="/">
              <Image alt="ai genie logo" width={200} height={150} className="object-cover" src={Logo} />
            </Link>
          </div>
          <p className="my-2 text-color-subtitle text-xl">
            Sign in to Your Account
          </p>
        </div>

  {/* Form */}
       <UserLoginFrom/>
        <div className="text-center">
          <p className="mt-2 text-sm text-color-subtitle ">
            Do not have an account?
            <Link
             href="/register"
              className="ml-2 text-blue-600 decoration-2 hover:underline font-medium"
            >
              Sign Up here
            </Link>
          </p>
        </div>
        <div className=" py-6 flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6">
          Or
        </div>
         {/* Google Button Start */}
        <div className="grid h-10 !rounded-main overflow-hidden">
       {/* google Login */}
       <GoogleLoginButton/>
        </div>

        {/* Google Button End */}
      </div>
      {/* Input Container End*/}

      {/* Image Container Start*/}
      <div className="lg:flex lg:justify-center lg:items-center hidden">
        <Image height={500} width={500} src={signInImage} alt="login-banner-image" className="object-cover"/>
      </div>
      {/* Image Container End*/}
    </div>
  );
};


export default Login;
