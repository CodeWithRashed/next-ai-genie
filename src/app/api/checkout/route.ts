import { createCheckoutLink, createCustomerIfNull } from "@/helpers/doPayment";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const requestData = await request.json();

    if (!requestData) {
      return NextResponse.json({ message: "No Data Found" });
    }

    const customer = await createCustomerIfNull();
    const checkoutLink = await createCheckoutLink(
      customer,
      requestData.stripePackageId
    );

    if (checkoutLink) {
      // const redirectUrl = new URL(checkoutLink).toString(); // Convert URL object to string
      // console.log(redirectUrl);
      return NextResponse.json(checkoutLink);
    }

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
};
