import { getServerSession } from "next-auth"
import { options } from "../app/api/auth/[...nextauth]/options"
import { connectToDatabase } from "@/db/dbConfig"
import User from "@/models/userModels"

export const GetUserData = async () => {
    connectToDatabase()
    const session = await getServerSession(options)
    if(!session){
        return {message: "User Session Not Found!"}
    }

    const userData = await User.findOne({email: session?.user.email }).select('-_id role email name image stripe_customer_id').lean()

   return userData
    
}