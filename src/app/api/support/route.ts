// Import necessary modules and functions
import { connectToDatabase } from "@/db/dbConfig";
import Support from "@/models/supportModels";
import { NextRequest, NextResponse } from "next/server";

// Main POST function
export async function POST(request: NextRequest) {
  try {
  
    // Parse the request body
    const reqBody = await request.json();
const supportRequest = reqBody.supportRequestData
console.log(supportRequest)
 // Create New Request
 const newSupportRequest = new Support({
    ...supportRequest,
  });

  // Saving Request
  const savedPackage = await newSupportRequest.save();

  console.log(savedPackage)


    return NextResponse.json({
      success: "Request Received",
      code: 200,
      
    });
  } catch (error) {
    console.error("Error during request:", error);
    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
