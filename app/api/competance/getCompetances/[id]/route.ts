import CompetancesModel from "@/models/CompetancesModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const requestURL = req.url.split("/");
  const id = requestURL[requestURL.length - 1];

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
