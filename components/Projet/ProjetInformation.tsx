"use client";

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
  function addImages() {
    const returnHTML = document.createElement("section");
    let localIndex = 0;
    let localCount = image.length;

    while (localCount > 0) {
      const imageContainer = document.createElement("ul");
      imageContainer.classList.add("projet-information-images");

      if (localCount >= 2) {
        imageContainer.style.grid = "auto / 1fr 1fr";
        imageContainer.innerHTML = `
        <li className="projet-image" style="height: 60vh">
          <img data-parallax="${parallax}" class="split-element" id="${localIndex}" src=${image[localIndex]} alt="image d'illustration du projet" />
        </li>
        <li className="projet-image" style='height: 60vh'>
          <img data-parallax="${parallax}" class="split-element" src=${image[localIndex + 1]} alt="image d'illustration du projet" />
        </li>
      `;
        localIndex += 2; // Incrémentation des variables locales
        localCount -= 2; // Décrémentation des variables locales
      } else {
        imageContainer.style.grid = "auto / 1fr ";
        imageContainer.innerHTML = `
        <li className="projet-image" style='height: 80vh'>
          <img data-parallax="${parallax}" src=${image[localIndex]} alt="image d'illustration du projet" />
        </li>
      `;
        localIndex += 1;
        localCount -= 1;
      }

      returnHTML.appendChild(imageContainer);
    }

    return returnHTML.innerHTML;
  }

  return (
    <article className={`projet-information-{type} projet-informations`}>
      <section className="projet-information-title">
        <h3>{title}</h3>
        <p>{description}</p>
      </section>

      <div
        className="image-container"
        dangerouslySetInnerHTML={{ __html: addImages() }}
      />
    </article>
  );
}
