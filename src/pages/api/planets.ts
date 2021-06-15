// import { connectToDatabase } from "../../../config/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const datafake = [
  {
    _id: "60a54902ee621e16acd51a0c",
    surface_temperature: "123°C -233°C",
    name: "moon",
    image_url: "https://luanmiqueias.com.br/explore-space/images/moon.png",
    subtitle: "A loyal companion",
    mass: "7,349 x 10^22 kg",
    orbit_period: 27.3,
    orbits: "The Earth",
    distance_from_the_earth: 384405,
    __v: 0,
  },
  {
    _id: "60a54fadd4385920e1b6c818",
    surface_temperature: "123°C -233°C",
    name: "earth 2",
    image_url: "https://luanmiqueias.com.br/explore-space/images/moon.png",
    subtitle: "A loyal companion",
    mass: "7,349 x 10^22 kg",
    orbit_period: 27.3,
    orbits: "The Earth",
    distance_from_the_earth: 384405,
    __v: 0,
  },
  {
    _id: "60aeae01a2c8be74a28cfaf3",
    surface_temperature: "123°C -233°C",
    name: "earth 3",
    image_url: "https://luanmiqueias.com.br/explore-space/images/moon.png",
    subtitle: "A loyal companion",
    mass: "7,349 x 10^22 kg",
    orbit_period: 27.3,
    orbits: "The Earth",
    distance_from_the_earth: 384405,
    __v: 0,
  },
  {
    _id: "60aeae01a2c8be74afaf3",
    surface_temperature: "123°C -233°C",
    name: "earth 4",
    image_url: "https://luanmiqueias.com.br/explore-space/images/moon.png",
    subtitle: "A loyal companion",
    mass: "7,349 x 10^22 kg",
    orbit_period: 27.3,
    orbits: "The Earth",
    distance_from_the_earth: 384405,
    __v: 0,
  },
  {
    _id: "60aeae01a2c8be748cfaf3",
    surface_temperature: "123°C -233°C",
    name: "earth 5",
    image_url: "https://luanmiqueias.com.br/explore-space/images/moon.png",
    subtitle: "A loyal companion",
    mass: "7,349 x 10^22 kg",
    orbit_period: 27.3,
    orbits: "The Earth",
    distance_from_the_earth: 384405,
    __v: 0,
  },
  {
    _id: "60aeae01a2cbe74a28cfaf3",
    surface_temperature: "123°C -233°C",
    name: "earth 6",
    image_url: "https://luanmiqueias.com.br/explore-space/images/moon.png",
    subtitle: "A loyal companion",
    mass: "7,349 x 10^22 kg",
    orbit_period: 27.3,
    orbits: "The Earth",
    distance_from_the_earth: 384405,
    __v: 0,
  },
];
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const { db, client } = await connectToDatabase();
  // if (client.isConnected()) {
  //   const planets = await db.collection("planets").find().toArray();
  //   return res.json(planets);
  // }
  // return res.status(500).json({ error: "client DB is not connected" });
  return res.json(datafake);
};
