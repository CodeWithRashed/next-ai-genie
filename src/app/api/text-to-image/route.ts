// Import necessary modules and functions
import { connectToDatabase } from "@/db/dbConfig";
import { GetPackageData } from "@/helpers/getPackageData";
import Package from "@/models/packageModels";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import responseImage from "../../../assets/contact-image.png";
import axios from "axios";

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

    const previousPackage: any = await GetPackageData();

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
      url: "https://api.edenai.run/v2/image/generation",
      headers: {
        authorization:
        `Bearer ${process.env.EDEN_AI_API_KEY}`,
      },
      data: {
        providers: "replicate",
        text: reqBody.prompt,
        resolution: "512x512",
        fallback_providers: "",
      },
    };

    const response = await axios.request(options);
    const image = response.data.replicate.items[0].image
    const result: Result = {
      success: "Got Ai Image Generator Response",
      code: 200,
      result: image,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error during package activation:", error);
    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
