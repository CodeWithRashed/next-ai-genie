import ImageGenerationPage from "@/components/DashboardPages/image-generation/ImageGenerationPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ai Genie | AI ASSISTANT",
  description: "Your Personal AI Assistant",
};

const GenerateImagePage = () => {
  return (
    <div>
      <ImageGenerationPage />
    </div>
  );
};

export default GenerateImagePage;
