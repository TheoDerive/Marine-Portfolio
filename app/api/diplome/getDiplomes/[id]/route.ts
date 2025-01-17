import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import DiplomesModel from "@/models/DiplomesModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const requestURL = req.url.split("/");
    const id = requestURL[requestURL.length - 1];

    const diplome = await DiplomesModel.findOne({ _id: id });

    if (diplome) {
      return httpResponse(StatusCode.Success, diplome);
    }

    return httpResponse(StatusCode.NotFound);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
