import CompetancesModel from "@/models/CompetancesModel";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }) {
  const { id } = await params;
  console.log(id);

  const competance = await CompetancesModel.findOne({ _id: id });

  if (competance) {
    return NextResponse.json({
      message: "Votre competance a ete trouver",
      competance: competance,
      status: 200,
    });
  }

  return NextResponse.json({
    message: "Votre competance n'a pas ete trouver",
    status: 404,
  });
}
