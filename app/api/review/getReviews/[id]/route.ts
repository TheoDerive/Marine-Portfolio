import ReviewModel from "@/models/ReviewModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const requestURL = req.url.split("/");
  const id = requestURL[requestURL.length - 1];
  console.log(id);

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
