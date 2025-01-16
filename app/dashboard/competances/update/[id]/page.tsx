"use client";

import React from "react";

import { useAppStore } from "@/store";
import useUtilities from "@/hooks/useUtilities";
import { ProjetForBack, ProjetType } from "@/types/projetType";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import addFiles from "@/lib/addFiles";
import { CompetanceForBack, CompetanceType } from "@/types/competanceType";
import { constrainedMemory } from "process";

export default function DashboardUpdateCompetances() {
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
        const response = await useFetch.GET("competance", id);
        const projet = response.data[0] as CompetanceType;
        console.log(projet);

        setCompetanceValues({
          image: projet.image,
          type: projet.type,
          name: projet.name,
        });
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [windowProperties]);

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (competanceValues.name !== "" && competanceValues.image !== "") {
      setIsLoading(true);
      const response = await useFetch.UPDATECompetance(competanceValues, id);
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
      <Link href={"/dashboard/competances"}>Retour</Link>
      {result.message !== "" ? (
        <p style={result.isError ? { color: "red" } : { color: "green" }}>
          {result.message}
        </p>
      ) : null}
      <input
        type="text"
        value={competanceValues.name}
        placeholder="Name"
        required
        onChange={(e) =>
          setCompetanceValues({
            ...competanceValues,
            name: e.target.value,
          })
        }
      />

      <label>
        <p>Type de la competance</p>
        <select
          value={competanceValues.type}
          onChange={(e) =>
            setCompetanceValues({
              ...competanceValues,
              type: e.target.value,
            })
          }
        >
          <option value={"marketing"}>Marketing</option>
          <option value={"design"}>Design</option>
        </select>
      </label>

      <label>
        <p>Image de la competance (1 max)</p>
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
      </label>

      <button type="submit" onClick={async (e) => submit(e)}>
        Push
      </button>
    </section>
  );
}
