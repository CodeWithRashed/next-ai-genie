// Import necessary modules and functions
import { connectToDatabase } from "@/db/dbConfig";
import Package from "@/models/packageModels";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


// Main POST function
export async function POST(request: NextRequest) {
connectToDatabase()
  try {
       // Parse the request body
    const reqBody = await request.json();
    console.log("Received request body:", reqBody);
 

    // // Check for a duplicate user or handle package activation logic
    const dBPackageData = await Package.findOne({
      packageFor: reqBody.packageData.packageFor,
    });

    if (dBPackageData) {
      console.log("Package already exists:", dBPackageData);
      return NextResponse.json({ error: "Package Already Exists" });
    }

    const newPackageData = new Package(reqBody.packageData);
    const savePackageData = await newPackageData.save();
  
    console.log("User saved:", savePackageData._doc);

    return NextResponse.json({ success: "Package Activated Successfully" });
  } catch (error) {
    console.error("Error during package activation:", error);
    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
