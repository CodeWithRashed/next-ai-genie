import { connectToDatabase } from "@/db/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
     connectToDatabase()
      const reqBody = await request.json();

  
      // Check for Duplicate User
      const dbUser = await User.findOne({ email: reqBody.email });
  
      // Handle Existing User
      if (dbUser) {

        return NextResponse.json({ message: "User Already Exist!!" });
      }
  
      // Hash Password
      const salt = await bcryptjs.genSalt(10);
      const hashedPass = await bcryptjs.hash(reqBody.password, salt);
  
      // Create New User
      const newUser = new User({
        name: reqBody.name,
        email: reqBody.email,
        role: reqBody.role || "User",
        password: hashedPass,
        image: reqBody.image,
        stripe_customer_id: ""
      });
  

  
      // Saving User
      const saveUser = await newUser.save();
  

  
      // Send Response
      return NextResponse.json({ message: "User Created Successfully" });
    } catch (err: any) {

      return NextResponse.json({ error: "Something went wrong! Try Again!" });
    }
  }
  

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json(
    { success: "Response From API Server" },
    { status: 200 }
  );
}