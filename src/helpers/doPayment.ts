
import { getServerSession } from 'next-auth';
import Stripe from 'stripe';

import { options } from '@/app/api/auth/[...nextauth]/options';
import User from '@/models/userModels';


export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
    apiVersion: '2023-10-16',
});

export async function hasSubscription() {
    const session = await getServerSession(options);

    if (session) {
        const user = await User.findOne({email: session?.user.email }).lean()
        const subscriptions = await stripe.subscriptions.list({
            customer: String(user?.stripe_customer_id?)
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
                price: 'price_1NarR3APMZcBliJSoefCKTi5'
            }
        ],
        mode: "subscription"
    })

    return checkout.url;
}

export async function createCustomerIfNull() {
    const session = await getServerSession(options);

    if (session) {
        // Find user in MongoDB
        const user = await User.findOne({ email: session?.user?.email }).lean();
    
        if (user && !user.stripe_customer_id) {
            try {
                // Create customer in Stripe
                const customer = await stripe.customers.create({
                    email: user.email
                });
    
                // Update user in MongoDB with Stripe customer ID
                await User.updateOne(
                    { _id: user._id }, 
                    { stripe_customer_id: customer.id }
                );
            } catch (error) {
                console.error("Error creating Stripe customer:", error);
                
            }
        }
    
        
        const newUser = await User.findOne({email: session.user?.email });
        return newUser?.stripe_customer_id;
    }
    
}