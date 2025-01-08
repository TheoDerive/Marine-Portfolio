import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const competances = await CompetancesModel.find({});

    if (competances) {
      return NextResponse.json({ competances: competances, status: 200 });
    }
    return NextResponse.json({
      message: "Nous n'avons pas trouver de competances",
      status: 404,
    });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
      status: 400,
    });
  }
}
