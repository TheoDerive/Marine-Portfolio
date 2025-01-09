"use client";

import { Parallax } from "@/lib/parallax";
import React from "react";

type InformationType = "context" | "challenge" | "solution" | "resultat";

type Props = {
  title: InformationType;
  description: string;
  image: string[];
  parallax?: number;
};

export default function ProjetInformation({
  title,
  description,
  image,
  parallax = 0.2,
}: Props) {
  let localCount = image.length;
  let next: number | null = null;

  return (
    <article className={`projet-information-{type} projet-informations`}>
      <section className="projet-information-title">
        <h3>{title}</h3>
        <p>{description}</p>
      </section>

      <section className="image-container">
        {image.map((img, i) => {
          if (next === i) {
            return;
          }
          if (localCount >= 2) {
            next = i + 1;
            localCount = -2;
            return (
              <ul
                style={{ grid: "auto /1fr 1fr" }}
                key={i}
                className="projet-information-images"
              >
                <li className="projet-image">
                  <img
                    data-parallax={`${parallax}`}
                    className="split-element"
                    id={`${i}`}
                    src={`/images/projet/${img}`}
                    alt="image d'illustration du projet"
                  />
                </li>
                <li className="projet-image">
                  <img
                    data-parallax={`${parallax}`}
                    id={`${i + 1}`}
                    src={`/images/projet/${image[i + 1]}`}
                    alt="image d'illustration du projet"
                  />
                </li>
              </ul>
            );
          } else {
            localCount = -1;
            return (
              <ul
                style={{ grid: "1fr" }}
                key={i}
                className="projet-information-images"
              >
                <li className="projet-image">
                  <img
                    data-parallax={`${parallax}`}
                    className="split-element"
                    id={`${i}`}
                    src={`/images/projet/${img}`}
                    alt="image d'illustration du projet"
                  />
                </li>
              </ul>
            );
          }
        })}
      </section>
    </article>
  );
}
