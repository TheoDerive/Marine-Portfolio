import { deleteFile, pushFile } from "@/lib/github";
import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const name = body.get("name") as string;

    const competanceExist = await CompetancesModel.findOne({ name: name });

    if (competanceExist) {
      await deleteFile("competance", competanceExist.image);

      const image = body.get("image") as string;
      let imageName = body.get("image-name") as string;
      imageName = imageName.split(" ").join("_");
      const type = body.get("type") as string;
      console.log(imageName);

      if (image && imageName && name) {
        await pushFile("competance", image, imageName);

        const competance = {
          name: name,
          image: `/images/competance/${imageName}`,
          type: type,
        };

        await CompetancesModel.findOneAndUpdate(
          { _id: competanceExist._id },
          {
            name: competance.name,
            image: competance.image,
            type: competance.type,
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
