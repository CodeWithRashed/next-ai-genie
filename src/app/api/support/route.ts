import Support from "@/models/supportModels";
import { NextRequest, NextResponse } from "next/server";

// Main POST function
export async function POST(request: NextRequest) {
  try {
  
    // Parse the request body
    const reqBody = await request.json();
const supportRequest = reqBody.supportRequestData

 const newSupportRequest = new Support({
    ...supportRequest,
  });

  // Saving Request
  const savedPackage = await newSupportRequest.save();




    return NextResponse.json({
      success: "Request Received",
      code: 200,
      
    });
  } catch (error) {

    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
