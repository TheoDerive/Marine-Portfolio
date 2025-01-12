"use client";

import React from "react";
import { ProjetComponent } from "../Projet";
import { ProjetType } from "@/types/projetType";

type Props = {
  projets: ProjetType[];
};

export default function HomeProjets({ projets }: Props) {
  return (
    <section className="projets-homepage-container">
      <h2 className="section-title">
        Projets <span>Recents</span>
      </h2>

      <section className="mobile-scroll-container">
        <section className="projets-homepage">
          {projets.map((projet, i) => (
            <ProjetComponent key={i} projet={projet} />
          ))}
        </section>
      </section>
    </section>
  );
}
