import { deleteFile, pushFile } from "@/lib/github";
import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import ReviewModel from "@/models/ReviewModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const entrepriseName = body.get("entreprise");

    const reviewExist = await ReviewModel.findOne({
      entrepriseName: entrepriseName,
    });

    if (reviewExist) {
      await deleteFile("review", reviewExist.image);

      const image = body.get("image") as string;
      const imageName = body.get("image-name") as string;
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

        await ReviewModel.findOneAndUpdate(
          { _id: reviewExist._id },
          {
            image: review.image,
            entrepriseName: review.entrepriseName,
            stars: review.stars,
            personne: review.personne,
            poste: review.poste,
            message: review.message,
          },
        );

        return httpResponse(StatusCode.Success);
      }

      return httpResponse(StatusCode.UnprocessableEntity);
    }

    return httpResponse(StatusCode.NotFound);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
