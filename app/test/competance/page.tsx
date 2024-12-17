"use client";

import toBase64 from "@/lib/base64";
import { CompetanceForBack } from "@/types/competanceType";
import React from "react";

export default function Projet() {
  const [competanceValues, setCompetanceValues] =
    React.useState<CompetanceForBack>({
      name: "",
      image: null,
    });

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (competanceValues.name !== "" && competanceValues.image) {
      const base64File = (await toBase64(competanceValues.image)) as string;

      const formData = new FormData();
      formData.append("name", competanceValues.name);
      formData.append("image", base64File);
      formData.append("image-name", competanceValues.image.name);

      const response = await fetch("/api/competance/newCompetance", {
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
          setCompetanceValues({
            ...competanceValues,
            name: e.target.value,
          })
        }
      />

      <input
        type="file"
        required
        onChange={(e) =>
          e.target.files
            ? setCompetanceValues({
                ...competanceValues,
                image: e.target.files[0],
              })
            : null
        }
      />

      <button type="submit" onClick={async (e) => submit(e)}>
        Push
      </button>
    </form>
  );
}
