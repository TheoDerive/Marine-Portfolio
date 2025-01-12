import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import DiplomesModel from "@/models/DiplomesModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const id = body.get("id");

    const diplomeExist = await DiplomesModel.findOne({ _id: id });

    if (diplomeExist) {
      await DiplomesModel.findOneAndDelete({
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
