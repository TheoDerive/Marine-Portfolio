import { pushFile } from "@/lib/github";
import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const name = body.get("name") as string;

    const competanceExist = await CompetancesModel.findOne({ name: name });

    if (!competanceExist) {
      const image = body.get("image") as string;
      const imageName = body.get("image-name") as string;
      const type = body.get("type") as string;

      if (image && imageName && name) {
        await pushFile("competance", image, imageName);

        const competance = new CompetancesModel({
          name: name,
          image: `/images/competance/${imageName}`,
          type: type,
        });

        await competance.save();

        return NextResponse.json({
          message: "Votre competance a ete ajouter",
          status: 200,
        });
      }

      return NextResponse.json(
        {
          message: "Il manque des donnees",
          status: 404,
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        message: "Votre competance existe deja",
        status: 401,
      },
      { status: 401 },
    );
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
