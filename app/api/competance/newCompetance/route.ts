import { pushFile } from "@/lib/github";
import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const name = body.get("name") as string;

    const competanceExist = await CompetancesModel.findOne({ name: name });

    if (!competanceExist) {
      const image = body.get("image") as string;
      let imageName = body.get("image-name") as string;
      imageName = imageName.split(" ").join("_");
      const type = body.get("type") as string;

      if (image && imageName && name) {
        await pushFile("competance", image, imageName);

        const competance = new CompetancesModel({
          name: name,
          image: `/images/competance/${imageName}`,
          type: type,
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
