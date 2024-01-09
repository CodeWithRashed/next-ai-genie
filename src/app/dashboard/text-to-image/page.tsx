import ImageGenerationPage from "@/components/DashboardPages/image-generation/ImageGenerationPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ai Genie | Generate Image",
  description: "Generate Stunning Images!",
};

const GenerateImagePage = () => {
  return (
    <div>
      <ImageGenerationPage />
    </div>
  );
};

export default GenerateImagePage;
