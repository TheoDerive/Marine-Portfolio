"use client";

import React from "react";

import { useAppStore } from "@/store";
import useUtilities from "@/hooks/useUtilities";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { CompetanceType } from "@/types/competanceType";

export default function DashboardCompetances() {
  const [competances, setCompetances] = React.useState<CompetanceType[]>([]);

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
      const response = await useFetch.GETMultiples("competance");
      setCompetances(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  async function deleteCompetances(id: string) {
    setIsLoading(true);
    await useFetch.DELETE("competance", id);
    await fetchData();
    setIsLoading(false);
  }
  return (
    <section className="dashboard-competances">
      {competances.map((competance, i) => (
        <li key={i}>
          <img className="projet-competances" src={`${competance.image}`} />

          <div className="projet-modifications">
            <Link href={`/dashboard/competances/update/${competance._id}`}>
              Modifier
            </Link>
            <button onClick={() => deleteCompetances(competance._id)}>
              Supprimer
            </button>
          </div>
        </li>
      ))}
      <Link href={"/dashboard/competances/new"} className="new" />
    </section>
  );
}
