import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb"; // Adjust path if necessary

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Connect to the database
    await dbConnect.connect();

    // Query to fetch data from the 'user' collection, selecting only the fields we need
    const users = await dbConnect
      .db(process.env.MONGODB_DB)
      .collection("players")
      .find(
        {},
        {
          projection: { _id: 1, name: 1, email: 1 }, // Selecting _id, name, and email
        }
      )
      .toArray();

    // If no users are found
    if (!users.length) {
      return res
        .status(404)
        .json({ success: false, message: "No users found" });
    }

    // Respond with the fetched users
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("MongoDB query error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch data from MongoDB" });
  }
}
