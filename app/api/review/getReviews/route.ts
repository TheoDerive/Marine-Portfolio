import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import ReviewModel from "@/models/ReviewModel";
import { StatusCode } from "@/types/enumStatusCode";

export async function GET() {
  try {
    await connectDB();

    const reviews = await ReviewModel.find({});

    if (reviews.length > 0) {
      return httpResponse(StatusCode.Success, reviews);
    }

    return httpResponse(StatusCode.NotFound);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
