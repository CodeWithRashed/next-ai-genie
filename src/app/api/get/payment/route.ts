import { connectToDatabase } from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  connectToDatabase()
  const { searchParams } = new URL(request.url)
  const data = searchParams.get('data')
  let fruit = "Apple";

  try {

  switch (fruit) {
    case "Banana":
        console.log("Banana is yellow.");
        break;
    case "Apple":
        console.log("Apple is red.");
        break;
    case "Orange":
        console.log("Orange is orange.");
        break;
    default:
        console.log("Unknown fruit.");
}
    return NextResponse.json({ success: "payment route hit", data});
  } catch {
    return NextResponse.json({
      error: "Something went wrong while getting packages! Try Again!",
    });
  }
}
