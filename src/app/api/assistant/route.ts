// Import necessary modules and functions
import { GetPackageData } from "@/app/helpers/getPackageData";
import { connectToDatabase } from "@/db/dbConfig";
import Package from "@/models/packageModels";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

// Main POST function
export async function POST(request: NextRequest) {
  const session = await getServerSession();
  try {
    // Connect to the database
    connectToDatabase();

    // Parse the request body
    const reqBody = await request.json();
    console.log("Received request body:", reqBody);

    if (!session?.user) {
      return NextResponse.json({ error: "Invalid Request" });
    }

    const previousPackage = await GetPackageData();

    if (!previousPackage || previousPackage.promptCount < 1) {
      return NextResponse.json({ error: "You Do Not have any prompt left!!" });
    }

    const updatedDocument = await Package.findOneAndUpdate(
      { packageFor: session?.user.email },
      { $set: { promptCount: previousPackage.promptCount - 1 } },
      { new: true }
    );

    return NextResponse.json({
      success: "Got response server",
      code: 200,
      result: `modified ${reqBody.prompt}`,
    });
  } catch (error) {
    console.error("Error during package activation:", error);
    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
