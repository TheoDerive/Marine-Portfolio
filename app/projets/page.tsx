"use client";

import React from "react";

import ProjetArticle from "@/components/Projet/ProjetArticle";
import useFetch from "@/hooks/useFetch";
import { ProjetType } from "@/types/projetType";
import { useAppStore } from "@/store";

export default function Projets() {
  const [projets, setProjets] = React.useState<ProjetType[]>([]);

  const { setIsLoading } = useAppStore();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await useFetch.GETMultiples("projet");
        setProjets(data.projets);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="projets-page">
      {projets.map((projet, i) => (
        <ProjetArticle key={i} projet={projet} />
      ))}
    </section>
  );
}
