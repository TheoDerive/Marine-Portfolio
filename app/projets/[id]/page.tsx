"use client";

import React from "react";
import Link from "next/link";

import ProjetArticle from "@/components/Projet/ProjetArticle";
import ProjetInformation from "@/components/Projet/ProjetInformation";
import { Parallax } from "@/lib/parallax";
import { ProjetType } from "@/types/projetType";
import useFetch from "@/hooks/useFetch";
import { useAppStore } from "@/store";
import LetterAnimation from "@/components/LetterAnimation";


export default function Projet() {
  const [projet, setProjet] = React.useState<ProjetType>();
  const [nextProjets, setNextProjets] = React.useState<ProjetType[]>([]);

  const headerRef = React.useRef<HTMLElement>(null)
  const imagePresRef = React.useRef<HTMLImageElement>(null)

  const { isLoading, setIsLoading } = useAppStore();

  React.useEffect(() => {
    const id = window.location.href.split("/")[4];

    const fetchProjet = async () => {
      try {
        setIsLoading(true);
        const data = await useFetch.GET("projet", id);
        setProjet(data.data);
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
        const dataFiltered = data.data.filter(
          (projetSelect: ProjetType) => projetSelect._id !== projet._id,
        );
        if (window && window.innerWidth < 1000) {
          setNextProjets(dataFiltered.slice(0, 1));
        } else {
          setNextProjets(dataFiltered.slice(0, 2));
        }

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
      {projet && typeof window !== "undefined" ? (
        <section className="projet-page">
          <section className="projet-header" ref={headerRef}>
            <section className="projet-title-container">
              <h1>
                <LetterAnimation text={projet.name} delay={1}/>
              </h1>
              <p>
                <LetterAnimation text={projet.description}  delay={1}/>
              </p>
            </section>

            <section className="projet-informations">
              <ul className="projet-page-tags">
                <li className="projet-tag">
                  <h3 className="tag-title"><LetterAnimation text="Client" delay={1.5}/></h3>
                  <p><LetterAnimation text={projet.client} delay={1.5} /></p>
                </li>

                <li className="projet-tag">
                  <h3 className="tag-title"><LetterAnimation text="Service" delay={1.7}/></h3>
                  <ul className="tag-service">
                    <li><LetterAnimation text={projet.service} delay={1.7} /></li>
                  </ul>
                </li>

                <li className="projet-tag">
                  <h3 className="tag-title"><LetterAnimation text="Duree" delay={1.9}/></h3>
                  <p><LetterAnimation text={projet.client} delay={1.9} /></p>
                </li>
              </ul>

              {projet.lien ? (
                <Link href={projet.lien}>Voir le site</Link>
              ) : null}
            </section>
          </section>
          <div className="projet-presentation-image-container">
            <img
            ref={imagePresRef}
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
                <ProjetArticle key={i} projet={projet} opacity={1}/>
              ))}
            </section>
          </section>
        </section>
      ) : null}
    </>
  );
}
