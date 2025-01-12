import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import ProjetModel from "@/models/ProjetModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const requestURL = req.url.split("/");
    const id = requestURL[requestURL.length - 1];

    const projet = await ProjetModel.findOne({ _id: id });

    if (projet) {
      return httpResponse(StatusCode.Success, projet);
    }

    return httpResponse(StatusCode.NotFound);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
