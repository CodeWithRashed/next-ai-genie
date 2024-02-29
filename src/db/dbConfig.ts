// dbConfig.ts
import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE_URI!, {
      dbName: "ai_genie",
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      isConnected = true;
    });

    connection.on("error", (err: any) => {
      process.exit();
    });
  } catch (error) {
    console.log("Error connecting to the database");
  }
};
