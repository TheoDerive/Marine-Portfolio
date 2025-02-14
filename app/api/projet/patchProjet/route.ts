import { deleteFile, pushFile } from "@/lib/github";
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

export async function PATCH(req: NextRequest) {
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
  try {
    await connectDB();

    const body = await req.formData();

    const id = body.get("id");

    const projetExist = await ProjetModel.findOne({ _id: id });

    if (projetExist) {
      for (let index = 0; index < imgKeys.length; index++) {
        const el = imgKeys[index];
        const imgEl = projetExist[el];

        if (Array.isArray(imgEl)) {
          for (let j = 0; j < imgEl.length; j++) {
            const element = imgEl[j];

            await deleteFile("projet", undefined, element);
          }
        } else {
          await deleteFile("projet", undefined, imgEl);
        }
      }

      for (let index = 0; index < imgKeys.length; index++) {
        const el = imgKeys[index];

        const indexElement = Number(body.get(`${el}-index`));

        if (indexElement === -1) {
          const image = body.get(`${el}`);
          const name = body.get(`${el}-name`) as string;
          const imageName = name.split(" ").join("_");

          if (image && imageName) {
            imgs.presImg.img = image as string;
            imgs.presImg.name = imageName as string;
          }
        } else if (
          indexElement >= 0 &&
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
        } else if (indexElement === -2) {
          continue;
        }
      }

      const name = body.get("name");
      const description = body.get("description");
      const client = body.get("client");
      const service = body.get("service");
      const duree = body.get("duree");
      const lien = body.get("lien");

      if (name && description && client && service && duree) {
        for (let index = 0; index < imgKeys.length; index++) {
          const el = imgKeys[index];

          if (el === "presImg" && imgs[el].img && imgs[el].name) {
            await pushFile(
              "projet",
              imgs[el].img as string,
              imgs[el].name as string,
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

        const pres =
          imgs.presImg.name.length > 0
            ? imgs.presImg.name
            : projetExist.presImg;
        const ctx =
          imgs.ctxImg.name.length > 0 ? imgs.ctxImg.name : projetExist.ctxImg;
        const challenge =
          imgs.challengeImg.name.length > 0
            ? imgs.challengeImg.name
            : projetExist.challengeImg;
        const solution =
          imgs.solutionImg.name.length > 0
            ? imgs.solutionImg.name
            : projetExist.solutionImg;

        const result =
          imgs.resultImg.name.length > 0
            ? imgs.resultImg.name
            : projetExist.resultImg;

        const projet = {
          name,
          presImg: pres,
          ctxImg: ctx,
          challengeImg: challenge,
          solutionImg: solution,
          resultImg: result,
          description: description,
          client: client,
          duree: duree,
          lien: lien ? lien : null,
          service: service,
        };

        await ProjetModel.findOneAndUpdate({ _id: projetExist._id }, projet);

        return httpResponse(StatusCode.Success);
      }

      return httpResponse(StatusCode.UnprocessableEntity);
    }

    return httpResponse(StatusCode.NotFound);
  } catch (error) {
    console.error("Erreur de connexion :", error);
    return httpResponse(StatusCode.InternalError);
  }
}
