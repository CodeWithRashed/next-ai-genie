import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET)

export const POST = async (request: any) => {
    const {packageData} = await request.json()
    // const 
    return NextResponse.json({url: ""})
}