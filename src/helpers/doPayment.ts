// @ts-nocheck

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
    await connectToDatabase()
      const user = await User.findOne({email: session?.user.email }).lean()
      const subscriptions = await stripe.subscriptions.list({
          customer: String(user?.stripe_customer_id)
      })
      return subscriptions.data[0];
  }

  return false;
}

export async function createCheckoutLink(customer: string, stripePackageId:string) {
  const checkout = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXTAUTH_URL}/checkout/success`,
    cancel_url: `${process.env.NEXTAUTH_URL}`,
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
  connectToDatabase();
  const user = await User.findOne({ email: userEmail }).lean();
  try {
   
    if (!user?.stripe_customer_id) {
      // Create customer in Stripe
      const customer = await stripe.customers.create({
        email: userEmail,
        name: session?.user.name
      });

      // Update user in MongoDB with Stripe customer ID
      await User.findOneAndUpdate(
        { email: userEmail },
        { stripe_customer_id: customer.id }
      );

      const user = await User.findOne({ email: userEmail }).lean();
      return user?.stripe_customer_id;
    }
  } catch (error) {
  }

  return user?.stripe_customer_id;
}

export async function generateCustomerPortalLink(stripeCustomerId:string) {
  try {
      
      const portalSession = await stripe.billingPortal.sessions.create({
          customer: stripeCustomerId,
          return_url: process.env.NEXTAUTH_URL + "/dashboard/settings/billing", 
      });
      return portalSession.url;
  } catch (error) {
      return undefined;
  }
}