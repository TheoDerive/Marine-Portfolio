"use client";

import React from "react";
import gsap from "gsap";

import ProjetArticle from "@/components/Projet/ProjetArticle";
import useFetch from "@/hooks/useFetch";
import { ProjetType } from "@/types/projetType";
import { useAppStore } from "@/store";

export default function Projets() {
  const [projets, setProjets] = React.useState<ProjetType[]>([]);

  const { setIsLoading, isLoading } = useAppStore();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await useFetch.GETMultiples("projet");
        setProjets(data.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    const projetsElements = document.querySelectorAll(".projet-article");
    if (projetsElements.length === 0) return;

    const tl = gsap.timeline();

    Array.from(projetsElements).map((el: Element) => {
      tl.to(el, {
        opacity: 1,
        duration: 0.5,
      });
    });
  }, [projets]);

  return (
    <>
      {isLoading ? null : (
        <section className="projets-page">
          {projets.map((projet, i) => (
            <ProjetArticle key={i} projet={projet} />
          ))}
        </section>
      )}
    </>
  );
}
