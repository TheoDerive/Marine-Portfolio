import { pushFile } from "@/lib/github";
import { connectDB } from "@/lib/mongodb";
import ReviewModel from "@/models/ReviewModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const image = body.get("image") as string;
    const imageName = body.get("image-name") as string;
    const entrepriseName = body.get("entreprise");
    const stars = body.get("stars");
    const personne = body.get("personne");
    const poste = body.get("poste");
    const message = body.get("message");

    if (
      image &&
      imageName &&
      entrepriseName &&
      stars &&
      personne &&
      poste &&
      message
    ) {
      await pushFile("review", image, imageName);

      const review = new ReviewModel({
        image: `/images/review/${imageName}`,
        entrepriseName,
        stars,
        personne,
        poste,
        message,
      });

      await review.save();

      return NextResponse.json({
        message: "Votre review a ete ajouter",
        status: 200,
      });
    }
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
