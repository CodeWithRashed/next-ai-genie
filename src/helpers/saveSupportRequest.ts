import { connectToDatabase } from "@/db/dbConfig";
import axios from "axios";

export const saveSupportRequest = async (supportRequestData: any) => {
const res = await axios.post("/api/support", {supportRequestData})
};