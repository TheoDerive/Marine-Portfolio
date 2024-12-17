import ProjetModel from "@/models/ProjetModel";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }) {
  const { id } = await params;

  const projet = await ProjetModel.findOne({ _id: id });

  if (projet) {
    return NextResponse.json({
      message: "Votre projet a ete trouver",
      projet: projet,
      status: 200,
    });
  }

  return NextResponse.json({
    message: "Votre projet n'a pas ete trouver",
    status: 404,
  });
}
