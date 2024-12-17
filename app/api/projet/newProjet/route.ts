import { pushFile } from "@/lib/github";
import { connectDB } from "@/lib/mongodb";
import ProjetsModel from "@/models/ProjetModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();

    const name = body.get("name");
    const image = body.get("image") as string;
    const imageName = body.get("image-name") as string;
    const description = body.get("description");
    const competances = body.get("competances");
    const entreprise = body.get("entreprise");

    if (
      name &&
      image &&
      imageName &&
      description &&
      competances &&
      entreprise
    ) {
      await pushFile("projet", image, imageName);

      const projet = new ProjetsModel({
        name,
        image: `/images/projet/${imageName}`,
        description,
        competances,
        entreprise,
      });

      await projet.save();

      return NextResponse.json({
        message: "Votre projet a ete ajouter",
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
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
