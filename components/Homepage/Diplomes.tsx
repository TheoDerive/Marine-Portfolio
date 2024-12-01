"use client";

import { DiplomeType } from "@/types/diplomeType";
import React from "react";

export default function Diplomes() {
  const diplome1: DiplomeType = {
    id: 1,
    isActive: false,
    ecole: "MDS",
    diplomeName: "MDS",
    description: "dfhjdhfjdfhdjfh",
  };

  const diplome2: DiplomeType = {
    id: 2,
    isActive: false,
    ecole: "MDS",
    diplomeName: "MDS",
    description: "dfhjdhfjdfhdjfh",
  };

  const [diplomes, setDiplomes] = React.useState([diplome1, diplome2]);

  function activeDiplome(
    diplomeId: number,
    setIsActive: (isActive: boolean) => void,
  ) {
    const newDiplome = diplomes.map((diplome) =>
      diplome.id === diplomeId
        ? { ...diplome, isActive: true }
        : { ...diplome, isActive: false },
    );
    setDiplomes(newDiplome);
    setIsActive(true);
  }
  return (
    <section className="diplomes-homepage-container">
      <h3 className="section-title">Diplômes & Certifications</h3>

      <section className="diplomes-homepage">
        {diplomes.map((diplome, i) => (
          <Diplome diplome={diplome} activeDiplome={activeDiplome} key={i} />
        ))}
      </section>
    </section>
  );
}

function Diplome({
  diplome,
  activeDiplome,
}: {
  diplome: DiplomeType;
  activeDiplome: (
    diplomeId: number,
    setIsActive: (isActive: boolean) => void,
  ) => void;
}) {
  const [isActive, setIsActive] = React.useState<boolean>(diplome.isActive);
  const contentRef = React.useRef<HTMLElement>(null);
  const [backgroundColor, setBackgroundColor] = React.useState<string>("");

  React.useEffect(() => {
    switch (diplome.id % 3) {
      case 1:
        setBackgroundColor("#f874d8");
        break;

      case 2:
        setBackgroundColor("#ff852b");
        break;

      case 0:
        setBackgroundColor("#b992f9");
        break;

      default:
        break;
    }
  }, []);

  React.useEffect(() => {
    setIsActive(diplome.isActive);
  }, [diplome.isActive]);

  return (
    <article
      className="diplome"
      style={
        isActive && contentRef.current
          ? { height: `${contentRef.current.scrollHeight + 50}px` }
          : { height: "50px" }
      }
    >
      <section
        className="diplome-title"
        onClick={() => activeDiplome(diplome.id, setIsActive)}
      >
        <div>
          <strong>{diplome.ecole} - </strong>
          {diplome.diplomeName}
        </div>
        <span
          className={`${isActive ? "des" : ""}active-diplome`}
          style={{ backgroundColor: `${backgroundColor}` }}
        />
      </section>
      <section className="diplome-description" ref={contentRef}>
        {diplome.description}
      </section>
    </article>
  );
}
