// pages/api/test.ts
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Try to connect to the database
    await dbConnect();

    // If successful, send a success response
    res
      .status(200)
      .json({ success: true, message: "Successfully connected to MongoDB" });
  } catch (error) {
    // If there's an error, log it and send a failure response
    console.error("MongoDB connection error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to connect to MongoDB" });
  }
}
