"use client";

import useFetch from "@/hooks/useFetch";
import addFiles from "@/lib/addFiles";
import toBase64 from "@/lib/base64";
import { ProjetForBack } from "@/types/projetType";
import React from "react";

export default function Projet() {
  const [projetValues, setProjetValues] = React.useState<ProjetForBack>({
    name: "",
    client: "",
    description: "",
    duree: "",
    lien: "",
    ctxImg: [],
    resultImg: [],
    presImg: null,
    service: "",
    competances: [],
    solutionImg: [],
    challengeImg: [],
  });

  const imgKeys: (keyof ProjetForBack)[] = [
    "presImg",
    "ctxImg",
    "resultImg",
    "solutionImg",
    "challengeImg",
  ];

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (
      projetValues.name !== "" &&
      projetValues.client !== "" &&
      projetValues.description !== "" &&
      projetValues.service !== "" &&
      projetValues.duree !== "" &&
      projetValues.challengeImg.length !== 0 &&
      projetValues.solutionImg.length !== 0 &&
      projetValues.resultImg.length !== 0 &&
      projetValues.ctxImg.length !== 0 &&
      projetValues.presImg
    ) {
      const formData = new FormData();

      for (const element of imgKeys) {
        const projetElement = projetValues[element] as File | File[];

        if (Array.isArray(projetElement)) {
          formData.append(`${element}-index`, `${projetElement.length}`);

          for (let index = 0; index < projetElement.length; index++) {
            const file = projetElement[index];

            const base64File = (await toBase64(file)) as string;

            formData.append(`${element}-${index}`, base64File);
            formData.append(`${element}-${index}-name`, file.name);
          }
        } else {
          formData.append(`${element}-index`, "0");

          const base64File = (await toBase64(projetElement)) as string;

          formData.append(`${element}`, base64File);
          formData.append(`${element}-name`, projetElement.name);
        }
      }

      formData.append("name", projetValues.name);
      formData.append("description", projetValues.description);
      formData.append("competances", JSON.stringify(projetValues.competances));
      formData.append("client", projetValues.client);
      formData.append("service", projetValues.service);
      formData.append("duree", projetValues.duree);

      if (projetValues.lien && projetValues.lien !== "") {
        formData.append("lien", projetValues.lien);
      }

      const response = await useFetch.UPDATEProjet(projetValues)
      console.log(response)

    }
  }


  return (
    <form
      style={{
        margin: "500px 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        placeholder="Name"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            name: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Description"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            description: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="client"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            client: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="serivce"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            service: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="duree / en semaine"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            duree: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Lien"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            lien: e.target.value,
          })
        }
      />

      <input
        type="file"
        required
        onChange={(e) =>
          e.target.files
            ? setProjetValues({
                ...projetValues,
                presImg: e.target.files[0],
              })
            : null
        }
      />

      <input
        type="file"
        multiple
        required
        onChange={(e) =>
          e.target.files
            ? addFiles(e.target.files, setProjetValues, projetValues, "ctxImg")
            : null
        }
      />

      <input
        type="file"
        multiple
        required
        onChange={(e) =>
          e.target.files
            ? addFiles(
                e.target.files,
                setProjetValues,
                projetValues,
                "challengeImg",
              )
            : null
        }
      />

      <input
        type="file"
        multiple
        required
        onChange={(e) =>
          e.target.files
            ? addFiles(
                e.target.files,
                setProjetValues,
                projetValues,
                "solutionImg",
              )
            : null
        }
      />

      <input
        type="file"
        multiple
        required
        onChange={(e) =>
          e.target.files
            ? addFiles(
                e.target.files,
                setProjetValues,
                projetValues,
                "resultImg",
              )
            : null
        }
      />

      <button type="submit" onClick={async (e) => submit(e)}>
        Push
      </button>
    </form>
  );
}
