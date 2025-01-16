"use client";

import React from "react";

import { useAppStore } from "@/store";
import useUtilities from "@/hooks/useUtilities";
import { ProjetForBack } from "@/types/projetType";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";
import addFiles from "@/lib/addFiles";
import Loading from "@/components/Loading";

export default function DashboardNewProjet() {
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
  const [result, setResult] = React.useState({
    message: "",
    isError: false,
  });

  const { setIsLoading, isLoading, setConnection, connection } = useAppStore();
  const { windowProperties } = useUtilities();

  React.useEffect(() => {
    if (!windowProperties) return;

    if (!connection && !windowProperties.sessionStorage.getItem("connection")) {
      windowProperties.location.pathname = "/dashboard";
    }

    setIsLoading(false);
  }, [windowProperties]);

  React.useEffect(() => {
    if (!windowProperties) return;

    if (windowProperties.sessionStorage.getItem("connection")) {
      setConnection(true);
    }
  }, [windowProperties]);

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
      setIsLoading(true);
      const response = await useFetch.NewProjet(projetValues);
      console.log(response);
      setResult({
        message: response.message,
        isError: response.status === 200 ? false : true,
      });
      setIsLoading(false);
    }
  }

  return (
    <section className="dashboard-new-projet">
      <Link href={"/dashboard/projets"}>Retour</Link>
      {result.message !== "" ? (
        <p style={result.isError ? { color: "red" } : { color: "green" }}>
          {result.message}
        </p>
      ) : null}
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

      <label>
        <p>Type de projet</p>
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
      </label>

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

      <label>
        <p>Optionnel</p>
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
      </label>

      <label>
        <p>Image de presentation (1 max)</p>
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
      </label>

      <label>
        <p>Image de context ( pas de max )</p>
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
                  "ctxImg",
                )
              : null
          }
        />
      </label>

      <label>
        <p>Image de challenge ( pas de max )</p>
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
      </label>

      <label>
        <p>Image de solution ( pas de max )</p>
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
      </label>

      <label>
        <p>Image de resultat ( pas de max )</p>
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
      </label>

      <input
        type="text"
        placeholder="Texte contexte"
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
        placeholder="Texte challenge"
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
        placeholder="Texte solution"
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
        placeholder="Texte resultat"
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
    </section>
  );
}
