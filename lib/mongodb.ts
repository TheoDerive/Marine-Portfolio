import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Veuillez renseignez une uri de connection a la base de donnee mongodb",
  );
}

export async function connectDB() {
  const client = await mongoose.connect(MONGODB_URI, {
    dbName: "Portfolio",
  });
  return client;
}
