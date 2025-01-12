"use client";

import React from "react";

import ProjetArticle from "@/components/Projet/ProjetArticle";
import ProjetInformation from "@/components/Projet/ProjetInformation";
import { Parallax } from "@/lib/parallax";
import { ProjetType } from "@/types/projetType";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { useAppStore } from "@/store";

export default function Projet() {
  const [projet, setProjet] = React.useState<ProjetType>();

  const [nextProjets, setNextProjets] = React.useState<ProjetType[]>([]);

  const { isLoading, setIsLoading } = useAppStore();

  React.useEffect(() => {
    const id = window.location.href.split("/")[4];

    const fetchProjet = async () => {
      try {
        setIsLoading(true);
        const data = await useFetch.GET("projet", id);
        setProjet(data.projet);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjet();
  }, []);

  React.useEffect(() => {
    const fetchProjets = async () => {
      if (!projet) return;

      try {
        const data = await useFetch.GETMultiples("projet");
        const dataFiltered = data.projets.filter(
          (projetSelect: ProjetType) => projetSelect._id !== projet._id,
        );
        setNextProjets(dataFiltered.slice(0, 2));

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjets();
  }, [projet]);

  React.useEffect(() => {
    if (!isLoading) {
      Parallax.bind();
    }
  }, [isLoading]);

  return (
    <>
      {projet ? (
        <section className="projet-page">
          <section className="projet-header">
            <section className="projet-title-container">
              <h1>{projet.name}</h1>
              <p>{projet.description}</p>
            </section>

            <section className="projet-informations">
              <ul className="projet-page-tags">
                <li className="projet-tag">
                  <h3 className="tag-title">Client</h3>
                  <p>{projet.client}</p>
                </li>

                <li className="projet-tag">
                  <h3 className="tag-title">Service</h3>
                  <ul className="tag-service">
                    <li>{projet.service}</li>
                  </ul>
                </li>

                <li className="projet-tag">
                  <h3 className="tag-title">Durée</h3>
                  <p>{projet.duree}</p>
                </li>
              </ul>

              <Link href={projet.lien || ""}>Voir le site</Link>
            </section>
          </section>
          <div className="projet-presentation-image-container">
            <img
              data-parallax="0.2"
              className="projet-page-image-presentation"
              src={`/images/projet/${projet.presImg}` || undefined}
            />
          </div>

          <section className="projet-informations-container">
            <ProjetInformation
              title="context"
              description={projet.ctxDesc}
              image={projet.ctxImg}
            />
            <ProjetInformation
              title="challenge"
              description={projet.challengeDesc}
              image={projet.challengeImg}
            />
            <ProjetInformation
              title="solution"
              description={projet.solutionDesc}
              image={projet.solutionImg}
            />
            <ProjetInformation
              title="resultat"
              description={projet.resultDesc}
              image={projet.resultImg}
            />
          </section>

          <section className="next-projet">
            <section className="next-projet-title">
              <h3>Projets Suivants</h3>
              <p>
                View our other projects works that highlight our range of skills
                and innovative design solutions
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
      ) : null}
    </>
  );
}
