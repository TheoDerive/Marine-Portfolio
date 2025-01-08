import { deleteFile, pushFile } from "@/lib/github";
import { connectDB } from "@/lib/mongodb";
import ProjetModel from "@/models/ProjetModel";
import { NextRequest, NextResponse } from "next/server";

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

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.formData();

    const name = body.get("name");

    const projetExist = await ProjetModel.findOne({ name: name });

    if (projetExist) {

      for (let index = 0; index < imgKeys.length; index++) {
        const el = imgKeys[index];
        const imgEl = projetExist[el]

        if(Array.isArray(imgEl)){
          for (let j = 0; j < imgEl.length; j++) {
            const element = imgEl[j];
            await deleteFile("projet", undefined, element)
          }
        }else {
          await deleteFile("projet", undefined, imgEl)
        }
      }


      for (let index = 0; index < imgKeys.length; index++) {
        const el = imgKeys[index];

        const indexElement = Number(body.get(`${el}-index`));

        if (indexElement === 0) {
          const image = body.get(`${el}`);
          const name = body.get(`${el}-name`)as string;
          const imageName = name.split(" ").join("_")


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
          const imageName = name.split(" ").join("_")

            if (image && imageName) {
              imgs[el].img.push(image as string);
              imgs[el].name.push(imageName as string);
            }
          }
        }
      }

      const name = body.get("name");
      const description = body.get("description");
      const competances = body.get("competances");
      const client = body.get("client");
      const service = body.get("service");
      const duree = body.get("duree");
      const lien = body.get("lien");

      if (name && description && competances && client && service && duree) {
        for (let index = 0; index < imgKeys.length; index++) {
          const el = imgKeys[index];

          if (el === "presImg") {
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

        const projet = {
          name,
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

        };

        await ProjetModel.findOneAndUpdate(
          { _id: projetExist._id },
          projet
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
        message: "On n'a pas reussi a trouver votre projet",
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
