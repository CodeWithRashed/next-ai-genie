// Import necessary modules and functions
import { connectToDatabase } from "@/db/dbConfig";
import Package from "@/models/packageModels";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Main POST function
export async function POST(request: NextRequest) {
  const session = await getServerSession();
  try {
    // Connect to the database
    connectToDatabase();

    // Parse the request body
    const reqBody = await request.json();
    console.log("Received request body:", reqBody);
    if (!reqBody.sessionId || !reqBody?.packageName) {
      return NextResponse.json({ error: "Invalid Payment Request" });
    } else {
      const paymentSession = await stripe.checkout.sessions.retrieve(
        reqBody.sessionId
      );
      if (paymentSession.payment_status == "paid") {
        let selectedPackage;

        if (reqBody?.packageName == "FREE") {
          selectedPackage = {
            packageName: "FREE",
            promptCount: 3,
            packageFor: session?.user.email,
            packagePrice: 0,
          };
        } else if (reqBody?.packageName == "PREMIUM") {
          selectedPackage = {
            packageName: "PREMIUM",
            promptCount: 10,
            packageFor: session?.user.email,
            packagePrice: 9.0,
          };
        } else if (reqBody?.packageName == "GOLDEN") {
          selectedPackage = {
            packageName: "GOLDEN",
            promptCount: 100,
            packageFor: session?.user.email,
            packagePrice: 19.0,
          };
        } else {
          // Handle the case where reqBody?.packageName doesn't match any known package
          console.error("Invalid package name:", reqBody?.packageName);
        }

        // Now you can use the selectedPackage as needed
        console.log(selectedPackage);

        //Find Previous package if available
        const previousPackage = await Package.findOne({
          packageFor: session?.user.email,
        });

        if (previousPackage) {
          const updatedPackage = {
            packageName: selectedPackage?.packageName,
            promptCount: selectedPackage?.promptCount,
            packagePrice: selectedPackage?.packagePrice,
          };

          // Use findOneAndUpdate to update the document
          const updatedDocument = await Package.findOneAndUpdate(
            { packageFor: session?.user.email },
            { $set: updatedPackage },
            { new: true }
          );

          console.log(updatedDocument);
        } else {
          // Create New User
          const newPackage = new Package({
            ...selectedPackage,
          });

          console.log(selectedPackage)

          // Saving User
          const savedPackage = await newPackage.save();

          console.log(savedPackage)
        }
      }
    }

    // // Check for a duplicate user or handle package activation logic
    // const packageData = await Package.findOne({
    //   packageFor: reqBody.packageFor,
    // });

    // if (packageData) {
    //   console.log("User already exists:", packageData);
    //   return NextResponse.json({ error: "User Already Exists" });
    // }

    // Handle package activation logic here...

    // Send a success response
    return NextResponse.json({ success: "Package Activated Successfully" });
  } catch (error) {
    console.error("Error during package activation:", error);
    return NextResponse.json({ error: "Something went wrong! Try Again!" });
  }
}
