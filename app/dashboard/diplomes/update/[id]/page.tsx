"use client";

import React from "react";

import { useAppStore } from "@/store";
import useUtilities from "@/hooks/useUtilities";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { DiplomeForBack, DiplomeType } from "@/types/diplomeType";

export default function DashboardUpdateCompetances() {
  const [diplomeValues, setDiplomeValues] = React.useState<DiplomeForBack>({
    ecole: "",
    description: "",
    diplomeName: "",
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

    if (id && diplomeValues.ecole === "") {
      fetchData();
    }
  }, [windowProperties, id]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await useFetch.GET("diplome", id);
      const projet = response.data as DiplomeType;
      console.log(response);

      setDiplomeValues({
        ecole: projet.school,
        description: projet.description,
        diplomeName: projet.name,
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (
      diplomeValues.description !== "" &&
      diplomeValues.diplomeName !== "" &&
      diplomeValues.ecole !== ""
    ) {
      setIsLoading(true);
      const response = await useFetch.UPDATEDiplome(diplomeValues, id);
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
      <Link href={"/dashboard/diplomes"}>Retour</Link>
      {result.message !== "" ? (
        <p style={result.isError ? { color: "red" } : { color: "green" }}>
          {result.message}
        </p>
      ) : null}
      <input
        type="text"
        placeholder="ecole"
        value={diplomeValues.ecole}
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
        value={diplomeValues.diplomeName}
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
        value={diplomeValues.description}
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
