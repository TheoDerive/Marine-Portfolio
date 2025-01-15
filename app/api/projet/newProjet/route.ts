import { pushFile } from "@/lib/github";
import httpResponse from "@/lib/httpResponse";
import { connectDB } from "@/lib/mongodb";
import ProjetModel from "@/models/ProjetModel";
import { StatusCode } from "@/types/enumStatusCode";
import { NextRequest } from "next/server";

type imgsContent = {
  img: string | string[];
  name: string | string[];
};

type imgsIndex = {
  presImg: imgsContent;
  solutionImg: imgsContent;
  resultImg: imgsContent;
  ctxImg: imgsContent;
  challengeImg: imgsContent;
};

const imgKeys: (keyof imgsIndex)[] = [
  "presImg",
  "ctxImg",
  "resultImg",
  "solutionImg",
  "challengeImg",
];

const imgs: imgsIndex = {
  presImg: {
    img: "",
    name: "",
  },
  ctxImg: {
    img: [],
    name: [],
  },
  challengeImg: {
    img: [],
    name: [],
  },
  solutionImg: {
    img: [],
    name: [],
  },
  resultImg: {
    img: [],
    name: [],
  },
};

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();

    const name = body.get("name");

    const projetExist = await ProjetModel.find({ name: name });

    if (projetExist.length === 0) {
      for (let index = 0; index < imgKeys.length; index++) {
        const el = imgKeys[index];

        const indexElement = Number(body.get(`${el}-index`));

        if (indexElement === 0) {
          const image = body.get(`${el}`);
          const name = body.get(`${el}-name`) as string;
          const imageName = name.split(" ").join("_");

          if (image && imageName) {
            imgs.presImg.img = image as string;
            imgs.presImg.name = imageName as string;
          }
        } else if (
          indexElement > 0 &&
          Array.isArray(imgs[el].img) &&
          Array.isArray(imgs[el].name)
        ) {
          for (let j = 0; j < indexElement; j++) {
            const image = body.get(`${el}-${j}`);
            const name = body.get(`${el}-${j}-name`) as string;
            const imageName = name.split(" ").join("_");

            if (image && imageName) {
              imgs[el].img.push(image as string);
              imgs[el].name.push(imageName as string);
            }
          }
        }
      }

      const description = body.get("description");
      const type = body.get("type");
      const competances = body.get("competances");
      const client = body.get("client");
      const service = body.get("service");
      const duree = body.get("duree");
      const lien = body.get("lien");
      const ctxDesc = body.get("ctxDesc");
      const challengeDesc = body.get("challengeDesc");
      const solutionDesc = body.get("solutionDesc");
      const resultDesc = body.get("resultDesc");

      if (name && description && competances && client && service && duree) {
        for (let index = 0; index < imgKeys.length; index++) {
          const el = imgKeys[index];

          if (el === "presImg") {
            await pushFile(
              "projet",
              imgs.presImg.img as string,
              imgs.presImg.name as string,
            );
          } else if (imgs[el].img.length > 0 && imgs[el].name.length > 0) {
            for (let j = 0; j < imgs[el].img.length; j++) {
              const elementImage = imgs[el].img[j];
              const elementName = imgs[el].name[j];

              await pushFile(
                "projet",
                elementImage as string,
                elementName as string,
              );
            }
          }
        }

        const projet = new ProjetModel({
          name,
          type,
          presImg: imgs.presImg.name,
          ctxImg: imgs.ctxImg.name,
          challengeImg: imgs.challengeImg.name,
          solutionImg: imgs.solutionImg.name,
          resultImg: imgs.resultImg.name,
          description: description,
          competances: competances,
          client: client,
          duree: duree,
          lien: lien ? lien : null,
          service: service,
          ctxDesc: ctxDesc,
          challengeDesc: challengeDesc,
          solutionDesc: solutionDesc,
          resultDesc: resultDesc,
        });

        await projet.save();

        return httpResponse(StatusCode.Success, projet);
      }

      return httpResponse(StatusCode.UnprocessableEntity);
    }

    return httpResponse(StatusCode.Conflict);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
