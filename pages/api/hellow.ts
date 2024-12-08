import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // Handle GET requests
  if (req.method === "GET") {
    res.status(200).json({ message: "Hello from Next.js!" });
  } else {
    // Method Not Allowed
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
