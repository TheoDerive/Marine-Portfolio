import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const requestURL = req.url.split("/");
    const id = requestURL[requestURL.length - 1];

    const competance = await CompetancesModel.findOne({ _id: id });

    if (competance) {
      return httpResponse(StatusCode.Success, competance);
    }

    return httpResponse(StatusCode.NotFound);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
