// @ts-nocheck
import { connectToDatabase } from "@/db/dbConfig";
import { stripe } from "@/helpers/doPayment";
import Package from "@/models/packageModels";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  connectToDatabase();

  try {
    const requestBody = await request.json();

    const dbPackageData = await Package.findOne({ packageFor: requestBody.userEmail }).lean();
    const user = await User.findOne({ email: requestBody.userEmail }).lean();

    const subscriptions = await stripe.subscriptions.list({
      customer: String(user?.stripe_customer_id),
    });

    const subscriptionPlan = subscriptions.data[0]?.items?.data[0]?.plan;

    if (!subscriptionPlan || !subscriptionPlan.active) {
      return NextResponse.json({ message: "Subscription is not active!" });
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

    const newPackagePrice = subscriptionPlan.amount / 100;

    if (dbPackageData) {
      if (dbPackageData.packagePrice !== newPackagePrice) {
        // Update the package if the prices are different
        await Package.findOneAndUpdate(
          { packageFor: requestBody.userEmail },
          {
            $set: {
              packageName,
              promptCount,
              packagePrice: newPackagePrice,
            },
          },
          { new: true }
        );

        return NextResponse.json({ success: "Package Updated Successfully" });
      } else {

        return NextResponse.json({ message: "Package price is already up to date" });
      }
    } else {
      // Create a new package if it doesn't exist
      const packageData = {
        packageName,
        promptCount,
        packageFor: requestBody.userEmail,
        packagePrice: newPackagePrice,
      };

      const newPackage = new Package(packageData);
      await newPackage.save();
      return NextResponse.json({ success: "Package Activated Successfully" });
    }
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
