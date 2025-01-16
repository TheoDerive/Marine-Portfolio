"use client";

import useFetch from "@/hooks/useFetch";
import toBase64 from "@/lib/base64";
import { useAppStore } from "@/store";
import { ReviewForBack } from "@/types/reviewType";
import Link from "next/link";
import React from "react";

export default function Competance() {
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
      setIsLoading(true);
      const formData = new FormData();
      if (typeof reviewValues.imageName !== "string") {
        const base64File = (await toBase64(reviewValues.imageName)) as string;
        formData.append("image", base64File);
        formData.append("image-name", reviewValues.imageName.name);
      }
      formData.append("entreprise", reviewValues.entrepriseName);
      formData.append("stars", reviewValues.stars.toString());
      formData.append("personne", reviewValues.personne);
      formData.append("poste", reviewValues.poste);
      formData.append("message", reviewValues.message);

      const response = await useFetch.NewReview(reviewValues);
      setResult({
        message: response.message,
        isError: response.status === 200 ? false : true,
      });
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className="dashboard-new-competences">
      <Link href={"/dashboard/avis"}>Retour</Link>
      {result.message !== "" ? (
        <p style={result.isError ? { color: "red" } : { color: "green" }}>
          {result.message}
        </p>
      ) : null}
      <input
        type="text"
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
