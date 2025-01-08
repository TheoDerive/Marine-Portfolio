import { connectDB } from "@/lib/mongodb";
import CompetancesModel from "@/models/CompetancesModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();
    const id = body.get("id");

    const competanceExist = await CompetancesModel.findOne({ _id: id });

    if (competanceExist) {
      await CompetancesModel.findOneAndDelete({
        _id: id,
      });

      return NextResponse.json({
        message: "Votre competance a ete supprimer",
        status: 200,
      });
    }

    return NextResponse.json({
      message: "Votre competance n'a pas ete trouve",
      status: 404,
    });
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return NextResponse.json({
      error: "Impossible de se connecter à la base de données",
    });
  }
}
