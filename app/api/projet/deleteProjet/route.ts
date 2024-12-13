import { connectDB } from "@/lib/mongodb";
import ProjetModel from "@/models/ProjetModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    await ProjetModel.findOneAndDelete({
      _id: "675c2b1553cab1fa7dfdddb1",
    });

    return NextResponse.json({
      message: "Votre projet a ete supprimer",
      status: 200,
    });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
