import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const competance = new CompetancesModel({
      name: "test de competance",
      image: "/",
    });

    await competance.save();

    return NextResponse.json({
      message: "Votre competance a ete ajouter",
      status: 200,
    });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
