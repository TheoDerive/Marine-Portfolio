import { connectDB } from "@/lib/mongodb";
import ReviewModel from "@/models/ReviewModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const review = new ReviewModel({
      image: "/",
      entrepriseName: "Entreprise Test",
      stars: 2,
      personne: "ted",
      poste: "Je ne sais pas",
      message: "Bon message",
    });

    await review.save();

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
