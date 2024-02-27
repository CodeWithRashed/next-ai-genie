import { getServerSession } from "next-auth";
import Stripe from "stripe";

import { options } from "@/app/api/auth/[...nextauth]/options";
import User from "@/models/userModels";
import { connectToDatabase } from "@/db/dbConfig";

export const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
  apiVersion: "2023-10-16",
});

export async function hasSubscription() {
  const session = await getServerSession(options);

  if (session) {
      const user = await User.findOne({email: session?.user.email }).lean()
      const subscriptions = await stripe.subscriptions.list({
          customer: String(user?.stripe_customer_id)
      })
      return subscriptions.data[0].plan;
  }

  return false;
}

export async function createCheckoutLink(customer: string, stripePackageId:string) {
  const checkout = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000/checkout/success",
    cancel_url: "http://localhost:3000/",
    customer: customer,
    line_items: [
      {
        price: stripePackageId,
        quantity: 1
      },
    ],
    mode: "subscription",
  });

  return checkout.url;
}

export async function createCustomerIfNull() {
const session = await getServerSession(options) 
  const userEmail = session?.user.email
  console.log("userEmail from server", userEmail)
  connectToDatabase();
  const user = await User.findOne({ email: userEmail }).lean();
  try {
   
    if (!user?.stripe_customer_id) {
      // Create customer in Stripe
      const customer = await stripe.customers.create({
        email: userEmail,
        name: session?.user.name
      });

      console.log("Stripe customer", customer);
      // Update user in MongoDB with Stripe customer ID
      await User.findOneAndUpdate(
        { email: userEmail },
        { stripe_customer_id: customer.id }
      );

      const user = await User.findOne({ email: userEmail }).lean();
      return user?.stripe_customer_id;
    }
  } catch (error) {
    console.error("Error creating Stripe customer:", error);
  }

  return user?.stripe_customer_id;
}

export async function generateCustomerPortalLink(stripeCustomerId:string) {
  console.log("stripeCustomerId1", stripeCustomerId)
  try {
      
      const portalSession = await stripe.billingPortal.sessions.create({
          customer: stripeCustomerId,
          return_url: process.env.NEXTAUTH_URL + "/dashboard/settings/billing", 
      });

      console.log()

      return portalSession.url;
  } catch (error) {
      console.log(error)
      return undefined;
  }
}