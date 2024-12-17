import ProjetModel from "@/models/ProjetModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const requestURL = req.url.split("/");
  const id = requestURL[requestURL.length - 1];

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
