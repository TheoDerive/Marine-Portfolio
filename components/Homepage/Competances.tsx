"use client";

import useUtilities from "@/hooks/useUtilities";
import { CompetanceType } from "@/types/competanceType";
import React from "react";

export default function HomeCompetences({
  competences,
}: {
  competences: CompetanceType[];
}) {
  const { windowProperties } = useUtilities();
  const [isPhone, setIsPhone] = React.useState(false);

  React.useEffect(() => {
    if (windowProperties && windowProperties.innerWidth <= 1000) {
      setIsPhone(true);
    }
  }, [windowProperties]);

  return (
    <>
      {isPhone ? (
        <MobileCompetances competences={competences} />
      ) : (
        <DesktopCompetances competences={competences} />
      )}
    </>
  );
}

function DesktopCompetances({
  competences,
}: {
  competences: CompetanceType[];
}) {
  const designComp = competences.filter((comp) => comp.type === "design");
  const marketingComp = competences.filter((comp) => comp.type === "marketing");

  return (
    <section className="competences-homepage-container">
      <h3 className="section-title">
        Mes <span>Competences</span>
      </h3>

      <ul className="competences-homepage design">
        {designComp.map((comp, i) => (
          <li key={i}>
            <img src={comp.image} />
            {comp.name}
          </li>
        ))}
      </ul>

      <ul className="competences-homepage design">
        {marketingComp.map((comp, i) => (
          <li key={i}>
            <img src={comp.image} />
            {comp.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

function MobileCompetances({ competences }: { competences: CompetanceType[] }) {
  const designComp = competences.filter((comp) => comp.type === "design");
  const marketingComp = competences.filter((comp) => comp.type === "marketing");
  return (
    <section className="competences-homepage-container">
      <h3 className="section-title">
        Mes <span>Competences</span>
      </h3>

      <section className="design-scroll-container">
        <ul className="competences-homepage">
          {designComp.map((comp, i) => (
            <li key={i}>
              <img src={comp.image} />
              {comp.name}
            </li>
          ))}
        </ul>
        <ul className="competences-homepage">
          {designComp.map((comp, i) => (
            <li key={i}>
              <img src={comp.image} />
              {comp.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="marketing-scroll-container">
        <ul className="competences-homepage">
          {marketingComp.map((comp, i) => (
            <li key={i}>
              <img src={comp.image} />
              {comp.name}
            </li>
          ))}
        </ul>
        <ul className="competences-homepage">
          {marketingComp.map((comp, i) => (
            <li key={i}>
              <img src={comp.image} />
              {comp.name}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
