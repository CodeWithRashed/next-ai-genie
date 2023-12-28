// dbConfig.ts
import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
     mongoose.connect(process.env.DATABASE_URI!, {
      dbName: "ai_genie",
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to Database");
    });

    connection.on("error", (err: any) => {
      console.log(err);
      process.exit();
    });
  } catch (error) {
    console.log("Error connecting to the database");
  }
};
