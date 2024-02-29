// dbConfig.ts
import mongoose from "mongoose";
import userSchema from "../models/userModels"; 

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE_URI!, {
      dbName: "ai_genie",
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to Database");
      isConnected = true;
    });

    connection.on("error", (err: any) => {
      console.log(err);
      process.exit();
    });
  } catch (error) {
    console.log("Error connecting to the database");
  }
};
