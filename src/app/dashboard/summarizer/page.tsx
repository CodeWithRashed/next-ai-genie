import SummarizerPage from "@/components/DashboardPages/summarizer/SummarizerPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Genie | Summarize Articles",
  description: "Summarize Articles and Save Time",
};
const Summarizer = () => {
  return (
    <div>
   <SummarizerPage/>
  </div>
  )
  }
  
  export default Summarizer
  