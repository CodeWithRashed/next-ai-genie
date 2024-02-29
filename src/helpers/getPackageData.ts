import { getServerSession } from "next-auth"
import { options } from "../app/api/auth/[...nextauth]/options"
import Package from "@/models/packageModels"

export const getPackageData = async () => {
    
    const session = await getServerSession(options)
    if(!session){
        return
    }

    const packageData = await Package.findOne({packageFor: session?.user.email }).lean()

   return packageData
    
}