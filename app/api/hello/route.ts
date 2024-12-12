import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await connectDB();

    return NextResponse.json({ message: "Connexion réussie" });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
