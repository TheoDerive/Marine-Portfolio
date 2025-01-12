"use client";

import useFetch from "@/hooks/useFetch";
import toBase64 from "@/lib/base64";
import { useAppStore } from "@/store";
import { CompetanceForBack } from "@/types/competanceType";
import React from "react";

export default function Projet() {
  const [competanceValues, setCompetanceValues] =
    React.useState<CompetanceForBack>({
      name: "",
      image: null,
      type: "design",
    });

  const { setIsLoading } = useAppStore();

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (competanceValues.name !== "" && competanceValues.image) {
      const base64File = (await toBase64(competanceValues.image)) as string;

      const formData = new FormData();
      formData.append("name", competanceValues.name);
      formData.append("image", base64File);
      formData.append("image-name", competanceValues.image.name);
      formData.append("type", competanceValues.type);

      const response = await useFetch.NewCompetance(competanceValues);

      console.log(response);
    }
  }

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <form
      style={{
        padding: "500px 0",
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

      <select
        onChange={(e) =>
          setCompetanceValues({
            ...competanceValues,
            type: e.target.value,
          })
        }
      >
        <option value={"design"}>design</option>
        <option value={"marketing"}>marketing</option>
      </select>

      <button type="submit" onClick={async (e) => submit(e)}>
        Push
      </button>
    </form>
  );
}
