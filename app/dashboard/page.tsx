"use client";

import React from "react";

import { useAppStore } from "@/store";
import useUtilities from "@/hooks/useUtilities";
import Connection from "@/components/Connection";
import Link from "next/link";

export default function Dashboard() {
  const { setIsLoading, connection, setConnection } = useAppStore();
  const { windowProperties } = useUtilities();

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    if (!windowProperties) return;

    if (windowProperties.sessionStorage.getItem("connection")) {
      setConnection(true);
    }
  }, [windowProperties]);

  return (
    <section className="dashboard">
      {connection ? null : <Connection setIsConnected={setConnection} />}

      <h2 className="dashboard-title">Que voulez-vous modifier ?</h2>
      <Link href={"/dashboard/projets"}>Projets</Link>
      <Link href={"/dashboard/avis"}>Avis</Link>
      <Link href={"/dashboard/diplomes"}>Diplomes</Link>
      <Link href={"/dashboard/competances"}>Competances</Link>
    </section>
  );
}
