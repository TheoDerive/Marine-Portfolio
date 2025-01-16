"use client";

import useFetch from "@/hooks/useFetch";
import addFiles from "@/lib/addFiles";
import toBase64 from "@/lib/base64";
import { useAppStore } from "@/store";
import { ProjetForBack } from "@/types/projetType";
import React from "react";

export default function Projet() {
  const [projetValues, setProjetValues] = React.useState<ProjetForBack>({
    name: "",
    client: "",
    type: "marketing",
    description: "",
    duree: "",
    lien: "",
    solutionDesc: "",
    ctxDesc: "",
    resultDesc: "",
    challengeDesc: "",
    ctxImg: [],
    resultImg: [],
    presImg: null,
    service: "",
    solutionImg: [],
    challengeImg: [],
  });

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (
      projetValues.name !== "" &&
      projetValues.client !== "" &&
      projetValues.description !== "" &&
      projetValues.service !== "" &&
      projetValues.duree !== "" &&
      projetValues.challengeDesc !== "" &&
      projetValues.solutionDesc !== "" &&
      projetValues.resultDesc !== "" &&
      projetValues.ctxDesc !== "" &&
      projetValues.challengeImg.length !== 0 &&
      projetValues.solutionImg.length !== 0 &&
      projetValues.resultImg.length !== 0 &&
      projetValues.ctxImg.length !== 0 &&
      projetValues.presImg
    ) {
      await useFetch.NewProjet(projetValues);
    }
  }

  const { setIsLoading } = useAppStore();

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

      <select
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            type: e.target.value,
          })
        }
      >
        <option value={"marketing"}>Marketing</option>
        <option value={"branding"}>Branding</option>
        <option value={"logofolio"}>Logofolio</option>
      </select>

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

      <input
        type="text"
        placeholder="ctx"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            ctxDesc: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="challenge"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            challengeDesc: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="solution"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            solutionDesc: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="result"
        required
        onChange={(e) =>
          setProjetValues({
            ...projetValues,
            resultDesc: e.target.value,
          })
        }
      />

      <button type="submit" onClick={async (e) => submit(e)}>
        Push
      </button>
    </form>
  );
}
