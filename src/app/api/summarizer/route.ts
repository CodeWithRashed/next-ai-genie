// Import necessary modules and functions
import { connectToDatabase } from "@/db/dbConfig";
import { GetPackageData } from "@/helpers/getPackageData";
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
    console.log("Received request body:", reqBody);

    if (!session?.user) {
      return NextResponse.json({ error: "Invalid Request" });
    }

    const previousPackage:any = await GetPackageData();

    if (!previousPackage || previousPackage?.promptCount < 1) {
      return NextResponse.json({ error: "You Do Not have any prompt left!!" });
    }

    const updatedDocument = await Package.findOneAndUpdate(
      { packageFor: session?.user.email },
      { $set: { promptCount: previousPackage?.promptCount - 1 } },
      { new: true }
    );

    interface Result {
      success: string;
      code: number;
      result: string;
    }

    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/summarize",
      headers: {
        authorization:
        `Bearer ${process.env.EDEN_AI_API_KEY}`,
      },
      data: {
        output_sentences: 2,
        providers: "openai",
        language: "en",

        text: reqBody.prompt,
        fallback_providers: "",
      },
    };

    const response = await axios.request(options);
    const output = response.data.openai.result
    const result: Result = {
      success: "Got Summarize Response",
      code: 200,
      result: output,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error during Article Summarization:", error);
    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
