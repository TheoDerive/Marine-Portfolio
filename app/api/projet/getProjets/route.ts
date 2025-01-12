import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import ProjetModel from "@/models/ProjetModel";
import { StatusCode } from "@/types/enumStatusCode";

export async function GET() {
  try {
    await connectDB();

    const projets = await ProjetModel.find({});

    if (projets) {
      return httpResponse(StatusCode.Success, projets);
    }

    return httpResponse(StatusCode.NotFound);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
