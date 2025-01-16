"use client";

import useFetch from "@/hooks/useFetch";
import toBase64 from "@/lib/base64";
import { useAppStore } from "@/store";
import { CompetanceForBack } from "@/types/competanceType";
import Link from "next/link";
import React from "react";

export default function Competance() {
  const [competanceValues, setCompetanceValues] =
    React.useState<CompetanceForBack>({
      name: "",
      image: null,
      type: "design",
    });

  const [result, setResult] = React.useState({
    message: "",
    isError: false,
  });

  const { setIsLoading } = useAppStore();

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (competanceValues.name !== "" && competanceValues.image) {
      setIsLoading(true);
      const base64File = (await toBase64(competanceValues.image)) as string;

      const formData = new FormData();
      formData.append("name", competanceValues.name);
      formData.append("image", base64File);
      formData.append("image-name", competanceValues.image.name);
      formData.append("type", competanceValues.type);

      const response = await useFetch.NewCompetance(competanceValues);
      setResult({
        message: response.message,
        isError: response.status === 200 ? false : true,
      });
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className="dashboard-new-competences">
      <Link href={"/dashboard/competances"}>Retour</Link>
      {result.message !== "" ? (
        <p style={result.isError ? { color: "red" } : { color: "green" }}>
          {result.message}
        </p>
      ) : null}
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
    </section>
  );
}
