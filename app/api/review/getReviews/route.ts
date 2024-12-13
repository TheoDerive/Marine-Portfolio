import { connectDB } from "@/lib/mongodb";
import ReviewModel from "@/models/ReviewModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const reviews = await ReviewModel.find({});

    return NextResponse.json({ reviews: reviews });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
