import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { StatusCode } from "@/types/enumStatusCode";

export async function GET() {
  try {
    await connectDB();

    const competances = await CompetancesModel.find({});

    if (competances) {
      return httpResponse(StatusCode.Success, competances);
    }

    return httpResponse(StatusCode.NotFound);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
