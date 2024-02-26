import { createCustomerIfNull } from "@/helpers/doPayment";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2023-10-16",
});


export const POST = async (request: any) => {
  const requestData = await request.json();
  const userEmail = requestData.packageFor
  try {
    if (requestData) {
      const checkoutUser = await createCustomerIfNull(userEmail)


      return NextResponse.json({ user });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(err.message);
  }
};
