import { pushFile } from "@/lib/github";
import { connectDB } from "@/lib/mongodb";
import ProjetModel from "@/models/ProjetModel";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();

    const name = body.get("name");

    const projetExist = await ProjetModel.find({ name: name });

    if (projetExist.length > 0) {
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

        const projet = new ProjetModel({
          name,
          image: `/images/projet/${imageName}`,
          description,
          competances,
          entreprise,
        });

        await ProjetModel.findOneAndUpdate(
          { _id: projetExist._id },
          {
            name: projet.name,
            image: projet.image,
            description: projet.description,
            competances: projet.competances,
            entreprise: projet.entreprise,
          },
        );

        return NextResponse.json({
          message: "Votre projet a ete modifier",
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
        message: "Votre projet existe deja",
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
