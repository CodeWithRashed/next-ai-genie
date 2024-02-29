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

    const previousPackage:any = await getPackageData();

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
      url: "https://api.edenai.run/v2/audio/text_to_speech",
      headers: {
        authorization:
        `Bearer ${process.env.EDEN_AI_API_KEY}`,
      },
      data: {
        providers: "openai",
        option: "FEMALE",
        language: "en",
        text: reqBody.prompt,
        fallback_providers: "",
      },
    };

    const response = await axios.request(options);
    const audio = response.data.openai.audio
    const result: Result = {
      success: "Got Text to Audio Ai Response",
      code: 200,
      result: audio,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error during generating audio:", error);
    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
