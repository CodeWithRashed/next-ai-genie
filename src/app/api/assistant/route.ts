// Import necessary modules and functions
import { connectToDatabase } from "@/db/dbConfig";
import { getPackageData } from "@/helpers/getPackageData";
import Package from "@/models/packageModels";
import axios from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

// Main POST function
export async function POST(request: NextRequest) {
  const session = await getServerSession();
  try {
    // Parse the request body
    const reqBody = await request.json();


    if (!session?.user) {
      return NextResponse.json({ error: "Invalid Request" });
    }

    const previousPackage: any = await getPackageData();

    if (!previousPackage || previousPackage?.promptCount - previousPackage.promptUsed < 1) {
      return NextResponse.json({ error: "You Do Not have any prompt left!!" });
    }

    const updatedDocument = await Package.findOneAndUpdate(
      { packageFor: session?.user.email },
      { $set: { promptUsed: previousPackage?.promptUsed + 1 } },
      { new: true }
    );

    interface Result {
      success: string;
      code: number;
      result: string; 
    }
  
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/chat",
      headers: {
        authorization:
          `Bearer ${process.env.EDEN_AI_API_KEY}`,
      },
      data: {
        providers: "openai",
        text: reqBody.prompt,
        chatbot_global_action: "Act as an assistant",
        previous_history: [],
        temperature: 0.0,
        max_tokens: 150,
        fallback_providers: "",
      },
    };

   const response = await axios.request(options)
      
        const result: Result = {
          success: "Got Ai Assistant Response",
          code: 200,
          result: response.data.openai.generated_text,
        };

    return NextResponse.json(result);
  } catch (error) {

    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
