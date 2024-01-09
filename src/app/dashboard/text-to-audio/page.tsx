import AudioGenerationPage from "@/components/DashboardPages/text-to-audio/AudioGenerationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Genie | Generate Audio",
  description: "Generate Audios Just From Text!",
};
const TextToAudio = () => {
  return (
    <div>
      <AudioGenerationPage />
    </div>
  );
};

export default TextToAudio;
