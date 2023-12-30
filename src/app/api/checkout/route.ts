
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: '2023-10-16'
});

// Backend code
export const POST = async (request: any) => {
  const requestData = await request.json();
  try {
    if (requestData) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
       
        invoice_creation: {
          enabled: true,
        },
        line_items: requestData.map((item: any) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.packageName,
              },
              unit_amount: item.packagePrice * 100,
            },
            quantity: 1,
            
          };
        }),
       
        success_url: `${request.headers.get("origin")}/dashboard?session=${process.env.STRIPE_SESSION_KEY}&packageName=${requestData[0].packageName}&promptCount=${requestData[0].promptCount}&packageFor=${requestData[0].packageFor}&packagePrice=${requestData[0].packagePrice}`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      console.log(session)
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(err.message);
  }
  };
  