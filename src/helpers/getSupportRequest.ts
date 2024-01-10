import { connectToDatabase } from "@/db/dbConfig";
import Support from "@/models/supportModels";
import { GetUserData } from "./getUserData";
import { cache } from 'react'
export const GetSupportData = cache(async () => {
  try {
    connectToDatabase();
    const userData: any = await GetUserData();
    const role = userData?.role;
    let searchQuery: any = { email: userData?.email };
    if (role == "Admin") {
      searchQuery = {};
    }
    if (!userData) {
      return;
    }

    const supportData = await Support.find(searchQuery)
      .select("-_id email name message subject status")
      .lean();
    return supportData;
  } catch (error) {
    console.log(error);
  }
});
