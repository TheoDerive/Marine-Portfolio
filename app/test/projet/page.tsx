"use client";

import toBase64 from "@/lib/base64";
import { ProjetForBack } from "@/types/projetType";
import React from "react";

export default function Projet() {
  const [projetValues, setProjetValues] = React.useState<ProjetForBack>({
    name: "",
    image: null,
    description: "",
    competances: [],
    entreprise: "",
    date: "",
  });

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (
      projetValues.name !== "" &&
      projetValues.image &&
      projetValues.description !== "" &&
      projetValues.entreprise !== "" &&
      projetValues.date !== ""
    ) {
      const base64File = (await toBase64(projetValues.image)) as string;

      const formData = new FormData();
      formData.append("name", projetValues.name);
      formData.append("image", base64File);
      formData.append("image-name", projetValues.image.name);
      formData.append("description", projetValues.description);
      formData.append("competances", JSON.stringify(projetValues.competances));
      formData.append("entreprise", projetValues.entreprise);
      formData.append("date", projetValues.date);

      const response = await fetch("/api/projet/newProjet", {
        method: "POST",
        body: formData,
      });

      console.log(response);
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
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            name: e.target.value,
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
                image: e.target.files[0],
              })
            : null
        }
      />

      <input
        type="text"
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
        placeholder="Entreprise"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            entreprise: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Date"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            date: e.target.value,
          })
        }
      />

      <button type="submit" onClick={async (e) => submit(e)}>
        Push
      </button>
    </form>
  );
}
