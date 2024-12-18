import mongoose from "mongoose";

let cache: null | mongoose.Connection = null;

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Veuillez renseignez une uri de connection a la base de donnee mongodb",
  );
}

export async function connectDB() {
  if (!cache) {
    const connect = await mongoose.connect(MONGODB_URI, {
      dbName: "Portfolio",
    });

    cache = connect.connection;
  }

  return cache;
}
