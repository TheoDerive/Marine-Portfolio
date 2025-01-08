"use client";

import React from "react";

import ProjetHeader from "@/components/Projet/Header";
import ProjetArticle from "@/components/Projet/ProjetArticle";
import ProjetInformation from "@/components/Projet/ProjetInformation";
import { Parallax } from "@/lib/parallax";
import { ProjetType } from "@/types/projetType";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/navigation";

export default function Projet() {
  const [projet, setProjet] = React.useState<ProjetType>({
    name: "",
    id: 0,
    description: "",
    image: "",
    competances: [],
    entreprise: "",
    date: "",
  });

  const [nextProjets, setNextProjets] = React.useState<ProjetType[]>([]);

  React.useEffect(() => {
    const id = window.location.href.split("/")[4];

    const fetchProjet = async () => {
      try {
        const data = await useFetch.GET("projet", id);
        setProjet(data.projet);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchProjets = async () => {
      try {
        const data = await useFetch.GETMultiples("projet");
        setNextProjets(data.projets.slice(0, 2));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjet();
    fetchProjets();
  }, []);

  React.useEffect(() => {
    Parallax.bind();
  }, []);

  return (
    <section className="projet-page">
      <ProjetHeader projet={projet} key={0} />
      <div className="projet-presentation-image-container">
        <img
          data-parallax="0.2"
          className="projet-page-image-presentation"
          src={projet.image || undefined}
        />
      </div>

      <section className="projet-informations-container">
        <ProjetInformation
          key={2}
          title="context"
          description="Radiant Glow, a premium cosmetic serum brand, sought to refresh its brand identity and establish a strong digital presence. The goal was to create a cohesive brand image and an engaging, user-friendly website to attract and retain customers."
          image={["/images/projet/placeholder.jpg"]}
        />
        <ProjetInformation
          title="challenge"
          description="Radiant Glow, a premium cosmetic serum brand, sought to refresh its brand identity and establish a strong digital presence. The goal was to create a cohesive brand image and an engaging, user-friendly website to attract and retain customers."
          image={["/images/projet/image.png"]}
        />
        <ProjetInformation
          title="solution"
          description="Radiant Glow, a premium cosmetic serum brand, sought to refresh its brand identity and establish a strong digital presence. The goal was to create a cohesive brand image and an engaging, user-friendly website to attract and retain customers."
          image={["/images/projet/image.png"]}
        />
        <ProjetInformation
          title="resultat"
          description="Radiant Glow, a premium cosmetic serum brand, sought to refresh its brand identity and establish a strong digital presence. The goal was to create a cohesive brand image and an engaging, user-friendly website to attract and retain customers."
          image={[
            "/images/projet/image.png",
            "/images/projet/image.png",
            "/images/projet/image.png",
          ]}
        />
      </section>

      <section className="next-projet">
        <section className="next-projet-title">
          <h3>Projets Suivants</h3>
          <p>
            View our other projects works that highlight our range of skills and
            innovative design solutions
          </p>
        </section>
        <hr className="separation" />
        <section className="next-projet-container">
          {nextProjets.map((projet, i) => (
            <ProjetArticle key={i} projet={projet} />
          ))}
        </section>
      </section>
    </section>
  );
}
