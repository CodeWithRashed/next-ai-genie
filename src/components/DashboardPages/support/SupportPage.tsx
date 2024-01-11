"use client";
import { saveSupportRequest } from "@/helpers/saveSupportRequest";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const SupportPage = ({ supportData}:any) => {
  const supportRequests = supportData;
  const { data: session } = useSession();
  const [isCreateRequest, setIsCreateRequest] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const name = session?.user.name;
    const email = session?.user.email;
    const subject = form.subject.value;
    const message = form.message.value;
    const status = "Pending";

    const supportRequestData = {
      name,
      email,
      subject,
      message,
      status,
    };

    const response = await saveSupportRequest(supportRequestData);
    console.log(response);
    form.reset();
  };

  return (
    <div className="relative h-[85vh] flex justify-center items-center p-5">
      <div className="h-full w-full p-3 shadow-lg">
        {
          !isCreateRequest && (
            <div>
              {supportRequests?.length > 0 ? (
                <div>
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-main">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Subject
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {supportRequests.map((request: any, index: any) => (
                        <tr
                          key={index}
                          className="bg-white border-b   hover:bg-gray-50 "
                        >
                          <th
                            scope="row"
                            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                          >
                            <Image
                              className="w-10 h-10 rounded-full"
                              width={40}
                              height={40}
                              src={session?.user.image}
                              alt={session?.user.name}
                            />
                            <div className="ps-3">
                              <div className="text-base font-semibold">
                                {session?.user.name}
                              </div>
                              <div className="font-normal text-gray-500">
                                {session?.user.email}
                              </div>
                            </div>
                          </th>
                          <td className="px-6 py-4">{request?.subject}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div
                                className={`h-2.5 w-2.5 rounded-full ${
                                  request.status == "Pending" && "bg-red-500"
                                } ${
                                  request.status == "Processing" &&
                                  "bg-orange-500"
                                } ${
                                  request.status == "Solved" && "bg-green-500"
                                } me-2`}
                              ></div>
                              {request.status}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              type="button"
                              className="font-medium text-blue-600  hover:underline"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="h-[60vh] w-full flex justify-center items-center text-red-500">No Support Request Found!!!</div>
              )}
            </div>
          )
          // Table End
        }
        {isCreateRequest && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center h-full w-full p-10 rounded-main"
          >
            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-col md:flex-row">
                <input
                  disabled={true}
                  defaultValue={session?.user.name}
                  id="name"
                  type="text"
                  className="my-2 py-2 px-4 rounded-main bg-grey-bg w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Name"
                />
                <input
                  disabled={true}
                  defaultValue={session?.user.email}
                  id="email"
                  type="email"
                  className="my-2 py-2 px-4 rounded-main bg-grey-bg w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Email"
                />
              </div>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="my-2 py-2 px-4 rounded-main bg-grey-bg w-full outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Say Something"
                className="my-2 py-2 px-4 rounded-main bg-grey-bg w-full outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="border-2 text-md mt-5 rounded-main py-2 px-4 bg-color-primary hover:bg-color-primary-dark text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 "
            >
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
          {isCreateRequest ? "Close" : "Create Request"}
        </button>
      </div>
    </div>
  );
};

export default SupportPage;
