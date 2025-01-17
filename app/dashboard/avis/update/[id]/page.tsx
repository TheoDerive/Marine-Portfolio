"use client";

import React from "react";

import { useAppStore } from "@/store";
import useUtilities from "@/hooks/useUtilities";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { ReviewForBack, ReviewType } from "@/types/reviewType";
import toBase64 from "@/lib/base64";

export default function DashboardUpdateCompetances() {
  const [reviewValues, setReviewValues] = React.useState<ReviewForBack>({
    message: "",
    poste: "",
    stars: 0,
    personne: "",
    imageName: "",
    entrepriseName: "",
  });
  const [result, setResult] = React.useState({
    message: "",
    isError: false,
  });
  const [id, setId] = React.useState("");

  const { setIsLoading, setConnection, connection } = useAppStore();
  const { windowProperties } = useUtilities();

  React.useEffect(() => {
    if (!windowProperties) return;

    if (!connection && !windowProperties.sessionStorage.getItem("connection")) {
      windowProperties.location.pathname = "/dashboard";
    }

    if (windowProperties.sessionStorage.getItem("connection")) {
      setConnection(true);
    }

    const pathNameSplit = windowProperties.location.pathname.split("/");
    const pathNameId = pathNameSplit[pathNameSplit.length - 1];
    setId(pathNameId);

    if (id && reviewValues.entrepriseName === "") {
      fetchData();
    }
  }, [windowProperties, id]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await useFetch.GET("review", id);
      const review = response.data as ReviewType;
      console.log(review);

      setReviewValues({
        message: review.message,
        poste: review.poste,
        stars: review.stars,
        personne: review.personne,
        imageName: review.image,
        entrepriseName: review.entrepriseName,
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  async function submit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (
      reviewValues.imageName &&
      reviewValues.entrepriseName !== "" &&
      reviewValues.personne !== "" &&
      reviewValues.poste !== "" &&
      reviewValues.message !== ""
    ) {
      setIsLoading(true);
      console.log(reviewValues);
      const response = await useFetch.UPDATEReview(reviewValues, id);
      setResult({
        message: response.message,
        isError: response.status === 200 ? false : true,
      });
      setIsLoading(false);
    }
  }

  return (
    <section className="dashboard-new-projet">
      <Link href={"/dashboard/avis"}>Retour</Link>
      {result.message !== "" ? (
        <p style={result.isError ? { color: "red" } : { color: "green" }}>
          {result.message}
        </p>
      ) : null}
      <input
        type="text"
        value={reviewValues.entrepriseName}
        placeholder="Nom de l'entreprise"
        required
        onChange={(e) =>
          setReviewValues({
            ...reviewValues,
            entrepriseName: e.target.value,
          })
        }
      />

      <label>
        <p>Image de l'entreprise</p>
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
      </label>

      <input
        type="text"
        placeholder="Nom de la personne"
        value={reviewValues.personne}
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
        value={reviewValues.poste}
        placeholder="Nom de son poste"
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
        value={reviewValues.message}
        placeholder="Son message..."
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
        placeholder="Nombre d'etoile"
        value={reviewValues.stars}
        max={5}
        min={0}
        required
        onChange={(e) =>
          setReviewValues({
            ...reviewValues,
            stars: Number(e.target.value) > 5 ? 5 : Number(e.target.value),
          })
        }
      />

      <button type="submit" onClick={async (e) => submit(e)}>
        Push
      </button>
    </section>
  );
}
