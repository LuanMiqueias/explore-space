import { connectToDatabase } from "../../../config/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db, client } = await connectToDatabase();
  if (client.isConnected()) {
    const planets = await db.collection("planets").find().toArray();
    return res.json(planets);
  }
  return res.status(500).json({ error: "client DB is not connected" });
};
