import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const competances = await CompetancesModel.find({});

    return NextResponse.json({ competances: competances });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
