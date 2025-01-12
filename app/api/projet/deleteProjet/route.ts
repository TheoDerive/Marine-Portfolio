import { deleteFile } from "@/lib/github";
import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import ProjetModel from "@/models/ProjetModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

const imgKeys = [
  "presImg",
  "ctxImg",
  "resultImg",
  "solutionImg",
  "challengeImg",
];

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const id = body.get("id");

    const projetExist = await ProjetModel.findOne({ _id: id });

    if (projetExist) {
      for (let index = 0; index < imgKeys.length; index++) {
        const el = imgKeys[index];
        const imgEl = projetExist[el];

        if (Array.isArray(imgEl)) {
          for (let j = 0; j < imgEl.length; j++) {
            const element = imgEl[j];
            await deleteFile("projet", element);
          }
        } else {
          await deleteFile("projet", imgEl);
        }
      }

      await ProjetModel.findOneAndDelete({
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
