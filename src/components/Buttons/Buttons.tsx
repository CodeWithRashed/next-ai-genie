"use client"

import { useFormStatus } from "react-dom";
import { FaSpinner } from "react-icons/fa";

export const SignUpButton = () => {
   const {pending} = useFormStatus() 
  return (
    <button
      type="submit"
      className={`flex justify-center items-center h-10 bg-color-primary font-Inter font-bold px-4 py-2 rounded-main text-white w-full !mt-5`}
    >
     {pending ? <FaSpinner className="animate-spin"/> : "Sign Up"}
    </button>
  );
};
