import { connectToDatabase } from "@/db/dbConfig";
import axios from "axios";

export const saveSupportRequest = async (supportRequestData: any) => {
    connectToDatabase()
const res = await axios.post("/api/support", {supportRequestData})
};