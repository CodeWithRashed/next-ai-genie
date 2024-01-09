import EnglishHelpPage from "@/components/DashboardPages/english-helper/EnglishHelpPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Genie | English Helper",
  description: "Unlock English",
};
const EnglishHelper = () => {
    return (
      <div>
      <EnglishHelpPage/>
    </div>
    )
  }
  
  export default EnglishHelper
  