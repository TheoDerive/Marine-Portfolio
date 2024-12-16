import { connectDB } from "@/lib/mongodb";
import ProjetModel from "@/models/ProjetModel";
import { NextResponse } from "next/server";
import { Test } from "@/lib/github.ts";

export async function GET() {
  try {
    await connectDB();

    await Test();

    const projets = await ProjetModel.find({});

    return NextResponse.json({ projets: projets });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
