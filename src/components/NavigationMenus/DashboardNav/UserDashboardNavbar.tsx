"use client"

//React Icons
import { FaLanguage, FaRegUserCircle } from "react-icons/fa";
import { MdSummarize, MdInbox } from "react-icons/md";
import { IoCodeWorking } from "react-icons/io5";
import { SiAudiomack } from "react-icons/si";
import { TbPhotoCog } from "react-icons/tb";

//Shared Components
import Link from "next/link";
import { usePathname } from "next/navigation";

//Functions Components
export default function UserDashboardNavbar() {
  const routes = usePathname()
  return (
    <div className="flex flex-col gap-1 transition-all ease-in-out">
            {/* //Image Generation// */}
      <Link href="/dashboard/text-to-image" className={`${routes === "/dashboard/text-to-image" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <TbPhotoCog className="h-5 w-5" />
        Image Generation
      </Link>

      {/* //AI Assistant// */}
      <Link href="/dashboard/ai-assistant" className={`${routes === "/dashboard/ai-assistant" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <IoCodeWorking className="h-5 w-5" />
        AI Assistant
      </Link>
      <Link href="/dashboard/english-helper" className={`${routes === "/dashboard/english-helper" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <FaLanguage className="h-5 w-5" />
        English Helper
      </Link>
      {/* //Summarizer Content*/}
      <Link href="/dashboard/summarizer" className={`${routes === "/dashboard/summarizer" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <MdSummarize className="h-5 w-5" />
        Summarize
      </Link>

      {/* //Text to Audio// */}
      <Link href="/dashboard/text-to-audio" className={`${routes === "/dashboard/text-to-audio" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <SiAudiomack className="h-5 w-5" />
        Text to Audio
      </Link>

      <hr className="my-3" />

      {/* //Support Inbox// */}
      <Link href="/dashboard/support" className={`${routes === "/dashboard/support" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <MdInbox className="h-5 w-5" />
        Support
      </Link>

      {/* //Profile// */}
      <Link href="/dashboard/profile" className={`${routes === "/dashboard/profile" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <FaRegUserCircle className="h-5 w-5" />
        Profile
      </Link>

     
    </div>
  );
}
