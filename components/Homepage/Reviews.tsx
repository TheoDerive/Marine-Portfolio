import { ReviewType } from "@/types/reviewType";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reviews() {
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
    personne: "Méghane Roche",
    poste: "Responsable Marketing et Communication",
    message: "Marine Sicaud la goat",
    imageName: "HMD-logo.webp",
    entrepriseName: "Humadentaire",
    stars: 5,
  };

  const array = [review1, review2];

  return (
    <section className="reviews-homepage-container">
      <h3 className="review-title">Ils me recommandent</h3>

      <section className="reviews-homepage">
        <Review review={review1} />
        <Review review={review2} />
      </section>
    </section>
  );
}

function Review({ review }: { review: ReviewType }) {
  return (
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
      <span className="review-personne-information">
        {review.personne}, {review.poste}.
      </span>

      {`"${review.message}"`}
    </article>
  );
}
