"use client";

import React from "react";

import { useAppStore } from "@/store";
import useUtilities from "@/hooks/useUtilities";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { ReviewType } from "@/types/reviewType";

export default function DashboardAvis() {
  const [review, setReview] = React.useState<ReviewType[]>([]);

  const { setIsLoading, connection } = useAppStore();
  const { windowProperties } = useUtilities();

  React.useEffect(() => {
    if (!windowProperties) return;

    if (!connection && !windowProperties.sessionStorage.getItem("connection")) {
      windowProperties.location.pathname = "/dashboard";
    }
  }, [windowProperties]);

  React.useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  const fetchData = async () => {
    try {
      const response = await useFetch.GETMultiples("review");
      setReview(response.data.reverse());
    } catch (error) {
      console.error(error);
    }
  };

  async function deleteAvis(id: string) {
    setIsLoading(true);
    await useFetch.DELETE("review", id);
    await fetchData();
    setIsLoading(false);
  }
  return (
    <section className="dashboard-reviews">
      {review.map((review, i) => (
        <li key={i}>
          <img className="projet-image" src={`${review.image}`} />

          <div className="competance-modifications">
            <Link href={`/dashboard/avis/update/${review._id}`}>Modifier</Link>
            <button onClick={() => deleteAvis(review._id)}>Supprimer</button>
          </div>
        </li>
      ))}
      <Link href={"/dashboard/avis/new"} className="new" />
    </section>
  );
}
