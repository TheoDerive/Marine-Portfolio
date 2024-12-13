import { connectDB } from "@/lib/mongodb";
import ProjetModel from "@/models/ProjetModel";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();

    await ProjetModel.findOneAndUpdate(
      { _id: "675c2b1553cab1fa7dfdddb1" },
      {
        name: "Je teste",
      },
    );

    return NextResponse.json({
      message: "Votre review a ete ajouter",
      status: 200,
    });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
