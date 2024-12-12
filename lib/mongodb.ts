import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Veuillez renseignez une uri de connection a la base de donnee mongodb",
  );
}

export async function connectDB() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  return client;
}
