"use client";

import toBase64 from "@/lib/base64";
import { ReviewForBack } from "@/types/reviewType";
import React from "react";

export default function Review() {
  const [reviewValues, setReviewValues] = React.useState<ReviewForBack>({
    imageName: null,
    entrepriseName: "",
    stars: 0,
    personne: "",
    poste: "",
    message: "",
  });

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (
      reviewValues.imageName &&
      reviewValues.entrepriseName !== "" &&
      reviewValues.personne !== "" &&
      reviewValues.poste !== "" &&
      reviewValues.message !== ""
    ) {
      const base64File = (await toBase64(reviewValues.imageName)) as string;

      const formData = new FormData();
      formData.append("entreprise", reviewValues.entrepriseName);
      formData.append("image", base64File);
      formData.append("image-name", reviewValues.imageName.name);
      formData.append("stars", reviewValues.stars.toString());
      formData.append("personne", reviewValues.personne);
      formData.append("poste", reviewValues.poste);
      formData.append("message", reviewValues.message);

      const response = await fetch("/api/review/newReview", {
        method: "POST",
        body: formData,
      });

      console.log(response);
    }
  }

  return (
    <form
      style={{
        margin: "500px 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        required
        onChange={(e) =>
          setReviewValues({
            ...reviewValues,
            entrepriseName: e.target.value,
          })
        }
      />

      <input
        type="file"
        required
        onChange={(e) =>
          e.target.files
            ? setReviewValues({
                ...reviewValues,
                imageName: e.target.files[0],
              })
            : null
        }
      />

      <input
        type="text"
        required
        onChange={(e) =>
          setReviewValues({
            ...reviewValues,
            personne: e.target.value,
          })
        }
      />

      <input
        type="text"
        required
        onChange={(e) =>
          setReviewValues({
            ...reviewValues,
            poste: e.target.value,
          })
        }
      />

      <input
        type="text"
        required
        onChange={(e) =>
          setReviewValues({
            ...reviewValues,
            message: e.target.value,
          })
        }
      />

      <input
        type="number"
        required
        onChange={(e) =>
          setReviewValues({
            ...reviewValues,
            stars: Number(e.target.value),
          })
        }
      />

      <button type="submit" onClick={async (e) => submit(e)}>
        Push
      </button>
    </form>
  );
}
