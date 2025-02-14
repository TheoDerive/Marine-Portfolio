import { deleteFile } from "@/lib/github";
import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const id = body.get("id");

    const competanceExist = await CompetancesModel.findOne({ _id: id });

    if (competanceExist) {
      await deleteFile("competance", competanceExist.image);
      await CompetancesModel.findOneAndDelete({
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
