"use client";

import { DiplomeType } from "@/types/diplomeType";
import React from "react";
import Markdown from "react-markdown";

export default function Diplomes({ diplomes }: { diplomes: DiplomeType[] }) {
  const [allDiplomes, setAllDiplomes] = React.useState<DiplomeType[]>([]);

  React.useEffect(() => {
    setAllDiplomes(diplomes);
  }, [diplomes]);

  function activeDiplome(diplomeId: string) {
    const newDiplome = allDiplomes.map((diplome) =>
      diplome._id === diplomeId
        ? { ...diplome, isActive: !diplome.isActive }
        : { ...diplome, isActive: false },
    );
    setAllDiplomes(newDiplome);
  }
  return (
    <section className="diplomes-homepage-container">
      <h3 className="section-title">
        Diplômes <span>&</span> Certifications
      </h3>

      <section className="diplomes-homepage">
        {allDiplomes.map((diplome, i) => (
          <Diplome
            index={i + 1}
            diplome={diplome}
            activeDiplome={activeDiplome}
            key={i}
          />
        ))}
      </section>
    </section>
  );
}

function Diplome({
  diplome,
  activeDiplome,
  index,
}: {
  diplome: DiplomeType;
  activeDiplome: (
    diplomeId: string,
    setIsActive: (isActive: boolean) => void,
  ) => void;
  index: number;
}) {
  const [isActive, setIsActive] = React.useState<boolean>(diplome.isActive);
  const contentRef = React.useRef<HTMLElement>(null);
  const [backgroundColor, setBackgroundColor] = React.useState<string>("");

  React.useEffect(() => {
    switch (index % 3) {
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
          ? { height: `${contentRef.current.scrollHeight + 70}px` }
          : { height: "70px" }
      }
    >
      <section
        className="diplome-title"
        onClick={() => activeDiplome(diplome._id, setIsActive)}
      >
        <div>
          <strong>{diplome.school} - </strong>
          {diplome.name}
        </div>
        <span
          className={`${isActive ? "des" : ""}active-diplome`}
          style={{ backgroundColor: `${backgroundColor}` }}
        />
      </section>
      <section
        className="diplome-description"
        ref={contentRef}
        style={{ whiteSpace: "pre-line" }}
      >
        <Markdown>{diplome.description.replace(/\\n/g, "\n")}</Markdown>
      </section>
    </article>
  );
}
