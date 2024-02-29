import { connectToDatabase } from "@/db/dbConfig";
import Package from "@/models/packageModels";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
export const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
  apiVersion: "2023-10-16",
});

// Main POST function
export async function POST(request: NextRequest) {
  connectToDatabase();
  try {
    // Parse the request body
    const reqBody = await request.json();

    const dBPackageData = await Package.findOne({
      packageFor: reqBody.userEmail,
    });

    if (dBPackageData) {
      console.log("Package already exists:", dBPackageData);
      return NextResponse.json({ error: "Package Already Exists" });
    }

    const user = await User.findOne({ email: reqBody.userEmail }).lean();

    const subscriptions = await stripe.subscriptions.list({
      customer: String(user?.stripe_customer_id),
    });

    const subscriptionPlan = subscriptions.data[0].items.data[0].plan;

    if(!subscriptionPlan.active){
      return NextResponse.json({ message: "Package is not activated!!!" });
    }

  
    let packageName = "FREE";
    let promptCount = 3;
  
    if (subscriptionPlan.amount === 900) {
      packageName = "PREMIUM";
      promptCount = 10;
    } else if (subscriptionPlan.amount === 1900) {
      packageName = "GOLDEN";
      promptCount = 100;
    }
  
    const packageData = {
      packageName: packageName,
      promptCount: promptCount,
      packageFor: reqBody.userEmail,
      packagePrice: subscriptionPlan?.amount! / 100
    };
  
    const newPackageData = new Package(packageData);
    const savePackageData = await newPackageData.save();

    console.log("User saved:", savePackageData._doc);

    return NextResponse.json({ success: "Package Activated Successfully" });
  } catch (error) {
    console.error("Error during package activation:", error);
    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
