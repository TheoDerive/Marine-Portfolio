import { connectDB } from "@/lib/mongodb";
import ReviewModel from "@/models/ReviewModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const reviews = await ReviewModel.find({});

    if (reviews.length > 0) {
      return NextResponse.json({ reviews: reviews, status: 200 });
    }

    return NextResponse.json({
      message: "Nous n'avons pas trouver de review",
      status: 404,
    });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
