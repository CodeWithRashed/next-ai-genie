"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
const ActiveFreeTrial = () => {
    const router = useRouter()
  return (
    <div className='p-10'>
       <div className="relative bg-white rounded-xl shadow-xl border-2 border-color-primary z-10">
          <div className="text-center p-12">
            <p className="text-3xl lg:text-2xl xl:text-3xl pb-4 font-semibold">FREE TRIAL</p>
            <div className="flex justify justify-center items-center">
              <span className="font-extrabold text-5xl lg:text-4xl xl:text-6xl align-text-middle px-3">$ 0.00</span>
              <span className="font-normal text-xl text-gray-500 inline-block align-text-middle">/month</span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-b-xl border-t-2 border-gray-200/20 p-10">
            <ul className="space-y-4">
              
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-500 uppercase">On Trial 3 Available Prompt. </span>
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-500">ACCESS 3 AI ENGINE.</span>
              </li>
            </ul>
            <button onClick={()=>{
                router.push("/checkout?package=free")
            }} type="button" className="w-full text-center bg-color-primary text-lg text-white mt-8 p-3 rounded shadow-xl transition hover:text-white hover:bg-indigo-700">Start your trial</button>
          </div>
          <div className="absolute rounded-main w-40 bg-color-primary text-white text-center text-sm tracking-wider px-4 py-1 -top-3 inset-x-0 mx-auto z-30">TRIAL PACKAGE</div>
        </div>
    </div>
  )
}

export default ActiveFreeTrial
