import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import DiplomesModel from "@/models/DiplomesModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const name = body.get("name") as string;

    const diplomeExist = await DiplomesModel.findOne({ name: name });

    if (!diplomeExist) {
      const name = body.get("name") as string;
      const school = body.get("school") as string;
      const description = body.get("description") as string;

      if (school && description && name) {
        const competance = new DiplomesModel({
          name,
          school,
          description,
        });

        await competance.save();

        return httpResponse(StatusCode.Success, competance);
      }

      return httpResponse(StatusCode.UnprocessableEntity);
    }

    return httpResponse(StatusCode.NotFound);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
