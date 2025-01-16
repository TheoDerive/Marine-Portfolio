"use client";

import React from "react";

import { useAppStore } from "@/store";
import useFetch from "@/hooks/useFetch";
import { ProjetType } from "@/types/projetType";
import ProjetArticle from "@/components/Projet/ProjetArticle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LetterAnimation from "@/components/LetterAnimation";

export default function Marketing() {
  const [projets, setProjets] = React.useState<ProjetType[]>([]);

  const { setIsLoading, isLoading } = useAppStore();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await useFetch.GETMultiples("projet");
        setProjets(
          data.data.filter((projet: ProjetType) => projet.type === "logofolio"),
        );

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useGSAP(() => {
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
        <section className="projets-page-container">
          <h1 className="projets-page-title">
            <LetterAnimation text="Logofolio" />
          </h1>
          <section className="projets-page">
            {projets.length > 1 ? (
              projets.map((projet, i) => (
                <ProjetArticle key={i} projet={projet} />
              ))
            ) : (
              <p className="no-result">
                Il y a aucun projet de Logofolio pour l'instant
              </p>
            )}
          </section>
        </section>
      )}
    </>
  );
}
