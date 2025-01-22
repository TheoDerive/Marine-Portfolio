"use client";

import React from "react";
import { ProjetComponent } from "../Projet";
import { ProjetType } from "@/types/projetType";

type Props = {
  projets: ProjetType[];
};

export default function HomeProjets({ projets }: Props) {
  const [componentWidth, setComponentWidth] = React.useState(300);

  React.useEffect(() => {
    if (!window) return;

    if (window.innerWidth < 1000) {
      setComponentWidth(300);
    } else {
      setComponentWidth(400);
    }
  }, [window]);

  return (
    <section className="projets-homepage-container">
      <h2 className="section-title">
        Projets <span>Récents</span>
      </h2>

      <section className="mobile-scroll-container">
        <section
          className="projets-homepage"
          style={{
            grid: `auto / ${Array.from({ length: projets.length })
              .map(() => "1fr")
              .join(" ")}`,
          }}
        >
          {projets.map((projet, i) => (
            <ProjetComponent key={i} projet={projet} />
          ))}
        </section>
      </section>
    </section>
  );
}
