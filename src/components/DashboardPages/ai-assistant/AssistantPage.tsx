"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import loadingImage from "../../../assets/loading.gif";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AssistantPage = () => {
  const [resData, setResData] = useState();
  const [loading, setLoading] = useState(false);
  const [promptError, setPromptError] = useState("");
const router = useRouter()
const bigData = false
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const prompt = e.target.elements.input.value;
    console.log(prompt);

    const res = await axios.post("/api/assistant", { prompt });
    const result = res.data.result;
    setResData(result);

    if (res.data.error) {
      setPromptError(res.data.error);
    }
    e.target.reset();
    console.log(res);
    setLoading(false);
  };

  return (
    <div>
      {/* RESULT WILL APPEAR HERE */}
      <div
        className={`result-container w-full h-[70vh] ${
          bigData && "overflow-y-scroll"
        } `}
      >
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <Image width={50} height={50} src={loadingImage} alt="Loading" />
          </div>
        ) : (
          <div>
            {promptError ? (
              <div className="h-[70vh] w-full flex justify-center items-center">
                <div className="flex flex-col gap-3 text-xl text-red-500">
                  <p>You Do Not Have Any Prompt Available!!</p>
                  <div className="flex gap-3 justify-center items-center mx-auto">
                    <button onClick={()=>{
                      router.push("/checkout?package=golden")
                    }}
                     
                      className="bg-color-primary text-white rounded-main px-3 py-2"
                    >
                      Upgrade Now
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div> {resData}</div>
            )}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="input-container h-16 relative">
        <input
          required={true}
          name="input"
          type="text"
          className="h-10 bg-grey-bg rounded-main px-3 outline-none focus:border-color-primary  border border-color-primary focus:border-2 w-full  mt-5"
        />
        <button
          type="submit"
          className="absolute right-1 hover:bg-color-primary-dark rounded-main bottom-2 text-white bg-color-primary px-3 py-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AssistantPage;
