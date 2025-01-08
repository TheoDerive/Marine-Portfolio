import { deleteFile } from "@/lib/github";
import { connectDB } from "@/lib/mongodb";
import ReviewModel from "@/models/ReviewModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const id = body.get("id");

    const reviewExist = await ReviewModel.findOne({ _id: id });

    if (reviewExist) {
      await deleteFile("review", reviewExist.image)
      await ReviewModel.findOneAndDelete({
        _id: "675c2ea9d12a134f92436385",
      });

      return NextResponse.json({
        message: "Votre projet a ete supprimer",
        status: 200,
      });
    }

    return NextResponse.json({
      message: "Nous n'avons pas trouver votre projet",
      status: 404,
    });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
