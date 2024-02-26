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

      console.log("subscriptions", subscriptions)
      console.log("user", user)
      return subscriptions.data.length > 0;
  }

  return false;
}

export async function createCheckoutLink(customer: string) {
  const checkout = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000/dashboard/billing?success=true",
    cancel_url: "http://localhost:3000/dashboard/billing?success=true",
    customer: customer,
    line_items: [
      {
        price: "price_1NarR3APMZcBliJSoefCKTi5",
      },
    ],
    mode: "subscription",
  });

  return checkout.url;
}

export async function createCustomerIfNull(userEmail: string) {
  connectToDatabase();
  const user = await User.findOne({ email: userEmail }).lean();
  try {
   
    if (!user?.stripe_customer_id) {
      // Create customer in Stripe
      const customer = await stripe.customers.create({
        email: userEmail,
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

export async function generateCustomerPortalLink(customerId: string) {
  try {
      
      const portalSession = await stripe.billingPortal.sessions.create({
          customer: customerId,
          return_url: process.env.NEXTAUTH_URL + "/dashboard/settings/billing", 
      });

      console.log()

      return portalSession.url;
  } catch (error) {
      console.log(error)
      return undefined;
  }
}