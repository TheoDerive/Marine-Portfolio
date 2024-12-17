import ReviewModel from "@/models/ReviewModel";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }) {
  const { id } = await params;

  const review = await ReviewModel.findOne({ _id: id });

  if (review) {
    return NextResponse.json({
      message: "Votre avis a ete trouver",
      review: review,
      status: 200,
    });
  }

  return NextResponse.json({
    message: "Votre avis n'a pas ete trouver",
    status: 404,
  });
}
