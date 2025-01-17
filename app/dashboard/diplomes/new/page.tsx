"use client";

import useFetch from "@/hooks/useFetch";
import { useAppStore } from "@/store";
import { DiplomeForBack } from "@/types/diplomeType";
import Link from "next/link";
import React from "react";

export default function Competance() {
  const [diplomeValues, setDiplomeValues] = React.useState<DiplomeForBack>({
    ecole: "",
    description: "",
    diplomeName: "",
  });

  const [result, setResult] = React.useState({
    message: "",
    isError: false,
  });

  const { setIsLoading } = useAppStore();

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (
      diplomeValues.description !== "" &&
      diplomeValues.diplomeName !== "" &&
      diplomeValues.ecole !== ""
    ) {
      setIsLoading(true);
      const response = await useFetch.NewDiplome(diplomeValues);
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
      <Link href={"/dashboard/diplomes"}>Retour</Link>
      {result.message !== "" ? (
        <p style={result.isError ? { color: "red" } : { color: "green" }}>
          {result.message}
        </p>
      ) : null}

      <input
        type="text"
        placeholder="ecole"
        required
        onChange={(e) =>
          setDiplomeValues({
            ...diplomeValues,
            ecole: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="name"
        required
        onChange={(e) =>
          setDiplomeValues({
            ...diplomeValues,
            diplomeName: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="description"
        required
        onChange={(e) =>
          setDiplomeValues({
            ...diplomeValues,
            description: e.target.value,
          })
        }
      />

      <button type="submit" onClick={async (e) => submit(e)}>
        Push
      </button>
    </section>
  );
}
