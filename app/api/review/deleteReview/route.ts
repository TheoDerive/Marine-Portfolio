import { deleteFile } from "@/lib/github";
import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import ReviewModel from "@/models/ReviewModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const id = body.get("id");

    const reviewExist = await ReviewModel.findOne({ _id: id });

    if (reviewExist) {
      await deleteFile("review", reviewExist.image);

      await ReviewModel.findOneAndDelete({
        _id: id,
      });

      return httpResponse(StatusCode.Success);
    }

    return httpResponse(StatusCode.NotFound);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
