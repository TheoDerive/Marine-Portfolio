import { connectDB } from "@/lib/mongodb";
import ProjetModel from "@/models/ProjetModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const projets = await ProjetModel.find({});

    return NextResponse.json({ projets: projets });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
