import { connectToDatabase } from "@/db/dbConfig";
import axios from "axios";

export const saveSupportRequest = async (supportRequestData: any) => {
  console.log(supportRequestData);
  // Connect to the database
  connectToDatabase();
const res = await axios.post("/api/support", {supportRequestData})
};
