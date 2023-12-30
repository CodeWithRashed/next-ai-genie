"use client";

import { useState } from "react";

const Support = () => {
  const [isCreateRequest, setIsCreateRequest] = useState(false);
  return (
    <div className="relative h-[85vh] flex justify-center items-center p-5">
      <div className="h-full w-full p-3 shadow-lg">
        {!isCreateRequest && (
          <div className="p-5 shadow rounded-main">Support Ticket</div>
        )}
        {isCreateRequest && (
          <form className="flex flex-col items-center h-full w-full p-10 rounded-main">
            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-col md:flex-row">
                <input
                  id="name"
                  type="text"
                  className="my-2 py-2 px-4 rounded-main bg-grey-bg text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Name"
                />
                <input
                  id="email"
                  type="email"
                  className="my-2 py-2 px-4 rounded-main bg-grey-bg text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                />
              </div>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="my-2 py-2 px-4 rounded-main bg-grey-bg text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                id="message"
                placeholder="Say Something"
                className="my-2 py-2 px-4 rounded-main bg-grey-bg text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button className="border-2 text-md mt-5 rounded-main py-2 px-4 bg-color-primary hover:bg-color-primary-dark text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 ">
              Create Support Request
            </button>
          </form>
        )}
      </div>

      <div className="support-button absolute bottom-7 right-7 rounded-main text-white">
        <button
          onClick={() => {
            setIsCreateRequest(!isCreateRequest);
          }}
          className=" bg-color-primary p-3 shadow-md rounded-main"
        >
         {isCreateRequest ? "Close": "Create Request"}
        </button>
      </div>
    </div>
  );
};

export default Support;
