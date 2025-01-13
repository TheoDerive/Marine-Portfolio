import useScrollPositionFromTo from "@/hooks/useScrollPositionFromTo";
import { ReviewType } from "@/types/reviewType";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Reviews({ reviews }: { reviews: ReviewType[] }) {
  const [reviewsLength, setReviewsLength] = React.useState(0);
  const { pourcentage } = useScrollPositionFromTo(
    ".reviews-homepage",
    ".reviews-homepage",
  );

  React.useEffect(() => {
    setReviewsLength(reviews.length);
  }, [reviews]);

  return (
    <section
      className="reviews-homepage"
      style={{
        height: `calc(70vh * ${reviewsLength} + 1600px)`,
      }}
    >
      {reviews.map((review, i) => (
        <Review
          key={i}
          review={review}
          index={i + 1}
          pourcentage={pourcentage}
          length={reviewsLength}
        />
      ))}
    </section>
  );
}

function Review({
  review,
  index,
  pourcentage,
  length,
}: {
  review: ReviewType;
  index: number;
  pourcentage: number;
  length: number;
}) {
  const offset = 31 * index;
  return (
    <article
      className="review-container"
      style={{
        transform: `scale(${pourcentage > offset && index !== length ? (80 - pourcentage + offset) / 100 : 0.9})`,
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
