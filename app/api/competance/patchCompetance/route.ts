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

    const id = body.get("id") as string;

    const competanceExist = await CompetancesModel.findOne({ _id: id });

    if (competanceExist) {
      const image = body.get("image") as string;
      if (image !== "0") {
        await deleteFile("competance", competanceExist.image);
      }

      const name = body.get("name") as string;
      let imageName = body.get("image-name") as string;
      imageName = imageName.split(" ").join("_");
      const type = body.get("type") as string;

      if (image && imageName && name) {
        if (image !== "0") {
          await pushFile("competance", image, imageName);
        }

        const competance = {
          name: name,
          image:
            image === "0"
              ? competanceExist.image
              : `/images/competance/${imageName}`,
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
