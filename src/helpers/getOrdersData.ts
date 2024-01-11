import { connectToDatabase } from "@/db/dbConfig"
import Package from "@/models/packageModels"

export const getOrdersData = async () => {   

    const ordersData = await Package.find().lean()

   return ordersData
    
}