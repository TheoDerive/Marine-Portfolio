import { connectDB } from "@/lib/mongodb";
import ReviewModel from "@/models/ReviewModel";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();

    await ReviewModel.findOneAndUpdate(
      { _id: "675c2ea9d12a134f92436385" },
      {
        personne: "Je teste",
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
