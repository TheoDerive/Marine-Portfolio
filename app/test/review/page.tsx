"use client";

import useFetch from "@/hooks/useFetch";
import toBase64 from "@/lib/base64";
import { useAppStore } from "@/store";
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

  const { setIsLoading } = useAppStore();

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

      await useFetch.NewReview(reviewValues);
      console.log(reviewValues);
    }
  }

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <form
      style={{
        padding: "500px 0",
        display: "flex",
        flexDirection: "column",
      }}
    ></form>
  );
}
