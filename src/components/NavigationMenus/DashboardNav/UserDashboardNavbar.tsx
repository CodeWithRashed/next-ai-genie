//React Icons
import { FaLanguage, FaRegUserCircle } from "react-icons/fa";
import { MdSummarize, MdDashboard, MdInbox } from "react-icons/md";
import { IoCodeWorking } from "react-icons/io5";
import { SiAudiomack } from "react-icons/si";
import { TbPhotoCog } from "react-icons/tb";

//Shared Components
import aiGenieIcon from "../../../assets/favicon.png";
import Link from "next/link";
import Image from "next/image";

//Functions Components
export default function UserDashboardNavbar() {
  const isPro = false;
  return (
    <div className="flex flex-col gap-5">
            {/* //Image Generation// */}
      <Link href="/dashboard/text-to-image" className="flex gap-2 items-center">
        <TbPhotoCog className="h-5 w-5" />
        Image Generation
      </Link>

      {/* //AI Assistant// */}
      <Link href="/dashboard/ai-assistant" className="flex gap-2 items-center">
        <IoCodeWorking className="h-5 w-5" />
        AI Assistant
      </Link>
      <Link href="/dashboard/english-helper" className="flex gap-2 items-center">
        <FaLanguage className="h-5 w-5" />
        English Helper
      </Link>
      {/* //Summarizer Content*/}
      <Link href="/dashboard/summarizer" className="flex gap-2 items-center">
        <MdSummarize className="h-5 w-5" />
        Summarize
      </Link>

      {/* //Text to Audio// */}
      <Link href="/dashboard/summarizer" className="flex gap-2 items-center">
        <SiAudiomack className="h-5 w-5" />
        Text to Audio
      </Link>

      <hr className="mt-3" />

      {/* //Support Inbox// */}
      <Link href="/dashboard/support" className="flex gap-2 items-center">
        <MdInbox className="h-5 w-5" />
        Support
      </Link>

      {/* //Profile// */}
      <Link href="/dashboard/profile" className="flex gap-2 items-center">
        <FaRegUserCircle className="h-5 w-5" />
        Profile
      </Link>

      {/* //Upgrade Card// */}
      {!isPro && (
        <div className="relative w-full mt-10 mx-auto rounded-main  bg-color-primary bg-gradient-to-t  from-[#4A25E1]  to-color-primary p-5 text-white text-center">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 border-2 border-white p-2 bg-color-primary rounded-full mx-auto">
            <Image
              width={40}
              height={40}
              className="h-10 w-10"
              src={aiGenieIcon}
              alt="ai genie logo"
            />
          </div>

          <div className="content mt-3">
            <h1 className="text-lg">Go Unlimited with PRO</h1>
          </div>

          <div className="mt-4 flex gap-3 justify-center items-center mx-auto">
            <button className="bg-color-primary rounded-main px-3 py-2">
              Upgrade Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
