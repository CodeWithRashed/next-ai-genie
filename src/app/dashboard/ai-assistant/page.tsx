import AssistantPage from "@/components/DashboardPages/ai-assistant/AssistantPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Ai Genie | AI ASSISTANT',
  description: 'Your Personal AI Assistant',
}


const AiAssistant = () => {
 
  return (
    <div>
    <AssistantPage/>
    </div>
  );
};

export default AiAssistant;
