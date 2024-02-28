import { connectToDatabase } from "@/db/dbConfig";
import { getPackageData } from "@/helpers/getPackageData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  connectToDatabase()

  const packageData = await getPackageData()
  try {
    return NextResponse.json({ success: "package route hit", packageData});
  } catch {
    return NextResponse.json({
      error: "Something went wrong while getting packages! Try Again!",
    });
  }
}
