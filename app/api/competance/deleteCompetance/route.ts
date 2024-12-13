import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    await CompetancesModel.findOneAndDelete({
      _id: "675c138acc37f992f8758a72",
    });

    return NextResponse.json({
      message: "Votre competance a ete supprimer",
      status: 200,
    });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
