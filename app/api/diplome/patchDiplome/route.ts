import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import DiplomesModel from "@/models/DiplomesModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();

    const id = body.get("id");

    const diplomeExist = await DiplomesModel.findOne({
      _id: id,
    });

    if (diplomeExist) {
      const name = body.get("name");
      const school = body.get("school");
      const description = body.get("description");

      if (name && school && description) {
        const diplome = {
          name,
          school,
          description,
        };

        await DiplomesModel.findOneAndUpdate(
          { _id: diplomeExist._id },
          diplome,
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
