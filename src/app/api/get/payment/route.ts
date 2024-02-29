import { connectToDatabase } from "@/db/dbConfig";
import { createCustomerIfNull, generateCustomerPortalLink, hasSubscription } from "@/helpers/doPayment";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    connectToDatabase();

    const { searchParams } = new URL(request.url);
    const query = searchParams.get("data");
    let data = null;
    let currentPackage = null;

    if (query == "customer_portal_link") {
      const stripeCustomerId = await createCustomerIfNull()
      data = await generateCustomerPortalLink(stripeCustomerId);
      return NextResponse.json({ success: "payment route hit", data });
    }

    data = await hasSubscription();
    return NextResponse.json({ success: "payment route hit", data });
  } catch (error) {

    return NextResponse.json({
      error: "Something went wrong while getting payment data! Try Again!",
    });
  }
}
