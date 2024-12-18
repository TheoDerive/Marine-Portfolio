import useScrollPositionFromTo from "@/hooks/useScrollPositionFromTo";
import { ReviewType } from "@/types/reviewType";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Reviews() {
  const { pourcentage } = useScrollPositionFromTo(
    ".reviews-homepage",
    ".reviews-homepage",
  );

  React.useEffect(() => console.log(pourcentage), [pourcentage]);

  const review1: ReviewType = {
    id: 0,
    personne: "Méghane Roche",
    poste: "Responsable Marketing et Communication",
    message:
      "Marine Sicaud a été un atout précieux pour notre équipe lors de ses deux stages chez Diversey. Créative, professionnelle et assidue, elle a brillamment mené des projets marketing, dont la création de visuels pour LinkedIn et des supports pour notre campagne digitale des Jeux Olympiques 2024. Son expertise et sa connaissance des dernières tendances ont été appréciées de tous, et je la recommande sans réserve pour toute future collaboration.",
    imageName: "Diversey-logo.png",
    entrepriseName: "Diversey",
    stars: 5,
  };

  const review2: ReviewType = {
    id: 1,
    personne: "Arthur Priollaud",
    poste: "Coordinateur du pole partenaires",
    message:
      "Marine Sicaud a été un atout essentiel pour l’association Humadentaire. Professionnelle, créative et impliquée, elle a supervisé la création de notre site internet et la définition d’une identité visuelle complète, incluant logo et supports de communication. Son travail méthodique et son souci du détail ont permis de structurer notre présence en ligne et de renforcer notre visibilité. Je la recommande chaleureusement pour ses compétences et son sérieux.",
    imageName: "HMD-logo.webp",
    entrepriseName: "Humadentaire",
    stars: 5,
  };

  const array = [review1, review2];

  return (
    <section className="reviews-homepage">
      <Review review={review1} index={1} pourcentage={pourcentage} />
      <Review review={review2} index={2} pourcentage={pourcentage} />
      <Review review={review1} index={3} pourcentage={pourcentage} />
    </section>
  );
}

function Review({
  review,
  index,
  pourcentage,
}: {
  review: ReviewType;
  index: number;
  pourcentage: number;
}) {
  const offset = 30 * index;
  return (
    <article
      className="review-container"
      style={{
        transform: `scale(${pourcentage > offset && index !== 3 ? (80 - pourcentage + offset) / 100 : 0.8})`,
      }}
    >
      <article className="review">
        <section className="review-information">
          <img src={`/images/${review.imageName}`} />
          <span className="review-personne">{review.entrepriseName}</span>
          <div className="stars-container">
            {Array.from(Array(5).keys()).map((el, i) =>
              el <= review.stars - 1 ? (
                <FontAwesomeIcon icon={faSolidStar} key={i} />
              ) : (
                <FontAwesomeIcon icon={faRegularStar} key={i} />
              ),
            )}
          </div>
        </section>

        <section className="review-message-container">
          <span className="review-message">{review.message}</span>
          <span className="review-personne-information">
            <span className="personne">{review.personne}</span> <br />{" "}
            <span className="poste">{review.poste}</span>
          </span>
        </section>
      </article>
    </article>
  );
}
