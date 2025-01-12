import { pushFile } from "@/lib/github";
import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import ReviewModel from "@/models/ReviewModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const entrepriseName = body.get("entreprise");

    const reviewExist = await ReviewModel.findOne({
      entrepriseName: entrepriseName,
    });

    if (!reviewExist) {
      const image = body.get("image") as string;
      let imageName = body.get("image-name") as string;
      imageName = imageName.split(" ").join("_");
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
        const response = await pushFile("review", image, imageName);

        const review = new ReviewModel({
          image: `/images/review/${imageName}`,
          entrepriseName,
          stars,
          personne,
          poste,
          message,
        });

        await review.save();

        return httpResponse(StatusCode.Success, review);
      }
      return httpResponse(StatusCode.UnprocessableEntity);
    }
    return httpResponse(StatusCode.Conflict);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
