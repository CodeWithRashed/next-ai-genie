"use client";
import {
  SignInButton,
  SignUpButton,
} from "../Buttons/Buttons";
import {LoginUser, RegisterUser } from "@/app/actions";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaEye, FaUser } from "react-icons/fa";
import { TbPhotoPlus } from "react-icons/tb";
import { useRef } from "react";
import { useFormState } from "react-dom";

export const UserRegisterFrom = () => {
  const [state, formAction] = useFormState(RegisterUser, null);
  const formRef = useRef<HTMLFormElement>(null);
  const handleFromSubmit = async (formData: FormData) => {
    formAction(formData);
    console.log(state);
    formRef.current?.reset();
  };
  return (
    <div>
      <form action={handleFromSubmit} className="space-y-2" ref={formRef}>
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
              <div className="hover:bg-color-subtitle p-2 rounded-full hover:text-white transition-all ease-in-out">
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
                required
                name="password"
                type="password"
                className="h-10 w-full bg-grey-bg text-color-subtitle  focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
                placeholder="Enter Password"
              />
            </div>
          </div>
        </div>

        {/* input group end */}
        <SignUpButton />
        <p className="text-red-500">{state}</p>
      </form>
    </div>
  );
};
export const UserLoginFrom = () => {
  const [state, formAction] = useFormState(LoginUser, null);
  const formRef = useRef<HTMLFormElement>(null);
  const handleFromSubmit = async (formData: FormData) => {
    formAction(formData);
    console.log(state);
  };
  return (
    <form action={handleFromSubmit} className="space-y-2" ref={formRef}>
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
            <div className="hover:bg-color-subtitle p-2 rounded-full hover:text-white transition-all ease-in-out">
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
              required
              name="password"
              type="password"
              className="h-10 w-full bg-grey-bg text-color-subtitle  focus:border-color-primary outline-none border-2 border-grey-bg rounded-main py-2 px-3 bg-gray-bg"
              placeholder="Enter Password"
            />
            {/* Forgot Password */}
          </div>
        </div>
        <div className="text-right mt-2">
          <button className="ml-2 text-blue-600 decoration-2 hover:underline font-normal">
            Forgotten Password
          </button>
        </div>
      </div>

      {/* input group end */}
      <SignInButton />
      <p className="text-red-500">{state}</p>
    </form>
  );
};
