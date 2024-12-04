"use client";

import { DiplomeType } from "@/types/diplomeType";
import React from "react";

export default function Diplomes() {
  const diplome1: DiplomeType = {
    id: 1,
    isActive: false,
    ecole: "My Digital School",
    diplomeName: "Marketing Digital",
    description:
      "J'ai choisi d'intégrer My Digital School pour développer mes compétences en marketing digital, un domaine qui me passionne profondément pour son pouvoir à transformer la visibilité et la croissance des marques. Cette formation m'a permis d'acquérir des compétences solides en marketing digital, me permettant de concevoir des stratégies efficaces et de mesurer leur impact à travers des outils et des techniques modernes. \n \n En parallèle, j'ai exploré la communication, un domaine clé pour diffuser des messages percutants et engager efficacement une audience. J'ai développé des compétences en création de contenu pour différents supports, en élaboration de stratégies de communication et en gestion des relations publiques. Cette expertise m’a sensibilisée à l’importance de l’alignement des messages, de la gestion de la réputation de marque, et de la cohérence dans l’ensemble des actions de communication pour instaurer une relation de confiance et favoriser l’engagement. \n \n Grâce à cette double compétence, je suis désormais capable de coordonner efficacement des projets digitaux, en combinant stratégie marketing et design graphique, pour offrir des résultats créatifs et performants, tout en garantissant des livrables de qualité qui répondent aux besoins des clients et utilisateurs.",
  };

  const diplome2: DiplomeType = {
    id: 2,
    isActive: false,
    ecole: "Hubspot",
    diplomeName: "Inbound marketing",
    description:
      "Pour approfondir mes compétences en stratégie d'acquisition et valider mes connaissances, j'ai choisi de passer la certification HubSpot - Inbound Marketing. Cette formation m'a permis de renforcer mon expertise en création de contenu et en optimisation de campagnes marketing, tout en maîtrisant des outils essentiels tels que le lead scoring, le marketing automation et l'A/B testing. \n \n J'ai appris à définir des personas, à concevoir un contenu adapté au niveau de conscience des prospects et à élaborer des stratégies de contenu performantes. Grâce à cette certification, je peux désormais concevoir des campagnes plus pertinentes, alignées sur les besoins réels des prospects, et générer des résultats supérieurs, tout en automatisant efficacement les processus Inbound Marketing. \n \n Numéro de certification : 80a690fbeede49bc96c8fdd0c57a52ec",
  };

  const diplome3: DiplomeType = {
    id: 3,
    isActive: false,
    ecole: "Hubspot",
    diplomeName: "Content Marketing",
    description:
      "Pour renforcer mes compétences en content marketing et valider mes connaissances, j'ai obtenu la certification HubSpot - Content Marketing. Cette formation m'a permis de perfectionner mon expertise en stratégie de contenu et en optimisation de la performance marketing, tout en maîtrisant des pratiques clés comme l'analyse des indicateurs de performance (KPI), le marketing automation et l'utilisation des données pour maximiser le ROI. \n \n J'y ai appris à élaborer des plans éditoriaux guidés par une approche data-driven, à créer des contenus engageants adaptés aux audiences cibles, et à analyser les performances des campagnes pour une amélioration continue. Grâce à cette certification, je suis désormais capable de concevoir des stratégies de contenu efficaces, alignées sur les objectifs des marques, et d'optimiser chaque étape du parcours utilisateur pour des résultats mesurables. \n \n Numéro de certification : 09ec2cd504724b158633bd3deba024f6",
  };

  const diplome4: DiplomeType = {
    id: 4,
    isActive: false,
    ecole: "Semrush",
    diplomeName: "SEO",
    description:
      "J’ai choisi d’obtenir la certification Semrush - SEO afin de perfectionner mes compétences en stratégie d'acquisition et en référencement naturel, dans le but d'améliorer la visibilité des marques sur Google. Cette formation m’a permis de mieux comprendre les rouages du SEO, notamment la création de listes de mots-clés performants, l’optimisation des aspects on-page et off-page, ainsi que la maîtrise des éléments techniques essentiels, tels que la structure des sites, la vitesse de chargement et l’adaptabilité mobile. \n \n Grâce à cette certification, je suis désormais capable de concevoir des stratégies SEO globales et de les exécuter avec efficacité pour améliorer le classement des sites web, tout en augmentant le trafic organique et la visibilité en ligne des marques. Cette expertise me permet de générer des résultats mesurables et d’accompagner les entreprises dans leur développement numérique. \n \nNuméro de certification : 490315",
  };

  const [diplomes, setDiplomes] = React.useState([
    diplome1,
    diplome2,
    diplome3,
    diplome4,
  ]);

  function activeDiplome(
    diplomeId: number,
    setIsActive: (isActive: boolean) => void,
  ) {
    const newDiplome = diplomes.map((diplome) =>
      diplome.id === diplomeId
        ? { ...diplome, isActive: !diplome.isActive }
        : { ...diplome, isActive: false },
    );
    setDiplomes(newDiplome);
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
          : { height: "40px" }
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
      <section
        className="diplome-description"
        ref={contentRef}
        style={{ whiteSpace: "pre-line" }}
      >
        {diplome.description
          .split(" ")
          .map((w, i) => (w === "/n" ? <br key={i} /> : w))
          .join(" ")}
      </section>
    </article>
  );
}
