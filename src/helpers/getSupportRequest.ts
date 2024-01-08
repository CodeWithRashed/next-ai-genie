import { getServerSession } from "next-auth"
import { options } from "../app/api/auth/[...nextauth]/options"
import { connectToDatabase } from "@/db/dbConfig"
import Support from "@/models/supportModels"


export const GetSupportData = async () => {
    connectToDatabase()
    const session = await getServerSession(options)
    if(!session){
        return
    }

    const supportData = await Support.find({ email: session?.user.email }).select('-_id email name message subject status').lean();

console.log(supportData)
   return supportData
    
}