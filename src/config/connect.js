//File to connect to mongoDB
import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Database connection established ✅");
  } catch (error) {
    console.log("Database connection error", error);
  }
};
