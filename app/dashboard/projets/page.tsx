"use client";

import React from "react";

import { useAppStore } from "@/store";
import useUtilities from "@/hooks/useUtilities";
import { ProjetType } from "@/types/projetType";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";

export default function DashboardProjets() {
  const [projets, setProjets] = React.useState<ProjetType[]>([]);

  const { setIsLoading, connection } = useAppStore();
  const { windowProperties } = useUtilities();

  React.useEffect(() => {
    if (!windowProperties) return;

    if (!connection && !windowProperties.sessionStorage.getItem("connection")) {
      windowProperties.location.pathname = "/dashboard";
    }

    setIsLoading(false);
  }, [windowProperties]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await useFetch.GETMultiples("projet");
      setProjets(response.data.reverse());
    } catch (error) {
      console.error(error);
    }
  };

  async function deleteProjet(id: string) {
    setIsLoading(true);
    await useFetch.DELETE("projet", id);
    await fetchData();
    setIsLoading(false);
  }
  return (
    <section className="dashboard-projets">
      {projets.map((projet, i) => (
        <li key={i}>
          <img
            className="projet-image"
            src={`/images/projet/${projet.presImg}`}
          />

          <div className="projet-modifications">
            <Link href={`/dashboard/projets/update/${projet._id}`}>
              Modifier
            </Link>
            <button onClick={() => deleteProjet(projet._id)}>Supprimer</button>
          </div>
        </li>
      ))}
      <Link href={"/dashboard/projets/new"} className="new" />
    </section>
  );
}
