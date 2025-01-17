"use client";

import React from "react";

import { useAppStore } from "@/store";
import useUtilities from "@/hooks/useUtilities";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { DiplomeType } from "@/types/diplomeType";

export default function DashboardAvis() {
  const [diplomes, setDiplomes] = React.useState<DiplomeType[]>([]);

  const { setIsLoading, connection } = useAppStore();
  const { windowProperties } = useUtilities();

  React.useEffect(() => {
    if (!windowProperties) return;

    if (!connection && !windowProperties.sessionStorage.getItem("connection")) {
      windowProperties.location.pathname = "/dashboard";
    }
  }, [windowProperties]);

  React.useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await useFetch.GETMultiples("diplome");
      setDiplomes(response.data.reverse());
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  async function deleteAvis(id: string) {
    setIsLoading(true);
    await useFetch.DELETE("diplome", id);
    await fetchData();
    setIsLoading(false);
  }
  return (
    <section className="dashboard-reviews">
      {diplomes.map((diplome, i) => (
        <li key={i}>
          <section className="diplome-element">
            <strong>{diplome.school}</strong>
            <span>{diplome.name}</span>
          </section>
          <div className="competance-modifications">
            <Link href={`/dashboard/diplomes/update/${diplome._id}`}>
              Modifier
            </Link>
            <button onClick={() => deleteAvis(diplome._id)}>Supprimer</button>
          </div>
        </li>
      ))}
      <Link href={"/dashboard/diplomes/new"} className="new" />
    </section>
  );
}
