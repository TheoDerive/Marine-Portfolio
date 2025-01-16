"use client";

import React from "react";

import { useAppStore } from "@/store";
import useUtilities from "@/hooks/useUtilities";
import { ProjetForBack, ProjetType } from "@/types/projetType";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import addFiles from "@/lib/addFiles";

export default function DashboardUpdateProjet() {
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
  const [id, setId] = React.useState("");

  const { setIsLoading, setConnection, connection } = useAppStore();
  const { windowProperties } = useUtilities();

  React.useEffect(() => {
    if (!windowProperties) return;

    if (!connection && !windowProperties.sessionStorage.getItem("connection")) {
      windowProperties.location.pathname = "/dashboard";
    }

    if (windowProperties.sessionStorage.getItem("connection")) {
      setConnection(true);
    }

    const pathNameSplit = windowProperties.location.pathname.split("/");
    const pathNameId = pathNameSplit[pathNameSplit.length - 1];
    setId(pathNameId);

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await useFetch.GET("projet", id);
        const projet = response.data[0] as ProjetType;
        console.log(projet);

        setProjetValues({
          name: projet.name,
          client: projet.client,
          type: projet.type,
          description: projet.description,
          duree: projet.duree,
          lien: projet.lien,
          solutionDesc: projet.solutionDesc,
          ctxDesc: projet.ctxDesc,
          resultDesc: projet.resultDesc,
          challengeDesc: projet.challengeDesc,
          ctxImg: projet.ctxImg,
          resultImg: projet.resultImg,
          presImg: projet.presImg,
          service: projet.service.join("/"),
          solutionImg: projet.solutionImg,
          challengeImg: projet.challengeImg,
        });
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [windowProperties]);

  React.useEffect(() => {
    console.log(projetValues);
  }, [projetValues]);

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log(projetValues);
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
      const response = await useFetch.UPDATEProjet(projetValues, id);
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
        value={projetValues.name}
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
        value={projetValues.description}
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
          value={projetValues.type}
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
        value={projetValues.client}
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
        value={projetValues.service}
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
        value={projetValues.duree}
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
          value={projetValues.lien || ""}
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
        value={projetValues.ctxDesc}
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
        value={projetValues.challengeDesc}
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
        value={projetValues.solutionDesc}
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
        value={projetValues.resultDesc}
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
