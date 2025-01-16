import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

if (!MONGODB_URI) {
  throw new Error(
    "Veuillez renseignez une uri de connection a la base de donnee mongodb",
  );
}

export async function connectDB() {
  if (global.mongoose.conn) {
    console.log("Connection avec le cache");
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    console.log("Connexion à MongoDB...");
    global.mongoose.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "Portfolio",
        maxPoolSize: 10,
      })
      .then((mongoose) => mongoose);
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}
