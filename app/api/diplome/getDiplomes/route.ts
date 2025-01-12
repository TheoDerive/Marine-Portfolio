import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import DiplomesModel from "@/models/DiplomesModel";
import { StatusCode } from "@/types/enumStatusCode";

export async function GET() {
  try {
    await connectDB();

    const diplomes = await DiplomesModel.find({});

    if (diplomes) {
      return httpResponse(StatusCode.Success, diplomes);
    }

    return httpResponse(StatusCode.NotFound);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
