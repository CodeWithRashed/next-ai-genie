"use client";
import { SignUpButton } from "../Buttons/Buttons";

import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaEye, FaSpinner, FaUser } from "react-icons/fa";
import { TbPhotoPlus } from "react-icons/tb";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { UploadImage } from "@/lib/uploadImage";
//INTERFACES
enum ROLE {
  ADMIN = "Admin",
  USER = "User",
}
export const UserRegisterFrom = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleFromSubmit = async (event: any) => {
    event.preventDefault();
    setIsPending(true);
    const form = event.target;
    const userImage = form.image.files[0];
    try {
      const uploadResponse = await UploadImage(userImage);
      const image = uploadResponse.data.data.url;

      // Check For Name
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      const rawFormData = {
        name: name,
        image: image,
        email: email,
        password: password,
        role: ROLE.USER,
        stripe_customer_id: ""
      };

      console.log(rawFormData);

      const response = await axios.post("/api/user/register", rawFormData);
      console.log(response);

      if (response.status === 200) {
        toast.success("Account Created Successfully! Redirecting");

        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleFromSubmit} className="space-y-2">
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
                  required
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
                required
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
                type="email"
                required
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
              <div className="hover:bg-color-subtitle rounded-full hover:text-white transition-all ease-in-out">
                <button
                  type="button"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="hover:bg-color-subtitle p-2 rounded-full hover:text-white transition-all ease-in-out"
                >
                  <FaEye />
                </button>
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
                required
                name="password"
                type={showPassword ? "text" : "password"}
                className="h-10 w-full bg-grey-bg text-color-subtitle  focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
                placeholder="Enter Password"
              />
            </div>
          </div>
        </div>

        <SignUpButton isPending={isPending} />
      </form>
    </div>
  );
};

export const UserLoginFrom = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [loginError, setLoginError] = useState("");
  const handleFromSubmit = async (event: any) => {
    event.preventDefault();
    setIsPending(true);
    setLoginError("");
    const form = event.target;
    try {
      const email = form.email.value;
      const password = form.password.value;
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });
      if (result?.error) {
        setLoginError("Invalid Login Credentials! Try Again!");
      }
      if (result?.status === 200) {
        toast.success("Login Successful!");

        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      }
    } finally {
      console.log(isPending);
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleFromSubmit} className="space-y-2">
      {/* Input Group Container */}

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
              required
              name="email"
              type="email"
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
            <button
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="hover:bg-color-subtitle p-2 rounded-full hover:text-white transition-all ease-in-out"
            >
              <FaEye />
            </button>
            <div className="text-white bg-color-primary p-3 h-10 rounded-main">
              <RiLockPasswordFill />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <input
              required
              name="password"
              type={showPassword ? "text" : "password"}
              className="h-10 w-full bg-grey-bg text-color-subtitle  focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
              placeholder="Enter Password"
            />
            {/* Forgot Password */}
          </div>
        </div>
      </div>
      {loginError && <p className="text-red-500 text-center">{loginError}</p>}
      {/* input group end */}
      <button
        type="submit"
        className={`flex justify-center items-center h-10 bg-color-primary font-Inter font-bold px-4 py-2 rounded-main text-white w-full !mt-5`}
      >
        {isPending ? <FaSpinner className="animate-spin" /> : "Sign In"}
      </button>
    </form>
  );
};
