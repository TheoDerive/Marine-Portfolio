import { connectDB } from "@/lib/mongodb";
import ProjetsModel from "@/models/ProjetModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const projet = new ProjetsModel({
      name: "test de projet",
      image: "/",
      description: "test de description",
      competances: [],
      entreprise: "string",
    });

    await projet.save();

    return NextResponse.json({
      message: "Votre projet a ete ajouter",
      status: 200,
    });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
