"use client";

import React from "react";

import ProjetArticle from "@/components/Projet/ProjetArticle";
import useFetch from "@/hooks/useFetch";
import { ProjetType } from "@/types/projetType";

export default function Projets() {
  const [projets, setProjets] = React.useState<ProjetType[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await useFetch.GETMultiples("projet");
        setProjets(data.projets);
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
