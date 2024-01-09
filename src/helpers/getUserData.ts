import { getServerSession } from "next-auth"
import { options } from "../app/api/auth/[...nextauth]/options"
import { connectToDatabase } from "@/db/dbConfig"
import User from "@/models/userModels"

export const GetUserData = async () => {
    connectToDatabase()
    const session = await getServerSession(options)
    if(!session){
        return
    }

    const userData = await User.findOne({email: session?.user.email }).select('-_id role email name').lean()

   return userData
    
}