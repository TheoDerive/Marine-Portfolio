"use client";

import React from "react";

import { ProjetType } from "@/types/projetType";

export default function ProjetArticle({ projet, opacity=0 }: { projet: ProjetType, opacity?: number }) {
  const [position, setPosition] = React.useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const projetRef = React.useRef<HTMLDivElement>(null);
  const mouseRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!projetRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current || !projetRef.current) return;

      const rect = projetRef.current.getBoundingClientRect();

      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const mouseEnter = () => {
      if (!mouseRef.current) return;

      mouseRef.current.style.opacity = "1";
    };

    const mouseLeave = () => {
      if (!mouseRef.current) return;
      mouseRef.current.style.opacity = "0";
    };

    projetRef.current.addEventListener("mousemove", handleMouseMove);
    projetRef.current.addEventListener("mouseenter", mouseEnter);
    projetRef.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      if (!projetRef.current) return;
      projetRef.current.removeEventListener("mousemove", handleMouseMove);
      projetRef.current.removeEventListener("mouseenter", mouseEnter);
      projetRef.current.removeEventListener("mouseleave", mouseLeave);
    };
  }, [projetRef, mouseRef]);

  return (
    <a href={`/projets/${projet._id}`} className="projet-article" style={{
      opacity
    }}>
      <div className="projet-image-container" ref={projetRef}>
        <span
          className="view-follow"
          ref={mouseRef}
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
        >
          Voir
        </span>
        <img src={`/images/projet/${projet.presImg}`} />
      </div>

      <h2>{projet.name}</h2>

      <ul className="projet-article-tags-container">
        {projet.competances.map((comp, i) =>
          comp !== "" && comp !== "[]" ? (
            <li key={i} className="projet-tag">
              {comp}
            </li>
          ) : null,
        )}
      </ul>
      <p>{projet.description}</p>
    </a>
  );
}
