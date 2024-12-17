import { pushFile } from "@/lib/github";
import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const image = body.get("image") as string;
    const imageName = body.get("image-name") as string;
    const name = body.get("name") as string;

    if (image && imageName && name) {
      await pushFile("competance", image, imageName);

      const competance = new CompetancesModel({
        name: name,
        image: `/images/competance/${imageName}`,
      });

      await competance.save();

      return NextResponse.json({
        message: "Votre competance a ete ajouter",
        status: 200,
      });
    }
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
