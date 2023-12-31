import { getServerSession } from "next-auth"
import { options } from "../app/api/auth/[...nextauth]/options"
import { connectToDatabase } from "@/db/dbConfig"
import Package from "@/models/packageModels"

export const GetPackageData = async () => {
    connectToDatabase()
    const session = await getServerSession(options)
    if(!session){
        return
    }

    const packageData = await Package.findOne({packageFor: session?.user.email })

   return packageData
    
}